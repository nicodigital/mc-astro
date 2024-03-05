import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DTUGtkLE.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_JcsL2EWl.mjs');
const _page1 = () => import('./chunks/_name__BnCZpbjN.mjs');
const _page2 = () => import('./chunks/_name__Bu4UZ7a-.mjs');
const _page3 = () => import('./chunks/_case__Cx-xwhJL.mjs');
const _page4 = () => import('./chunks/thanks_BNuAFrno.mjs');
const _page5 = () => import('./chunks/index_C-dpX9DN.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.4.9/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/case/[name].astro", _page1],
    ["src/pages/locked/[name].astro", _page2],
    ["src/pages/pass/[case].astro", _page3],
    ["src/pages/thanks.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = undefined;
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
