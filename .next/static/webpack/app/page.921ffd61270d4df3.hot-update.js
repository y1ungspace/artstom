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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst sliderImages = [\n    1,\n    2,\n    3,\n    4,\n    5\n];\nconst Slider = ()=>{\n    _s();\n    const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [labels, setLabels] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [isTransitionBlocked, setIsTransitionBlocked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const imageArr = ()=>sliderImages.map((x)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageSlide, {\n                    keyValue: x\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 14\n                }, undefined);\n            });\n        const labelArr = ()=>sliderImages.map((x)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SlideLabel, {\n                    keyValue: x\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 14\n                }, undefined);\n            });\n        const test = imageArr();\n        setImages(test);\n        setLabels(labelArr());\n        // images.unshift(<ImageSlide keyValue={50} />)\n        // images.push(<ImageSlide keyValue={100} />)\n        console.log(images);\n    });\n    const ImageSlide = (props)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row min-w-[600px] h-[400px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-red-400 w-1/2 min-h-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-yellow-300 w-1/2 min-h-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, props.keyValue, true, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, undefined);\n    };\n    const SlideLabel = (props)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            htmlFor: \"radio\" + props.keyValue,\n            className: \"\\n        inline-block \\n        w-2 min-h-[8px] \\n        rounded-full \\n      hover:bg-base-1\\n        \".concat(currentSlide === props.keyValue ? \"bg-base-1 animate-[slider_0.3s_ease-in-out_forwards]\" : \"bg-base-3\"),\n            id: \"radio\" + props.keyValue,\n            onClick: ()=>setCurrentSlide(props.keyValue)\n        }, void 0, false, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, undefined);\n    };\n    // const imageFirst = imageArr[-1]\n    // const imageFirst = imageArr[-1]\n    // imageArr.unshift(imageFirst)\n    // const imageLast  = imageArr[1]\n    // imageLast.key = 'last-slide'\n    // imageArr.push(imageLast)\n    function resetSlider(props) {\n        setTimeout(()=>{\n            setIsTransitionBlocked(true);\n        }, 300);\n        setTimeout(()=>{\n            setIsTransitionBlocked(false);\n        }, 500);\n        if (props === \"first\") {\n            setCurrentSlide(6);\n            setTimeout(()=>{\n                setCurrentSlide(1);\n            }, 300);\n        } else {\n            setCurrentSlide(0);\n            setTimeout(()=>{\n                setCurrentSlide(5);\n            }, 300);\n        }\n    }\n    function handleClick(props) {\n        if (disabled) {\n            return;\n        }\n        switch(props){\n            case \"left\":\n                currentSlide > 1 ? setCurrentSlide(currentSlide - 1) : resetSlider(\"last\");\n                break;\n            case \"right\":\n                currentSlide < 5 ? setCurrentSlide(currentSlide + 1) : resetSlider(\"first\");\n        }\n        setDisabled(true);\n        setTimeout(()=>setDisabled(false), 500);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \" fill-base-3  cursor-pointer  duration-150  ease-in-out  hover:fill-base-1  hover:scale-125\",\n                    onClick: ()=>handleClick(\"left\"),\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    height: \"48\",\n                    viewBox: \"0 96 960 960\",\n                    width: \"48\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                        lineNumber: 143,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 130,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container relative overflow-hidden w-[600px] h-[400px] rounded-2xl z-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\\n                    flex \\n                    transition-\".concat(isTransitionBlocked ? \"none\" : \"all\", \" \\n                    duration-\").concat(isTransitionBlocked ? \"0\" : \"300\", \"\\n                    w-[600px] \\n                    h-[400px]\\n                    slider-\").concat(currentSlide),\n                            children: images\n                        }, void 0, false, {\n                            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                            lineNumber: 146,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bottom-3 flex gap-3 justify-center w-[600px]\",\n                            children: labels\n                        }, void 0, false, {\n                            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                            lineNumber: 156,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 145,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \" fill-base-3  cursor-pointer  duration-150  ease-in-out  hover:fill-base-1  hover:scale-125\",\n                    onClick: ()=>handleClick(\"right\"),\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    height: \"48\",\n                    viewBox: \"0 96 960 960\",\n                    width: \"48\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                        lineNumber: 173,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 160,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 129,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Slider, \"LB2TQIcUu4MSfXgP+6yDIP/xZl0=\");\n_c = Slider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvaG9tZS9TbGlkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUU0QztBQUU1QyxNQUFNRSxlQUFlO0lBQ25CO0lBQUc7SUFBRztJQUFHO0lBQUc7Q0FDYjtBQUVELE1BQU1DLFNBQW1CLElBQU07O0lBQzdCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ0ssUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUE7SUFDcEMsTUFBTSxDQUFDTyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQTtJQUNwQyxNQUFNLENBQUNTLHFCQUFxQkMsdUJBQXVCLEdBQUdWLCtDQUFRQSxDQUFDLEtBQUs7SUFDcEUsTUFBTSxDQUFDVyxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUFDLEtBQUs7SUFFOUNELGdEQUFTQSxDQUFDLElBQU07UUFFZCxNQUFNYyxXQUFXLElBQU1aLGFBQWFhLEdBQUcsQ0FBQyxDQUFDQyxJQUFNO2dCQUM3QyxxQkFBTyw4REFBQ0M7b0JBQVdDLFVBQVVGOzs7Ozs7WUFDN0I7UUFHRixNQUFNRyxXQUFXLElBQU1qQixhQUFhYSxHQUFHLENBQUMsQ0FBQ0MsSUFBTTtnQkFDN0MscUJBQU8sOERBQUNJO29CQUFXRixVQUFVRjs7Ozs7O1lBQzdCO1FBR0YsTUFBTUssT0FBT1A7UUFFYlAsVUFBVWM7UUFDVlosVUFBVVU7UUFFViwrQ0FBK0M7UUFDL0MsNkNBQTZDO1FBRTdDRyxRQUFRQyxHQUFHLENBQUNqQjtJQUNkO0lBRUEsTUFBTVcsYUFBNkMsQ0FBQ08sUUFBVTtRQUM1RCxxQkFDRSw4REFBQ0M7WUFDREMsV0FBVzs7OEJBR1gsOERBQUNEO29CQUFJQyxXQUFVOzs7Ozs7OEJBQ2YsOERBQUNEO29CQUFJQyxXQUFVOzs7Ozs7O1dBSFZGLE1BQU1OLFFBQVE7Ozs7O0lBTXZCO0lBRUEsTUFBTUUsYUFBNkMsQ0FBQ0ksUUFBVTtRQUM1RCxxQkFDRSw4REFBQ0c7WUFDQ0MsU0FBUyxVQUFVSixNQUFNTixRQUFRO1lBQ2pDUSxXQUFXLDRHQU9DLE9BRlZ0QixpQkFBaUJvQixNQUFNTixRQUFRLEdBQ2pDLHlEQUNBLFdBQVc7WUFDWFcsSUFBSSxVQUFVTCxNQUFNTixRQUFRO1lBQzVCWSxTQUFTLElBQU16QixnQkFBZ0JtQixNQUFNTixRQUFROzs7Ozs7SUFHbkQ7SUFHRixrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLCtCQUErQjtJQUUvQixpQ0FBaUM7SUFDakMsK0JBQStCO0lBQy9CLDJCQUEyQjtJQUV6QixTQUFTYSxZQUFZUCxLQUF1QixFQUFFO1FBRTVDUSxXQUFXLElBQU07WUFDZnJCLHVCQUF1QixJQUFJO1FBQzdCLEdBQUc7UUFDSHFCLFdBQVcsSUFBTTtZQUNmckIsdUJBQXVCLEtBQUs7UUFDOUIsR0FBRztRQUVILElBQUlhLFVBQVUsU0FBUztZQUNyQm5CLGdCQUFnQjtZQUNoQjJCLFdBQVcsSUFBTTtnQkFDZjNCLGdCQUFnQjtZQUNsQixHQUFHO1FBRUwsT0FBTztZQUNMQSxnQkFBZ0I7WUFDaEIyQixXQUFXLElBQU07Z0JBQ2YzQixnQkFBZ0I7WUFDbEIsR0FBRztRQUVMLENBQUM7SUFDSDtJQUVBLFNBQVM0QixZQUFZVCxLQUF1QixFQUFFO1FBRTVDLElBQUlaLFVBQVU7WUFDWjtRQUNGLENBQUM7UUFFRCxPQUFPWTtZQUVMLEtBQUs7Z0JBQ0hwQixlQUFlLElBQ2ZDLGdCQUFnQkQsZUFBZSxLQUMvQjJCLFlBQVksT0FBTztnQkFDbkIsS0FBTTtZQUVSLEtBQUs7Z0JBQ0gzQixlQUFlLElBQ2ZDLGdCQUFnQkQsZUFBZSxLQUMvQjJCLFlBQVksUUFBUTtRQUN4QjtRQUVBbEIsWUFBWSxJQUFJO1FBQ2hCbUIsV0FBVyxJQUFNbkIsWUFBWSxLQUFLLEdBQUc7SUFFdkM7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ1k7WUFBSUMsV0FBVTs7OEJBQ2YsOERBQUNRO29CQUNDUixXQUFVO29CQU9WSSxTQUFTLElBQU1HLFlBQVk7b0JBQzNCRSxPQUFNO29CQUNOQyxRQUFPO29CQUNQQyxTQUFRO29CQUNSQyxPQUFNOzhCQUNOLDRFQUFDQzt3QkFBS0MsR0FBRTs7Ozs7Ozs7Ozs7OEJBRVIsOERBQUNmO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVcsK0RBR0toQixPQURFQSxzQkFBc0IsU0FBUyxLQUFLLEVBQUMsb0NBSXpDTixPQUhFTSxzQkFBc0IsTUFBTSxLQUFLLEVBQUMsZ0dBR3ZCLE9BQWJOO3NDQUVqQkU7Ozs7OztzQ0FFRiw4REFBQ21COzRCQUFJQyxXQUFVO3NDQUNabEI7Ozs7Ozs7Ozs7Ozs4QkFHTCw4REFBQzBCO29CQUNDUixXQUFVO29CQU9WSSxTQUFTLElBQU1HLFlBQVk7b0JBQzNCRSxPQUFNO29CQUNOQyxRQUFPO29CQUNQQyxTQUFRO29CQUNSQyxPQUFNOzhCQUNOLDRFQUFDQzt3QkFBS0MsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xCO0dBektNckM7S0FBQUE7QUEyS04sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvaG9tZS9TbGlkZXIudHN4PzI0MGYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3Qgc2xpZGVySW1hZ2VzID0gW1xuICAxLCAyLCAzLCA0LCA1XG5dXG5cbmNvbnN0IFNsaWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlPEpTWC5FbGVtZW50W10+KCk7XG4gIGNvbnN0IFtsYWJlbHMsIHNldExhYmVsc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbaXNUcmFuc2l0aW9uQmxvY2tlZCwgc2V0SXNUcmFuc2l0aW9uQmxvY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkaXNhYmxlZCwgc2V0RGlzYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIGNvbnN0IGltYWdlQXJyID0gKCkgPT4gc2xpZGVySW1hZ2VzLm1hcCgoeCkgPT4ge1xuICAgICAgcmV0dXJuKDxJbWFnZVNsaWRlIGtleVZhbHVlPXt4fSAvPilcbiAgICAgIH1cbiAgICApXG4gIFxuICAgIGNvbnN0IGxhYmVsQXJyID0gKCkgPT4gc2xpZGVySW1hZ2VzLm1hcCgoeCkgPT4ge1xuICAgICAgcmV0dXJuKDxTbGlkZUxhYmVsIGtleVZhbHVlPXt4fSAvPilcbiAgICAgIH1cbiAgICApXG5cbiAgICBjb25zdCB0ZXN0ID0gaW1hZ2VBcnIoKVxuXG4gICAgc2V0SW1hZ2VzKHRlc3QpXG4gICAgc2V0TGFiZWxzKGxhYmVsQXJyKCkpXG5cbiAgICAvLyBpbWFnZXMudW5zaGlmdCg8SW1hZ2VTbGlkZSBrZXlWYWx1ZT17NTB9IC8+KVxuICAgIC8vIGltYWdlcy5wdXNoKDxJbWFnZVNsaWRlIGtleVZhbHVlPXsxMDB9IC8+KVxuXG4gICAgY29uc29sZS5sb2coaW1hZ2VzKVxuICB9KVxuICBcbiAgY29uc3QgSW1hZ2VTbGlkZTogUmVhY3QuRkM8eyBrZXlWYWx1ZTogbnVtYmVyIH0+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBcbiAgICAgIGNsYXNzTmFtZT17J2ZsZXggZmxleC1yb3cgbWluLXctWzYwMHB4XSBoLVs0MDBweF0nfVxuICAgICAga2V5PXtwcm9wcy5rZXlWYWx1ZX1cbiAgICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkLTQwMCB3LTEvMiBtaW4taC1mdWxsXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXllbGxvdy0zMDAgdy0xLzIgbWluLWgtZnVsbFwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICBcbiAgY29uc3QgU2xpZGVMYWJlbDogUmVhY3QuRkM8eyBrZXlWYWx1ZTogbnVtYmVyIH0+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgPGxhYmVsIFxuICAgICAgICBodG1sRm9yPXsncmFkaW8nICsgcHJvcHMua2V5VmFsdWV9IFxuICAgICAgICBjbGFzc05hbWU9e2BcbiAgICAgICAgaW5saW5lLWJsb2NrIFxuICAgICAgICB3LTIgbWluLWgtWzhweF0gXG4gICAgICAgIHJvdW5kZWQtZnVsbCBcbiAgICAgIGhvdmVyOmJnLWJhc2UtMVxuICAgICAgICAke2N1cnJlbnRTbGlkZSA9PT0gcHJvcHMua2V5VmFsdWUgPyBcbiAgICAgICAgJ2JnLWJhc2UtMSBhbmltYXRlLVtzbGlkZXJfMC4zc19lYXNlLWluLW91dF9mb3J3YXJkc10nIDogXG4gICAgICAgICdiZy1iYXNlLTMnfWB9XG4gICAgICAgIGlkPXsncmFkaW8nICsgcHJvcHMua2V5VmFsdWV9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRTbGlkZShwcm9wcy5rZXlWYWx1ZSl9XG4gICAgICAgID48L2xhYmVsPlxuICAgICAgKVxuICB9XG5cblxuLy8gY29uc3QgaW1hZ2VGaXJzdCA9IGltYWdlQXJyWy0xXVxuLy8gY29uc3QgaW1hZ2VGaXJzdCA9IGltYWdlQXJyWy0xXVxuLy8gaW1hZ2VBcnIudW5zaGlmdChpbWFnZUZpcnN0KVxuXG4vLyBjb25zdCBpbWFnZUxhc3QgID0gaW1hZ2VBcnJbMV1cbi8vIGltYWdlTGFzdC5rZXkgPSAnbGFzdC1zbGlkZSdcbi8vIGltYWdlQXJyLnB1c2goaW1hZ2VMYXN0KVxuXG4gIGZ1bmN0aW9uIHJlc2V0U2xpZGVyKHByb3BzOiAnZmlyc3QnIHwgJ2xhc3QnKSB7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldElzVHJhbnNpdGlvbkJsb2NrZWQodHJ1ZSk7XG4gICAgfSwgMzAwKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNUcmFuc2l0aW9uQmxvY2tlZChmYWxzZSk7XG4gICAgfSwgNTAwKVxuXG4gICAgaWYgKHByb3BzID09PSAnZmlyc3QnKSB7XG4gICAgICBzZXRDdXJyZW50U2xpZGUoNik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFNsaWRlKDEpO1xuICAgICAgfSwgMzAwKVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEN1cnJlbnRTbGlkZSgwKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50U2xpZGUoNSk7XG4gICAgICB9LCAzMDApXG5cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhwcm9wczogJ2xlZnQnIHwgJ3JpZ2h0Jykge1xuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzd2l0Y2gocHJvcHMpIHtcblxuICAgICAgY2FzZSAnbGVmdCc6IFxuICAgICAgICBjdXJyZW50U2xpZGUgPiAxID8gXG4gICAgICAgIHNldEN1cnJlbnRTbGlkZShjdXJyZW50U2xpZGUgLSAxKSA6IFxuICAgICAgICByZXNldFNsaWRlcignbGFzdCcpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncmlnaHQnOiBcbiAgICAgICAgY3VycmVudFNsaWRlIDwgNSA/IFxuICAgICAgICBzZXRDdXJyZW50U2xpZGUoY3VycmVudFNsaWRlICsgMSkgOiBcbiAgICAgICAgcmVzZXRTbGlkZXIoJ2ZpcnN0Jyk7XG4gICAgfVxuXG4gICAgc2V0RGlzYWJsZWQodHJ1ZSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldERpc2FibGVkKGZhbHNlKSwgNTAwKVxuICAgIFxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICA8c3ZnIFxuICAgICAgICBjbGFzc05hbWU9XCJcbiAgICAgICAgICBmaWxsLWJhc2UtMyBcbiAgICAgICAgICBjdXJzb3ItcG9pbnRlciBcbiAgICAgICAgICBkdXJhdGlvbi0xNTAgXG4gICAgICAgICAgZWFzZS1pbi1vdXQgXG4gICAgICAgICAgaG92ZXI6ZmlsbC1iYXNlLTEgXG4gICAgICAgICAgaG92ZXI6c2NhbGUtMTI1XCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soJ2xlZnQnKX1cbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIFxuICAgICAgICBoZWlnaHQ9XCI0OFwiIFxuICAgICAgICB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCIgXG4gICAgICAgIHdpZHRoPVwiNDhcIj5cbiAgICAgICAgPHBhdGggZD1cIk01NjEgODE2IDMyMCA1NzVsMjQxLTI0MSA0MyA0My0xOTggMTk4IDE5OCAxOTgtNDMgNDNaXCIvPlxuICAgICAgPC9zdmc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiB3LVs2MDBweF0gaC1bNDAwcHhdIHJvdW5kZWQtMnhsIHotMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgXG4gICAgICAgICAgICAgICAgICAgIGZsZXggXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tJHtpc1RyYW5zaXRpb25CbG9ja2VkID8gJ25vbmUnIDogJ2FsbCd9IFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbi0ke2lzVHJhbnNpdGlvbkJsb2NrZWQgPyAnMCcgOiAnMzAwJ31cbiAgICAgICAgICAgICAgICAgICAgdy1bNjAwcHhdIFxuICAgICAgICAgICAgICAgICAgICBoLVs0MDBweF1cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyLSR7Y3VycmVudFNsaWRlfWBcbiAgICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgIHtpbWFnZXN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMyBmbGV4IGdhcC0zIGp1c3RpZnktY2VudGVyIHctWzYwMHB4XVwiPlxuICAgICAgICAgICAge2xhYmVsc31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdmcgXG4gICAgICAgICAgY2xhc3NOYW1lPVwiXG4gICAgICAgICAgICBmaWxsLWJhc2UtMyBcbiAgICAgICAgICAgIGN1cnNvci1wb2ludGVyIFxuICAgICAgICAgICAgZHVyYXRpb24tMTUwIFxuICAgICAgICAgICAgZWFzZS1pbi1vdXQgXG4gICAgICAgICAgICBob3ZlcjpmaWxsLWJhc2UtMSBcbiAgICAgICAgICAgIGhvdmVyOnNjYWxlLTEyNVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soJ3JpZ2h0Jyl9XG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIFxuICAgICAgICAgIGhlaWdodD1cIjQ4XCIgXG4gICAgICAgICAgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiIFxuICAgICAgICAgIHdpZHRoPVwiNDhcIj5cbiAgICAgICAgICA8cGF0aCBkPVwibTM3NSA4MTYtNDMtNDMgMTk4LTE5OC0xOTgtMTk4IDQzLTQzIDI0MSAyNDEtMjQxIDI0MVpcIi8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic2xpZGVySW1hZ2VzIiwiU2xpZGVyIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwibGFiZWxzIiwic2V0TGFiZWxzIiwiaXNUcmFuc2l0aW9uQmxvY2tlZCIsInNldElzVHJhbnNpdGlvbkJsb2NrZWQiLCJkaXNhYmxlZCIsInNldERpc2FibGVkIiwiaW1hZ2VBcnIiLCJtYXAiLCJ4IiwiSW1hZ2VTbGlkZSIsImtleVZhbHVlIiwibGFiZWxBcnIiLCJTbGlkZUxhYmVsIiwidGVzdCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsImlkIiwib25DbGljayIsInJlc2V0U2xpZGVyIiwic2V0VGltZW91dCIsImhhbmRsZUNsaWNrIiwic3ZnIiwieG1sbnMiLCJoZWlnaHQiLCJ2aWV3Qm94Iiwid2lkdGgiLCJwYXRoIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/components/home/Slider.tsx\n"));

/***/ })

});