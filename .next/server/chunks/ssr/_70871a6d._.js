module.exports = {

"[project]/.next-internal/server/app/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/lib/apolloClient.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/lib/apolloClient.ts
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$core$2f$ApolloClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/core/ApolloClient.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$inMemoryCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/cache/inmemory/inMemoryCache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$HttpLink$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/link/http/HttpLink.js [app-rsc] (ecmascript)");
;
const client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$core$2f$ApolloClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ApolloClient"]({
    link: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$HttpLink$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HttpLink"]({
        uri: `https://graphql.contentful.com/content/v1/spaces/w4hosymzan98`,
        headers: {
            Authorization: `Bearer xRNb9JoL_lcI2tKwx4E54JKbIs4f0TjM_HnEDo33MR8`
        }
    }),
    cache: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$inMemoryCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InMemoryCache"]()
});
const __TURBOPACK__default__export__ = client;
}}),
"[project]/src/graphql/queries.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET_PAGES_WITH_BLOCKS": (()=>GET_PAGES_WITH_BLOCKS)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/graphql-tag/lib/index.js [app-rsc] (ecmascript)");
;
const GET_PAGES_WITH_BLOCKS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gql"]`
  query GetPagesWithBlocks {
    pageCollection(limit: 5) {
      total
      items {
        title
        slug
        content {
          json
          links {
            assets {
              hyperlink {
                url
              }
            }
          }
        }
        blocksCollection(limit: 5) {
          __typename
          total
          items {
            title
            descripion
            contentCollection(limit: 5) {
              total
              items {
                __typename
                sys {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`;
}}),
"[project]/src/lib/contentBlock.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/lib/contentful.ts
__turbopack_context__.s({
    "fetchContentBlockDetails": (()=>fetchContentBlockDetails)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/graphql-tag/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apolloClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apolloClient.ts [app-rsc] (ecmascript)");
;
;
async function fetchContentBlockDetails(id) {
    try {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apolloClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].query({
            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gql"]`
        query GetContentBlockDetails($id: String!) {
          contentBlock(id: $id) {
            contentTitle
            contentImage {
              url
              fileName
            }
            contentDescription {
              json
            }
          }
        }
      `,
            variables: {
                id
            }
        });
        return data?.contentBlock;
    } catch (error) {
        console.error(`Error fetching content block ${id}:`, error);
        return null;
    }
} // Puedes agregar otras funciones relacionadas con Contentful aquí (e.g., obtener todas las páginas, etc.)
}}),
"[project]/src/stories/page/Page.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Page": (()=>Page),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Page = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Page() from the server but Page is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/stories/page/Page.tsx <module evaluation>", "Page");
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/stories/page/Page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/stories/page/Page.tsx <module evaluation>", "default");
}}),
"[project]/src/stories/page/Page.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Page": (()=>Page),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Page = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Page() from the server but Page is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/stories/page/Page.tsx", "Page");
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/stories/page/Page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/stories/page/Page.tsx", "default");
}}),
"[project]/src/stories/page/Page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stories$2f$page$2f$Page$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/stories/page/Page.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stories$2f$page$2f$Page$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/stories/page/Page.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stories$2f$page$2f$Page$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HomePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apolloClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apolloClient.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/queries.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contentBlock$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/contentBlock.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stories$2f$page$2f$Page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stories/page/Page.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
// Función para obtener bloques con detalles (auxiliar)
async function getBlockDetails(blocks) {
    if (!blocks) return [];
    const detailedBlocks = await Promise.all(blocks.map(async (blockItem)=>{
        if (blockItem.contentCollection?.items) {
            const detailedContents = await Promise.all(blockItem.contentCollection.items.map(async (contentItem)=>{
                const details = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contentBlock$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchContentBlockDetails"])(contentItem.sys.id);
                return {
                    ...contentItem,
                    details
                };
            }));
            return {
                ...blockItem,
                detailedContents
            };
        }
        return blockItem;
    }));
    return detailedBlocks;
}
// Función principal de carga de datos (SSR)
async function getData() {
    try {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apolloClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].query({
            query: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GET_PAGES_WITH_BLOCKS"],
            fetchPolicy: 'network-only',
            context: {
                fetchOptions: {
                    next: {
                        revalidate: 0
                    }
                }
            }
        });
        const pages = data?.pageCollection?.items || [];
        return {
            pages
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            pages: []
        };
    }
}
async function HomePage() {
    const { pages } = await getData(); // ✅ Se ejecuta en cada F5
    const pagesWithDetailedBlocks = await Promise.all(pages.map(async (page)=>{
        const detailedBlocks = await getBlockDetails(page.blocksCollection?.items || []);
        return {
            ...page,
            detailedBlocks
        };
    }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Página Principal"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stories$2f$page$2f$Page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Page"], {
                pages: pagesWithDetailedBlocks
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_70871a6d._.js.map