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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst sliderImages = [\n    1,\n    2,\n    3,\n    4,\n    5\n];\nconst Slider = ()=>{\n    _s();\n    const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [labels, setLabels] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [isTransitionBlocked, setIsTransitionBlocked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const imageArr = ()=>sliderImages.map((x)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageSlide, {\n                    keyValue: \"image-slide-\" + x,\n                    id: x\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 14\n                }, undefined);\n            });\n        const labelArr = ()=>sliderImages.map((x)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SlideLabel, {\n                    keyValue: \"label-slide-\" + x,\n                    id: x\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 14\n                }, undefined);\n            });\n        const images = imageArr();\n        images.unshift(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageSlide, {\n            keyValue: \"image-slide-start\",\n            id: 5\n        }, void 0, false, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 35,\n            columnNumber: 20\n        }, undefined));\n        images.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageSlide, {\n            keyValue: \"label-slide-end\",\n            id: 1\n        }, void 0, false, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 36,\n            columnNumber: 17\n        }, undefined));\n        setImages(images);\n        setLabels(labelArr());\n    }, [\n        currentSlide\n    ]);\n    const ImageSlide = (props)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row min-w-[600px] h-[400px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-red-400 w-1/2 min-h-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-yellow-300 w-1/2 min-h-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, props.keyValue, true, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, undefined);\n    };\n    const SlideLabel = (props)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            htmlFor: \"radio\" + props.keyValue,\n            className: \"\\n        inline-block \\n        w-2 min-h-[8px] \\n        rounded-full \\n      hover:bg-base-1\\n        \".concat(currentSlide === props.id ? \"bg-base-1 animate-[slider_0.3s_ease-in-out_forwards]\" : \"bg-base-3\"),\n            id: \"radio\" + props.keyValue,\n            onClick: ()=>setCurrentSlide(props.id)\n        }, void 0, false, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, undefined);\n    };\n    // const imageFirst = imageArr[-1]\n    // const imageFirst = imageArr[-1]\n    // imageArr.unshift(imageFirst)\n    // const imageLast  = imageArr[1]\n    // imageLast.key = 'last-slide'\n    // imageArr.push(imageLast)\n    function resetSlider(props) {\n        setTimeout(()=>{\n            setIsTransitionBlocked(true);\n        }, 300);\n        setTimeout(()=>{\n            setIsTransitionBlocked(false);\n        }, 500);\n        if (props === \"first\") {\n            setCurrentSlide(6);\n            setTimeout(()=>{\n                setCurrentSlide(1);\n            }, 300);\n        } else {\n            setCurrentSlide(0);\n            setTimeout(()=>{\n                setCurrentSlide(5);\n            }, 300);\n        }\n    }\n    function handleClick(props) {\n        if (disabled) {\n            return;\n        }\n        switch(props){\n            case \"left\":\n                currentSlide > 1 ? setCurrentSlide(currentSlide - 1) : resetSlider(\"last\");\n                break;\n            case \"right\":\n                currentSlide < 5 ? setCurrentSlide(currentSlide + 1) : resetSlider(\"first\");\n        }\n        setDisabled(true);\n        setTimeout(()=>setDisabled(false), 500);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \" fill-base-3  cursor-pointer  duration-150  ease-in-out  hover:fill-base-1  hover:scale-125\",\n                    onClick: ()=>handleClick(\"left\"),\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    height: \"48\",\n                    viewBox: \"0 96 960 960\",\n                    width: \"48\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                        lineNumber: 147,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 134,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container relative overflow-hidden w-[600px] h-[400px] rounded-2xl z-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\\n                    flex \\n                    transition-\".concat(isTransitionBlocked ? \"none\" : \"all\", \" \\n                    duration-\").concat(isTransitionBlocked ? \"0\" : \"300\", \"\\n                    w-[600px] \\n                    h-[400px]\\n                    slider-\").concat(currentSlide),\n                            children: images\n                        }, void 0, false, {\n                            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                            lineNumber: 150,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bottom-3 flex gap-3 justify-center w-[600px]\",\n                            children: labels\n                        }, void 0, false, {\n                            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                            lineNumber: 160,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 149,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \" fill-base-3  cursor-pointer  duration-150  ease-in-out  hover:fill-base-1  hover:scale-125\",\n                    onClick: ()=>handleClick(\"right\"),\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    height: \"48\",\n                    viewBox: \"0 96 960 960\",\n                    width: \"48\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                        lineNumber: 177,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 164,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 133,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Slider, \"LB2TQIcUu4MSfXgP+6yDIP/xZl0=\");\n_c = Slider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvaG9tZS9TbGlkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUU0QztBQU81QyxNQUFNRSxlQUFlO0lBQ25CO0lBQUc7SUFBRztJQUFHO0lBQUc7Q0FDYjtBQUVELE1BQU1DLFNBQW1CLElBQU07O0lBQzdCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ0ssUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUE7SUFDcEMsTUFBTSxDQUFDTyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQTtJQUNwQyxNQUFNLENBQUNTLHFCQUFxQkMsdUJBQXVCLEdBQUdWLCtDQUFRQSxDQUFDLEtBQUs7SUFDcEUsTUFBTSxDQUFDVyxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUFDLEtBQUs7SUFFOUNELGdEQUFTQSxDQUFDLElBQU07UUFFZCxNQUFNYyxXQUFXLElBQU1aLGFBQWFhLEdBQUcsQ0FBQyxDQUFDQyxJQUFNO2dCQUM3QyxxQkFBTyw4REFBQ0M7b0JBQVdDLFVBQVUsaUJBQWlCRjtvQkFBR0csSUFBSUg7Ozs7OztZQUNyRDtRQUdGLE1BQU1JLFdBQVcsSUFBTWxCLGFBQWFhLEdBQUcsQ0FBQyxDQUFDQyxJQUFNO2dCQUM3QyxxQkFBTyw4REFBQ0s7b0JBQVdILFVBQVUsaUJBQWlCRjtvQkFBR0csSUFBSUg7Ozs7OztZQUNyRDtRQUdGLE1BQU1WLFNBQVNRO1FBRWZSLE9BQU9nQixPQUFPLGVBQUMsOERBQUNMO1lBQVdDLFVBQVU7WUFBcUJDLElBQUk7Ozs7OztRQUM5RGIsT0FBT2lCLElBQUksZUFBQyw4REFBQ047WUFBV0MsVUFBVTtZQUFtQkMsSUFBSTs7Ozs7O1FBRXpEWixVQUFVRDtRQUNWRyxVQUFVVztJQUVaLEdBQUU7UUFBQ2hCO0tBQWE7SUFFaEIsTUFBTWEsYUFBbUMsQ0FBQ08sUUFBVTtRQUNsRCxxQkFDRSw4REFBQ0M7WUFDREMsV0FBVzs7OEJBR1gsOERBQUNEO29CQUFJQyxXQUFVOzs7Ozs7OEJBQ2YsOERBQUNEO29CQUFJQyxXQUFVOzs7Ozs7O1dBSFZGLE1BQU1OLFFBQVE7Ozs7O0lBTXZCO0lBRUEsTUFBTUcsYUFBbUMsQ0FBQ0csUUFBVTtRQUNsRCxxQkFDRSw4REFBQ0c7WUFDQ0MsU0FBUyxVQUFVSixNQUFNTixRQUFRO1lBQ2pDUSxXQUFXLDRHQU9DLE9BRlZ0QixpQkFBaUJvQixNQUFNTCxFQUFFLEdBQzNCLHlEQUNBLFdBQVc7WUFDWEEsSUFBSSxVQUFVSyxNQUFNTixRQUFRO1lBQzVCVyxTQUFTLElBQU14QixnQkFBZ0JtQixNQUFNTCxFQUFFOzs7Ozs7SUFHN0M7SUFHRixrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLCtCQUErQjtJQUUvQixpQ0FBaUM7SUFDakMsK0JBQStCO0lBQy9CLDJCQUEyQjtJQUV6QixTQUFTVyxZQUFZTixLQUF1QixFQUFFO1FBRTVDTyxXQUFXLElBQU07WUFDZnBCLHVCQUF1QixJQUFJO1FBQzdCLEdBQUc7UUFDSG9CLFdBQVcsSUFBTTtZQUNmcEIsdUJBQXVCLEtBQUs7UUFDOUIsR0FBRztRQUVILElBQUlhLFVBQVUsU0FBUztZQUNyQm5CLGdCQUFnQjtZQUNoQjBCLFdBQVcsSUFBTTtnQkFDZjFCLGdCQUFnQjtZQUNsQixHQUFHO1FBRUwsT0FBTztZQUNMQSxnQkFBZ0I7WUFDaEIwQixXQUFXLElBQU07Z0JBQ2YxQixnQkFBZ0I7WUFDbEIsR0FBRztRQUVMLENBQUM7SUFDSDtJQUVBLFNBQVMyQixZQUFZUixLQUF1QixFQUFFO1FBRTVDLElBQUlaLFVBQVU7WUFDWjtRQUNGLENBQUM7UUFFRCxPQUFPWTtZQUVMLEtBQUs7Z0JBQ0hwQixlQUFlLElBQ2ZDLGdCQUFnQkQsZUFBZSxLQUMvQjBCLFlBQVksT0FBTztnQkFDbkIsS0FBTTtZQUVSLEtBQUs7Z0JBQ0gxQixlQUFlLElBQ2ZDLGdCQUFnQkQsZUFBZSxLQUMvQjBCLFlBQVksUUFBUTtRQUN4QjtRQUVBakIsWUFBWSxJQUFJO1FBQ2hCa0IsV0FBVyxJQUFNbEIsWUFBWSxLQUFLLEdBQUc7SUFFdkM7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ1k7WUFBSUMsV0FBVTs7OEJBQ2YsOERBQUNPO29CQUNDUCxXQUFVO29CQU9WRyxTQUFTLElBQU1HLFlBQVk7b0JBQzNCRSxPQUFNO29CQUNOQyxRQUFPO29CQUNQQyxTQUFRO29CQUNSQyxPQUFNOzhCQUNOLDRFQUFDQzt3QkFBS0MsR0FBRTs7Ozs7Ozs7Ozs7OEJBRVIsOERBQUNkO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVcsK0RBR0toQixPQURFQSxzQkFBc0IsU0FBUyxLQUFLLEVBQUMsb0NBSXpDTixPQUhFTSxzQkFBc0IsTUFBTSxLQUFLLEVBQUMsZ0dBR3ZCLE9BQWJOO3NDQUVqQkU7Ozs7OztzQ0FFRiw4REFBQ21COzRCQUFJQyxXQUFVO3NDQUNabEI7Ozs7Ozs7Ozs7Ozs4QkFHTCw4REFBQ3lCO29CQUNDUCxXQUFVO29CQU9WRyxTQUFTLElBQU1HLFlBQVk7b0JBQzNCRSxPQUFNO29CQUNOQyxRQUFPO29CQUNQQyxTQUFRO29CQUNSQyxPQUFNOzhCQUNOLDRFQUFDQzt3QkFBS0MsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xCO0dBeEtNcEM7S0FBQUE7QUEwS04sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvaG9tZS9TbGlkZXIudHN4PzI0MGYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIHNsaWRlckVsZW0ge1xuICBrZXlWYWx1ZTogc3RyaW5nLFxuICBpZDogbnVtYmVyLFxufVxuXG5jb25zdCBzbGlkZXJJbWFnZXMgPSBbXG4gIDEsIDIsIDMsIDQsIDVcbl1cblxuY29uc3QgU2xpZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGU8SlNYLkVsZW1lbnRbXT4oKTtcbiAgY29uc3QgW2xhYmVscywgc2V0TGFiZWxzXSA9IHVzZVN0YXRlPEpTWC5FbGVtZW50W10+KCk7XG4gIGNvbnN0IFtpc1RyYW5zaXRpb25CbG9ja2VkLCBzZXRJc1RyYW5zaXRpb25CbG9ja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Rpc2FibGVkLCBzZXREaXNhYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgY29uc3QgaW1hZ2VBcnIgPSAoKSA9PiBzbGlkZXJJbWFnZXMubWFwKCh4KSA9PiB7XG4gICAgICByZXR1cm4oPEltYWdlU2xpZGUga2V5VmFsdWU9eydpbWFnZS1zbGlkZS0nICsgeH0gaWQ9e3h9IC8+KVxuICAgICAgfVxuICAgIClcbiAgXG4gICAgY29uc3QgbGFiZWxBcnIgPSAoKSA9PiBzbGlkZXJJbWFnZXMubWFwKCh4KSA9PiB7XG4gICAgICByZXR1cm4oPFNsaWRlTGFiZWwga2V5VmFsdWU9eydsYWJlbC1zbGlkZS0nICsgeH0gaWQ9e3h9IC8+KVxuICAgICAgfVxuICAgIClcblxuICAgIGNvbnN0IGltYWdlcyA9IGltYWdlQXJyKClcblxuICAgIGltYWdlcy51bnNoaWZ0KDxJbWFnZVNsaWRlIGtleVZhbHVlPXsnaW1hZ2Utc2xpZGUtc3RhcnQnfSBpZD17NX0gLz4pXG4gICAgaW1hZ2VzLnB1c2goPEltYWdlU2xpZGUga2V5VmFsdWU9eydsYWJlbC1zbGlkZS1lbmQnfSBpZD17MX0gLz4pXG5cbiAgICBzZXRJbWFnZXMoaW1hZ2VzKVxuICAgIHNldExhYmVscyhsYWJlbEFycigpKVxuXG4gIH0sW2N1cnJlbnRTbGlkZV0pXG4gIFxuICBjb25zdCBJbWFnZVNsaWRlOiBSZWFjdC5GQzxzbGlkZXJFbGVtPiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgXG4gICAgICBjbGFzc05hbWU9eydmbGV4IGZsZXgtcm93IG1pbi13LVs2MDBweF0gaC1bNDAwcHhdJ31cbiAgICAgIGtleT17cHJvcHMua2V5VmFsdWV9XG4gICAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJlZC00MDAgdy0xLzIgbWluLWgtZnVsbFwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy15ZWxsb3ctMzAwIHctMS8yIG1pbi1oLWZ1bGxcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApXG4gIH1cbiAgXG4gIGNvbnN0IFNsaWRlTGFiZWw6IFJlYWN0LkZDPHNsaWRlckVsZW0+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgPGxhYmVsIFxuICAgICAgICBodG1sRm9yPXsncmFkaW8nICsgcHJvcHMua2V5VmFsdWV9IFxuICAgICAgICBjbGFzc05hbWU9e2BcbiAgICAgICAgaW5saW5lLWJsb2NrIFxuICAgICAgICB3LTIgbWluLWgtWzhweF0gXG4gICAgICAgIHJvdW5kZWQtZnVsbCBcbiAgICAgIGhvdmVyOmJnLWJhc2UtMVxuICAgICAgICAke2N1cnJlbnRTbGlkZSA9PT0gcHJvcHMuaWQgPyBcbiAgICAgICAgJ2JnLWJhc2UtMSBhbmltYXRlLVtzbGlkZXJfMC4zc19lYXNlLWluLW91dF9mb3J3YXJkc10nIDogXG4gICAgICAgICdiZy1iYXNlLTMnfWB9XG4gICAgICAgIGlkPXsncmFkaW8nICsgcHJvcHMua2V5VmFsdWV9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRTbGlkZShwcm9wcy5pZCl9XG4gICAgICAgID48L2xhYmVsPlxuICAgICAgKVxuICB9XG5cblxuLy8gY29uc3QgaW1hZ2VGaXJzdCA9IGltYWdlQXJyWy0xXVxuLy8gY29uc3QgaW1hZ2VGaXJzdCA9IGltYWdlQXJyWy0xXVxuLy8gaW1hZ2VBcnIudW5zaGlmdChpbWFnZUZpcnN0KVxuXG4vLyBjb25zdCBpbWFnZUxhc3QgID0gaW1hZ2VBcnJbMV1cbi8vIGltYWdlTGFzdC5rZXkgPSAnbGFzdC1zbGlkZSdcbi8vIGltYWdlQXJyLnB1c2goaW1hZ2VMYXN0KVxuXG4gIGZ1bmN0aW9uIHJlc2V0U2xpZGVyKHByb3BzOiAnZmlyc3QnIHwgJ2xhc3QnKSB7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldElzVHJhbnNpdGlvbkJsb2NrZWQodHJ1ZSk7XG4gICAgfSwgMzAwKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNUcmFuc2l0aW9uQmxvY2tlZChmYWxzZSk7XG4gICAgfSwgNTAwKVxuXG4gICAgaWYgKHByb3BzID09PSAnZmlyc3QnKSB7XG4gICAgICBzZXRDdXJyZW50U2xpZGUoNik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFNsaWRlKDEpO1xuICAgICAgfSwgMzAwKVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEN1cnJlbnRTbGlkZSgwKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50U2xpZGUoNSk7XG4gICAgICB9LCAzMDApXG5cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhwcm9wczogJ2xlZnQnIHwgJ3JpZ2h0Jykge1xuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzd2l0Y2gocHJvcHMpIHtcblxuICAgICAgY2FzZSAnbGVmdCc6IFxuICAgICAgICBjdXJyZW50U2xpZGUgPiAxID8gXG4gICAgICAgIHNldEN1cnJlbnRTbGlkZShjdXJyZW50U2xpZGUgLSAxKSA6IFxuICAgICAgICByZXNldFNsaWRlcignbGFzdCcpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncmlnaHQnOiBcbiAgICAgICAgY3VycmVudFNsaWRlIDwgNSA/IFxuICAgICAgICBzZXRDdXJyZW50U2xpZGUoY3VycmVudFNsaWRlICsgMSkgOiBcbiAgICAgICAgcmVzZXRTbGlkZXIoJ2ZpcnN0Jyk7XG4gICAgfVxuXG4gICAgc2V0RGlzYWJsZWQodHJ1ZSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldERpc2FibGVkKGZhbHNlKSwgNTAwKVxuICAgIFxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICA8c3ZnIFxuICAgICAgICBjbGFzc05hbWU9XCJcbiAgICAgICAgICBmaWxsLWJhc2UtMyBcbiAgICAgICAgICBjdXJzb3ItcG9pbnRlciBcbiAgICAgICAgICBkdXJhdGlvbi0xNTAgXG4gICAgICAgICAgZWFzZS1pbi1vdXQgXG4gICAgICAgICAgaG92ZXI6ZmlsbC1iYXNlLTEgXG4gICAgICAgICAgaG92ZXI6c2NhbGUtMTI1XCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soJ2xlZnQnKX1cbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIFxuICAgICAgICBoZWlnaHQ9XCI0OFwiIFxuICAgICAgICB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCIgXG4gICAgICAgIHdpZHRoPVwiNDhcIj5cbiAgICAgICAgPHBhdGggZD1cIk01NjEgODE2IDMyMCA1NzVsMjQxLTI0MSA0MyA0My0xOTggMTk4IDE5OCAxOTgtNDMgNDNaXCIvPlxuICAgICAgPC9zdmc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiB3LVs2MDBweF0gaC1bNDAwcHhdIHJvdW5kZWQtMnhsIHotMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgXG4gICAgICAgICAgICAgICAgICAgIGZsZXggXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tJHtpc1RyYW5zaXRpb25CbG9ja2VkID8gJ25vbmUnIDogJ2FsbCd9IFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbi0ke2lzVHJhbnNpdGlvbkJsb2NrZWQgPyAnMCcgOiAnMzAwJ31cbiAgICAgICAgICAgICAgICAgICAgdy1bNjAwcHhdIFxuICAgICAgICAgICAgICAgICAgICBoLVs0MDBweF1cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyLSR7Y3VycmVudFNsaWRlfWBcbiAgICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgIHtpbWFnZXN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMyBmbGV4IGdhcC0zIGp1c3RpZnktY2VudGVyIHctWzYwMHB4XVwiPlxuICAgICAgICAgICAge2xhYmVsc31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdmcgXG4gICAgICAgICAgY2xhc3NOYW1lPVwiXG4gICAgICAgICAgICBmaWxsLWJhc2UtMyBcbiAgICAgICAgICAgIGN1cnNvci1wb2ludGVyIFxuICAgICAgICAgICAgZHVyYXRpb24tMTUwIFxuICAgICAgICAgICAgZWFzZS1pbi1vdXQgXG4gICAgICAgICAgICBob3ZlcjpmaWxsLWJhc2UtMSBcbiAgICAgICAgICAgIGhvdmVyOnNjYWxlLTEyNVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soJ3JpZ2h0Jyl9XG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIFxuICAgICAgICAgIGhlaWdodD1cIjQ4XCIgXG4gICAgICAgICAgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiIFxuICAgICAgICAgIHdpZHRoPVwiNDhcIj5cbiAgICAgICAgICA8cGF0aCBkPVwibTM3NSA4MTYtNDMtNDMgMTk4LTE5OC0xOTgtMTk4IDQzLTQzIDI0MSAyNDEtMjQxIDI0MVpcIi8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic2xpZGVySW1hZ2VzIiwiU2xpZGVyIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwibGFiZWxzIiwic2V0TGFiZWxzIiwiaXNUcmFuc2l0aW9uQmxvY2tlZCIsInNldElzVHJhbnNpdGlvbkJsb2NrZWQiLCJkaXNhYmxlZCIsInNldERpc2FibGVkIiwiaW1hZ2VBcnIiLCJtYXAiLCJ4IiwiSW1hZ2VTbGlkZSIsImtleVZhbHVlIiwiaWQiLCJsYWJlbEFyciIsIlNsaWRlTGFiZWwiLCJ1bnNoaWZ0IiwicHVzaCIsInByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJodG1sRm9yIiwib25DbGljayIsInJlc2V0U2xpZGVyIiwic2V0VGltZW91dCIsImhhbmRsZUNsaWNrIiwic3ZnIiwieG1sbnMiLCJoZWlnaHQiLCJ2aWV3Qm94Iiwid2lkdGgiLCJwYXRoIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/components/home/Slider.tsx\n"));

/***/ })

});