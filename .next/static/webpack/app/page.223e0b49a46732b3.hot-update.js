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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst sliderArr = [\n    \"bg-sky-400\",\n    \"bg-red-400\",\n    \"bg-yellow-400\",\n    \"bg-green-400\",\n    \"bg-gray-400\"\n];\nconst Slider = ()=>{\n    _s();\n    const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [isTransitionBlocked, setIsTransitionBlocked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const imageArr = [];\n    const labelArr = [];\n    for(let i = 1; i <= sliderArr.length; i++){\n        imageArr.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex min-w-[600px] h-[400px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-red-400 w-1/2 min-h-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 8\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-yellow-300 w-1/2 min-h-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 8\n                }, undefined)\n            ]\n        }, \"img\" + i, true, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined));\n        labelArr.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            htmlFor: \"radio\" + i,\n            className: \"\\n                      inline-block \\n                      w-2 min-h-[8px] \\n                      rounded-full \\n                      hover:bg-base-1\\n                      \".concat(currentSlide === i ? \"bg-base-1 animate-[slider_0.3s_ease-in-out_forwards]\" : \"bg-base-3\"),\n            onClick: ()=>setCurrentSlide(i)\n        }, \"radio\" + i, false, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 30,\n            columnNumber: 19\n        }, undefined));\n    }\n    // aadding \n    imageArr.unshift(imageArr[-1]);\n    imageArr.push(imageArr[1]);\n    function resetSlider(props) {\n        setTimeout(()=>{\n            setIsTransitionBlocked(true);\n        }, 300);\n        setTimeout(()=>{\n            setIsTransitionBlocked(false);\n        }, 500);\n        if (props === \"first\") {\n            setCurrentSlide(6);\n            setTimeout(()=>{\n                setCurrentSlide(1);\n            }, 300);\n        } else {\n            setCurrentSlide(0);\n            setTimeout(()=>{\n                setCurrentSlide(5);\n            }, 300);\n        }\n    }\n    function handleClick(props) {\n        if (disabled) {\n            return;\n        }\n        switch(props){\n            case \"left\":\n                currentSlide > 1 ? setCurrentSlide(currentSlide - 1) : resetSlider(\"last\");\n                break;\n            case \"right\":\n                currentSlide < 5 ? setCurrentSlide(currentSlide + 1) : resetSlider(\"first\");\n        }\n        setDisabled(true);\n        setTimeout(()=>setDisabled(false), 500);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \" fill-base-3  cursor-pointer  duration-150  ease-in-out  hover:fill-base-1  hover:scale-125\",\n                    onClick: ()=>handleClick(\"left\"),\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    height: \"48\",\n                    viewBox: \"0 96 960 960\",\n                    width: \"48\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container relative overflow-hidden w-[600px] h-[400px] rounded-2xl z-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\\n                    flex \\n                    transition-\".concat(isTransitionBlocked ? \"none\" : \"all\", \" \\n                    duration-\").concat(isTransitionBlocked ? \"0\" : \"300\", \"\\n                    w-[600px] \\n                    h-[400px]\\n                    slider-\").concat(currentSlide),\n                            children: imageArr\n                        }, void 0, false, {\n                            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bottom-3 flex gap-3 justify-center w-[600px]\",\n                            children: labelArr\n                        }, void 0, false, {\n                            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                            lineNumber: 128,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 117,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \" fill-base-3  cursor-pointer  duration-150  ease-in-out  hover:fill-base-1  hover:scale-125\",\n                    onClick: ()=>handleClick(\"right\"),\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    height: \"48\",\n                    viewBox: \"0 96 960 960\",\n                    width: \"48\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                        lineNumber: 145,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 132,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 101,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Slider, \"Kyc0HW1TDLGBtRy6AofgfQTw3qk=\");\n_c = Slider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvaG9tZS9TbGlkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUVpQztBQUVqQyxNQUFNQyxZQUFZO0lBQ2hCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRDtBQUVELE1BQU1DLFNBQW1CLElBQU07O0lBQzdCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ0sscUJBQXFCQyx1QkFBdUIsR0FBR04sK0NBQVFBLENBQUMsS0FBSztJQUNwRSxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUU5QyxNQUFNUyxXQUFXLEVBQUU7SUFDbkIsTUFBTUMsV0FBVyxFQUFFO0lBRW5CLElBQUssSUFBSUMsSUFBSSxHQUFHQSxLQUFLVixVQUFVVyxNQUFNLEVBQUVELElBQUs7UUFDMUNGLFNBQVNJLElBQUksZUFDWCw4REFBQ0M7WUFDQ0MsV0FBVzs7OEJBR1osOERBQUNEO29CQUFJQyxXQUFVOzs7Ozs7OEJBQ2YsOERBQUNEO29CQUFJQyxXQUFVOzs7Ozs7O1dBSFQsUUFBUUo7Ozs7O1FBS2pCRCxTQUFTRyxJQUFJLGVBQUMsOERBQUNHO1lBQ0NDLFNBQVMsVUFBVU47WUFDbkJJLFdBQVcsb0xBT0ssT0FGWlosaUJBQWlCUSxJQUNqQix5REFDQSxXQUFXO1lBRWZPLFNBQVMsSUFBTWQsZ0JBQWdCTztXQUQxQixVQUFVQTs7Ozs7SUFJakM7SUFFRixXQUFXO0lBQ1hGLFNBQVNVLE9BQU8sQ0FBQ1YsUUFBUSxDQUFDLENBQUMsRUFBRTtJQUM3QkEsU0FBU0ksSUFBSSxDQUFDSixRQUFRLENBQUMsRUFBRTtJQUV2QixTQUFTVyxZQUFZQyxLQUF1QixFQUFFO1FBRTVDQyxXQUFXLElBQU07WUFDZmhCLHVCQUF1QixJQUFJO1FBQzdCLEdBQUc7UUFDSGdCLFdBQVcsSUFBTTtZQUNmaEIsdUJBQXVCLEtBQUs7UUFDOUIsR0FBRztRQUVILElBQUllLFVBQVUsU0FBUztZQUNyQmpCLGdCQUFnQjtZQUNoQmtCLFdBQVcsSUFBTTtnQkFDZmxCLGdCQUFnQjtZQUNsQixHQUFHO1FBRUwsT0FBTztZQUNMQSxnQkFBZ0I7WUFDaEJrQixXQUFXLElBQU07Z0JBQ2ZsQixnQkFBZ0I7WUFDbEIsR0FBRztRQUVMLENBQUM7SUFDSDtJQUVBLFNBQVNtQixZQUFZRixLQUF1QixFQUFFO1FBRTVDLElBQUlkLFVBQVU7WUFDWjtRQUNGLENBQUM7UUFFRCxPQUFPYztZQUVMLEtBQUs7Z0JBQ0hsQixlQUFlLElBQ2ZDLGdCQUFnQkQsZUFBZSxLQUMvQmlCLFlBQVksT0FBTztnQkFDbkIsS0FBTTtZQUVSLEtBQUs7Z0JBQ0hqQixlQUFlLElBQ2ZDLGdCQUFnQkQsZUFBZSxLQUMvQmlCLFlBQVksUUFBUTtRQUN4QjtRQUVBWixZQUFZLElBQUk7UUFDaEJjLFdBQVcsSUFBTWQsWUFBWSxLQUFLLEdBQUc7SUFFdkM7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ007WUFBSUMsV0FBVTs7OEJBQ2YsOERBQUNTO29CQUNDVCxXQUFVO29CQU9WRyxTQUFTLElBQU1LLFlBQVk7b0JBQzNCRSxPQUFNO29CQUNOQyxRQUFPO29CQUNQQyxTQUFRO29CQUNSQyxPQUFNOzhCQUNOLDRFQUFDQzt3QkFBS0MsR0FBRTs7Ozs7Ozs7Ozs7OEJBRVIsOERBQUNoQjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFXLCtEQUdLVixPQURFQSxzQkFBc0IsU0FBUyxLQUFLLEVBQUMsb0NBSXpDRixPQUhFRSxzQkFBc0IsTUFBTSxLQUFLLEVBQUMsZ0dBR3ZCLE9BQWJGO3NDQUVqQk07Ozs7OztzQ0FFRiw4REFBQ0s7NEJBQUlDLFdBQVU7c0NBQ1pMOzs7Ozs7Ozs7Ozs7OEJBR0wsOERBQUNjO29CQUNDVCxXQUFVO29CQU9WRyxTQUFTLElBQU1LLFlBQVk7b0JBQzNCRSxPQUFNO29CQUNOQyxRQUFPO29CQUNQQyxTQUFRO29CQUNSQyxPQUFNOzhCQUNOLDRFQUFDQzt3QkFBS0MsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xCO0dBeklNNUI7S0FBQUE7QUEySU4sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvaG9tZS9TbGlkZXIudHN4PzI0MGYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHNsaWRlckFyciA9IFtcbiAgJ2JnLXNreS00MDAnLFxuICAnYmctcmVkLTQwMCcsXG4gICdiZy15ZWxsb3ctNDAwJyxcbiAgJ2JnLWdyZWVuLTQwMCcsXG4gICdiZy1ncmF5LTQwMCcsXG5dXG5cbmNvbnN0IFNsaWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW2lzVHJhbnNpdGlvbkJsb2NrZWQsIHNldElzVHJhbnNpdGlvbkJsb2NrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBpbWFnZUFyciA9IFtdO1xuICBjb25zdCBsYWJlbEFyciA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHNsaWRlckFyci5sZW5ndGg7IGkrKykge1xuICAgIGltYWdlQXJyLnB1c2goXG4gICAgICA8ZGl2IFxuICAgICAgICBjbGFzc05hbWU9eydmbGV4IG1pbi13LVs2MDBweF0gaC1bNDAwcHhdJ31cbiAgICAgICAga2V5PXsnaW1nJyArIGl9XG4gICAgICA+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtNDAwIHctMS8yIG1pbi1oLWZ1bGxcIj48L2Rpdj5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXllbGxvdy0zMDAgdy0xLzIgbWluLWgtZnVsbFwiPjwvZGl2PlxuICAgICAgPC9kaXY+KVxuICAgIGxhYmVsQXJyLnB1c2goPGxhYmVsIFxuICAgICAgICAgICAgICAgICAgICBodG1sRm9yPXsncmFkaW8nICsgaX0gXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YFxuICAgICAgICAgICAgICAgICAgICAgIGlubGluZS1ibG9jayBcbiAgICAgICAgICAgICAgICAgICAgICB3LTIgbWluLWgtWzhweF0gXG4gICAgICAgICAgICAgICAgICAgICAgcm91bmRlZC1mdWxsIFxuICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOmJnLWJhc2UtMVxuICAgICAgICAgICAgICAgICAgICAgICR7Y3VycmVudFNsaWRlID09PSBpID8gXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmctYmFzZS0xIGFuaW1hdGUtW3NsaWRlcl8wLjNzX2Vhc2UtaW4tb3V0X2ZvcndhcmRzXScgOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICdiZy1iYXNlLTMnfWB9XG4gICAgICAgICAgICAgICAgICAgIGtleT17J3JhZGlvJyArIGl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRTbGlkZShpKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+KVxuICB9XG5cbi8vIGFhZGRpbmcgXG5pbWFnZUFyci51bnNoaWZ0KGltYWdlQXJyWy0xXSlcbmltYWdlQXJyLnB1c2goaW1hZ2VBcnJbMV0pXG5cbiAgZnVuY3Rpb24gcmVzZXRTbGlkZXIocHJvcHM6ICdmaXJzdCcgfCAnbGFzdCcpIHtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNUcmFuc2l0aW9uQmxvY2tlZCh0cnVlKTtcbiAgICB9LCAzMDApXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRJc1RyYW5zaXRpb25CbG9ja2VkKGZhbHNlKTtcbiAgICB9LCA1MDApXG5cbiAgICBpZiAocHJvcHMgPT09ICdmaXJzdCcpIHtcbiAgICAgIHNldEN1cnJlbnRTbGlkZSg2KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50U2xpZGUoMSk7XG4gICAgICB9LCAzMDApXG5cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q3VycmVudFNsaWRlKDApO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRTbGlkZSg1KTtcbiAgICAgIH0sIDMwMClcblxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKHByb3BzOiAnbGVmdCcgfCAncmlnaHQnKSB7XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHN3aXRjaChwcm9wcykge1xuXG4gICAgICBjYXNlICdsZWZ0JzogXG4gICAgICAgIGN1cnJlbnRTbGlkZSA+IDEgPyBcbiAgICAgICAgc2V0Q3VycmVudFNsaWRlKGN1cnJlbnRTbGlkZSAtIDEpIDogXG4gICAgICAgIHJlc2V0U2xpZGVyKCdsYXN0Jyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdyaWdodCc6IFxuICAgICAgICBjdXJyZW50U2xpZGUgPCA1ID8gXG4gICAgICAgIHNldEN1cnJlbnRTbGlkZShjdXJyZW50U2xpZGUgKyAxKSA6IFxuICAgICAgICByZXNldFNsaWRlcignZmlyc3QnKTtcbiAgICB9XG5cbiAgICBzZXREaXNhYmxlZCh0cnVlKVxuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0RGlzYWJsZWQoZmFsc2UpLCA1MDApXG4gICAgXG4gIH1cblxuICByZXR1cm4oXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxzdmcgXG4gICAgICAgIGNsYXNzTmFtZT1cIlxuICAgICAgICAgIGZpbGwtYmFzZS0zIFxuICAgICAgICAgIGN1cnNvci1wb2ludGVyIFxuICAgICAgICAgIGR1cmF0aW9uLTE1MCBcbiAgICAgICAgICBlYXNlLWluLW91dCBcbiAgICAgICAgICBob3ZlcjpmaWxsLWJhc2UtMSBcbiAgICAgICAgICBob3ZlcjpzY2FsZS0xMjVcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygnbGVmdCcpfVxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgXG4gICAgICAgIGhlaWdodD1cIjQ4XCIgXG4gICAgICAgIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIiBcbiAgICAgICAgd2lkdGg9XCI0OFwiPlxuICAgICAgICA8cGF0aCBkPVwiTTU2MSA4MTYgMzIwIDU3NWwyNDEtMjQxIDQzIDQzLTE5OCAxOTggMTk4IDE5OC00MyA0M1pcIi8+XG4gICAgICA8L3N2Zz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHctWzYwMHB4XSBoLVs0MDBweF0gcm91bmRlZC0yeGwgei0wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BcbiAgICAgICAgICAgICAgICAgICAgZmxleCBcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi0ke2lzVHJhbnNpdGlvbkJsb2NrZWQgPyAnbm9uZScgOiAnYWxsJ30gXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uLSR7aXNUcmFuc2l0aW9uQmxvY2tlZCA/ICcwJyA6ICczMDAnfVxuICAgICAgICAgICAgICAgICAgICB3LVs2MDBweF0gXG4gICAgICAgICAgICAgICAgICAgIGgtWzQwMHB4XVxuICAgICAgICAgICAgICAgICAgICBzbGlkZXItJHtjdXJyZW50U2xpZGV9YFxuICAgICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAge2ltYWdlQXJyfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTMgZmxleCBnYXAtMyBqdXN0aWZ5LWNlbnRlciB3LVs2MDBweF1cIj5cbiAgICAgICAgICAgIHtsYWJlbEFycn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdmcgXG4gICAgICAgICAgY2xhc3NOYW1lPVwiXG4gICAgICAgICAgICBmaWxsLWJhc2UtMyBcbiAgICAgICAgICAgIGN1cnNvci1wb2ludGVyIFxuICAgICAgICAgICAgZHVyYXRpb24tMTUwIFxuICAgICAgICAgICAgZWFzZS1pbi1vdXQgXG4gICAgICAgICAgICBob3ZlcjpmaWxsLWJhc2UtMSBcbiAgICAgICAgICAgIGhvdmVyOnNjYWxlLTEyNVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soJ3JpZ2h0Jyl9XG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIFxuICAgICAgICAgIGhlaWdodD1cIjQ4XCIgXG4gICAgICAgICAgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiIFxuICAgICAgICAgIHdpZHRoPVwiNDhcIj5cbiAgICAgICAgICA8cGF0aCBkPVwibTM3NSA4MTYtNDMtNDMgMTk4LTE5OC0xOTgtMTk4IDQzLTQzIDI0MSAyNDEtMjQxIDI0MVpcIi8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic2xpZGVyQXJyIiwiU2xpZGVyIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwiaXNUcmFuc2l0aW9uQmxvY2tlZCIsInNldElzVHJhbnNpdGlvbkJsb2NrZWQiLCJkaXNhYmxlZCIsInNldERpc2FibGVkIiwiaW1hZ2VBcnIiLCJsYWJlbEFyciIsImkiLCJsZW5ndGgiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJodG1sRm9yIiwib25DbGljayIsInVuc2hpZnQiLCJyZXNldFNsaWRlciIsInByb3BzIiwic2V0VGltZW91dCIsImhhbmRsZUNsaWNrIiwic3ZnIiwieG1sbnMiLCJoZWlnaHQiLCJ2aWV3Qm94Iiwid2lkdGgiLCJwYXRoIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/components/home/Slider.tsx\n"));

/***/ })

});