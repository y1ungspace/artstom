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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst sliderImages = [\n    1,\n    2,\n    3,\n    4,\n    5\n];\nconst Slider = ()=>{\n    _s();\n    const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [labels, setLabels] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [isTransitionBlocked, setIsTransitionBlocked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const imageArr = ()=>sliderImages.map((x1)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageSlide, {\n                    keyValue: \"image-slide-\" + x1,\n                    id: x1\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 14\n                }, undefined);\n            });\n        const labelArr = ()=>sliderImages.map((x1)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SlideLabel, {\n                    keyValue: \"label-slide-\" + x1,\n                    id: x1\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 14\n                }, undefined);\n            });\n        const images = imageArr();\n        images.unshift(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageSlide, {\n            keyValue: \"image-slide-\" + x,\n            id: x\n        }, void 0, false, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 35,\n            columnNumber: 20\n        }, undefined));\n        images.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageSlide, {\n            keyValue: \"label-slide-\" + x,\n            id: x\n        }, void 0, false, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 36,\n            columnNumber: 17\n        }, undefined));\n        setImages(images);\n        setLabels(labelArr());\n    }, [\n        currentSlide\n    ]);\n    const ImageSlide = (props)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row min-w-[600px] h-[400px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-red-400 w-1/2 min-h-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-yellow-300 w-1/2 min-h-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, props.keyValue, true, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, undefined);\n    };\n    const SlideLabel = (props)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            htmlFor: \"radio\" + props.keyValue,\n            className: \"\\n        inline-block \\n        w-2 min-h-[8px] \\n        rounded-full \\n      hover:bg-base-1\\n        \".concat(currentSlide === props.keyValue ? \"bg-base-1 animate-[slider_0.3s_ease-in-out_forwards]\" : \"bg-base-3\"),\n            id: \"radio\" + props.keyValue,\n            onClick: ()=>setCurrentSlide(props.keyValue)\n        }, void 0, false, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, undefined);\n    };\n    // const imageFirst = imageArr[-1]\n    // const imageFirst = imageArr[-1]\n    // imageArr.unshift(imageFirst)\n    // const imageLast  = imageArr[1]\n    // imageLast.key = 'last-slide'\n    // imageArr.push(imageLast)\n    function resetSlider(props) {\n        setTimeout(()=>{\n            setIsTransitionBlocked(true);\n        }, 300);\n        setTimeout(()=>{\n            setIsTransitionBlocked(false);\n        }, 500);\n        if (props === \"first\") {\n            setCurrentSlide(6);\n            setTimeout(()=>{\n                setCurrentSlide(1);\n            }, 300);\n        } else {\n            setCurrentSlide(0);\n            setTimeout(()=>{\n                setCurrentSlide(5);\n            }, 300);\n        }\n    }\n    function handleClick(props) {\n        if (disabled) {\n            return;\n        }\n        switch(props){\n            case \"left\":\n                currentSlide > 1 ? setCurrentSlide(currentSlide - 1) : resetSlider(\"last\");\n                break;\n            case \"right\":\n                currentSlide < 5 ? setCurrentSlide(currentSlide + 1) : resetSlider(\"first\");\n        }\n        setDisabled(true);\n        setTimeout(()=>setDisabled(false), 500);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \" fill-base-3  cursor-pointer  duration-150  ease-in-out  hover:fill-base-1  hover:scale-125\",\n                    onClick: ()=>handleClick(\"left\"),\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    height: \"48\",\n                    viewBox: \"0 96 960 960\",\n                    width: \"48\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                        lineNumber: 147,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 134,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container relative overflow-hidden w-[600px] h-[400px] rounded-2xl z-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\\n                    flex \\n                    transition-\".concat(isTransitionBlocked ? \"none\" : \"all\", \" \\n                    duration-\").concat(isTransitionBlocked ? \"0\" : \"300\", \"\\n                    w-[600px] \\n                    h-[400px]\\n                    slider-\").concat(currentSlide),\n                            children: images\n                        }, void 0, false, {\n                            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                            lineNumber: 150,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bottom-3 flex gap-3 justify-center w-[600px]\",\n                            children: labels\n                        }, void 0, false, {\n                            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                            lineNumber: 160,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 149,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \" fill-base-3  cursor-pointer  duration-150  ease-in-out  hover:fill-base-1  hover:scale-125\",\n                    onClick: ()=>handleClick(\"right\"),\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    height: \"48\",\n                    viewBox: \"0 96 960 960\",\n                    width: \"48\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                        lineNumber: 177,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 164,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 133,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Slider, \"LB2TQIcUu4MSfXgP+6yDIP/xZl0=\");\n_c = Slider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvaG9tZS9TbGlkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUU0QztBQU81QyxNQUFNRSxlQUFlO0lBQ25CO0lBQUc7SUFBRztJQUFHO0lBQUc7Q0FDYjtBQUVELE1BQU1DLFNBQW1CLElBQU07O0lBQzdCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ0ssUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUE7SUFDcEMsTUFBTSxDQUFDTyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQTtJQUNwQyxNQUFNLENBQUNTLHFCQUFxQkMsdUJBQXVCLEdBQUdWLCtDQUFRQSxDQUFDLEtBQUs7SUFDcEUsTUFBTSxDQUFDVyxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUFDLEtBQUs7SUFFOUNELGdEQUFTQSxDQUFDLElBQU07UUFFZCxNQUFNYyxXQUFXLElBQU1aLGFBQWFhLEdBQUcsQ0FBQyxDQUFDQyxLQUFNO2dCQUM3QyxxQkFBTyw4REFBQ0M7b0JBQVdDLFVBQVUsaUJBQWlCRjtvQkFBR0csSUFBSUg7Ozs7OztZQUNyRDtRQUdGLE1BQU1JLFdBQVcsSUFBTWxCLGFBQWFhLEdBQUcsQ0FBQyxDQUFDQyxLQUFNO2dCQUM3QyxxQkFBTyw4REFBQ0s7b0JBQVdILFVBQVUsaUJBQWlCRjtvQkFBR0csSUFBSUg7Ozs7OztZQUNyRDtRQUdGLE1BQU1WLFNBQVNRO1FBRWZSLE9BQU9nQixPQUFPLGVBQUMsOERBQUNMO1lBQVdDLFVBQVUsaUJBQWlCRjtZQUFHRyxJQUFJSDs7Ozs7O1FBQzdEVixPQUFPaUIsSUFBSSxlQUFDLDhEQUFDTjtZQUFXQyxVQUFVLGlCQUFpQkY7WUFBR0csSUFBSUg7Ozs7OztRQUUxRFQsVUFBVUQ7UUFDVkcsVUFBVVc7SUFFWixHQUFFO1FBQUNoQjtLQUFhO0lBRWhCLE1BQU1hLGFBQW1DLENBQUNPLFFBQVU7UUFDbEQscUJBQ0UsOERBQUNDO1lBQ0RDLFdBQVc7OzhCQUdYLDhEQUFDRDtvQkFBSUMsV0FBVTs7Ozs7OzhCQUNmLDhEQUFDRDtvQkFBSUMsV0FBVTs7Ozs7OztXQUhWRixNQUFNTixRQUFROzs7OztJQU12QjtJQUVBLE1BQU1HLGFBQW1DLENBQUNHLFFBQVU7UUFDbEQscUJBQ0UsOERBQUNHO1lBQ0NDLFNBQVMsVUFBVUosTUFBTU4sUUFBUTtZQUNqQ1EsV0FBVyw0R0FPQyxPQUZWdEIsaUJBQWlCb0IsTUFBTU4sUUFBUSxHQUNqQyx5REFDQSxXQUFXO1lBQ1hDLElBQUksVUFBVUssTUFBTU4sUUFBUTtZQUM1QlcsU0FBUyxJQUFNeEIsZ0JBQWdCbUIsTUFBTU4sUUFBUTs7Ozs7O0lBR25EO0lBR0Ysa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQywrQkFBK0I7SUFFL0IsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQiwyQkFBMkI7SUFFekIsU0FBU1ksWUFBWU4sS0FBdUIsRUFBRTtRQUU1Q08sV0FBVyxJQUFNO1lBQ2ZwQix1QkFBdUIsSUFBSTtRQUM3QixHQUFHO1FBQ0hvQixXQUFXLElBQU07WUFDZnBCLHVCQUF1QixLQUFLO1FBQzlCLEdBQUc7UUFFSCxJQUFJYSxVQUFVLFNBQVM7WUFDckJuQixnQkFBZ0I7WUFDaEIwQixXQUFXLElBQU07Z0JBQ2YxQixnQkFBZ0I7WUFDbEIsR0FBRztRQUVMLE9BQU87WUFDTEEsZ0JBQWdCO1lBQ2hCMEIsV0FBVyxJQUFNO2dCQUNmMUIsZ0JBQWdCO1lBQ2xCLEdBQUc7UUFFTCxDQUFDO0lBQ0g7SUFFQSxTQUFTMkIsWUFBWVIsS0FBdUIsRUFBRTtRQUU1QyxJQUFJWixVQUFVO1lBQ1o7UUFDRixDQUFDO1FBRUQsT0FBT1k7WUFFTCxLQUFLO2dCQUNIcEIsZUFBZSxJQUNmQyxnQkFBZ0JELGVBQWUsS0FDL0IwQixZQUFZLE9BQU87Z0JBQ25CLEtBQU07WUFFUixLQUFLO2dCQUNIMUIsZUFBZSxJQUNmQyxnQkFBZ0JELGVBQWUsS0FDL0IwQixZQUFZLFFBQVE7UUFDeEI7UUFFQWpCLFlBQVksSUFBSTtRQUNoQmtCLFdBQVcsSUFBTWxCLFlBQVksS0FBSyxHQUFHO0lBRXZDO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNZO1lBQUlDLFdBQVU7OzhCQUNmLDhEQUFDTztvQkFDQ1AsV0FBVTtvQkFPVkcsU0FBUyxJQUFNRyxZQUFZO29CQUMzQkUsT0FBTTtvQkFDTkMsUUFBTztvQkFDUEMsU0FBUTtvQkFDUkMsT0FBTTs4QkFDTiw0RUFBQ0M7d0JBQUtDLEdBQUU7Ozs7Ozs7Ozs7OzhCQUVSLDhEQUFDZDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFXLCtEQUdLaEIsT0FERUEsc0JBQXNCLFNBQVMsS0FBSyxFQUFDLG9DQUl6Q04sT0FIRU0sc0JBQXNCLE1BQU0sS0FBSyxFQUFDLGdHQUd2QixPQUFiTjtzQ0FFakJFOzs7Ozs7c0NBRUYsOERBQUNtQjs0QkFBSUMsV0FBVTtzQ0FDWmxCOzs7Ozs7Ozs7Ozs7OEJBR0wsOERBQUN5QjtvQkFDQ1AsV0FBVTtvQkFPVkcsU0FBUyxJQUFNRyxZQUFZO29CQUMzQkUsT0FBTTtvQkFDTkMsUUFBTztvQkFDUEMsU0FBUTtvQkFDUkMsT0FBTTs4QkFDTiw0RUFBQ0M7d0JBQUtDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQjtHQXhLTXBDO0tBQUFBO0FBMEtOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2hvbWUvU2xpZGVyLnRzeD8yNDBmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBzbGlkZXJFbGVtIHtcbiAga2V5VmFsdWU6IHN0cmluZyxcbiAgaWQ6IG51bWJlcixcbn1cblxuY29uc3Qgc2xpZGVySW1hZ2VzID0gW1xuICAxLCAyLCAzLCA0LCA1XG5dXG5cbmNvbnN0IFNsaWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlPEpTWC5FbGVtZW50W10+KCk7XG4gIGNvbnN0IFtsYWJlbHMsIHNldExhYmVsc10gPSB1c2VTdGF0ZTxKU1guRWxlbWVudFtdPigpO1xuICBjb25zdCBbaXNUcmFuc2l0aW9uQmxvY2tlZCwgc2V0SXNUcmFuc2l0aW9uQmxvY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkaXNhYmxlZCwgc2V0RGlzYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIGNvbnN0IGltYWdlQXJyID0gKCkgPT4gc2xpZGVySW1hZ2VzLm1hcCgoeCkgPT4ge1xuICAgICAgcmV0dXJuKDxJbWFnZVNsaWRlIGtleVZhbHVlPXsnaW1hZ2Utc2xpZGUtJyArIHh9IGlkPXt4fSAvPilcbiAgICAgIH1cbiAgICApXG4gIFxuICAgIGNvbnN0IGxhYmVsQXJyID0gKCkgPT4gc2xpZGVySW1hZ2VzLm1hcCgoeCkgPT4ge1xuICAgICAgcmV0dXJuKDxTbGlkZUxhYmVsIGtleVZhbHVlPXsnbGFiZWwtc2xpZGUtJyArIHh9IGlkPXt4fSAvPilcbiAgICAgIH1cbiAgICApXG5cbiAgICBjb25zdCBpbWFnZXMgPSBpbWFnZUFycigpXG5cbiAgICBpbWFnZXMudW5zaGlmdCg8SW1hZ2VTbGlkZSBrZXlWYWx1ZT17J2ltYWdlLXNsaWRlLScgKyB4fSBpZD17eH0gLz4pXG4gICAgaW1hZ2VzLnB1c2goPEltYWdlU2xpZGUga2V5VmFsdWU9eydsYWJlbC1zbGlkZS0nICsgeH0gaWQ9e3h9IC8+KVxuXG4gICAgc2V0SW1hZ2VzKGltYWdlcylcbiAgICBzZXRMYWJlbHMobGFiZWxBcnIoKSlcblxuICB9LFtjdXJyZW50U2xpZGVdKVxuICBcbiAgY29uc3QgSW1hZ2VTbGlkZTogUmVhY3QuRkM8c2xpZGVyRWxlbT4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IFxuICAgICAgY2xhc3NOYW1lPXsnZmxleCBmbGV4LXJvdyBtaW4tdy1bNjAwcHhdIGgtWzQwMHB4XSd9XG4gICAgICBrZXk9e3Byb3BzLmtleVZhbHVlfVxuICAgICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtNDAwIHctMS8yIG1pbi1oLWZ1bGxcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmcteWVsbG93LTMwMCB3LTEvMiBtaW4taC1mdWxsXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIFxuICBjb25zdCBTbGlkZUxhYmVsOiBSZWFjdC5GQzxzbGlkZXJFbGVtPiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybihcbiAgICAgIDxsYWJlbCBcbiAgICAgICAgaHRtbEZvcj17J3JhZGlvJyArIHByb3BzLmtleVZhbHVlfSBcbiAgICAgICAgY2xhc3NOYW1lPXtgXG4gICAgICAgIGlubGluZS1ibG9jayBcbiAgICAgICAgdy0yIG1pbi1oLVs4cHhdIFxuICAgICAgICByb3VuZGVkLWZ1bGwgXG4gICAgICBob3ZlcjpiZy1iYXNlLTFcbiAgICAgICAgJHtjdXJyZW50U2xpZGUgPT09IHByb3BzLmtleVZhbHVlID8gXG4gICAgICAgICdiZy1iYXNlLTEgYW5pbWF0ZS1bc2xpZGVyXzAuM3NfZWFzZS1pbi1vdXRfZm9yd2FyZHNdJyA6IFxuICAgICAgICAnYmctYmFzZS0zJ31gfVxuICAgICAgICBpZD17J3JhZGlvJyArIHByb3BzLmtleVZhbHVlfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50U2xpZGUocHJvcHMua2V5VmFsdWUpfVxuICAgICAgICA+PC9sYWJlbD5cbiAgICAgIClcbiAgfVxuXG5cbi8vIGNvbnN0IGltYWdlRmlyc3QgPSBpbWFnZUFyclstMV1cbi8vIGNvbnN0IGltYWdlRmlyc3QgPSBpbWFnZUFyclstMV1cbi8vIGltYWdlQXJyLnVuc2hpZnQoaW1hZ2VGaXJzdClcblxuLy8gY29uc3QgaW1hZ2VMYXN0ICA9IGltYWdlQXJyWzFdXG4vLyBpbWFnZUxhc3Qua2V5ID0gJ2xhc3Qtc2xpZGUnXG4vLyBpbWFnZUFyci5wdXNoKGltYWdlTGFzdClcblxuICBmdW5jdGlvbiByZXNldFNsaWRlcihwcm9wczogJ2ZpcnN0JyB8ICdsYXN0Jykge1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRJc1RyYW5zaXRpb25CbG9ja2VkKHRydWUpO1xuICAgIH0sIDMwMClcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldElzVHJhbnNpdGlvbkJsb2NrZWQoZmFsc2UpO1xuICAgIH0sIDUwMClcblxuICAgIGlmIChwcm9wcyA9PT0gJ2ZpcnN0Jykge1xuICAgICAgc2V0Q3VycmVudFNsaWRlKDYpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRTbGlkZSgxKTtcbiAgICAgIH0sIDMwMClcblxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRDdXJyZW50U2xpZGUoMCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFNsaWRlKDUpO1xuICAgICAgfSwgMzAwKVxuXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2socHJvcHM6ICdsZWZ0JyB8ICdyaWdodCcpIHtcblxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc3dpdGNoKHByb3BzKSB7XG5cbiAgICAgIGNhc2UgJ2xlZnQnOiBcbiAgICAgICAgY3VycmVudFNsaWRlID4gMSA/IFxuICAgICAgICBzZXRDdXJyZW50U2xpZGUoY3VycmVudFNsaWRlIC0gMSkgOiBcbiAgICAgICAgcmVzZXRTbGlkZXIoJ2xhc3QnKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3JpZ2h0JzogXG4gICAgICAgIGN1cnJlbnRTbGlkZSA8IDUgPyBcbiAgICAgICAgc2V0Q3VycmVudFNsaWRlKGN1cnJlbnRTbGlkZSArIDEpIDogXG4gICAgICAgIHJlc2V0U2xpZGVyKCdmaXJzdCcpO1xuICAgIH1cblxuICAgIHNldERpc2FibGVkKHRydWUpXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXREaXNhYmxlZChmYWxzZSksIDUwMClcbiAgICBcbiAgfVxuXG4gIHJldHVybihcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPHN2ZyBcbiAgICAgICAgY2xhc3NOYW1lPVwiXG4gICAgICAgICAgZmlsbC1iYXNlLTMgXG4gICAgICAgICAgY3Vyc29yLXBvaW50ZXIgXG4gICAgICAgICAgZHVyYXRpb24tMTUwIFxuICAgICAgICAgIGVhc2UtaW4tb3V0IFxuICAgICAgICAgIGhvdmVyOmZpbGwtYmFzZS0xIFxuICAgICAgICAgIGhvdmVyOnNjYWxlLTEyNVwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCdsZWZ0Jyl9XG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBcbiAgICAgICAgaGVpZ2h0PVwiNDhcIiBcbiAgICAgICAgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiIFxuICAgICAgICB3aWR0aD1cIjQ4XCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNNTYxIDgxNiAzMjAgNTc1bDI0MS0yNDEgNDMgNDMtMTk4IDE5OCAxOTggMTk4LTQzIDQzWlwiLz5cbiAgICAgIDwvc3ZnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gdy1bNjAwcHhdIGgtWzQwMHB4XSByb3VuZGVkLTJ4bCB6LTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YFxuICAgICAgICAgICAgICAgICAgICBmbGV4IFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLSR7aXNUcmFuc2l0aW9uQmxvY2tlZCA/ICdub25lJyA6ICdhbGwnfSBcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24tJHtpc1RyYW5zaXRpb25CbG9ja2VkID8gJzAnIDogJzMwMCd9XG4gICAgICAgICAgICAgICAgICAgIHctWzYwMHB4XSBcbiAgICAgICAgICAgICAgICAgICAgaC1bNDAwcHhdXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlci0ke2N1cnJlbnRTbGlkZX1gXG4gICAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICB7aW1hZ2VzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTMgZmxleCBnYXAtMyBqdXN0aWZ5LWNlbnRlciB3LVs2MDBweF1cIj5cbiAgICAgICAgICAgIHtsYWJlbHN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3ZnIFxuICAgICAgICAgIGNsYXNzTmFtZT1cIlxuICAgICAgICAgICAgZmlsbC1iYXNlLTMgXG4gICAgICAgICAgICBjdXJzb3ItcG9pbnRlciBcbiAgICAgICAgICAgIGR1cmF0aW9uLTE1MCBcbiAgICAgICAgICAgIGVhc2UtaW4tb3V0IFxuICAgICAgICAgICAgaG92ZXI6ZmlsbC1iYXNlLTEgXG4gICAgICAgICAgICBob3ZlcjpzY2FsZS0xMjVcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCdyaWdodCcpfVxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBcbiAgICAgICAgICBoZWlnaHQ9XCI0OFwiIFxuICAgICAgICAgIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIiBcbiAgICAgICAgICB3aWR0aD1cIjQ4XCI+XG4gICAgICAgICAgPHBhdGggZD1cIm0zNzUgODE2LTQzLTQzIDE5OC0xOTgtMTk4LTE5OCA0My00MyAyNDEgMjQxLTI0MSAyNDFaXCIvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlciJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInNsaWRlckltYWdlcyIsIlNsaWRlciIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsImltYWdlcyIsInNldEltYWdlcyIsImxhYmVscyIsInNldExhYmVscyIsImlzVHJhbnNpdGlvbkJsb2NrZWQiLCJzZXRJc1RyYW5zaXRpb25CbG9ja2VkIiwiZGlzYWJsZWQiLCJzZXREaXNhYmxlZCIsImltYWdlQXJyIiwibWFwIiwieCIsIkltYWdlU2xpZGUiLCJrZXlWYWx1ZSIsImlkIiwibGFiZWxBcnIiLCJTbGlkZUxhYmVsIiwidW5zaGlmdCIsInB1c2giLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsIm9uQ2xpY2siLCJyZXNldFNsaWRlciIsInNldFRpbWVvdXQiLCJoYW5kbGVDbGljayIsInN2ZyIsInhtbG5zIiwiaGVpZ2h0Iiwidmlld0JveCIsIndpZHRoIiwicGF0aCIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/home/Slider.tsx\n"));

/***/ })

});