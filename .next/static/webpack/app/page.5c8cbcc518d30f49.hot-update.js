"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/components/home/Slider.tsx":
/*!****************************************!*\
  !*** ./app/components/home/Slider.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst sliderImages = [\n    1,\n    2,\n    3,\n    4,\n    5\n];\nconst Slider = ()=>{\n    _s();\n    const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [labels, setLabels] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [isTransitionBlocked, setIsTransitionBlocked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const imageArr = ()=>sliderImages.map((x1)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageSlide, {\n                    keyValue: \"image-slide-\" + x1,\n                    id: x1\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 14\n                }, undefined);\n            });\n        const labelArr = ()=>sliderImages.map((x1)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SlideLabel, {\n                    keyValue: \"label-slide-\" + x1,\n                    id: x1\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 14\n                }, undefined);\n            });\n        const images = imageArr();\n        images.unshift(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageSlide, {\n            keyValue: \"image-slide-\" + x,\n            id: 5\n        }, void 0, false, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 35,\n            columnNumber: 20\n        }, undefined));\n        images.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageSlide, {\n            keyValue: \"label-slide-\" + x,\n            id: 0\n        }, void 0, false, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 36,\n            columnNumber: 17\n        }, undefined));\n        setImages(images);\n        setLabels(labelArr());\n    }, [\n        currentSlide\n    ]);\n    const ImageSlide = (props)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row min-w-[600px] h-[400px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-red-400 w-1/2 min-h-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-yellow-300 w-1/2 min-h-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, props.keyValue, true, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, undefined);\n    };\n    const SlideLabel = (props)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            htmlFor: \"radio\" + props.keyValue,\n            className: \"\\n        inline-block \\n        w-2 min-h-[8px] \\n        rounded-full \\n      hover:bg-base-1\\n        \".concat(currentSlide === props.keyValue ? \"bg-base-1 animate-[slider_0.3s_ease-in-out_forwards]\" : \"bg-base-3\"),\n            id: \"radio\" + props.keyValue,\n            onClick: ()=>setCurrentSlide(props.keyValue)\n        }, void 0, false, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, undefined);\n    };\n    // const imageFirst = imageArr[-1]\n    // const imageFirst = imageArr[-1]\n    // imageArr.unshift(imageFirst)\n    // const imageLast  = imageArr[1]\n    // imageLast.key = 'last-slide'\n    // imageArr.push(imageLast)\n    function resetSlider(props) {\n        setTimeout(()=>{\n            setIsTransitionBlocked(true);\n        }, 300);\n        setTimeout(()=>{\n            setIsTransitionBlocked(false);\n        }, 500);\n        if (props === \"first\") {\n            setCurrentSlide(6);\n            setTimeout(()=>{\n                setCurrentSlide(1);\n            }, 300);\n        } else {\n            setCurrentSlide(0);\n            setTimeout(()=>{\n                setCurrentSlide(5);\n            }, 300);\n        }\n    }\n    function handleClick(props) {\n        if (disabled) {\n            return;\n        }\n        switch(props){\n            case \"left\":\n                currentSlide > 1 ? setCurrentSlide(currentSlide - 1) : resetSlider(\"last\");\n                break;\n            case \"right\":\n                currentSlide < 5 ? setCurrentSlide(currentSlide + 1) : resetSlider(\"first\");\n        }\n        setDisabled(true);\n        setTimeout(()=>setDisabled(false), 500);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \" fill-base-3  cursor-pointer  duration-150  ease-in-out  hover:fill-base-1  hover:scale-125\",\n                    onClick: ()=>handleClick(\"left\"),\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    height: \"48\",\n                    viewBox: \"0 96 960 960\",\n                    width: \"48\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                        lineNumber: 147,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 134,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container relative overflow-hidden w-[600px] h-[400px] rounded-2xl z-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\\n                    flex \\n                    transition-\".concat(isTransitionBlocked ? \"none\" : \"all\", \" \\n                    duration-\").concat(isTransitionBlocked ? \"0\" : \"300\", \"\\n                    w-[600px] \\n                    h-[400px]\\n                    slider-\").concat(currentSlide),\n                            children: images\n                        }, void 0, false, {\n                            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                            lineNumber: 150,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bottom-3 flex gap-3 justify-center w-[600px]\",\n                            children: labels\n                        }, void 0, false, {\n                            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                            lineNumber: 160,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 149,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \" fill-base-3  cursor-pointer  duration-150  ease-in-out  hover:fill-base-1  hover:scale-125\",\n                    onClick: ()=>handleClick(\"right\"),\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    height: \"48\",\n                    viewBox: \"0 96 960 960\",\n                    width: \"48\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                        lineNumber: 177,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 164,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 133,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Slider, \"LB2TQIcUu4MSfXgP+6yDIP/xZl0=\");\n_c = Slider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvaG9tZS9TbGlkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUU0QztBQU81QyxNQUFNRSxlQUFlO0lBQ25CO0lBQUc7SUFBRztJQUFHO0lBQUc7Q0FDYjtBQUVELE1BQU1DLFNBQW1CLElBQU07O0lBQzdCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ0ssUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUE7SUFDcEMsTUFBTSxDQUFDTyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQTtJQUNwQyxNQUFNLENBQUNTLHFCQUFxQkMsdUJBQXVCLEdBQUdWLCtDQUFRQSxDQUFDLEtBQUs7SUFDcEUsTUFBTSxDQUFDVyxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUFDLEtBQUs7SUFFOUNELGdEQUFTQSxDQUFDLElBQU07UUFFZCxNQUFNYyxXQUFXLElBQU1aLGFBQWFhLEdBQUcsQ0FBQyxDQUFDQyxLQUFNO2dCQUM3QyxxQkFBTyw4REFBQ0M7b0JBQVdDLFVBQVUsaUJBQWlCRjtvQkFBR0csSUFBSUg7Ozs7OztZQUNyRDtRQUdGLE1BQU1JLFdBQVcsSUFBTWxCLGFBQWFhLEdBQUcsQ0FBQyxDQUFDQyxLQUFNO2dCQUM3QyxxQkFBTyw4REFBQ0s7b0JBQVdILFVBQVUsaUJBQWlCRjtvQkFBR0csSUFBSUg7Ozs7OztZQUNyRDtRQUdGLE1BQU1WLFNBQVNRO1FBRWZSLE9BQU9nQixPQUFPLGVBQUMsOERBQUNMO1lBQVdDLFVBQVUsaUJBQWlCRjtZQUFHRyxJQUFJOzs7Ozs7UUFDN0RiLE9BQU9pQixJQUFJLGVBQUMsOERBQUNOO1lBQVdDLFVBQVUsaUJBQWlCRjtZQUFHRyxJQUFJOzs7Ozs7UUFFMURaLFVBQVVEO1FBQ1ZHLFVBQVVXO0lBRVosR0FBRTtRQUFDaEI7S0FBYTtJQUVoQixNQUFNYSxhQUFtQyxDQUFDTyxRQUFVO1FBQ2xELHFCQUNFLDhEQUFDQztZQUNEQyxXQUFXOzs4QkFHWCw4REFBQ0Q7b0JBQUlDLFdBQVU7Ozs7Ozs4QkFDZiw4REFBQ0Q7b0JBQUlDLFdBQVU7Ozs7Ozs7V0FIVkYsTUFBTU4sUUFBUTs7Ozs7SUFNdkI7SUFFQSxNQUFNRyxhQUFtQyxDQUFDRyxRQUFVO1FBQ2xELHFCQUNFLDhEQUFDRztZQUNDQyxTQUFTLFVBQVVKLE1BQU1OLFFBQVE7WUFDakNRLFdBQVcsNEdBT0MsT0FGVnRCLGlCQUFpQm9CLE1BQU1OLFFBQVEsR0FDakMseURBQ0EsV0FBVztZQUNYQyxJQUFJLFVBQVVLLE1BQU1OLFFBQVE7WUFDNUJXLFNBQVMsSUFBTXhCLGdCQUFnQm1CLE1BQU1OLFFBQVE7Ozs7OztJQUduRDtJQUdGLGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEMsK0JBQStCO0lBRS9CLGlDQUFpQztJQUNqQywrQkFBK0I7SUFDL0IsMkJBQTJCO0lBRXpCLFNBQVNZLFlBQVlOLEtBQXVCLEVBQUU7UUFFNUNPLFdBQVcsSUFBTTtZQUNmcEIsdUJBQXVCLElBQUk7UUFDN0IsR0FBRztRQUNIb0IsV0FBVyxJQUFNO1lBQ2ZwQix1QkFBdUIsS0FBSztRQUM5QixHQUFHO1FBRUgsSUFBSWEsVUFBVSxTQUFTO1lBQ3JCbkIsZ0JBQWdCO1lBQ2hCMEIsV0FBVyxJQUFNO2dCQUNmMUIsZ0JBQWdCO1lBQ2xCLEdBQUc7UUFFTCxPQUFPO1lBQ0xBLGdCQUFnQjtZQUNoQjBCLFdBQVcsSUFBTTtnQkFDZjFCLGdCQUFnQjtZQUNsQixHQUFHO1FBRUwsQ0FBQztJQUNIO0lBRUEsU0FBUzJCLFlBQVlSLEtBQXVCLEVBQUU7UUFFNUMsSUFBSVosVUFBVTtZQUNaO1FBQ0YsQ0FBQztRQUVELE9BQU9ZO1lBRUwsS0FBSztnQkFDSHBCLGVBQWUsSUFDZkMsZ0JBQWdCRCxlQUFlLEtBQy9CMEIsWUFBWSxPQUFPO2dCQUNuQixLQUFNO1lBRVIsS0FBSztnQkFDSDFCLGVBQWUsSUFDZkMsZ0JBQWdCRCxlQUFlLEtBQy9CMEIsWUFBWSxRQUFRO1FBQ3hCO1FBRUFqQixZQUFZLElBQUk7UUFDaEJrQixXQUFXLElBQU1sQixZQUFZLEtBQUssR0FBRztJQUV2QztJQUVBLHFCQUNFO2tCQUNFLDRFQUFDWTtZQUFJQyxXQUFVOzs4QkFDZiw4REFBQ087b0JBQ0NQLFdBQVU7b0JBT1ZHLFNBQVMsSUFBTUcsWUFBWTtvQkFDM0JFLE9BQU07b0JBQ05DLFFBQU87b0JBQ1BDLFNBQVE7b0JBQ1JDLE9BQU07OEJBQ04sNEVBQUNDO3dCQUFLQyxHQUFFOzs7Ozs7Ozs7Ozs4QkFFUiw4REFBQ2Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVywrREFHS2hCLE9BREVBLHNCQUFzQixTQUFTLEtBQUssRUFBQyxvQ0FJekNOLE9BSEVNLHNCQUFzQixNQUFNLEtBQUssRUFBQyxnR0FHdkIsT0FBYk47c0NBRWpCRTs7Ozs7O3NDQUVGLDhEQUFDbUI7NEJBQUlDLFdBQVU7c0NBQ1psQjs7Ozs7Ozs7Ozs7OzhCQUdMLDhEQUFDeUI7b0JBQ0NQLFdBQVU7b0JBT1ZHLFNBQVMsSUFBTUcsWUFBWTtvQkFDM0JFLE9BQU07b0JBQ05DLFFBQU87b0JBQ1BDLFNBQVE7b0JBQ1JDLE9BQU07OEJBQ04sNEVBQUNDO3dCQUFLQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEI7R0F4S01wQztLQUFBQTtBQTBLTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9ob21lL1NsaWRlci50c3g/MjQwZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2Ugc2xpZGVyRWxlbSB7XG4gIGtleVZhbHVlOiBzdHJpbmcsXG4gIGlkOiBudW1iZXIsXG59XG5cbmNvbnN0IHNsaWRlckltYWdlcyA9IFtcbiAgMSwgMiwgMywgNCwgNVxuXVxuXG5jb25zdCBTbGlkZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGVdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZTxKU1guRWxlbWVudFtdPigpO1xuICBjb25zdCBbbGFiZWxzLCBzZXRMYWJlbHNdID0gdXNlU3RhdGU8SlNYLkVsZW1lbnRbXT4oKTtcbiAgY29uc3QgW2lzVHJhbnNpdGlvbkJsb2NrZWQsIHNldElzVHJhbnNpdGlvbkJsb2NrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICBjb25zdCBpbWFnZUFyciA9ICgpID0+IHNsaWRlckltYWdlcy5tYXAoKHgpID0+IHtcbiAgICAgIHJldHVybig8SW1hZ2VTbGlkZSBrZXlWYWx1ZT17J2ltYWdlLXNsaWRlLScgKyB4fSBpZD17eH0gLz4pXG4gICAgICB9XG4gICAgKVxuICBcbiAgICBjb25zdCBsYWJlbEFyciA9ICgpID0+IHNsaWRlckltYWdlcy5tYXAoKHgpID0+IHtcbiAgICAgIHJldHVybig8U2xpZGVMYWJlbCBrZXlWYWx1ZT17J2xhYmVsLXNsaWRlLScgKyB4fSBpZD17eH0gLz4pXG4gICAgICB9XG4gICAgKVxuXG4gICAgY29uc3QgaW1hZ2VzID0gaW1hZ2VBcnIoKVxuXG4gICAgaW1hZ2VzLnVuc2hpZnQoPEltYWdlU2xpZGUga2V5VmFsdWU9eydpbWFnZS1zbGlkZS0nICsgeH0gaWQ9ezV9IC8+KVxuICAgIGltYWdlcy5wdXNoKDxJbWFnZVNsaWRlIGtleVZhbHVlPXsnbGFiZWwtc2xpZGUtJyArIHh9IGlkPXswfSAvPilcblxuICAgIHNldEltYWdlcyhpbWFnZXMpXG4gICAgc2V0TGFiZWxzKGxhYmVsQXJyKCkpXG5cbiAgfSxbY3VycmVudFNsaWRlXSlcbiAgXG4gIGNvbnN0IEltYWdlU2xpZGU6IFJlYWN0LkZDPHNsaWRlckVsZW0+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBcbiAgICAgIGNsYXNzTmFtZT17J2ZsZXggZmxleC1yb3cgbWluLXctWzYwMHB4XSBoLVs0MDBweF0nfVxuICAgICAga2V5PXtwcm9wcy5rZXlWYWx1ZX1cbiAgICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkLTQwMCB3LTEvMiBtaW4taC1mdWxsXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXllbGxvdy0zMDAgdy0xLzIgbWluLWgtZnVsbFwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICBcbiAgY29uc3QgU2xpZGVMYWJlbDogUmVhY3QuRkM8c2xpZGVyRWxlbT4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICA8bGFiZWwgXG4gICAgICAgIGh0bWxGb3I9eydyYWRpbycgKyBwcm9wcy5rZXlWYWx1ZX0gXG4gICAgICAgIGNsYXNzTmFtZT17YFxuICAgICAgICBpbmxpbmUtYmxvY2sgXG4gICAgICAgIHctMiBtaW4taC1bOHB4XSBcbiAgICAgICAgcm91bmRlZC1mdWxsIFxuICAgICAgaG92ZXI6YmctYmFzZS0xXG4gICAgICAgICR7Y3VycmVudFNsaWRlID09PSBwcm9wcy5rZXlWYWx1ZSA/IFxuICAgICAgICAnYmctYmFzZS0xIGFuaW1hdGUtW3NsaWRlcl8wLjNzX2Vhc2UtaW4tb3V0X2ZvcndhcmRzXScgOiBcbiAgICAgICAgJ2JnLWJhc2UtMyd9YH1cbiAgICAgICAgaWQ9eydyYWRpbycgKyBwcm9wcy5rZXlWYWx1ZX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudFNsaWRlKHByb3BzLmtleVZhbHVlKX1cbiAgICAgICAgPjwvbGFiZWw+XG4gICAgICApXG4gIH1cblxuXG4vLyBjb25zdCBpbWFnZUZpcnN0ID0gaW1hZ2VBcnJbLTFdXG4vLyBjb25zdCBpbWFnZUZpcnN0ID0gaW1hZ2VBcnJbLTFdXG4vLyBpbWFnZUFyci51bnNoaWZ0KGltYWdlRmlyc3QpXG5cbi8vIGNvbnN0IGltYWdlTGFzdCAgPSBpbWFnZUFyclsxXVxuLy8gaW1hZ2VMYXN0LmtleSA9ICdsYXN0LXNsaWRlJ1xuLy8gaW1hZ2VBcnIucHVzaChpbWFnZUxhc3QpXG5cbiAgZnVuY3Rpb24gcmVzZXRTbGlkZXIocHJvcHM6ICdmaXJzdCcgfCAnbGFzdCcpIHtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNUcmFuc2l0aW9uQmxvY2tlZCh0cnVlKTtcbiAgICB9LCAzMDApXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRJc1RyYW5zaXRpb25CbG9ja2VkKGZhbHNlKTtcbiAgICB9LCA1MDApXG5cbiAgICBpZiAocHJvcHMgPT09ICdmaXJzdCcpIHtcbiAgICAgIHNldEN1cnJlbnRTbGlkZSg2KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50U2xpZGUoMSk7XG4gICAgICB9LCAzMDApXG5cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q3VycmVudFNsaWRlKDApO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRTbGlkZSg1KTtcbiAgICAgIH0sIDMwMClcblxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKHByb3BzOiAnbGVmdCcgfCAncmlnaHQnKSB7XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHN3aXRjaChwcm9wcykge1xuXG4gICAgICBjYXNlICdsZWZ0JzogXG4gICAgICAgIGN1cnJlbnRTbGlkZSA+IDEgPyBcbiAgICAgICAgc2V0Q3VycmVudFNsaWRlKGN1cnJlbnRTbGlkZSAtIDEpIDogXG4gICAgICAgIHJlc2V0U2xpZGVyKCdsYXN0Jyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdyaWdodCc6IFxuICAgICAgICBjdXJyZW50U2xpZGUgPCA1ID8gXG4gICAgICAgIHNldEN1cnJlbnRTbGlkZShjdXJyZW50U2xpZGUgKyAxKSA6IFxuICAgICAgICByZXNldFNsaWRlcignZmlyc3QnKTtcbiAgICB9XG5cbiAgICBzZXREaXNhYmxlZCh0cnVlKVxuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0RGlzYWJsZWQoZmFsc2UpLCA1MDApXG4gICAgXG4gIH1cblxuICByZXR1cm4oXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxzdmcgXG4gICAgICAgIGNsYXNzTmFtZT1cIlxuICAgICAgICAgIGZpbGwtYmFzZS0zIFxuICAgICAgICAgIGN1cnNvci1wb2ludGVyIFxuICAgICAgICAgIGR1cmF0aW9uLTE1MCBcbiAgICAgICAgICBlYXNlLWluLW91dCBcbiAgICAgICAgICBob3ZlcjpmaWxsLWJhc2UtMSBcbiAgICAgICAgICBob3ZlcjpzY2FsZS0xMjVcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygnbGVmdCcpfVxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgXG4gICAgICAgIGhlaWdodD1cIjQ4XCIgXG4gICAgICAgIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIiBcbiAgICAgICAgd2lkdGg9XCI0OFwiPlxuICAgICAgICA8cGF0aCBkPVwiTTU2MSA4MTYgMzIwIDU3NWwyNDEtMjQxIDQzIDQzLTE5OCAxOTggMTk4IDE5OC00MyA0M1pcIi8+XG4gICAgICA8L3N2Zz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHctWzYwMHB4XSBoLVs0MDBweF0gcm91bmRlZC0yeGwgei0wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BcbiAgICAgICAgICAgICAgICAgICAgZmxleCBcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi0ke2lzVHJhbnNpdGlvbkJsb2NrZWQgPyAnbm9uZScgOiAnYWxsJ30gXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uLSR7aXNUcmFuc2l0aW9uQmxvY2tlZCA/ICcwJyA6ICczMDAnfVxuICAgICAgICAgICAgICAgICAgICB3LVs2MDBweF0gXG4gICAgICAgICAgICAgICAgICAgIGgtWzQwMHB4XVxuICAgICAgICAgICAgICAgICAgICBzbGlkZXItJHtjdXJyZW50U2xpZGV9YFxuICAgICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAge2ltYWdlc31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0zIGZsZXggZ2FwLTMganVzdGlmeS1jZW50ZXIgdy1bNjAwcHhdXCI+XG4gICAgICAgICAgICB7bGFiZWxzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN2ZyBcbiAgICAgICAgICBjbGFzc05hbWU9XCJcbiAgICAgICAgICAgIGZpbGwtYmFzZS0zIFxuICAgICAgICAgICAgY3Vyc29yLXBvaW50ZXIgXG4gICAgICAgICAgICBkdXJhdGlvbi0xNTAgXG4gICAgICAgICAgICBlYXNlLWluLW91dCBcbiAgICAgICAgICAgIGhvdmVyOmZpbGwtYmFzZS0xIFxuICAgICAgICAgICAgaG92ZXI6c2NhbGUtMTI1XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygncmlnaHQnKX1cbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgXG4gICAgICAgICAgaGVpZ2h0PVwiNDhcIiBcbiAgICAgICAgICB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCIgXG4gICAgICAgICAgd2lkdGg9XCI0OFwiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJtMzc1IDgxNi00My00MyAxOTgtMTk4LTE5OC0xOTggNDMtNDMgMjQxIDI0MS0yNDEgMjQxWlwiLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXIiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzbGlkZXJJbWFnZXMiLCJTbGlkZXIiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJsYWJlbHMiLCJzZXRMYWJlbHMiLCJpc1RyYW5zaXRpb25CbG9ja2VkIiwic2V0SXNUcmFuc2l0aW9uQmxvY2tlZCIsImRpc2FibGVkIiwic2V0RGlzYWJsZWQiLCJpbWFnZUFyciIsIm1hcCIsIngiLCJJbWFnZVNsaWRlIiwia2V5VmFsdWUiLCJpZCIsImxhYmVsQXJyIiwiU2xpZGVMYWJlbCIsInVuc2hpZnQiLCJwdXNoIiwicHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJvbkNsaWNrIiwicmVzZXRTbGlkZXIiLCJzZXRUaW1lb3V0IiwiaGFuZGxlQ2xpY2siLCJzdmciLCJ4bWxucyIsImhlaWdodCIsInZpZXdCb3giLCJ3aWR0aCIsInBhdGgiLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/components/home/Slider.tsx\n"));

/***/ })

});