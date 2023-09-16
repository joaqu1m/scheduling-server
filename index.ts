Bun.serve({
    port: 80,
    fetch(req: any) {
        return new Response("Hello World!")
    }
})