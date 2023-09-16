await Bun.build({entrypoints:["./index.ts"],outdir:"./build",minify:!0,plugins:[]});Bun.serve({port:80,fetch(a){return new Response("Hello World!")}});
