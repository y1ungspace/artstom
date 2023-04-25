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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Slider = ()=>{\n    _s();\n    const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [imageArr, setImageArr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [labelArr, setLabelArr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isTransitionBlocked, setIsTransitionBlocked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        for(let i = 1; i <= sliderArr.length; i++){\n            setImageArr([\n                ...imageArr,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageSlide, {}, imageArr.length, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 32\n                }, undefined)\n            ]);\n        }\n    });\n    const ImageSlide = (props)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex min-w-[600px] h-[400px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-red-400 w-1/2 min-h-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-yellow-300 w-1/2 min-h-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, props.key, true, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, undefined);\n    };\n    const SlideLabel = (props)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            htmlFor: \"radio\" + props.key,\n            className: \"\\n        inline-block \\n        w-2 min-h-[8px] \\n        rounded-full \\n      hover:bg-base-1\\n        \".concat(currentSlide === props.key ? \"bg-base-1 animate-[slider_0.3s_ease-in-out_forwards]\" : \"bg-base-3\"),\n            onClick: ()=>setCurrentSlide(props.key)\n        }, \"radio\" + props.key, false, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined);\n    };\n    // double first and last slide in the ends\n    // const imageFirst = imageArr[-1]\n    // const imageFirst = imageArr[-1]\n    // imageArr.unshift(imageFirst)\n    // const imageLast  = imageArr[1]\n    // imageLast.key = 'last-slide'\n    // imageArr.push(imageLast)\n    function resetSlider(props) {\n        setTimeout(()=>{\n            setIsTransitionBlocked(true);\n        }, 300);\n        setTimeout(()=>{\n            setIsTransitionBlocked(false);\n        }, 500);\n        if (props === \"first\") {\n            setCurrentSlide(6);\n            setTimeout(()=>{\n                setCurrentSlide(1);\n            }, 300);\n        } else {\n            setCurrentSlide(0);\n            setTimeout(()=>{\n                setCurrentSlide(5);\n            }, 300);\n        }\n    }\n    function handleClick(props) {\n        if (disabled) {\n            return;\n        }\n        switch(props){\n            case \"left\":\n                currentSlide > 1 ? setCurrentSlide(currentSlide - 1) : resetSlider(\"last\");\n                break;\n            case \"right\":\n                currentSlide < 5 ? setCurrentSlide(currentSlide + 1) : resetSlider(\"first\");\n        }\n        setDisabled(true);\n        setTimeout(()=>setDisabled(false), 500);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \" fill-base-3  cursor-pointer  duration-150  ease-in-out  hover:fill-base-1  hover:scale-125\",\n                    onClick: ()=>handleClick(\"left\"),\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    height: \"48\",\n                    viewBox: \"0 96 960 960\",\n                    width: \"48\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container relative overflow-hidden w-[600px] h-[400px] rounded-2xl z-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\\n                    flex \\n                    transition-\".concat(isTransitionBlocked ? \"none\" : \"all\", \" \\n                    duration-\").concat(isTransitionBlocked ? \"0\" : \"300\", \"\\n                    w-[600px] \\n                    h-[400px]\\n                    slider-\").concat(currentSlide),\n                            children: imageArr\n                        }, void 0, false, {\n                            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                            lineNumber: 127,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bottom-3 flex gap-3 justify-center w-[600px]\",\n                            children: labelArr\n                        }, void 0, false, {\n                            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                            lineNumber: 137,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 126,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \" fill-base-3  cursor-pointer  duration-150  ease-in-out  hover:fill-base-1  hover:scale-125\",\n                    onClick: ()=>handleClick(\"right\"),\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    height: \"48\",\n                    viewBox: \"0 96 960 960\",\n                    width: \"48\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                        lineNumber: 154,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 141,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 110,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Slider, \"cLUMv9usJHSdJ2VFN5Tt4Mf6ne8=\");\n_c = Slider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvaG9tZS9TbGlkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUU0QztBQUU1QyxNQUFNRSxTQUFtQixJQUFNOztJQUM3QixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHSCwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNJLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQWtCLEVBQUU7SUFDNUQsTUFBTSxDQUFDTSxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFrQixFQUFFO0lBQzVELE1BQU0sQ0FBQ1EscUJBQXFCQyx1QkFBdUIsR0FBR1QsK0NBQVFBLENBQUMsS0FBSztJQUNwRSxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUMsS0FBSztJQUU5Q0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUssSUFBSWEsSUFBSSxHQUFHQSxLQUFLQyxVQUFVQyxNQUFNLEVBQUVGLElBQUs7WUFDMUNQLFlBQVk7bUJBQUlEOzhCQUFTLDhEQUFDVyxnQkFBZ0JYLFNBQVNVLE1BQU07Ozs7O2FBQUs7UUFDaEU7SUFDRjtJQUVBLE1BQU1DLGFBQXlDLENBQUNDLFFBQVU7UUFDeEQscUJBQ0UsOERBQUNDO1lBQ0RDLFdBQVc7OzhCQUdYLDhEQUFDRDtvQkFBSUMsV0FBVTs7Ozs7OzhCQUNmLDhEQUFDRDtvQkFBSUMsV0FBVTs7Ozs7OztXQUhWRixNQUFNRyxHQUFHOzs7OztJQU1sQjtJQUVBLE1BQU1DLGFBQXdDLENBQUNKLFFBQVU7UUFDdkQscUJBQ0UsOERBQUNLO1lBQ0NDLFNBQVMsVUFBVU4sTUFBTUcsR0FBRztZQUM1QkQsV0FBVyw0R0FPQyxPQUZWaEIsaUJBQWlCYyxNQUFNRyxHQUFHLEdBQzVCLHlEQUNBLFdBQVc7WUFFWEksU0FBUyxJQUFNcEIsZ0JBQWdCYSxNQUFNRyxHQUFHO1dBRG5DLFVBQVVILE1BQU1HLEdBQUc7Ozs7O0lBSTlCO0lBR0YsMENBQTBDO0lBRTFDLGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEMsK0JBQStCO0lBRS9CLGlDQUFpQztJQUNqQywrQkFBK0I7SUFDL0IsMkJBQTJCO0lBRXpCLFNBQVNLLFlBQVlSLEtBQXVCLEVBQUU7UUFFNUNTLFdBQVcsSUFBTTtZQUNmaEIsdUJBQXVCLElBQUk7UUFDN0IsR0FBRztRQUNIZ0IsV0FBVyxJQUFNO1lBQ2ZoQix1QkFBdUIsS0FBSztRQUM5QixHQUFHO1FBRUgsSUFBSU8sVUFBVSxTQUFTO1lBQ3JCYixnQkFBZ0I7WUFDaEJzQixXQUFXLElBQU07Z0JBQ2Z0QixnQkFBZ0I7WUFDbEIsR0FBRztRQUVMLE9BQU87WUFDTEEsZ0JBQWdCO1lBQ2hCc0IsV0FBVyxJQUFNO2dCQUNmdEIsZ0JBQWdCO1lBQ2xCLEdBQUc7UUFFTCxDQUFDO0lBQ0g7SUFFQSxTQUFTdUIsWUFBWVYsS0FBdUIsRUFBRTtRQUU1QyxJQUFJTixVQUFVO1lBQ1o7UUFDRixDQUFDO1FBRUQsT0FBT007WUFFTCxLQUFLO2dCQUNIZCxlQUFlLElBQ2ZDLGdCQUFnQkQsZUFBZSxLQUMvQnNCLFlBQVksT0FBTztnQkFDbkIsS0FBTTtZQUVSLEtBQUs7Z0JBQ0h0QixlQUFlLElBQ2ZDLGdCQUFnQkQsZUFBZSxLQUMvQnNCLFlBQVksUUFBUTtRQUN4QjtRQUVBYixZQUFZLElBQUk7UUFDaEJjLFdBQVcsSUFBTWQsWUFBWSxLQUFLLEdBQUc7SUFFdkM7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ007WUFBSUMsV0FBVTs7OEJBQ2YsOERBQUNTO29CQUNDVCxXQUFVO29CQU9WSyxTQUFTLElBQU1HLFlBQVk7b0JBQzNCRSxPQUFNO29CQUNOQyxRQUFPO29CQUNQQyxTQUFRO29CQUNSQyxPQUFNOzhCQUNOLDRFQUFDQzt3QkFBS0MsR0FBRTs7Ozs7Ozs7Ozs7OEJBRVIsOERBQUNoQjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFXLCtEQUdLVixPQURFQSxzQkFBc0IsU0FBUyxLQUFLLEVBQUMsb0NBSXpDTixPQUhFTSxzQkFBc0IsTUFBTSxLQUFLLEVBQUMsZ0dBR3ZCLE9BQWJOO3NDQUVqQkU7Ozs7OztzQ0FFRiw4REFBQ2E7NEJBQUlDLFdBQVU7c0NBQ1paOzs7Ozs7Ozs7Ozs7OEJBR0wsOERBQUNxQjtvQkFDQ1QsV0FBVTtvQkFPVkssU0FBUyxJQUFNRyxZQUFZO29CQUMzQkUsT0FBTTtvQkFDTkMsUUFBTztvQkFDUEMsU0FBUTtvQkFDUkMsT0FBTTs4QkFDTiw0RUFBQ0M7d0JBQUtDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQjtHQTFKTWhDO0tBQUFBO0FBNEpOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2hvbWUvU2xpZGVyLnRzeD8yNDBmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFNsaWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW2ltYWdlQXJyLCBzZXRJbWFnZUFycl0gPSB1c2VTdGF0ZTx7a2V5OiBudW1iZXJ9W10+KFtdKTtcbiAgY29uc3QgW2xhYmVsQXJyLCBzZXRMYWJlbEFycl0gPSB1c2VTdGF0ZTx7a2V5OiBudW1iZXJ9W10+KFtdKTtcbiAgY29uc3QgW2lzVHJhbnNpdGlvbkJsb2NrZWQsIHNldElzVHJhbnNpdGlvbkJsb2NrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHNsaWRlckFyci5sZW5ndGg7IGkrKykge1xuICAgICAgc2V0SW1hZ2VBcnIoWy4uLmltYWdlQXJyLDxJbWFnZVNsaWRlIGtleT17aW1hZ2VBcnIubGVuZ3RofSAvPl0pXG4gICAgfVxuICB9KVxuICBcbiAgY29uc3QgSW1hZ2VTbGlkZTogUmVhY3QuRkM8eyBrZXk6IG51bWJlciB9ID4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IFxuICAgICAgY2xhc3NOYW1lPXsnZmxleCBtaW4tdy1bNjAwcHhdIGgtWzQwMHB4XSd9XG4gICAgICBrZXk9e3Byb3BzLmtleX1cbiAgICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkLTQwMCB3LTEvMiBtaW4taC1mdWxsXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXllbGxvdy0zMDAgdy0xLzIgbWluLWgtZnVsbFwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICBcbiAgY29uc3QgU2xpZGVMYWJlbDogUmVhY3QuRkM8eyBrZXk6IG51bWJlciB9PiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybihcbiAgICAgIDxsYWJlbCBcbiAgICAgICAgaHRtbEZvcj17J3JhZGlvJyArIHByb3BzLmtleX0gXG4gICAgICAgIGNsYXNzTmFtZT17YFxuICAgICAgICBpbmxpbmUtYmxvY2sgXG4gICAgICAgIHctMiBtaW4taC1bOHB4XSBcbiAgICAgICAgcm91bmRlZC1mdWxsIFxuICAgICAgaG92ZXI6YmctYmFzZS0xXG4gICAgICAgICR7Y3VycmVudFNsaWRlID09PSBwcm9wcy5rZXkgPyBcbiAgICAgICAgJ2JnLWJhc2UtMSBhbmltYXRlLVtzbGlkZXJfMC4zc19lYXNlLWluLW91dF9mb3J3YXJkc10nIDogXG4gICAgICAgICdiZy1iYXNlLTMnfWB9XG4gICAgICAgIGtleT17J3JhZGlvJyArIHByb3BzLmtleX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudFNsaWRlKHByb3BzLmtleSl9XG4gICAgICAgID48L2xhYmVsPlxuICAgICAgKVxuICB9XG5cblxuLy8gZG91YmxlIGZpcnN0IGFuZCBsYXN0IHNsaWRlIGluIHRoZSBlbmRzXG5cbi8vIGNvbnN0IGltYWdlRmlyc3QgPSBpbWFnZUFyclstMV1cbi8vIGNvbnN0IGltYWdlRmlyc3QgPSBpbWFnZUFyclstMV1cbi8vIGltYWdlQXJyLnVuc2hpZnQoaW1hZ2VGaXJzdClcblxuLy8gY29uc3QgaW1hZ2VMYXN0ICA9IGltYWdlQXJyWzFdXG4vLyBpbWFnZUxhc3Qua2V5ID0gJ2xhc3Qtc2xpZGUnXG4vLyBpbWFnZUFyci5wdXNoKGltYWdlTGFzdClcblxuICBmdW5jdGlvbiByZXNldFNsaWRlcihwcm9wczogJ2ZpcnN0JyB8ICdsYXN0Jykge1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRJc1RyYW5zaXRpb25CbG9ja2VkKHRydWUpO1xuICAgIH0sIDMwMClcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldElzVHJhbnNpdGlvbkJsb2NrZWQoZmFsc2UpO1xuICAgIH0sIDUwMClcblxuICAgIGlmIChwcm9wcyA9PT0gJ2ZpcnN0Jykge1xuICAgICAgc2V0Q3VycmVudFNsaWRlKDYpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRTbGlkZSgxKTtcbiAgICAgIH0sIDMwMClcblxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRDdXJyZW50U2xpZGUoMCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFNsaWRlKDUpO1xuICAgICAgfSwgMzAwKVxuXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2socHJvcHM6ICdsZWZ0JyB8ICdyaWdodCcpIHtcblxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc3dpdGNoKHByb3BzKSB7XG5cbiAgICAgIGNhc2UgJ2xlZnQnOiBcbiAgICAgICAgY3VycmVudFNsaWRlID4gMSA/IFxuICAgICAgICBzZXRDdXJyZW50U2xpZGUoY3VycmVudFNsaWRlIC0gMSkgOiBcbiAgICAgICAgcmVzZXRTbGlkZXIoJ2xhc3QnKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3JpZ2h0JzogXG4gICAgICAgIGN1cnJlbnRTbGlkZSA8IDUgPyBcbiAgICAgICAgc2V0Q3VycmVudFNsaWRlKGN1cnJlbnRTbGlkZSArIDEpIDogXG4gICAgICAgIHJlc2V0U2xpZGVyKCdmaXJzdCcpO1xuICAgIH1cblxuICAgIHNldERpc2FibGVkKHRydWUpXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXREaXNhYmxlZChmYWxzZSksIDUwMClcbiAgICBcbiAgfVxuXG4gIHJldHVybihcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPHN2ZyBcbiAgICAgICAgY2xhc3NOYW1lPVwiXG4gICAgICAgICAgZmlsbC1iYXNlLTMgXG4gICAgICAgICAgY3Vyc29yLXBvaW50ZXIgXG4gICAgICAgICAgZHVyYXRpb24tMTUwIFxuICAgICAgICAgIGVhc2UtaW4tb3V0IFxuICAgICAgICAgIGhvdmVyOmZpbGwtYmFzZS0xIFxuICAgICAgICAgIGhvdmVyOnNjYWxlLTEyNVwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCdsZWZ0Jyl9XG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBcbiAgICAgICAgaGVpZ2h0PVwiNDhcIiBcbiAgICAgICAgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiIFxuICAgICAgICB3aWR0aD1cIjQ4XCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNNTYxIDgxNiAzMjAgNTc1bDI0MS0yNDEgNDMgNDMtMTk4IDE5OCAxOTggMTk4LTQzIDQzWlwiLz5cbiAgICAgIDwvc3ZnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gdy1bNjAwcHhdIGgtWzQwMHB4XSByb3VuZGVkLTJ4bCB6LTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YFxuICAgICAgICAgICAgICAgICAgICBmbGV4IFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLSR7aXNUcmFuc2l0aW9uQmxvY2tlZCA/ICdub25lJyA6ICdhbGwnfSBcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24tJHtpc1RyYW5zaXRpb25CbG9ja2VkID8gJzAnIDogJzMwMCd9XG4gICAgICAgICAgICAgICAgICAgIHctWzYwMHB4XSBcbiAgICAgICAgICAgICAgICAgICAgaC1bNDAwcHhdXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlci0ke2N1cnJlbnRTbGlkZX1gXG4gICAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICB7aW1hZ2VBcnJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMyBmbGV4IGdhcC0zIGp1c3RpZnktY2VudGVyIHctWzYwMHB4XVwiPlxuICAgICAgICAgICAge2xhYmVsQXJyfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN2ZyBcbiAgICAgICAgICBjbGFzc05hbWU9XCJcbiAgICAgICAgICAgIGZpbGwtYmFzZS0zIFxuICAgICAgICAgICAgY3Vyc29yLXBvaW50ZXIgXG4gICAgICAgICAgICBkdXJhdGlvbi0xNTAgXG4gICAgICAgICAgICBlYXNlLWluLW91dCBcbiAgICAgICAgICAgIGhvdmVyOmZpbGwtYmFzZS0xIFxuICAgICAgICAgICAgaG92ZXI6c2NhbGUtMTI1XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygncmlnaHQnKX1cbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgXG4gICAgICAgICAgaGVpZ2h0PVwiNDhcIiBcbiAgICAgICAgICB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCIgXG4gICAgICAgICAgd2lkdGg9XCI0OFwiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJtMzc1IDgxNi00My00MyAxOTgtMTk4LTE5OC0xOTggNDMtNDMgMjQxIDI0MS0yNDEgMjQxWlwiLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXIiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTbGlkZXIiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJpbWFnZUFyciIsInNldEltYWdlQXJyIiwibGFiZWxBcnIiLCJzZXRMYWJlbEFyciIsImlzVHJhbnNpdGlvbkJsb2NrZWQiLCJzZXRJc1RyYW5zaXRpb25CbG9ja2VkIiwiZGlzYWJsZWQiLCJzZXREaXNhYmxlZCIsImkiLCJzbGlkZXJBcnIiLCJsZW5ndGgiLCJJbWFnZVNsaWRlIiwicHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiLCJrZXkiLCJTbGlkZUxhYmVsIiwibGFiZWwiLCJodG1sRm9yIiwib25DbGljayIsInJlc2V0U2xpZGVyIiwic2V0VGltZW91dCIsImhhbmRsZUNsaWNrIiwic3ZnIiwieG1sbnMiLCJoZWlnaHQiLCJ2aWV3Qm94Iiwid2lkdGgiLCJwYXRoIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/components/home/Slider.tsx\n"));

/***/ })

});