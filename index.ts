await Bun.build({
    entrypoints: ["./index.ts"],
    outdir: "./build",
    minify: true,
    plugins: []
})

Bun.serve({
    port: 443,
    fetch(req: any) {
        return new Response("Hello World!")
    }
})