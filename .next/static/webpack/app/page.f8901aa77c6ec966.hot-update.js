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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst sliderImages = [\n    1,\n    2,\n    3,\n    4,\n    5\n];\nconst Slider = ()=>{\n    _s();\n    const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [isTransitionBlocked, setIsTransitionBlocked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const ImageSlide = (props)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex min-w-[600px] h-[400px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-red-400 w-1/2 min-h-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-yellow-300 w-1/2 min-h-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, props.keyValue, true, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, undefined);\n    };\n    const SlideLabel = (props)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            htmlFor: \"radio\" + props.keyValue,\n            className: \"\\n        inline-block \\n        w-2 min-h-[8px] \\n        rounded-full \\n      hover:bg-base-1\\n        \".concat(currentSlide === props.keyValue ? \"bg-base-1 animate-[slider_0.3s_ease-in-out_forwards]\" : \"bg-base-3\"),\n            id: \"radio\" + props.keyValue,\n            onClick: ()=>setCurrentSlide(props.keyValue)\n        }, void 0, false, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined);\n    };\n    const imageArr = ()=>sliderImages.map((x)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageSlide, {\n                keyValue: x\n            }, void 0, false, {\n                fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                lineNumber: 49,\n                columnNumber: 12\n            }, undefined);\n        });\n    image;\n    const labelArr = ()=>sliderImages.map((x)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SlideLabel, {\n                keyValue: x\n            }, void 0, false, {\n                fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                lineNumber: 56,\n                columnNumber: 12\n            }, undefined);\n        });\n    // const imageFirst = imageArr[-1]\n    // const imageFirst = imageArr[-1]\n    // imageArr.unshift(imageFirst)\n    // const imageLast  = imageArr[1]\n    // imageLast.key = 'last-slide'\n    // imageArr.push(imageLast)\n    function resetSlider(props) {\n        setTimeout(()=>{\n            setIsTransitionBlocked(true);\n        }, 300);\n        setTimeout(()=>{\n            setIsTransitionBlocked(false);\n        }, 500);\n        if (props === \"first\") {\n            setCurrentSlide(6);\n            setTimeout(()=>{\n                setCurrentSlide(1);\n            }, 300);\n        } else {\n            setCurrentSlide(0);\n            setTimeout(()=>{\n                setCurrentSlide(5);\n            }, 300);\n        }\n    }\n    function handleClick(props) {\n        if (disabled) {\n            return;\n        }\n        switch(props){\n            case \"left\":\n                currentSlide > 1 ? setCurrentSlide(currentSlide - 1) : resetSlider(\"last\");\n                break;\n            case \"right\":\n                currentSlide < 5 ? setCurrentSlide(currentSlide + 1) : resetSlider(\"first\");\n        }\n        setDisabled(true);\n        setTimeout(()=>setDisabled(false), 500);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \" fill-base-3  cursor-pointer  duration-150  ease-in-out  hover:fill-base-1  hover:scale-125\",\n                    onClick: ()=>handleClick(\"left\"),\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    height: \"48\",\n                    viewBox: \"0 96 960 960\",\n                    width: \"48\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                        lineNumber: 133,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 120,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container relative overflow-hidden w-[600px] h-[400px] rounded-2xl z-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\\n                    flex \\n                    transition-\".concat(isTransitionBlocked ? \"none\" : \"all\", \" \\n                    duration-\").concat(isTransitionBlocked ? \"0\" : \"300\", \"\\n                    w-[600px] \\n                    h-[400px]\\n                    slider-\").concat(currentSlide),\n                            children: imageArr()\n                        }, void 0, false, {\n                            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                            lineNumber: 136,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bottom-3 flex gap-3 justify-center w-[600px]\",\n                            children: labelArr()\n                        }, void 0, false, {\n                            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                            lineNumber: 146,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 135,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \" fill-base-3  cursor-pointer  duration-150  ease-in-out  hover:fill-base-1  hover:scale-125\",\n                    onClick: ()=>handleClick(\"right\"),\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    height: \"48\",\n                    viewBox: \"0 96 960 960\",\n                    width: \"48\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                        lineNumber: 163,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 150,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 119,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Slider, \"Kyc0HW1TDLGBtRy6AofgfQTw3qk=\");\n_c = Slider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvaG9tZS9TbGlkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUU0QztBQU01QyxNQUFNQyxlQUFlO0lBQ25CO0lBQUc7SUFBRztJQUFHO0lBQUc7Q0FDYjtBQUVELE1BQU1DLFNBQW1CLElBQU07O0lBQzdCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ0sscUJBQXFCQyx1QkFBdUIsR0FBR04sK0NBQVFBLENBQUMsS0FBSztJQUNwRSxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUU5QyxNQUFNUyxhQUE4QyxDQUFDQyxRQUFVO1FBQzdELHFCQUNFLDhEQUFDQztZQUNEQyxXQUFXOzs4QkFHWCw4REFBQ0Q7b0JBQUlDLFdBQVU7Ozs7Ozs4QkFDZiw4REFBQ0Q7b0JBQUlDLFdBQVU7Ozs7Ozs7V0FIVkYsTUFBTUcsUUFBUTs7Ozs7SUFNdkI7SUFFQSxNQUFNQyxhQUE2QyxDQUFDSixRQUFVO1FBQzVELHFCQUNFLDhEQUFDSztZQUNDQyxTQUFTLFVBQVVOLE1BQU1HLFFBQVE7WUFDakNELFdBQVcsNEdBT0MsT0FGVlQsaUJBQWlCTyxNQUFNRyxRQUFRLEdBQ2pDLHlEQUNBLFdBQVc7WUFDWEksSUFBSSxVQUFVUCxNQUFNRyxRQUFRO1lBQzVCSyxTQUFTLElBQU1kLGdCQUFnQk0sTUFBTUcsUUFBUTs7Ozs7O0lBR25EO0lBRUEsTUFBTU0sV0FBVyxJQUFNbEIsYUFBYW1CLEdBQUcsQ0FBQyxDQUFDQyxJQUFNO1lBQzdDLHFCQUFPLDhEQUFDWjtnQkFBV0ksVUFBVVE7Ozs7OztRQUM3QjtJQUdGQztJQUVBLE1BQU1DLFdBQVcsSUFBTXRCLGFBQWFtQixHQUFHLENBQUMsQ0FBQ0MsSUFBTTtZQUM3QyxxQkFBTyw4REFBQ1A7Z0JBQVdELFVBQVVROzs7Ozs7UUFDN0I7SUFHSixrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLCtCQUErQjtJQUUvQixpQ0FBaUM7SUFDakMsK0JBQStCO0lBQy9CLDJCQUEyQjtJQUV6QixTQUFTRyxZQUFZZCxLQUF1QixFQUFFO1FBRTVDZSxXQUFXLElBQU07WUFDZm5CLHVCQUF1QixJQUFJO1FBQzdCLEdBQUc7UUFDSG1CLFdBQVcsSUFBTTtZQUNmbkIsdUJBQXVCLEtBQUs7UUFDOUIsR0FBRztRQUVILElBQUlJLFVBQVUsU0FBUztZQUNyQk4sZ0JBQWdCO1lBQ2hCcUIsV0FBVyxJQUFNO2dCQUNmckIsZ0JBQWdCO1lBQ2xCLEdBQUc7UUFFTCxPQUFPO1lBQ0xBLGdCQUFnQjtZQUNoQnFCLFdBQVcsSUFBTTtnQkFDZnJCLGdCQUFnQjtZQUNsQixHQUFHO1FBRUwsQ0FBQztJQUNIO0lBRUEsU0FBU3NCLFlBQVloQixLQUF1QixFQUFFO1FBRTVDLElBQUlILFVBQVU7WUFDWjtRQUNGLENBQUM7UUFFRCxPQUFPRztZQUVMLEtBQUs7Z0JBQ0hQLGVBQWUsSUFDZkMsZ0JBQWdCRCxlQUFlLEtBQy9CcUIsWUFBWSxPQUFPO2dCQUNuQixLQUFNO1lBRVIsS0FBSztnQkFDSHJCLGVBQWUsSUFDZkMsZ0JBQWdCRCxlQUFlLEtBQy9CcUIsWUFBWSxRQUFRO1FBQ3hCO1FBRUFoQixZQUFZLElBQUk7UUFDaEJpQixXQUFXLElBQU1qQixZQUFZLEtBQUssR0FBRztJQUV2QztJQUVBLHFCQUNFO2tCQUNFLDRFQUFDRztZQUFJQyxXQUFVOzs4QkFDZiw4REFBQ2U7b0JBQ0NmLFdBQVU7b0JBT1ZNLFNBQVMsSUFBTVEsWUFBWTtvQkFDM0JFLE9BQU07b0JBQ05DLFFBQU87b0JBQ1BDLFNBQVE7b0JBQ1JDLE9BQU07OEJBQ04sNEVBQUNDO3dCQUFLQyxHQUFFOzs7Ozs7Ozs7Ozs4QkFFUiw4REFBQ3RCO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVcsK0RBR0tQLE9BREVBLHNCQUFzQixTQUFTLEtBQUssRUFBQyxvQ0FJekNGLE9BSEVFLHNCQUFzQixNQUFNLEtBQUssRUFBQyxnR0FHdkIsT0FBYkY7c0NBRWpCZ0I7Ozs7OztzQ0FFRiw4REFBQ1I7NEJBQUlDLFdBQVU7c0NBQ1pXOzs7Ozs7Ozs7Ozs7OEJBR0wsOERBQUNJO29CQUNDZixXQUFVO29CQU9WTSxTQUFTLElBQU1RLFlBQVk7b0JBQzNCRSxPQUFNO29CQUNOQyxRQUFPO29CQUNQQyxTQUFRO29CQUNSQyxPQUFNOzhCQUNOLDRFQUFDQzt3QkFBS0MsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xCO0dBM0pNL0I7S0FBQUE7QUE2Sk4sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvaG9tZS9TbGlkZXIudHN4PzI0MGYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAga2V5OiBudW1iZXJcbn1cblxuY29uc3Qgc2xpZGVySW1hZ2VzID0gW1xuICAxLCAyLCAzLCA0LCA1XG5dXG5cbmNvbnN0IFNsaWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW2lzVHJhbnNpdGlvbkJsb2NrZWQsIHNldElzVHJhbnNpdGlvbkJsb2NrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgXG4gIGNvbnN0IEltYWdlU2xpZGU6IFJlYWN0LkZDPHsga2V5VmFsdWU6IG51bWJlciB9ID4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IFxuICAgICAgY2xhc3NOYW1lPXsnZmxleCBtaW4tdy1bNjAwcHhdIGgtWzQwMHB4XSd9XG4gICAgICBrZXk9e3Byb3BzLmtleVZhbHVlfVxuICAgICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtNDAwIHctMS8yIG1pbi1oLWZ1bGxcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmcteWVsbG93LTMwMCB3LTEvMiBtaW4taC1mdWxsXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIFxuICBjb25zdCBTbGlkZUxhYmVsOiBSZWFjdC5GQzx7IGtleVZhbHVlOiBudW1iZXIgfT4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICA8bGFiZWwgXG4gICAgICAgIGh0bWxGb3I9eydyYWRpbycgKyBwcm9wcy5rZXlWYWx1ZX0gXG4gICAgICAgIGNsYXNzTmFtZT17YFxuICAgICAgICBpbmxpbmUtYmxvY2sgXG4gICAgICAgIHctMiBtaW4taC1bOHB4XSBcbiAgICAgICAgcm91bmRlZC1mdWxsIFxuICAgICAgaG92ZXI6YmctYmFzZS0xXG4gICAgICAgICR7Y3VycmVudFNsaWRlID09PSBwcm9wcy5rZXlWYWx1ZSA/IFxuICAgICAgICAnYmctYmFzZS0xIGFuaW1hdGUtW3NsaWRlcl8wLjNzX2Vhc2UtaW4tb3V0X2ZvcndhcmRzXScgOiBcbiAgICAgICAgJ2JnLWJhc2UtMyd9YH1cbiAgICAgICAgaWQ9eydyYWRpbycgKyBwcm9wcy5rZXlWYWx1ZX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudFNsaWRlKHByb3BzLmtleVZhbHVlKX1cbiAgICAgICAgPjwvbGFiZWw+XG4gICAgICApXG4gIH1cblxuICBjb25zdCBpbWFnZUFyciA9ICgpID0+IHNsaWRlckltYWdlcy5tYXAoKHgpID0+IHtcbiAgICByZXR1cm4oPEltYWdlU2xpZGUga2V5VmFsdWU9e3h9IC8+KVxuICAgIH1cbiAgKVxuXG4gIGltYWdlXG5cbiAgY29uc3QgbGFiZWxBcnIgPSAoKSA9PiBzbGlkZXJJbWFnZXMubWFwKCh4KSA9PiB7XG4gICAgcmV0dXJuKDxTbGlkZUxhYmVsIGtleVZhbHVlPXt4fSAvPilcbiAgICB9XG4gIClcblxuLy8gY29uc3QgaW1hZ2VGaXJzdCA9IGltYWdlQXJyWy0xXVxuLy8gY29uc3QgaW1hZ2VGaXJzdCA9IGltYWdlQXJyWy0xXVxuLy8gaW1hZ2VBcnIudW5zaGlmdChpbWFnZUZpcnN0KVxuXG4vLyBjb25zdCBpbWFnZUxhc3QgID0gaW1hZ2VBcnJbMV1cbi8vIGltYWdlTGFzdC5rZXkgPSAnbGFzdC1zbGlkZSdcbi8vIGltYWdlQXJyLnB1c2goaW1hZ2VMYXN0KVxuXG4gIGZ1bmN0aW9uIHJlc2V0U2xpZGVyKHByb3BzOiAnZmlyc3QnIHwgJ2xhc3QnKSB7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldElzVHJhbnNpdGlvbkJsb2NrZWQodHJ1ZSk7XG4gICAgfSwgMzAwKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNUcmFuc2l0aW9uQmxvY2tlZChmYWxzZSk7XG4gICAgfSwgNTAwKVxuXG4gICAgaWYgKHByb3BzID09PSAnZmlyc3QnKSB7XG4gICAgICBzZXRDdXJyZW50U2xpZGUoNik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFNsaWRlKDEpO1xuICAgICAgfSwgMzAwKVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEN1cnJlbnRTbGlkZSgwKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50U2xpZGUoNSk7XG4gICAgICB9LCAzMDApXG5cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhwcm9wczogJ2xlZnQnIHwgJ3JpZ2h0Jykge1xuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzd2l0Y2gocHJvcHMpIHtcblxuICAgICAgY2FzZSAnbGVmdCc6IFxuICAgICAgICBjdXJyZW50U2xpZGUgPiAxID8gXG4gICAgICAgIHNldEN1cnJlbnRTbGlkZShjdXJyZW50U2xpZGUgLSAxKSA6IFxuICAgICAgICByZXNldFNsaWRlcignbGFzdCcpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncmlnaHQnOiBcbiAgICAgICAgY3VycmVudFNsaWRlIDwgNSA/IFxuICAgICAgICBzZXRDdXJyZW50U2xpZGUoY3VycmVudFNsaWRlICsgMSkgOiBcbiAgICAgICAgcmVzZXRTbGlkZXIoJ2ZpcnN0Jyk7XG4gICAgfVxuXG4gICAgc2V0RGlzYWJsZWQodHJ1ZSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldERpc2FibGVkKGZhbHNlKSwgNTAwKVxuICAgIFxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICA8c3ZnIFxuICAgICAgICBjbGFzc05hbWU9XCJcbiAgICAgICAgICBmaWxsLWJhc2UtMyBcbiAgICAgICAgICBjdXJzb3ItcG9pbnRlciBcbiAgICAgICAgICBkdXJhdGlvbi0xNTAgXG4gICAgICAgICAgZWFzZS1pbi1vdXQgXG4gICAgICAgICAgaG92ZXI6ZmlsbC1iYXNlLTEgXG4gICAgICAgICAgaG92ZXI6c2NhbGUtMTI1XCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soJ2xlZnQnKX1cbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIFxuICAgICAgICBoZWlnaHQ9XCI0OFwiIFxuICAgICAgICB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCIgXG4gICAgICAgIHdpZHRoPVwiNDhcIj5cbiAgICAgICAgPHBhdGggZD1cIk01NjEgODE2IDMyMCA1NzVsMjQxLTI0MSA0MyA0My0xOTggMTk4IDE5OCAxOTgtNDMgNDNaXCIvPlxuICAgICAgPC9zdmc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiB3LVs2MDBweF0gaC1bNDAwcHhdIHJvdW5kZWQtMnhsIHotMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgXG4gICAgICAgICAgICAgICAgICAgIGZsZXggXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tJHtpc1RyYW5zaXRpb25CbG9ja2VkID8gJ25vbmUnIDogJ2FsbCd9IFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbi0ke2lzVHJhbnNpdGlvbkJsb2NrZWQgPyAnMCcgOiAnMzAwJ31cbiAgICAgICAgICAgICAgICAgICAgdy1bNjAwcHhdIFxuICAgICAgICAgICAgICAgICAgICBoLVs0MDBweF1cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyLSR7Y3VycmVudFNsaWRlfWBcbiAgICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgIHtpbWFnZUFycigpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTMgZmxleCBnYXAtMyBqdXN0aWZ5LWNlbnRlciB3LVs2MDBweF1cIj5cbiAgICAgICAgICAgIHtsYWJlbEFycigpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN2ZyBcbiAgICAgICAgICBjbGFzc05hbWU9XCJcbiAgICAgICAgICAgIGZpbGwtYmFzZS0zIFxuICAgICAgICAgICAgY3Vyc29yLXBvaW50ZXIgXG4gICAgICAgICAgICBkdXJhdGlvbi0xNTAgXG4gICAgICAgICAgICBlYXNlLWluLW91dCBcbiAgICAgICAgICAgIGhvdmVyOmZpbGwtYmFzZS0xIFxuICAgICAgICAgICAgaG92ZXI6c2NhbGUtMTI1XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygncmlnaHQnKX1cbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgXG4gICAgICAgICAgaGVpZ2h0PVwiNDhcIiBcbiAgICAgICAgICB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCIgXG4gICAgICAgICAgd2lkdGg9XCI0OFwiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJtMzc1IDgxNi00My00MyAxOTgtMTk4LTE5OC0xOTggNDMtNDMgMjQxIDI0MS0yNDEgMjQxWlwiLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXIiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzbGlkZXJJbWFnZXMiLCJTbGlkZXIiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJpc1RyYW5zaXRpb25CbG9ja2VkIiwic2V0SXNUcmFuc2l0aW9uQmxvY2tlZCIsImRpc2FibGVkIiwic2V0RGlzYWJsZWQiLCJJbWFnZVNsaWRlIiwicHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiLCJrZXlWYWx1ZSIsIlNsaWRlTGFiZWwiLCJsYWJlbCIsImh0bWxGb3IiLCJpZCIsIm9uQ2xpY2siLCJpbWFnZUFyciIsIm1hcCIsIngiLCJpbWFnZSIsImxhYmVsQXJyIiwicmVzZXRTbGlkZXIiLCJzZXRUaW1lb3V0IiwiaGFuZGxlQ2xpY2siLCJzdmciLCJ4bWxucyIsImhlaWdodCIsInZpZXdCb3giLCJ3aWR0aCIsInBhdGgiLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/components/home/Slider.tsx\n"));

/***/ })

});