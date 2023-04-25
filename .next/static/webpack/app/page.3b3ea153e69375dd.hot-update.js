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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst sliderArr = [\n    \"bg-sky-400\",\n    \"bg-red-400\",\n    \"bg-yellow-400\",\n    \"bg-green-400\",\n    \"bg-gray-400\"\n];\nconst Slider = ()=>{\n    _s();\n    const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [imageArr, setImageArr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [labelArr, setLabelArr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isTransitionBlocked, setIsTransitionBlocked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const ImageSlide = (props)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex min-w-[600px] h-[400px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-red-400 w-1/2 min-h-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-yellow-300 w-1/2 min-h-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, props.key, true, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined);\n    };\n    const SlideLabel = (props)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            htmlFor: \"radio\" + props.key,\n            className: \"\\n        inline-block \\n        w-2 min-h-[8px] \\n        rounded-full \\n      hover:bg-base-1\\n        \".concat(currentSlide === props.key ? \"bg-base-1 animate-[slider_0.3s_ease-in-out_forwards]\" : \"bg-base-3\"),\n            onClick: ()=>setCurrentSlide(i)\n        }, \"radio\" + props.key, false, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined);\n    };\n    for(let i1 = 1; i1 <= sliderArr.length; i1++){}\n    // double first and last slide in the ends\n    // const imageFirst = imageArr[-1]\n    const imageFirst = imageArr[-1];\n    imageArr.unshift(imageFirst);\n    const imageLast = imageArr[1];\n    imageLast.key = \"last-slide\";\n    imageArr.push(imageLast);\n    function resetSlider(props) {\n        setTimeout(()=>{\n            setIsTransitionBlocked(true);\n        }, 300);\n        setTimeout(()=>{\n            setIsTransitionBlocked(false);\n        }, 500);\n        if (props === \"first\") {\n            setCurrentSlide(6);\n            setTimeout(()=>{\n                setCurrentSlide(1);\n            }, 300);\n        } else {\n            setCurrentSlide(0);\n            setTimeout(()=>{\n                setCurrentSlide(5);\n            }, 300);\n        }\n    }\n    function handleClick(props) {\n        if (disabled) {\n            return;\n        }\n        switch(props){\n            case \"left\":\n                currentSlide > 1 ? setCurrentSlide(currentSlide - 1) : resetSlider(\"last\");\n                break;\n            case \"right\":\n                currentSlide < 5 ? setCurrentSlide(currentSlide + 1) : resetSlider(\"first\");\n        }\n        setDisabled(true);\n        setTimeout(()=>setDisabled(false), 500);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \" fill-base-3  cursor-pointer  duration-150  ease-in-out  hover:fill-base-1  hover:scale-125\",\n                    onClick: ()=>handleClick(\"left\"),\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    height: \"48\",\n                    viewBox: \"0 96 960 960\",\n                    width: \"48\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                        lineNumber: 129,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container relative overflow-hidden w-[600px] h-[400px] rounded-2xl z-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\\n                    flex \\n                    transition-\".concat(isTransitionBlocked ? \"none\" : \"all\", \" \\n                    duration-\").concat(isTransitionBlocked ? \"0\" : \"300\", \"\\n                    w-[600px] \\n                    h-[400px]\\n                    slider-\").concat(currentSlide),\n                            children: imageArr\n                        }, void 0, false, {\n                            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                            lineNumber: 132,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bottom-3 flex gap-3 justify-center w-[600px]\",\n                            children: labelArr\n                        }, void 0, false, {\n                            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                            lineNumber: 142,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 131,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \" fill-base-3  cursor-pointer  duration-150  ease-in-out  hover:fill-base-1  hover:scale-125\",\n                    onClick: ()=>handleClick(\"right\"),\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    height: \"48\",\n                    viewBox: \"0 96 960 960\",\n                    width: \"48\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                        lineNumber: 159,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 146,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 115,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Slider, \"8zHPQxg1Vmlx1iyoDbNs0Xs1IYY=\");\n_c = Slider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvaG9tZS9TbGlkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUVpQztBQUVqQyxNQUFNQyxZQUFZO0lBQ2hCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRDtBQUdELE1BQU1DLFNBQW1CLElBQU07O0lBQzdCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ08sVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ1MscUJBQXFCQyx1QkFBdUIsR0FBR1YsK0NBQVFBLENBQUMsS0FBSztJQUNwRSxNQUFNLENBQUNXLFVBQVVDLFlBQVksR0FBR1osK0NBQVFBLENBQUMsS0FBSztJQUU5QyxNQUFNYSxhQUFhLENBQUNDLFFBQXlCO1FBQzNDLHFCQUNFLDhEQUFDQztZQUNEQyxXQUFXOzs4QkFHWCw4REFBQ0Q7b0JBQUlDLFdBQVU7Ozs7Ozs4QkFDZiw4REFBQ0Q7b0JBQUlDLFdBQVU7Ozs7Ozs7V0FIVkYsTUFBTUcsR0FBRzs7Ozs7SUFNbEI7SUFFQSxNQUFNQyxhQUFhLENBQUNKLFFBQXlCO1FBQzNDLHFCQUNFLDhEQUFDSztZQUNDQyxTQUFTLFVBQVVOLE1BQU1HLEdBQUc7WUFDNUJELFdBQVcsNEdBT0MsT0FGVmIsaUJBQWlCVyxNQUFNRyxHQUFHLEdBQzVCLHlEQUNBLFdBQVc7WUFFWEksU0FBUyxJQUFNakIsZ0JBQWdCa0I7V0FEMUIsVUFBVVIsTUFBTUcsR0FBRzs7Ozs7SUFJOUI7SUFFQSxJQUFLLElBQUlLLEtBQUksR0FBR0EsTUFBS3JCLFVBQVVzQixNQUFNLEVBQUVELEtBQUssQ0FDNUM7SUFFRiwwQ0FBMEM7SUFFMUMsa0NBQWtDO0lBQ2xDLE1BQU1FLGFBQWFuQixRQUFRLENBQUMsQ0FBQyxFQUFFO0lBQy9CQSxTQUFTb0IsT0FBTyxDQUFDRDtJQUVqQixNQUFNRSxZQUFhckIsUUFBUSxDQUFDLEVBQUU7SUFDOUJxQixVQUFVVCxHQUFHLEdBQUc7SUFDaEJaLFNBQVNzQixJQUFJLENBQUNEO0lBRVosU0FBU0UsWUFBWWQsS0FBdUIsRUFBRTtRQUU1Q2UsV0FBVyxJQUFNO1lBQ2ZuQix1QkFBdUIsSUFBSTtRQUM3QixHQUFHO1FBQ0htQixXQUFXLElBQU07WUFDZm5CLHVCQUF1QixLQUFLO1FBQzlCLEdBQUc7UUFFSCxJQUFJSSxVQUFVLFNBQVM7WUFDckJWLGdCQUFnQjtZQUNoQnlCLFdBQVcsSUFBTTtnQkFDZnpCLGdCQUFnQjtZQUNsQixHQUFHO1FBRUwsT0FBTztZQUNMQSxnQkFBZ0I7WUFDaEJ5QixXQUFXLElBQU07Z0JBQ2Z6QixnQkFBZ0I7WUFDbEIsR0FBRztRQUVMLENBQUM7SUFDSDtJQUVBLFNBQVMwQixZQUFZaEIsS0FBdUIsRUFBRTtRQUU1QyxJQUFJSCxVQUFVO1lBQ1o7UUFDRixDQUFDO1FBRUQsT0FBT0c7WUFFTCxLQUFLO2dCQUNIWCxlQUFlLElBQ2ZDLGdCQUFnQkQsZUFBZSxLQUMvQnlCLFlBQVksT0FBTztnQkFDbkIsS0FBTTtZQUVSLEtBQUs7Z0JBQ0h6QixlQUFlLElBQ2ZDLGdCQUFnQkQsZUFBZSxLQUMvQnlCLFlBQVksUUFBUTtRQUN4QjtRQUVBaEIsWUFBWSxJQUFJO1FBQ2hCaUIsV0FBVyxJQUFNakIsWUFBWSxLQUFLLEdBQUc7SUFFdkM7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ0c7WUFBSUMsV0FBVTs7OEJBQ2YsOERBQUNlO29CQUNDZixXQUFVO29CQU9WSyxTQUFTLElBQU1TLFlBQVk7b0JBQzNCRSxPQUFNO29CQUNOQyxRQUFPO29CQUNQQyxTQUFRO29CQUNSQyxPQUFNOzhCQUNOLDRFQUFDQzt3QkFBS0MsR0FBRTs7Ozs7Ozs7Ozs7OEJBRVIsOERBQUN0QjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFXLCtEQUdLUCxPQURFQSxzQkFBc0IsU0FBUyxLQUFLLEVBQUMsb0NBSXpDTixPQUhFTSxzQkFBc0IsTUFBTSxLQUFLLEVBQUMsZ0dBR3ZCLE9BQWJOO3NDQUVqQkU7Ozs7OztzQ0FFRiw4REFBQ1U7NEJBQUlDLFdBQVU7c0NBQ1pUOzs7Ozs7Ozs7Ozs7OEJBR0wsOERBQUN3QjtvQkFDQ2YsV0FBVTtvQkFPVkssU0FBUyxJQUFNUyxZQUFZO29CQUMzQkUsT0FBTTtvQkFDTkMsUUFBTztvQkFDUEMsU0FBUTtvQkFDUkMsT0FBTTs4QkFDTiw0RUFBQ0M7d0JBQUtDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQjtHQXRKTW5DO0tBQUFBO0FBd0pOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2hvbWUvU2xpZGVyLnRzeD8yNDBmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBzbGlkZXJBcnIgPSBbXG4gICdiZy1za3ktNDAwJyxcbiAgJ2JnLXJlZC00MDAnLFxuICAnYmcteWVsbG93LTQwMCcsXG4gICdiZy1ncmVlbi00MDAnLFxuICAnYmctZ3JheS00MDAnLFxuXVxuXG5cbmNvbnN0IFNsaWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW2ltYWdlQXJyLCBzZXRJbWFnZUFycl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsYWJlbEFyciwgc2V0TGFiZWxBcnJdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXNUcmFuc2l0aW9uQmxvY2tlZCwgc2V0SXNUcmFuc2l0aW9uQmxvY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkaXNhYmxlZCwgc2V0RGlzYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBcbiAgY29uc3QgSW1hZ2VTbGlkZSA9IChwcm9wczoge2tleTogbnVtYmVyfSkgPT4ge1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgXG4gICAgICBjbGFzc05hbWU9eydmbGV4IG1pbi13LVs2MDBweF0gaC1bNDAwcHhdJ31cbiAgICAgIGtleT17cHJvcHMua2V5fVxuICAgICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtNDAwIHctMS8yIG1pbi1oLWZ1bGxcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmcteWVsbG93LTMwMCB3LTEvMiBtaW4taC1mdWxsXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIFxuICBjb25zdCBTbGlkZUxhYmVsID0gKHByb3BzOiB7a2V5OiBudW1iZXJ9KSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgPGxhYmVsIFxuICAgICAgICBodG1sRm9yPXsncmFkaW8nICsgcHJvcHMua2V5fSBcbiAgICAgICAgY2xhc3NOYW1lPXtgXG4gICAgICAgIGlubGluZS1ibG9jayBcbiAgICAgICAgdy0yIG1pbi1oLVs4cHhdIFxuICAgICAgICByb3VuZGVkLWZ1bGwgXG4gICAgICBob3ZlcjpiZy1iYXNlLTFcbiAgICAgICAgJHtjdXJyZW50U2xpZGUgPT09IHByb3BzLmtleSA/IFxuICAgICAgICAnYmctYmFzZS0xIGFuaW1hdGUtW3NsaWRlcl8wLjNzX2Vhc2UtaW4tb3V0X2ZvcndhcmRzXScgOiBcbiAgICAgICAgJ2JnLWJhc2UtMyd9YH1cbiAgICAgICAga2V5PXsncmFkaW8nICsgcHJvcHMua2V5fVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50U2xpZGUoaSl9XG4gICAgICAgID48L2xhYmVsPlxuICAgICAgKVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2xpZGVyQXJyLmxlbmd0aDsgaSsrKSB7XG4gIH1cblxuLy8gZG91YmxlIGZpcnN0IGFuZCBsYXN0IHNsaWRlIGluIHRoZSBlbmRzXG5cbi8vIGNvbnN0IGltYWdlRmlyc3QgPSBpbWFnZUFyclstMV1cbmNvbnN0IGltYWdlRmlyc3QgPSBpbWFnZUFyclstMV1cbmltYWdlQXJyLnVuc2hpZnQoaW1hZ2VGaXJzdClcblxuY29uc3QgaW1hZ2VMYXN0ICA9IGltYWdlQXJyWzFdXG5pbWFnZUxhc3Qua2V5ID0gJ2xhc3Qtc2xpZGUnXG5pbWFnZUFyci5wdXNoKGltYWdlTGFzdClcblxuICBmdW5jdGlvbiByZXNldFNsaWRlcihwcm9wczogJ2ZpcnN0JyB8ICdsYXN0Jykge1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRJc1RyYW5zaXRpb25CbG9ja2VkKHRydWUpO1xuICAgIH0sIDMwMClcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldElzVHJhbnNpdGlvbkJsb2NrZWQoZmFsc2UpO1xuICAgIH0sIDUwMClcblxuICAgIGlmIChwcm9wcyA9PT0gJ2ZpcnN0Jykge1xuICAgICAgc2V0Q3VycmVudFNsaWRlKDYpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRTbGlkZSgxKTtcbiAgICAgIH0sIDMwMClcblxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRDdXJyZW50U2xpZGUoMCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFNsaWRlKDUpO1xuICAgICAgfSwgMzAwKVxuXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2socHJvcHM6ICdsZWZ0JyB8ICdyaWdodCcpIHtcblxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc3dpdGNoKHByb3BzKSB7XG5cbiAgICAgIGNhc2UgJ2xlZnQnOiBcbiAgICAgICAgY3VycmVudFNsaWRlID4gMSA/IFxuICAgICAgICBzZXRDdXJyZW50U2xpZGUoY3VycmVudFNsaWRlIC0gMSkgOiBcbiAgICAgICAgcmVzZXRTbGlkZXIoJ2xhc3QnKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3JpZ2h0JzogXG4gICAgICAgIGN1cnJlbnRTbGlkZSA8IDUgPyBcbiAgICAgICAgc2V0Q3VycmVudFNsaWRlKGN1cnJlbnRTbGlkZSArIDEpIDogXG4gICAgICAgIHJlc2V0U2xpZGVyKCdmaXJzdCcpO1xuICAgIH1cblxuICAgIHNldERpc2FibGVkKHRydWUpXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXREaXNhYmxlZChmYWxzZSksIDUwMClcbiAgICBcbiAgfVxuXG4gIHJldHVybihcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPHN2ZyBcbiAgICAgICAgY2xhc3NOYW1lPVwiXG4gICAgICAgICAgZmlsbC1iYXNlLTMgXG4gICAgICAgICAgY3Vyc29yLXBvaW50ZXIgXG4gICAgICAgICAgZHVyYXRpb24tMTUwIFxuICAgICAgICAgIGVhc2UtaW4tb3V0IFxuICAgICAgICAgIGhvdmVyOmZpbGwtYmFzZS0xIFxuICAgICAgICAgIGhvdmVyOnNjYWxlLTEyNVwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCdsZWZ0Jyl9XG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBcbiAgICAgICAgaGVpZ2h0PVwiNDhcIiBcbiAgICAgICAgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiIFxuICAgICAgICB3aWR0aD1cIjQ4XCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNNTYxIDgxNiAzMjAgNTc1bDI0MS0yNDEgNDMgNDMtMTk4IDE5OCAxOTggMTk4LTQzIDQzWlwiLz5cbiAgICAgIDwvc3ZnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gdy1bNjAwcHhdIGgtWzQwMHB4XSByb3VuZGVkLTJ4bCB6LTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YFxuICAgICAgICAgICAgICAgICAgICBmbGV4IFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLSR7aXNUcmFuc2l0aW9uQmxvY2tlZCA/ICdub25lJyA6ICdhbGwnfSBcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24tJHtpc1RyYW5zaXRpb25CbG9ja2VkID8gJzAnIDogJzMwMCd9XG4gICAgICAgICAgICAgICAgICAgIHctWzYwMHB4XSBcbiAgICAgICAgICAgICAgICAgICAgaC1bNDAwcHhdXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlci0ke2N1cnJlbnRTbGlkZX1gXG4gICAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICB7aW1hZ2VBcnJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMyBmbGV4IGdhcC0zIGp1c3RpZnktY2VudGVyIHctWzYwMHB4XVwiPlxuICAgICAgICAgICAge2xhYmVsQXJyfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN2ZyBcbiAgICAgICAgICBjbGFzc05hbWU9XCJcbiAgICAgICAgICAgIGZpbGwtYmFzZS0zIFxuICAgICAgICAgICAgY3Vyc29yLXBvaW50ZXIgXG4gICAgICAgICAgICBkdXJhdGlvbi0xNTAgXG4gICAgICAgICAgICBlYXNlLWluLW91dCBcbiAgICAgICAgICAgIGhvdmVyOmZpbGwtYmFzZS0xIFxuICAgICAgICAgICAgaG92ZXI6c2NhbGUtMTI1XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygncmlnaHQnKX1cbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgXG4gICAgICAgICAgaGVpZ2h0PVwiNDhcIiBcbiAgICAgICAgICB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCIgXG4gICAgICAgICAgd2lkdGg9XCI0OFwiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJtMzc1IDgxNi00My00MyAxOTgtMTk4LTE5OC0xOTggNDMtNDMgMjQxIDI0MS0yNDEgMjQxWlwiLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXIiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzbGlkZXJBcnIiLCJTbGlkZXIiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJpbWFnZUFyciIsInNldEltYWdlQXJyIiwibGFiZWxBcnIiLCJzZXRMYWJlbEFyciIsImlzVHJhbnNpdGlvbkJsb2NrZWQiLCJzZXRJc1RyYW5zaXRpb25CbG9ja2VkIiwiZGlzYWJsZWQiLCJzZXREaXNhYmxlZCIsIkltYWdlU2xpZGUiLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsImtleSIsIlNsaWRlTGFiZWwiLCJsYWJlbCIsImh0bWxGb3IiLCJvbkNsaWNrIiwiaSIsImxlbmd0aCIsImltYWdlRmlyc3QiLCJ1bnNoaWZ0IiwiaW1hZ2VMYXN0IiwicHVzaCIsInJlc2V0U2xpZGVyIiwic2V0VGltZW91dCIsImhhbmRsZUNsaWNrIiwic3ZnIiwieG1sbnMiLCJoZWlnaHQiLCJ2aWV3Qm94Iiwid2lkdGgiLCJwYXRoIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/components/home/Slider.tsx\n"));

/***/ })

});