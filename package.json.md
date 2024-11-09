# `"type": "module"`

* this is what defines the package as using ESM project at runtime
* paired with `"module": "node16",` in `tsconfig.json` which defines
  this an ESM project at build time


# scripts

## `"app": "node dist/node-app.js"`

Contains the switch to enable `ts-node/esm` that makes TS ESM stuff work at
runtime, also disables warnings and deprecations.

It's really just to avoid repeatedly adding all those switches all the time to
each new script.


## `"preapp": "npm run build"`

[pre script](https://docs.npmjs.com/cli/v10/using-npm/scripts#pre--post-scripts)
that is always invoked before the `app` script is run.

* I hate when I make a compile error, then quickly re-run and don't notice the
  project didn't actually compile
* this stops me from doing that, at the cost of a little extra compile time


# `"engines.node": "22"`

You can probably use much older versions - I think subpath-imports have been
around since node 12 or so.

22 is just the current LTS as I'm writing this.
If something in this project works, or doesn't work, there's no question of
"what version of node" this configuration functions on.


# `"imports.#app/*": "./src/*`

Must be in sync with the `paths` section in `tsconfig.json`.

This is close as I've been able to get to something that works like  absolute 
imports with ESM, Typescript and Node.js - with minimal other tooling involved.

I was originally hoping to use the hash by itself, something like 
`#/*": "./src/*"` enabling imports of the form 
`import {greet} from "#/util/Helper.js"` - but it doesn't work.

Typescript will compile, but Node will fail with:
```
node:internal/modules/run_main:122
    triggerUncaughtException(
    ^
Error: ERR_INVALID_MODULE_SPECIFIER #/util/Helper.js is not a valid internal imports specifier name ...
 ```



