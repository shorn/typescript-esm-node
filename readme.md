# typescript-esm-node

This project demonstrates running command-line scripts using TypeScript, ESM,
and Node.js
with [subpath imports](https://nodejs.org/docs/v22.0.0/api/packages.html#subpath-imports)
functionality.

Initially, I wanted to use absolute imports with ESM, but that turned out to be
tricky. Then I read about `subpath-import` and pattern functionality, which
offers a good-enough solution.

In practice, absolute imports aren't what people care about.
The real goal is to avoid cumbersome relative import chains in larger projects.
A single subpath-import with pattern achieves this without the need for path 
rewriting or customizing the compiler (`tsc`) with tools like `tsc-alias`.

This project specifically addresses running simple, typesafe CLI scripts in
Node for a personal project (non-server and non-browser). For a larger
server or browser project, I'd likely use a bundler or a more complex build
pipeline.

While there's no bundler or path-rewriting tool (such as `tsc-alias`), `ts-node`
is still required. Rather than running the TypeScript code directly via
`ts-node`, it is added as a loader to Node using `--loader ts-node/esm`.

For details on the npm project setup, see [package.json.md](package.json.md).
