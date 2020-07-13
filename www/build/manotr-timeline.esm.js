import { p as patchBrowser, g as globalScripts, b as bootstrapLazy } from './app-globals-77d77962.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([], options);
});
