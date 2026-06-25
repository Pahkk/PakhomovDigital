import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

function createApiResponse(res) {
  return {
    setHeader(name, value) {
      res.setHeader(name, value);
    },
    status(code) {
      res.statusCode = code;
      return this;
    },
    json(value) {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(value));
    },
    redirect(location) {
      res.statusCode = 302;
      res.setHeader("Location", location);
      res.end();
    }
  };
}

async function readBody(req) {
  if (!["POST", "PUT", "PATCH"].includes(req.method || "")) return undefined;

  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  if (!chunks.length) return undefined;

  const raw = Buffer.concat(chunks).toString("utf8");
  if (!raw) return undefined;

  const contentType = req.headers["content-type"] || "";
  if (contentType.includes("application/json")) return JSON.parse(raw);
  if (contentType.includes("application/x-www-form-urlencoded")) return Object.fromEntries(new URLSearchParams(raw));
  return raw;
}

function localApiPlugin() {
  return {
    name: "local-api",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = new URL(req.url || "/", "http://localhost");
        if (!url.pathname.startsWith("/api/")) return next();

        try {
          const modulePath = `${process.cwd()}${url.pathname}.js`;
          const mod = await import(`${modulePath}?t=${Date.now()}`);
          req.query = Object.fromEntries(url.searchParams);
          req.body = await readBody(req);
          await mod.default(req, createApiResponse(res));
        } catch (error) {
          if (error.code === "ERR_MODULE_NOT_FOUND") return next();
          console.error("Local API handler failed:", error);
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Local API handler failed." }));
        }
      });
    }
  };
}

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return {
    plugins: [react(), localApiPlugin()]
  };
});
