import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-07cbf83b.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["basic-card",[[1,"basic-card",{"cardTitle":[1,"card-title"],"cardText":[1,"card-text"],"collapsed":[4],"settings":[16]}]]],["basic-string",[[1,"basic-string",{"label":[1],"tooltip":[1],"current":[1],"itemRef":[16]}]]],["test-component",[[1,"test-component"]]]], options);
});
