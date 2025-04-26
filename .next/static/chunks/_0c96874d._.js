(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/stories/button/Button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
"use client";
;
;
;
const Button = ({ primary = false, size = 'medium', backgroundColor, label, ...props })=>{
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        ...props,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
            [
                "d62907e7ed81cbed",
                [
                    backgroundColor
                ]
            ]
        ]) + " " + (props && props.className != null && props.className || [
            'storybook-button',
            `storybook-button--${size}`,
            mode
        ].join(' ') || ""),
        children: [
            label,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "d62907e7ed81cbed",
                dynamic: [
                    backgroundColor
                ],
                children: `button.__jsx-style-dynamic-selector{background-color:${backgroundColor}}`
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/stories/button/Button.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
};
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/stories/header/Header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Header": (()=>Header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stories$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stories/button/Button.tsx [app-client] (ecmascript)");
;
;
;
const Header = ({ user, onLogin, onLogout, onCreateAccount })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "storybook-header",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "32",
                            height: "32",
                            viewBox: "0 0 32 32",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                fill: "none",
                                fillRule: "evenodd",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",
                                        fill: "#FFF"
                                    }, void 0, false, {
                                        fileName: "[project]/src/stories/header/Header.tsx",
                                        lineNumber: 23,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",
                                        fill: "#555AB9"
                                    }, void 0, false, {
                                        fileName: "[project]/src/stories/header/Header.tsx",
                                        lineNumber: 27,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",
                                        fill: "#91BAF8"
                                    }, void 0, false, {
                                        fileName: "[project]/src/stories/header/Header.tsx",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/stories/header/Header.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/stories/header/Header.tsx",
                            lineNumber: 21,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Acme"
                        }, void 0, false, {
                            fileName: "[project]/src/stories/header/Header.tsx",
                            lineNumber: 37,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/stories/header/Header.tsx",
                    lineNumber: 20,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "welcome",
                                children: [
                                    "Welcome, ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: user.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/stories/header/Header.tsx",
                                        lineNumber: 43,
                                        columnNumber: 24
                                    }, this),
                                    "!"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/stories/header/Header.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stories$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "small",
                                onClick: onLogout,
                                label: "Log out"
                            }, void 0, false, {
                                fileName: "[project]/src/stories/header/Header.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stories$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "small",
                                onClick: onLogin,
                                label: "Log in"
                            }, void 0, false, {
                                fileName: "[project]/src/stories/header/Header.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stories$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                primary: true,
                                size: "small",
                                onClick: onCreateAccount,
                                label: "Sign up"
                            }, void 0, false, {
                                fileName: "[project]/src/stories/header/Header.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/src/stories/header/Header.tsx",
                    lineNumber: 39,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/stories/header/Header.tsx",
            lineNumber: 19,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/stories/header/Header.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, this);
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/stories/card/Card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$react$2d$renderer$2f$dist$2f$rich$2d$text$2d$react$2d$renderer$2e$es5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@contentful/rich-text-types/dist/index.js [app-client] (ecmascript)");
;
;
;
;
const options = {
    renderMark: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKS"].BOLD]: (text)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: text
            }, void 0, false, {
                fileName: "[project]/src/stories/card/Card.tsx",
                lineNumber: 13,
                columnNumber: 46
            }, this)
    },
    renderNode: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BLOCKS"].PARAGRAPH]: (node, children)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/stories/card/Card.tsx",
                lineNumber: 16,
                columnNumber: 67
            }, this),
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BLOCKS"].HEADING_2]: (node, children)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "cardTitle",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/stories/card/Card.tsx",
                lineNumber: 17,
                columnNumber: 67
            }, this)
    },
    renderInline: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INLINES"].HYPERLINK]: (node, children)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: node.data.uri,
                target: "_blank",
                rel: "noopener noreferrer",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/stories/card/Card.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
    }
};
const Card = ({ block })=>{
    const details = block.details;
    const isDarkMode = false; // Lógica para modo oscuro
    const cardClassName = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : 'cardContainer';
    const descriptionClassName = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : 'cardDescription';
    const readMoreClassName = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : 'readMoreLink';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cardClassName,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#",
                className: "imageLink",
                children: details?.contentImage?.url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    className: "cardImage",
                    src: details.contentImage.url,
                    alt: details.contentImage.fileName || ''
                }, void 0, false, {
                    fileName: "[project]/src/stories/card/Card.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/stories/card/Card.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cardContent",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "cardTitleLink",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                            className: "cardTitle",
                            children: details?.contentTitle || 'Título del Bloque'
                        }, void 0, false, {
                            fileName: "[project]/src/stories/card/Card.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/stories/card/Card.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    details?.contentDescription?.json ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: descriptionClassName,
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$react$2d$renderer$2f$dist$2f$rich$2d$text$2d$react$2d$renderer$2e$es5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["documentToReactComponents"])(details.contentDescription.json, options)
                    }, void 0, false, {
                        fileName: "[project]/src/stories/card/Card.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: descriptionClassName,
                        children: "Descripción del Bloque"
                    }, void 0, false, {
                        fileName: "[project]/src/stories/card/Card.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: readMoreClassName,
                        children: "Read more"
                    }, void 0, false, {
                        fileName: "[project]/src/stories/card/Card.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/stories/card/Card.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/stories/card/Card.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
};
_c = Card;
const __TURBOPACK__default__export__ = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/stories/references/References.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "References": (()=>References)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
;
const References = ({ desciption, textColor = 'black' })=>{
    // Establecer el color del texto
    const textStyle = {
        color: textColor || 'black' // Si textColor es null o undefined, usa negro
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "references-component",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "head-name",
                children: "Bloque tipo References:"
            }, void 0, false, {
                fileName: "[project]/src/stories/references/References.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "references-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                    className: "quote-block",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "quote-icon",
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z",
                                fill: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/src/stories/references/References.tsx",
                                lineNumber: 26,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/stories/references/References.tsx",
                            lineNumber: 17,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "quote-content",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "quote-text",
                                style: textStyle,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: desciption || 'El bloque se encuentra sin descripción'
                                }, void 0, false, {
                                    fileName: "[project]/src/stories/references/References.tsx",
                                    lineNumber: 34,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/stories/references/References.tsx",
                                lineNumber: 33,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/stories/references/References.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/stories/references/References.tsx",
                    lineNumber: 16,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/stories/references/References.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/stories/references/References.tsx",
        lineNumber: 13,
        columnNumber: 7
    }, this);
};
_c = References;
var _c;
__turbopack_context__.k.register(_c, "References");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/stories/page/Page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Page": (()=>Page),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stories$2f$header$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stories/header/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$react$2d$renderer$2f$dist$2f$rich$2d$text$2d$react$2d$renderer$2e$es5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@contentful/rich-text-types/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stories$2f$card$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stories/card/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stories$2f$references$2f$References$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stories/references/References.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const options = {
    renderMark: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKS"].BOLD]: (text)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: text
            }, void 0, false, {
                fileName: "[project]/src/stories/page/Page.tsx",
                lineNumber: 25,
                columnNumber: 46
            }, this)
    },
    renderNode: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BLOCKS"].PARAGRAPH]: (_node, children)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/stories/page/Page.tsx",
                lineNumber: 28,
                columnNumber: 68
            }, this),
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BLOCKS"].HEADING_2]: (_node, children)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/stories/page/Page.tsx",
                lineNumber: 29,
                columnNumber: 68
            }, this)
    },
    renderInline: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$types$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INLINES"].HYPERLINK]: (node, children)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: node.data.uri,
                target: "_blank",
                rel: "noopener noreferrer",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/stories/page/Page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
    }
};
const Page = ({ pages })=>{
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stories$2f$header$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                user: user,
                onLogin: ()=>setUser({
                        name: 'Jane Doe'
                    }),
                onLogout: ()=>setUser(undefined),
                onCreateAccount: ()=>setUser({
                        name: 'Jane Doe'
                    })
            }, void 0, false, {
                fileName: "[project]/src/stories/page/Page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "storybook-page",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Lista de Páginas desde Contentful"
                    }, void 0, false, {
                        fileName: "[project]/src/stories/page/Page.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                        children: pages.map((page)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold",
                                        children: page.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/stories/page/Page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 text-gray-600",
                                        children: [
                                            "Slug: ",
                                            page.slug
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/stories/page/Page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this),
                                    page.content?.json && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rich-text-content mb-4",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$contentful$2f$rich$2d$text$2d$react$2d$renderer$2f$dist$2f$rich$2d$text$2d$react$2d$renderer$2e$es5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["documentToReactComponents"])(page.content.json, options)
                                    }, void 0, false, {
                                        fileName: "[project]/src/stories/page/Page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 17
                                    }, this),
                                    page.detailedBlocks?.map((block, index)=>{
                                        const blockType = block.nameBlock?.[0] || 'Card';
                                        console.log("block", block);
                                        if (blockType === 'Card') {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "head-name",
                                                        children: " Bloque tipo card "
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/stories/page/Page.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            flexDirection: 'row'
                                                        },
                                                        children: block.detailedContents?.map((contentBlock, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stories$2f$card$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                block: contentBlock
                                                            }, contentBlock.sys.id || `card-${index}-${idx}`, false, {
                                                                fileName: "[project]/src/stories/page/Page.tsx",
                                                                lineNumber: 74,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/stories/page/Page.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, `row-${index}`, true, {
                                                fileName: "[project]/src/stories/page/Page.tsx",
                                                lineNumber: 70,
                                                columnNumber: 21
                                            }, this);
                                        }
                                        if (blockType === "References") {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stories$2f$references$2f$References$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["References"], {
                                                desciption: block.descripion,
                                                textColor: block.textColor
                                            }, void 0, false, {
                                                fileName: "[project]/src/stories/page/Page.tsx",
                                                lineNumber: 81,
                                                columnNumber: 26
                                            }, this);
                                        }
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 border border-red-200 bg-red-50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "Unsupported block type: ",
                                                        blockType
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/stories/page/Page.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/stories/page/Page.tsx",
                                                lineNumber: 85,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/stories/page/Page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 19
                                        }, this);
                                    })
                                ]
                            }, page.slug || page.title || 'unknown', true, {
                                fileName: "[project]/src/stories/page/Page.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/stories/page/Page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/stories/page/Page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/stories/page/Page.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
};
_s(Page, "kGLk6m4BT90iK1d91zRYm0C2usk=");
_c = Page;
const __TURBOPACK__default__export__ = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/client-only/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/node_modules/styled-jsx/dist/index/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
__turbopack_context__.r("[project]/node_modules/next/dist/compiled/client-only/index.js [app-client] (ecmascript)");
var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/ function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var isProd = typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && ("TURBOPACK compile-time value", "development") === "production";
var isString = function(o) {
    return Object.prototype.toString.call(o) === "[object String]";
};
var StyleSheet = /*#__PURE__*/ function() {
    function StyleSheet(param) {
        var ref = param === void 0 ? {} : param, _name = ref.name, name = _name === void 0 ? "stylesheet" : _name, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? isProd : _optimizeForSpeed;
        invariant$1(isString(name), "`name` must be a string");
        this._name = name;
        this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
        invariant$1(typeof optimizeForSpeed === "boolean", "`optimizeForSpeed` must be a boolean");
        this._optimizeForSpeed = optimizeForSpeed;
        this._serverSheet = undefined;
        this._tags = [];
        this._injected = false;
        this._rulesCount = 0;
        var node = typeof window !== "undefined" && document.querySelector('meta[property="csp-nonce"]');
        this._nonce = node ? node.getAttribute("content") : null;
    }
    var _proto = StyleSheet.prototype;
    _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
        invariant$1(typeof bool === "boolean", "`setOptimizeForSpeed` accepts a boolean");
        invariant$1(this._rulesCount === 0, "optimizeForSpeed cannot be when rules have already been inserted");
        this.flush();
        this._optimizeForSpeed = bool;
        this.inject();
    };
    _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
        return this._optimizeForSpeed;
    };
    _proto.inject = function inject() {
        var _this = this;
        invariant$1(!this._injected, "sheet already injected");
        this._injected = true;
        if (typeof window !== "undefined" && this._optimizeForSpeed) {
            this._tags[0] = this.makeStyleTag(this._name);
            this._optimizeForSpeed = "insertRule" in this.getSheet();
            if (!this._optimizeForSpeed) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.");
                }
                this.flush();
                this._injected = true;
            }
            return;
        }
        this._serverSheet = {
            cssRules: [],
            insertRule: function(rule, index) {
                if (typeof index === "number") {
                    _this._serverSheet.cssRules[index] = {
                        cssText: rule
                    };
                } else {
                    _this._serverSheet.cssRules.push({
                        cssText: rule
                    });
                }
                return index;
            },
            deleteRule: function(index) {
                _this._serverSheet.cssRules[index] = null;
            }
        };
    };
    _proto.getSheetForTag = function getSheetForTag(tag) {
        if (tag.sheet) {
            return tag.sheet;
        }
        // this weirdness brought to you by firefox
        for(var i = 0; i < document.styleSheets.length; i++){
            if (document.styleSheets[i].ownerNode === tag) {
                return document.styleSheets[i];
            }
        }
    };
    _proto.getSheet = function getSheet() {
        return this.getSheetForTag(this._tags[this._tags.length - 1]);
    };
    _proto.insertRule = function insertRule(rule, index) {
        invariant$1(isString(rule), "`insertRule` accepts only strings");
        if (typeof window === "undefined") {
            if (typeof index !== "number") {
                index = this._serverSheet.cssRules.length;
            }
            this._serverSheet.insertRule(rule, index);
            return this._rulesCount++;
        }
        if (this._optimizeForSpeed) {
            var sheet = this.getSheet();
            if (typeof index !== "number") {
                index = sheet.cssRules.length;
            }
            // this weirdness for perf, and chrome's weird bug
            // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
            try {
                sheet.insertRule(rule, index);
            } catch (error) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                }
                return -1;
            }
        } else {
            var insertionPoint = this._tags[index];
            this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
        }
        return this._rulesCount++;
    };
    _proto.replaceRule = function replaceRule(index, rule) {
        if (this._optimizeForSpeed || typeof window === "undefined") {
            var sheet = typeof window !== "undefined" ? this.getSheet() : this._serverSheet;
            if (!rule.trim()) {
                rule = this._deletedRulePlaceholder;
            }
            if (!sheet.cssRules[index]) {
                // @TBD Should we throw an error?
                return index;
            }
            sheet.deleteRule(index);
            try {
                sheet.insertRule(rule, index);
            } catch (error) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                }
                // In order to preserve the indices we insert a deleteRulePlaceholder
                sheet.insertRule(this._deletedRulePlaceholder, index);
            }
        } else {
            var tag = this._tags[index];
            invariant$1(tag, "old rule at index `" + index + "` not found");
            tag.textContent = rule;
        }
        return index;
    };
    _proto.deleteRule = function deleteRule(index) {
        if (typeof window === "undefined") {
            this._serverSheet.deleteRule(index);
            return;
        }
        if (this._optimizeForSpeed) {
            this.replaceRule(index, "");
        } else {
            var tag = this._tags[index];
            invariant$1(tag, "rule at index `" + index + "` not found");
            tag.parentNode.removeChild(tag);
            this._tags[index] = null;
        }
    };
    _proto.flush = function flush() {
        this._injected = false;
        this._rulesCount = 0;
        if (typeof window !== "undefined") {
            this._tags.forEach(function(tag) {
                return tag && tag.parentNode.removeChild(tag);
            });
            this._tags = [];
        } else {
            // simpler on server
            this._serverSheet.cssRules = [];
        }
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        if (typeof window === "undefined") {
            return this._serverSheet.cssRules;
        }
        return this._tags.reduce(function(rules, tag) {
            if (tag) {
                rules = rules.concat(Array.prototype.map.call(_this.getSheetForTag(tag).cssRules, function(rule) {
                    return rule.cssText === _this._deletedRulePlaceholder ? null : rule;
                }));
            } else {
                rules.push(null);
            }
            return rules;
        }, []);
    };
    _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
        if (cssString) {
            invariant$1(isString(cssString), "makeStyleTag accepts only strings as second parameter");
        }
        var tag = document.createElement("style");
        if (this._nonce) tag.setAttribute("nonce", this._nonce);
        tag.type = "text/css";
        tag.setAttribute("data-" + name, "");
        if (cssString) {
            tag.appendChild(document.createTextNode(cssString));
        }
        var head = document.head || document.getElementsByTagName("head")[0];
        if (relativeToTag) {
            head.insertBefore(tag, relativeToTag);
        } else {
            head.appendChild(tag);
        }
        return tag;
    };
    _createClass(StyleSheet, [
        {
            key: "length",
            get: function get() {
                return this._rulesCount;
            }
        }
    ]);
    return StyleSheet;
}();
function invariant$1(condition, message) {
    if (!condition) {
        throw new Error("StyleSheet: " + message + ".");
    }
}
function hash(str) {
    var _$hash = 5381, i = str.length;
    while(i){
        _$hash = _$hash * 33 ^ str.charCodeAt(--i);
    }
    /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */ return _$hash >>> 0;
}
var stringHash = hash;
var sanitize = function(rule) {
    return rule.replace(/\/style/gi, "\\/style");
};
var cache = {};
/**
 * computeId
 *
 * Compute and memoize a jsx id from a basedId and optionally props.
 */ function computeId(baseId, props) {
    if (!props) {
        return "jsx-" + baseId;
    }
    var propsToString = String(props);
    var key = baseId + propsToString;
    if (!cache[key]) {
        cache[key] = "jsx-" + stringHash(baseId + "-" + propsToString);
    }
    return cache[key];
}
/**
 * computeSelector
 *
 * Compute and memoize dynamic selectors.
 */ function computeSelector(id, css) {
    var selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    // Sanitize SSR-ed CSS.
    // Client side code doesn't need to be sanitized since we use
    // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
    if (typeof window === "undefined") {
        css = sanitize(css);
    }
    var idcss = id + css;
    if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
    }
    return cache[idcss];
}
function mapRulesToStyle(cssRules, options) {
    if (options === void 0) options = {};
    return cssRules.map(function(args) {
        var id = args[0];
        var css = args[1];
        return /*#__PURE__*/ React__default["default"].createElement("style", {
            id: "__" + id,
            // Avoid warnings upon render with a key
            key: "__" + id,
            nonce: options.nonce ? options.nonce : undefined,
            dangerouslySetInnerHTML: {
                __html: css
            }
        });
    });
}
var StyleSheetRegistry = /*#__PURE__*/ function() {
    function StyleSheetRegistry(param) {
        var ref = param === void 0 ? {} : param, _styleSheet = ref.styleSheet, styleSheet = _styleSheet === void 0 ? null : _styleSheet, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? false : _optimizeForSpeed;
        this._sheet = styleSheet || new StyleSheet({
            name: "styled-jsx",
            optimizeForSpeed: optimizeForSpeed
        });
        this._sheet.inject();
        if (styleSheet && typeof optimizeForSpeed === "boolean") {
            this._sheet.setOptimizeForSpeed(optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    }
    var _proto = StyleSheetRegistry.prototype;
    _proto.add = function add(props) {
        var _this = this;
        if (undefined === this._optimizeForSpeed) {
            this._optimizeForSpeed = Array.isArray(props.children);
            this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        if (typeof window !== "undefined" && !this._fromServer) {
            this._fromServer = this.selectFromServer();
            this._instancesCounts = Object.keys(this._fromServer).reduce(function(acc, tagName) {
                acc[tagName] = 0;
                return acc;
            }, {});
        }
        var ref = this.getIdAndRules(props), styleId = ref.styleId, rules = ref.rules;
        // Deduping: just increase the instances count.
        if (styleId in this._instancesCounts) {
            this._instancesCounts[styleId] += 1;
            return;
        }
        var indices = rules.map(function(rule) {
            return _this._sheet.insertRule(rule);
        }) // Filter out invalid rules
        .filter(function(index) {
            return index !== -1;
        });
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
    };
    _proto.remove = function remove(props) {
        var _this = this;
        var styleId = this.getIdAndRules(props).styleId;
        invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
        this._instancesCounts[styleId] -= 1;
        if (this._instancesCounts[styleId] < 1) {
            var tagFromServer = this._fromServer && this._fromServer[styleId];
            if (tagFromServer) {
                tagFromServer.parentNode.removeChild(tagFromServer);
                delete this._fromServer[styleId];
            } else {
                this._indices[styleId].forEach(function(index) {
                    return _this._sheet.deleteRule(index);
                });
                delete this._indices[styleId];
            }
            delete this._instancesCounts[styleId];
        }
    };
    _proto.update = function update(props, nextProps) {
        this.add(nextProps);
        this.remove(props);
    };
    _proto.flush = function flush() {
        this._sheet.flush();
        this._sheet.inject();
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function(styleId) {
            return [
                styleId,
                _this._fromServer[styleId]
            ];
        }) : [];
        var cssRules = this._sheet.cssRules();
        return fromServer.concat(Object.keys(this._indices).map(function(styleId) {
            return [
                styleId,
                _this._indices[styleId].map(function(index) {
                    return cssRules[index].cssText;
                }).join(_this._optimizeForSpeed ? "" : "\n")
            ];
        }) // filter out empty rules
        .filter(function(rule) {
            return Boolean(rule[1]);
        }));
    };
    _proto.styles = function styles(options) {
        return mapRulesToStyle(this.cssRules(), options);
    };
    _proto.getIdAndRules = function getIdAndRules(props) {
        var css = props.children, dynamic = props.dynamic, id = props.id;
        if (dynamic) {
            var styleId = computeId(id, dynamic);
            return {
                styleId: styleId,
                rules: Array.isArray(css) ? css.map(function(rule) {
                    return computeSelector(styleId, rule);
                }) : [
                    computeSelector(styleId, css)
                ]
            };
        }
        return {
            styleId: computeId(id),
            rules: Array.isArray(css) ? css : [
                css
            ]
        };
    };
    /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */ _proto.selectFromServer = function selectFromServer() {
        var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
        return elements.reduce(function(acc, element) {
            var id = element.id.slice(2);
            acc[id] = element;
            return acc;
        }, {});
    };
    return StyleSheetRegistry;
}();
function invariant(condition, message) {
    if (!condition) {
        throw new Error("StyleSheetRegistry: " + message + ".");
    }
}
var StyleSheetContext = /*#__PURE__*/ React.createContext(null);
StyleSheetContext.displayName = "StyleSheetContext";
function createStyleRegistry() {
    return new StyleSheetRegistry();
}
function StyleRegistry(param) {
    var configuredRegistry = param.registry, children = param.children;
    var rootRegistry = React.useContext(StyleSheetContext);
    var ref = React.useState({
        "StyleRegistry.useState[ref]": function() {
            return rootRegistry || configuredRegistry || createStyleRegistry();
        }
    }["StyleRegistry.useState[ref]"]), registry = ref[0];
    return /*#__PURE__*/ React__default["default"].createElement(StyleSheetContext.Provider, {
        value: registry
    }, children);
}
function useStyleRegistry() {
    return React.useContext(StyleSheetContext);
}
// Opt-into the new `useInsertionEffect` API in React 18, fallback to `useLayoutEffect`.
// https://github.com/reactwg/react-18/discussions/110
var useInsertionEffect = React__default["default"].useInsertionEffect || React__default["default"].useLayoutEffect;
var defaultRegistry = typeof window !== "undefined" ? createStyleRegistry() : undefined;
function JSXStyle(props) {
    var registry = defaultRegistry ? defaultRegistry : useStyleRegistry();
    // If `registry` does not exist, we do nothing here.
    if (!registry) {
        return null;
    }
    if (typeof window === "undefined") {
        registry.add(props);
        return null;
    }
    useInsertionEffect({
        "JSXStyle.useInsertionEffect": function() {
            registry.add(props);
            return ({
                "JSXStyle.useInsertionEffect": function() {
                    registry.remove(props);
                }
            })["JSXStyle.useInsertionEffect"];
        // props.children can be string[], will be striped since id is identical
        }
    }["JSXStyle.useInsertionEffect"], [
        props.id,
        String(props.dynamic)
    ]);
    return null;
}
JSXStyle.dynamic = function(info) {
    return info.map(function(tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return computeId(baseId, props);
    }).join(" ");
};
exports.StyleRegistry = StyleRegistry;
exports.createStyleRegistry = createStyleRegistry;
exports.style = JSXStyle;
exports.useStyleRegistry = useStyleRegistry;
}}),
"[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/styled-jsx/dist/index/index.js [app-client] (ecmascript)").style;
}}),
"[project]/node_modules/is-plain-obj/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
module.exports = (value)=>{
    if (Object.prototype.toString.call(value) !== '[object Object]') {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    return prototype === null || prototype === Object.prototype;
};
}}),
"[project]/node_modules/@contentful/rich-text-types/dist/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
var isPlainObject = __turbopack_context__.r("[project]/node_modules/is-plain-obj/index.js [app-client] (ecmascript)");
/**
 * Map of all Contentful block types. Blocks contain inline or block nodes.
 */ exports.BLOCKS = void 0;
(function(BLOCKS) {
    BLOCKS["DOCUMENT"] = "document";
    BLOCKS["PARAGRAPH"] = "paragraph";
    BLOCKS["HEADING_1"] = "heading-1";
    BLOCKS["HEADING_2"] = "heading-2";
    BLOCKS["HEADING_3"] = "heading-3";
    BLOCKS["HEADING_4"] = "heading-4";
    BLOCKS["HEADING_5"] = "heading-5";
    BLOCKS["HEADING_6"] = "heading-6";
    BLOCKS["OL_LIST"] = "ordered-list";
    BLOCKS["UL_LIST"] = "unordered-list";
    BLOCKS["LIST_ITEM"] = "list-item";
    BLOCKS["HR"] = "hr";
    BLOCKS["QUOTE"] = "blockquote";
    BLOCKS["EMBEDDED_ENTRY"] = "embedded-entry-block";
    BLOCKS["EMBEDDED_ASSET"] = "embedded-asset-block";
    BLOCKS["EMBEDDED_RESOURCE"] = "embedded-resource-block";
    BLOCKS["TABLE"] = "table";
    BLOCKS["TABLE_ROW"] = "table-row";
    BLOCKS["TABLE_CELL"] = "table-cell";
    BLOCKS["TABLE_HEADER_CELL"] = "table-header-cell";
})(exports.BLOCKS || (exports.BLOCKS = {}));
/**
 * Map of all Contentful inline types. Inline contain inline or text nodes.
 *
 * @note This should be kept in alphabetical order since the
 * [validation package](https://github.com/contentful/content-stack/tree/master/packages/validation)
 *  relies on the values being in a predictable order.
 */ exports.INLINES = void 0;
(function(INLINES) {
    INLINES["ASSET_HYPERLINK"] = "asset-hyperlink";
    INLINES["EMBEDDED_ENTRY"] = "embedded-entry-inline";
    INLINES["EMBEDDED_RESOURCE"] = "embedded-resource-inline";
    INLINES["ENTRY_HYPERLINK"] = "entry-hyperlink";
    INLINES["HYPERLINK"] = "hyperlink";
    INLINES["RESOURCE_HYPERLINK"] = "resource-hyperlink";
})(exports.INLINES || (exports.INLINES = {}));
/**
 * Map of all Contentful marks.
 */ exports.MARKS = void 0;
(function(MARKS) {
    MARKS["BOLD"] = "bold";
    MARKS["ITALIC"] = "italic";
    MARKS["UNDERLINE"] = "underline";
    MARKS["CODE"] = "code";
    MARKS["SUPERSCRIPT"] = "superscript";
    MARKS["SUBSCRIPT"] = "subscript";
    MARKS["STRIKETHROUGH"] = "strikethrough";
})(exports.MARKS || (exports.MARKS = {}));
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
var _a$1;
/**
 * Array of all top level block types.
 * Only these block types can be the direct children of the document.
 */ var TOP_LEVEL_BLOCKS = [
    exports.BLOCKS.PARAGRAPH,
    exports.BLOCKS.HEADING_1,
    exports.BLOCKS.HEADING_2,
    exports.BLOCKS.HEADING_3,
    exports.BLOCKS.HEADING_4,
    exports.BLOCKS.HEADING_5,
    exports.BLOCKS.HEADING_6,
    exports.BLOCKS.OL_LIST,
    exports.BLOCKS.UL_LIST,
    exports.BLOCKS.HR,
    exports.BLOCKS.QUOTE,
    exports.BLOCKS.EMBEDDED_ENTRY,
    exports.BLOCKS.EMBEDDED_ASSET,
    exports.BLOCKS.EMBEDDED_RESOURCE,
    exports.BLOCKS.TABLE
];
/**
 * Array of all allowed block types inside list items
 */ var LIST_ITEM_BLOCKS = [
    exports.BLOCKS.PARAGRAPH,
    exports.BLOCKS.HEADING_1,
    exports.BLOCKS.HEADING_2,
    exports.BLOCKS.HEADING_3,
    exports.BLOCKS.HEADING_4,
    exports.BLOCKS.HEADING_5,
    exports.BLOCKS.HEADING_6,
    exports.BLOCKS.OL_LIST,
    exports.BLOCKS.UL_LIST,
    exports.BLOCKS.HR,
    exports.BLOCKS.QUOTE,
    exports.BLOCKS.EMBEDDED_ENTRY,
    exports.BLOCKS.EMBEDDED_ASSET,
    exports.BLOCKS.EMBEDDED_RESOURCE
];
var TABLE_BLOCKS = [
    exports.BLOCKS.TABLE,
    exports.BLOCKS.TABLE_ROW,
    exports.BLOCKS.TABLE_CELL,
    exports.BLOCKS.TABLE_HEADER_CELL
];
/**
 * Array of all void block types
 */ var VOID_BLOCKS = [
    exports.BLOCKS.HR,
    exports.BLOCKS.EMBEDDED_ENTRY,
    exports.BLOCKS.EMBEDDED_ASSET,
    exports.BLOCKS.EMBEDDED_RESOURCE
];
/**
 * Dictionary of all container block types, and the set block types they accept as children.
 *
 * Note: This does not include `[BLOCKS.DOCUMENT]: TOP_LEVEL_BLOCKS`
 */ var CONTAINERS = (_a$1 = {}, _a$1[exports.BLOCKS.OL_LIST] = [
    exports.BLOCKS.LIST_ITEM
], _a$1[exports.BLOCKS.UL_LIST] = [
    exports.BLOCKS.LIST_ITEM
], _a$1[exports.BLOCKS.LIST_ITEM] = LIST_ITEM_BLOCKS, _a$1[exports.BLOCKS.QUOTE] = [
    exports.BLOCKS.PARAGRAPH
], _a$1[exports.BLOCKS.TABLE] = [
    exports.BLOCKS.TABLE_ROW
], _a$1[exports.BLOCKS.TABLE_ROW] = [
    exports.BLOCKS.TABLE_CELL,
    exports.BLOCKS.TABLE_HEADER_CELL
], _a$1[exports.BLOCKS.TABLE_CELL] = [
    exports.BLOCKS.PARAGRAPH,
    exports.BLOCKS.UL_LIST,
    exports.BLOCKS.OL_LIST
], _a$1[exports.BLOCKS.TABLE_HEADER_CELL] = [
    exports.BLOCKS.PARAGRAPH
], _a$1);
/**
 * Array of all heading levels
 */ var HEADINGS = [
    exports.BLOCKS.HEADING_1,
    exports.BLOCKS.HEADING_2,
    exports.BLOCKS.HEADING_3,
    exports.BLOCKS.HEADING_4,
    exports.BLOCKS.HEADING_5,
    exports.BLOCKS.HEADING_6
];
/**
 * Array of all block types that may contain text and inline nodes.
 */ var TEXT_CONTAINERS = __spreadArray([
    exports.BLOCKS.PARAGRAPH
], HEADINGS, true);
/**
 * Node types before `tables` release.
 */ var V1_NODE_TYPES = [
    exports.BLOCKS.DOCUMENT,
    exports.BLOCKS.PARAGRAPH,
    exports.BLOCKS.HEADING_1,
    exports.BLOCKS.HEADING_2,
    exports.BLOCKS.HEADING_3,
    exports.BLOCKS.HEADING_4,
    exports.BLOCKS.HEADING_5,
    exports.BLOCKS.HEADING_6,
    exports.BLOCKS.OL_LIST,
    exports.BLOCKS.UL_LIST,
    exports.BLOCKS.LIST_ITEM,
    exports.BLOCKS.HR,
    exports.BLOCKS.QUOTE,
    exports.BLOCKS.EMBEDDED_ENTRY,
    exports.BLOCKS.EMBEDDED_ASSET,
    exports.INLINES.HYPERLINK,
    exports.INLINES.ENTRY_HYPERLINK,
    exports.INLINES.ASSET_HYPERLINK,
    exports.INLINES.EMBEDDED_ENTRY,
    'text'
];
/**
 * Marks before `superscript` & `subscript` release.
 */ var V1_MARKS = [
    exports.MARKS.BOLD,
    exports.MARKS.CODE,
    exports.MARKS.ITALIC,
    exports.MARKS.UNDERLINE
];
/**
 * A rich text document considered to be empty.
 * Any other document structure than this is not considered empty.
 */ var EMPTY_DOCUMENT = {
    nodeType: exports.BLOCKS.DOCUMENT,
    data: {},
    content: [
        {
            nodeType: exports.BLOCKS.PARAGRAPH,
            data: {},
            content: [
                {
                    nodeType: 'text',
                    value: '',
                    marks: [],
                    data: {}
                }
            ]
        }
    ]
};
/**
 * Tiny replacement for Object.values(object).includes(key) to
 * avoid including CoreJS polyfills
 */ function hasValue(obj, value) {
    for(var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++){
        var key = _a[_i];
        if (value === obj[key]) {
            return true;
        }
    }
    return false;
}
/**
 * Checks if the node is an instance of Inline.
 */ function isInline(node) {
    return hasValue(exports.INLINES, node.nodeType);
}
/**
 * Checks if the node is an instance of Block.
 */ function isBlock(node) {
    return hasValue(exports.BLOCKS, node.nodeType);
}
/**
 * Checks if the node is an instance of Text.
 */ function isText(node) {
    return node.nodeType === 'text';
}
var helpers = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    isBlock: isBlock,
    isInline: isInline,
    isText: isText
});
var typeMismatchError = function(_a) {
    var path = _a.path, property = _a.property, typeName = _a.typeName, value = _a.value;
    return {
        details: "The type of \"".concat(property, "\" is incorrect, expected type: ").concat(typeName),
        name: 'type',
        path: path.toArray(),
        type: typeName,
        value: value
    };
};
var minSizeError = function(_a) {
    var min = _a.min, value = _a.value, path = _a.path;
    return {
        name: 'size',
        min: min,
        path: path.toArray(),
        details: "Size must be at least ".concat(min),
        value: value
    };
};
var maxSizeError = function(_a) {
    var max = _a.max, value = _a.value, path = _a.path;
    return {
        name: 'size',
        max: max,
        path: path.toArray(),
        details: "Size must be at most ".concat(max),
        value: value
    };
};
var enumError = function(_a) {
    var expected = _a.expected, value = _a.value, path = _a.path;
    return {
        details: "Value must be one of expected values",
        name: 'in',
        expected: __spreadArray([], expected, true).sort(),
        path: path.toArray(),
        value: value
    };
};
var unknownPropertyError = function(_a) {
    var property = _a.property, path = _a.path;
    return {
        details: "The property \"".concat(property, "\" is not expected"),
        name: 'unexpected',
        path: path.toArray()
    };
};
var requiredPropertyError = function(_a) {
    var property = _a.property, path = _a.path;
    return {
        details: "The property \"".concat(property, "\" is required here"),
        name: 'required',
        path: path.toArray()
    };
};
var ObjectAssertion = function() {
    function ObjectAssertion(obj, path) {
        var _this = this;
        this.obj = obj;
        this.path = path;
        this._errors = [];
        this.catch = function() {
            var _a;
            var errors = [];
            for(var _i = 0; _i < arguments.length; _i++){
                errors[_i] = arguments[_i];
            }
            (_a = _this._errors).push.apply(_a, errors);
        };
        /**
         * Asserts the key exists in the object. You probably shouldn't call this
         * function directly. Instead, use `$.object`, `$.number`, `$.string`, etc.
         */ this.exists = function(key) {
            if (key in _this.obj) {
                return true;
            }
            _this.catch(requiredPropertyError({
                property: key,
                path: _this.path.of(key)
            }));
            return false;
        };
        /**
         * Asserts the key exists in the object and its value is a plain object. if
         * no key is provided, it asserts the object itself.
         */ this.object = function(key) {
            var _a;
            var value = key ? _this.obj[key] : _this.obj;
            if (key) {
                if (!_this.exists(key)) {
                    return false;
                }
            }
            if (isPlainObject(value)) {
                return true;
            }
            var path = key ? _this.path.of(key) : _this.path;
            var property = (_a = key !== null && key !== void 0 ? key : _this.path.last()) !== null && _a !== void 0 ? _a : 'value';
            _this.catch(typeMismatchError({
                typeName: 'Object',
                property: property,
                path: path,
                value: value
            }));
            return false;
        };
        /**
         * Asserts the key exists in the object and its value is a string.
         */ this.string = function(key) {
            var value = _this.obj[key];
            if (key && !_this.exists(key)) {
                return false;
            }
            if (typeof value === 'string') {
                return true;
            }
            _this.catch(typeMismatchError({
                typeName: 'String',
                property: key,
                path: _this.path.of(key),
                value: value
            }));
            return false;
        };
        /**
         * Asserts the key exists in the object and its value is a number.
         */ this.number = function(key, optional) {
            var value = _this.obj[key];
            if (optional && !(key in _this.obj)) {
                return true;
            }
            if (!_this.exists(key)) {
                return false;
            }
            if (typeof value === 'number' && !Number.isNaN(value)) {
                return true;
            }
            _this.catch(typeMismatchError({
                typeName: 'Number',
                property: key,
                path: _this.path.of(key),
                value: value
            }));
            return false;
        };
        /**
         * Asserts the key exists in the object and its value is an array. You don't
         * need to manually call this function before `$.each` or `$.maxLength`.
         */ this.array = function(key) {
            var value = _this.obj[key];
            if (key && !_this.exists(key)) {
                return false;
            }
            if (Array.isArray(value)) {
                return true;
            }
            _this.catch(typeMismatchError({
                typeName: 'Array',
                property: key,
                path: _this.path.of(key),
                value: value
            }));
            return false;
        };
        /**
         * Asserts the value of the key is one of the expected values.
         */ this.enum = function(key, expected) {
            var value = _this.obj[key];
            if (typeof value === 'string' && expected.includes(value)) {
                return true;
            }
            _this.catch(enumError({
                expected: expected,
                value: value,
                path: _this.path.of(key)
            }));
            return false;
        };
        /**
         * Asserts the array value of the object key is empty. If the value isn't an
         * array, the function captures a type error and returns false.
         */ this.empty = function(key) {
            if (!_this.array(key)) {
                return false;
            }
            var value = _this.obj[key];
            if (value.length === 0) {
                return true;
            }
            _this.catch(maxSizeError({
                max: 0,
                value: value,
                path: _this.path.of(key)
            }));
            return false;
        };
        /**
         * Asserts the length of the value of the object key is at least `min`. If the
         * value isn't an array, the function captures a type error and returns false.
         */ this.minLength = function(key, min) {
            if (!_this.array(key)) {
                return false;
            }
            var value = _this.obj[key];
            if (value.length >= min) {
                return true;
            }
            _this.catch(minSizeError({
                min: min,
                value: value,
                path: _this.path.of(key)
            }));
            return false;
        };
        /**
         * Asserts the object has no additional properties other than the ones
         * specified
         */ this.noAdditionalProperties = function(properties) {
            var unknowns = Object.keys(_this.obj).sort().filter(function(key) {
                return !properties.includes(key);
            });
            unknowns.forEach(function(property) {
                return _this.catch(unknownPropertyError({
                    property: property,
                    path: _this.path.of(property)
                }));
            });
            return unknowns.length === 0;
        };
        /**
         * Iterates over the value of the key and assert each item. If the value isn't
         * an array, the function captures a type error and safely exits.
         *
         * To maintain compatibility with previous implementation, we stop early if we
         * find any errors.
         */ this.each = function(key, assert) {
            if (!_this.array(key)) {
                return;
            }
            var value = _this.obj[key];
            var foundErrors = false;
            value.forEach(function(item, index) {
                if (foundErrors) {
                    return;
                }
                var errors = assert(item, _this.path.of(key).of(index));
                if (errors.length > 0) {
                    foundErrors = true;
                }
                _this.catch.apply(_this, errors);
            });
        };
    }
    Object.defineProperty(ObjectAssertion.prototype, "errors", {
        get: function() {
            var _this = this;
            var serializeError = function(error) {
                return JSON.stringify({
                    details: error.details,
                    path: error.path
                });
            };
            return this._errors.filter(function(error, index) {
                return _this._errors.findIndex(function(step) {
                    return serializeError(error) === serializeError(step);
                }) === index;
            });
        },
        enumerable: false,
        configurable: true
    });
    return ObjectAssertion;
}();
var VOID_CONTENT = [];
var NodeAssertion = function() {
    function NodeAssertion(contentRule, validateData) {
        this.contentRule = contentRule;
        this.validateData = validateData;
    }
    NodeAssertion.prototype.assert = function(node, path) {
        var _a, _b;
        var $ = new ObjectAssertion(node, path);
        if (!$.object()) {
            return $.errors;
        }
        $.noAdditionalProperties([
            'nodeType',
            'data',
            'content'
        ]);
        var _c = Array.isArray(this.contentRule) ? {
            nodeTypes: this.contentRule
        } : this.contentRule(node, path), nodeTypes = _c.nodeTypes, _d = _c.min, min = _d === void 0 ? 0 : _d;
        if (nodeTypes.length === 0 && min > 0) {
            throw new Error("Invalid content rule. Cannot have enforce a 'min' of ".concat(min, " with no nodeTypes"));
        }
        $.minLength('content', min);
        // Is void
        if (nodeTypes.length === 0) {
            $.empty('content');
        } else {
            $.each('content', function(item, path) {
                var item$ = new ObjectAssertion(item, path);
                if (!item$.object()) {
                    return item$.errors;
                }
                item$.enum('nodeType', nodeTypes);
                return item$.errors;
            });
        }
        if ($.object('data')) {
            var dataErrors = (_b = (_a = this.validateData) === null || _a === void 0 ? void 0 : _a.call(this, node.data, path.of('data'))) !== null && _b !== void 0 ? _b : [];
            $.catch.apply($, dataErrors);
        }
        return $.errors;
    };
    return NodeAssertion;
}();
var EntityLinkAssertion = function(_super) {
    __extends(EntityLinkAssertion, _super);
    function EntityLinkAssertion(linkType, contentNodeTypes) {
        var _this = _super.call(this, contentNodeTypes, function(data, path) {
            return _this.assertLink(data, path);
        }) || this;
        _this.linkType = linkType;
        _this.assertLink = function(data, path) {
            var $ = new ObjectAssertion(data, path);
            if ($.object('target')) {
                var sys$ = new ObjectAssertion(data.target.sys, path.of('target').of('sys'));
                if (sys$.object()) {
                    sys$.enum('type', [
                        _this.type
                    ]);
                    sys$.enum('linkType', [
                        _this.linkType
                    ]);
                    if (_this.type === 'Link') {
                        sys$.string('id');
                        sys$.noAdditionalProperties([
                            'type',
                            'linkType',
                            'id'
                        ]);
                    } else if (_this.type === 'ResourceLink') {
                        sys$.string('urn');
                        sys$.noAdditionalProperties([
                            'type',
                            'linkType',
                            'urn'
                        ]);
                    }
                }
                $.catch.apply($, sys$.errors);
            }
            $.noAdditionalProperties([
                'target'
            ]);
            return $.errors;
        };
        _this.type = _this.linkType.startsWith('Contentful:') ? 'ResourceLink' : 'Link';
        return _this;
    }
    return EntityLinkAssertion;
}(NodeAssertion);
var HyperLinkAssertion = function(_super) {
    __extends(HyperLinkAssertion, _super);
    function HyperLinkAssertion() {
        var _this = _super.call(this, [
            'text'
        ], function(data, path) {
            return _this.assertLink(data, path);
        }) || this;
        _this.assertLink = function(data, path) {
            var $ = new ObjectAssertion(data, path);
            $.string('uri');
            $.noAdditionalProperties([
                'uri'
            ]);
            return $.errors;
        };
        return _this;
    }
    return HyperLinkAssertion;
}(NodeAssertion);
var assert = function(contentRule, validateData) {
    return new NodeAssertion(contentRule, validateData);
};
var assertLink = function(linkType, contentRule) {
    return new EntityLinkAssertion(linkType, contentRule);
};
var Path = function() {
    function Path(path) {
        if (path === void 0) {
            path = [];
        }
        var _this = this;
        this.path = path;
        this.of = function(element) {
            return new Path(__spreadArray(__spreadArray([], _this.path, true), [
                element
            ], false));
        };
        this.isRoot = function() {
            return _this.path.length === 0;
        };
        this.last = function() {
            return _this.path[_this.path.length - 1];
        };
        this.toArray = function() {
            return _this.path;
        };
    }
    return Path;
}();
function assertText(text, path) {
    var $ = new ObjectAssertion(text, path);
    if (!$.object()) {
        return $.errors;
    }
    $.noAdditionalProperties([
        'nodeType',
        'data',
        'value',
        'marks'
    ]);
    $.object('data');
    $.each('marks', function(mark, path) {
        var mark$ = new ObjectAssertion(mark, path);
        if (!mark$.object()) {
            return mark$.errors;
        }
        // For historical reasons, we don't explicitly check for supported marks
        // e.g. bold, italic ..etc. This makes it possible for a customer to add
        // custom marks
        mark$.string('type');
        return mark$.errors;
    });
    $.string('value');
    return $.errors;
}
var _a;
var assertInlineOrText = assert(__spreadArray(__spreadArray([], Object.values(exports.INLINES), true), [
    'text'
], false).sort());
var assertList = assert([
    exports.BLOCKS.LIST_ITEM
]);
var assertVoidEntryLink = assertLink('Entry', VOID_CONTENT);
var assertTableCell = assert(function() {
    return {
        nodeTypes: [
            exports.BLOCKS.PARAGRAPH
        ],
        min: 1
    };
}, function(data, path) {
    var $ = new ObjectAssertion(data, path);
    $.noAdditionalProperties([
        'colspan',
        'rowspan'
    ]);
    $.number('colspan', true);
    $.number('rowspan', true);
    return $.errors;
});
var nodeValidator = (_a = {}, _a[exports.BLOCKS.DOCUMENT] = assert(TOP_LEVEL_BLOCKS), _a[exports.BLOCKS.PARAGRAPH] = assertInlineOrText, _a[exports.BLOCKS.HEADING_1] = assertInlineOrText, _a[exports.BLOCKS.HEADING_2] = assertInlineOrText, _a[exports.BLOCKS.HEADING_3] = assertInlineOrText, _a[exports.BLOCKS.HEADING_4] = assertInlineOrText, _a[exports.BLOCKS.HEADING_5] = assertInlineOrText, _a[exports.BLOCKS.HEADING_6] = assertInlineOrText, _a[exports.BLOCKS.QUOTE] = assert(CONTAINERS[exports.BLOCKS.QUOTE]), _a[exports.BLOCKS.EMBEDDED_ENTRY] = assertVoidEntryLink, _a[exports.BLOCKS.EMBEDDED_ASSET] = assertLink('Asset', VOID_CONTENT), _a[exports.BLOCKS.EMBEDDED_RESOURCE] = assertLink('Contentful:Entry', VOID_CONTENT), _a[exports.BLOCKS.HR] = assert(VOID_CONTENT), _a[exports.BLOCKS.OL_LIST] = assertList, _a[exports.BLOCKS.UL_LIST] = assertList, _a[exports.BLOCKS.LIST_ITEM] = assert(__spreadArray([], LIST_ITEM_BLOCKS, true).sort()), _a[exports.BLOCKS.TABLE] = assert(function() {
    return {
        nodeTypes: [
            exports.BLOCKS.TABLE_ROW
        ],
        min: 1
    };
}), _a[exports.BLOCKS.TABLE_ROW] = assert(function() {
    return {
        nodeTypes: [
            exports.BLOCKS.TABLE_CELL,
            exports.BLOCKS.TABLE_HEADER_CELL
        ],
        min: 1
    };
}), _a[exports.BLOCKS.TABLE_CELL] = assertTableCell, _a[exports.BLOCKS.TABLE_HEADER_CELL] = assertTableCell, _a[exports.INLINES.HYPERLINK] = new HyperLinkAssertion(), _a[exports.INLINES.EMBEDDED_ENTRY] = assertVoidEntryLink, _a[exports.INLINES.EMBEDDED_RESOURCE] = assertLink('Contentful:Entry', VOID_CONTENT), _a[exports.INLINES.ENTRY_HYPERLINK] = assertLink('Entry', [
    'text'
]), _a[exports.INLINES.ASSET_HYPERLINK] = assertLink('Asset', [
    'text'
]), _a[exports.INLINES.RESOURCE_HYPERLINK] = assertLink('Contentful:Entry', [
    'text'
]), _a);
function validateNode(node, path) {
    if (node.nodeType === 'text') {
        return assertText(node, path);
    }
    var errors = nodeValidator[node.nodeType].assert(node, path);
    if (errors.length > 0) {
        return errors;
    }
    var $ = new ObjectAssertion(node, path);
    $.each('content', function(item, path) {
        // We already know those are valid nodes thanks to the assertion done in
        // the NodeAssertion class
        return validateNode(item, path);
    });
    return $.errors;
}
var validateRichTextDocument = function(document) {
    var path = new Path();
    var $ = new ObjectAssertion(document, path);
    if ($.object()) {
        $.enum('nodeType', [
            exports.BLOCKS.DOCUMENT
        ]);
    }
    if ($.errors.length > 0) {
        return $.errors;
    }
    return validateNode(document, path);
};
exports.CONTAINERS = CONTAINERS;
exports.EMPTY_DOCUMENT = EMPTY_DOCUMENT;
exports.HEADINGS = HEADINGS;
exports.LIST_ITEM_BLOCKS = LIST_ITEM_BLOCKS;
exports.TABLE_BLOCKS = TABLE_BLOCKS;
exports.TEXT_CONTAINERS = TEXT_CONTAINERS;
exports.TOP_LEVEL_BLOCKS = TOP_LEVEL_BLOCKS;
exports.V1_MARKS = V1_MARKS;
exports.V1_NODE_TYPES = V1_NODE_TYPES;
exports.VOID_BLOCKS = VOID_BLOCKS;
exports.helpers = helpers;
exports.validateRichTextDocument = validateRichTextDocument; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var richTextTypes = __turbopack_context__.r("[project]/node_modules/@contentful/rich-text-types/dist/index.js [app-client] (ecmascript)");
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function appendKeyToValidElement(element, key) {
    if (React.isValidElement(element) && element.key === null) {
        return React.cloneElement(element, {
            key: key
        });
    }
    return element;
}
function nodeListToReactComponents(nodes, options) {
    return nodes.map(function(node, index) {
        return appendKeyToValidElement(nodeToReactComponent(node, options), index);
    });
}
function nodeToReactComponent(node, options) {
    var renderNode = options.renderNode, renderMark = options.renderMark, renderText = options.renderText, preserveWhitespace = options.preserveWhitespace;
    if (richTextTypes.helpers.isText(node)) {
        var nodeValue = renderText ? renderText(node.value) : node.value;
        // Preserving whitespace is only supported with the default transformations.
        if (preserveWhitespace && !renderText) {
            // Preserve multiple spaces.
            nodeValue = nodeValue.replace(/ {2,}/g, function(match) {
                return '\u00A0'.repeat(match.length);
            });
            // Preserve line breaks.
            var lines_1 = nodeValue.split('\n');
            var jsxLines_1 = [];
            lines_1.forEach(function(line, index) {
                jsxLines_1.push(line);
                if (index !== lines_1.length - 1) {
                    jsxLines_1.push(React.createElement("br", null));
                }
            });
            nodeValue = jsxLines_1;
        }
        return node.marks.reduce(function(value, mark) {
            if (!renderMark[mark.type]) {
                return value;
            }
            return renderMark[mark.type](value);
        }, nodeValue);
    } else {
        var children = nodeListToReactComponents(node.content, options);
        if (!node.nodeType || !renderNode[node.nodeType]) {
            return React.createElement(React.Fragment, null, children);
        }
        return renderNode[node.nodeType](node, children);
    }
}
var _a, _b;
var defaultNodeRenderers = (_a = {}, _a[richTextTypes.BLOCKS.DOCUMENT] = function(node, children) {
    return children;
}, _a[richTextTypes.BLOCKS.PARAGRAPH] = function(node, children) {
    return React.createElement("p", null, children);
}, _a[richTextTypes.BLOCKS.HEADING_1] = function(node, children) {
    return React.createElement("h1", null, children);
}, _a[richTextTypes.BLOCKS.HEADING_2] = function(node, children) {
    return React.createElement("h2", null, children);
}, _a[richTextTypes.BLOCKS.HEADING_3] = function(node, children) {
    return React.createElement("h3", null, children);
}, _a[richTextTypes.BLOCKS.HEADING_4] = function(node, children) {
    return React.createElement("h4", null, children);
}, _a[richTextTypes.BLOCKS.HEADING_5] = function(node, children) {
    return React.createElement("h5", null, children);
}, _a[richTextTypes.BLOCKS.HEADING_6] = function(node, children) {
    return React.createElement("h6", null, children);
}, _a[richTextTypes.BLOCKS.EMBEDDED_ENTRY] = function(node, children) {
    return React.createElement("div", null, children);
}, _a[richTextTypes.BLOCKS.EMBEDDED_RESOURCE] = function(node, children) {
    return React.createElement("div", null, children);
}, _a[richTextTypes.BLOCKS.UL_LIST] = function(node, children) {
    return React.createElement("ul", null, children);
}, _a[richTextTypes.BLOCKS.OL_LIST] = function(node, children) {
    return React.createElement("ol", null, children);
}, _a[richTextTypes.BLOCKS.LIST_ITEM] = function(node, children) {
    return React.createElement("li", null, children);
}, _a[richTextTypes.BLOCKS.QUOTE] = function(node, children) {
    return React.createElement("blockquote", null, children);
}, _a[richTextTypes.BLOCKS.HR] = function() {
    return React.createElement("hr", null);
}, _a[richTextTypes.BLOCKS.TABLE] = function(node, children) {
    return React.createElement("table", null, React.createElement("tbody", null, children));
}, _a[richTextTypes.BLOCKS.TABLE_ROW] = function(node, children) {
    return React.createElement("tr", null, children);
}, _a[richTextTypes.BLOCKS.TABLE_HEADER_CELL] = function(node, children) {
    return React.createElement("th", null, children);
}, _a[richTextTypes.BLOCKS.TABLE_CELL] = function(node, children) {
    return React.createElement("td", null, children);
}, _a[richTextTypes.INLINES.ASSET_HYPERLINK] = function(node) {
    return defaultInline(richTextTypes.INLINES.ASSET_HYPERLINK, node);
}, _a[richTextTypes.INLINES.ENTRY_HYPERLINK] = function(node) {
    return defaultInline(richTextTypes.INLINES.ENTRY_HYPERLINK, node);
}, _a[richTextTypes.INLINES.RESOURCE_HYPERLINK] = function(node) {
    return defaultInlineResource(richTextTypes.INLINES.RESOURCE_HYPERLINK, node);
}, _a[richTextTypes.INLINES.EMBEDDED_ENTRY] = function(node) {
    return defaultInline(richTextTypes.INLINES.EMBEDDED_ENTRY, node);
}, _a[richTextTypes.INLINES.EMBEDDED_RESOURCE] = function(node, _children) {
    return defaultInlineResource(richTextTypes.INLINES.EMBEDDED_RESOURCE, node);
}, _a[richTextTypes.INLINES.HYPERLINK] = function(node, children) {
    return React.createElement("a", {
        href: node.data.uri
    }, children);
}, _a);
var defaultMarkRenderers = (_b = {}, _b[richTextTypes.MARKS.BOLD] = function(text) {
    return React.createElement("b", null, text);
}, _b[richTextTypes.MARKS.ITALIC] = function(text) {
    return React.createElement("i", null, text);
}, _b[richTextTypes.MARKS.UNDERLINE] = function(text) {
    return React.createElement("u", null, text);
}, _b[richTextTypes.MARKS.CODE] = function(text) {
    return React.createElement("code", null, text);
}, _b[richTextTypes.MARKS.SUPERSCRIPT] = function(text) {
    return React.createElement("sup", null, text);
}, _b[richTextTypes.MARKS.SUBSCRIPT] = function(text) {
    return React.createElement("sub", null, text);
}, _b[richTextTypes.MARKS.STRIKETHROUGH] = function(text) {
    return React.createElement("s", null, text);
}, _b);
function defaultInline(type, node) {
    return React.createElement("span", {
        key: node.data.target.sys.id
    }, "type: ", node.nodeType, " id: ", node.data.target.sys.id);
}
function defaultInlineResource(type, node) {
    return React.createElement("span", {
        key: node.data.target.sys.urn
    }, "type: ", node.nodeType, " urn: ", node.data.target.sys.urn);
}
/**
 * Serialize a Contentful Rich Text `document` to React tree
 */ function documentToReactComponents(richTextDocument, options) {
    if (options === void 0) {
        options = {};
    }
    if (!richTextDocument) {
        return null;
    }
    return nodeToReactComponent(richTextDocument, {
        renderNode: __assign(__assign({}, defaultNodeRenderers), options.renderNode),
        renderMark: __assign(__assign({}, defaultMarkRenderers), options.renderMark),
        renderText: options.renderText,
        preserveWhitespace: options.preserveWhitespace
    });
}
exports.documentToReactComponents = documentToReactComponents; //# sourceMappingURL=rich-text-react-renderer.es5.js.map
}}),
}]);

//# sourceMappingURL=_0c96874d._.js.map