import { spawn } from 'child_process';

const args = [
  // (node:21424) ExperimentalWarning: `--experimental-loader` may be removed in the future; instead use `register()`:
  // --import 'data:text/javascript,import { register } from "node:module"; import { pathToFileURL } from "node:url"; register("ts-node/esm", pathToFileURL("./"));'
  '--no-warnings',

  // (node:21424) [DEP0180] DeprecationWarning: fs.Stats constructor is deprecated.
  '--no-deprecation',

  // node doesn't understand the way TS implements ESM, this makes it work
  '--loader', 'ts-node/esm',

  ...process.argv.slice(2) // Pass additional arguments from package.json
];

const nodeProcess = spawn('node', args, { stdio: 'inherit' });

nodeProcess.on('close', (code) => {
  process.exit(code || 0);
});
