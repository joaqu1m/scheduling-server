// index.ts
await Bun.build({
  entrypoints: ["./index.tsx"],
  outdir: "./build",
  minify: true,
  plugins: []
});
Bun.serve({
  port: 8080,
  fetch(req) {
    return new Response("Hello World!");
  }
});
