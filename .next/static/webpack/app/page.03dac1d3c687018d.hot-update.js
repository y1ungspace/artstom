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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst sliderImages = [\n    \"fff\",\n    \"fff\",\n    \"fff\",\n    \"fff\",\n    \"fff\"\n];\nconst Slider = ()=>{\n    _s();\n    const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [isTransitionBlocked, setIsTransitionBlocked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const imageArr = [];\n    const labelArr = [];\n    const ImageSlide = (props)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex min-w-[600px] h-[400px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-red-400 w-1/2 min-h-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-yellow-300 w-1/2 min-h-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, props.key, true, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined);\n    };\n    const SlideLabel = (props)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            htmlFor: \"radio\" + props.key,\n            className: \"\\n        inline-block \\n        w-2 min-h-[8px] \\n        rounded-full \\n      hover:bg-base-1\\n        \".concat(currentSlide === props.key ? \"bg-base-1 animate-[slider_0.3s_ease-in-out_forwards]\" : \"bg-base-3\"),\n            onClick: ()=>setCurrentSlide(props.key)\n        }, \"radio\" + props.key, false, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined);\n    };\n    for(let i = 1; i <= sliderImages.length; i++){\n        imageArr.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageSlide, {}, i, false, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 48,\n            columnNumber: 19\n        }, undefined));\n        labelArr.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SliderLabel, {}, i, false, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 49,\n            columnNumber: 19\n        }, undefined));\n    }\n    // const imageFirst = imageArr[-1]\n    // const imageFirst = imageArr[-1]\n    // imageArr.unshift(imageFirst)\n    // const imageLast  = imageArr[1]\n    // imageLast.key = 'last-slide'\n    // imageArr.push(imageLast)\n    function resetSlider(props) {\n        setTimeout(()=>{\n            setIsTransitionBlocked(true);\n        }, 300);\n        setTimeout(()=>{\n            setIsTransitionBlocked(false);\n        }, 500);\n        if (props === \"first\") {\n            setCurrentSlide(6);\n            setTimeout(()=>{\n                setCurrentSlide(1);\n            }, 300);\n        } else {\n            setCurrentSlide(0);\n            setTimeout(()=>{\n                setCurrentSlide(5);\n            }, 300);\n        }\n    }\n    function handleClick(props) {\n        if (disabled) {\n            return;\n        }\n        switch(props){\n            case \"left\":\n                currentSlide > 1 ? setCurrentSlide(currentSlide - 1) : resetSlider(\"last\");\n                break;\n            case \"right\":\n                currentSlide < 5 ? setCurrentSlide(currentSlide + 1) : resetSlider(\"first\");\n        }\n        setDisabled(true);\n        setTimeout(()=>setDisabled(false), 500);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \" fill-base-3  cursor-pointer  duration-150  ease-in-out  hover:fill-base-1  hover:scale-125\",\n                    onClick: ()=>handleClick(\"left\"),\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    height: \"48\",\n                    viewBox: \"0 96 960 960\",\n                    width: \"48\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container relative overflow-hidden w-[600px] h-[400px] rounded-2xl z-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\\n                    flex \\n                    transition-\".concat(isTransitionBlocked ? \"none\" : \"all\", \" \\n                    duration-\").concat(isTransitionBlocked ? \"0\" : \"300\", \"\\n                    w-[600px] \\n                    h-[400px]\\n                    slider-\").concat(currentSlide),\n                            children: imageArr\n                        }, void 0, false, {\n                            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                            lineNumber: 128,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bottom-3 flex gap-3 justify-center w-[600px]\",\n                            children: labelArr\n                        }, void 0, false, {\n                            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                            lineNumber: 138,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \" fill-base-3  cursor-pointer  duration-150  ease-in-out  hover:fill-base-1  hover:scale-125\",\n                    onClick: ()=>handleClick(\"right\"),\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    height: \"48\",\n                    viewBox: \"0 96 960 960\",\n                    width: \"48\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                        lineNumber: 155,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 142,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 111,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Slider, \"Kyc0HW1TDLGBtRy6AofgfQTw3qk=\");\n_c = Slider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvaG9tZS9TbGlkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUU0QztBQUU1QyxNQUFNQyxlQUFlO0lBQ25CO0lBQU87SUFBTztJQUFPO0lBQU87Q0FDN0I7QUFFRCxNQUFNQyxTQUFtQixJQUFNOztJQUM3QixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHSiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNLLHFCQUFxQkMsdUJBQXVCLEdBQUdOLCtDQUFRQSxDQUFDLEtBQUs7SUFDcEUsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDLEtBQUs7SUFFOUMsTUFBTVMsV0FBZSxFQUFFO0lBQ3ZCLE1BQU1DLFdBQWUsRUFBRTtJQUV2QixNQUFNQyxhQUF5QyxDQUFDQyxRQUFVO1FBQ3hELHFCQUNFLDhEQUFDQztZQUNEQyxXQUFXOzs4QkFHWCw4REFBQ0Q7b0JBQUlDLFdBQVU7Ozs7Ozs4QkFDZiw4REFBQ0Q7b0JBQUlDLFdBQVU7Ozs7Ozs7V0FIVkYsTUFBTUcsR0FBRzs7Ozs7SUFNbEI7SUFFQSxNQUFNQyxhQUF3QyxDQUFDSixRQUFVO1FBQ3ZELHFCQUNFLDhEQUFDSztZQUNDQyxTQUFTLFVBQVVOLE1BQU1HLEdBQUc7WUFDNUJELFdBQVcsNEdBT0MsT0FGVlgsaUJBQWlCUyxNQUFNRyxHQUFHLEdBQzVCLHlEQUNBLFdBQVc7WUFFWEksU0FBUyxJQUFNZixnQkFBZ0JRLE1BQU1HLEdBQUc7V0FEbkMsVUFBVUgsTUFBTUcsR0FBRzs7Ozs7SUFJOUI7SUFFQSxJQUFLLElBQUlLLElBQUksR0FBR0EsS0FBS25CLGFBQWFvQixNQUFNLEVBQUVELElBQUs7UUFDN0NYLFNBQVNhLElBQUksZUFBQyw4REFBQ1gsZ0JBQWdCUzs7Ozs7UUFDL0JWLFNBQVNZLElBQUksZUFBQyw4REFBQ0MsaUJBQWlCSDs7Ozs7SUFDbEM7SUFFRixrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLCtCQUErQjtJQUUvQixpQ0FBaUM7SUFDakMsK0JBQStCO0lBQy9CLDJCQUEyQjtJQUV6QixTQUFTSSxZQUFZWixLQUF1QixFQUFFO1FBRTVDYSxXQUFXLElBQU07WUFDZm5CLHVCQUF1QixJQUFJO1FBQzdCLEdBQUc7UUFDSG1CLFdBQVcsSUFBTTtZQUNmbkIsdUJBQXVCLEtBQUs7UUFDOUIsR0FBRztRQUVILElBQUlNLFVBQVUsU0FBUztZQUNyQlIsZ0JBQWdCO1lBQ2hCcUIsV0FBVyxJQUFNO2dCQUNmckIsZ0JBQWdCO1lBQ2xCLEdBQUc7UUFFTCxPQUFPO1lBQ0xBLGdCQUFnQjtZQUNoQnFCLFdBQVcsSUFBTTtnQkFDZnJCLGdCQUFnQjtZQUNsQixHQUFHO1FBRUwsQ0FBQztJQUNIO0lBRUEsU0FBU3NCLFlBQVlkLEtBQXVCLEVBQUU7UUFFNUMsSUFBSUwsVUFBVTtZQUNaO1FBQ0YsQ0FBQztRQUVELE9BQU9LO1lBRUwsS0FBSztnQkFDSFQsZUFBZSxJQUNmQyxnQkFBZ0JELGVBQWUsS0FDL0JxQixZQUFZLE9BQU87Z0JBQ25CLEtBQU07WUFFUixLQUFLO2dCQUNIckIsZUFBZSxJQUNmQyxnQkFBZ0JELGVBQWUsS0FDL0JxQixZQUFZLFFBQVE7UUFDeEI7UUFFQWhCLFlBQVksSUFBSTtRQUNoQmlCLFdBQVcsSUFBTWpCLFlBQVksS0FBSyxHQUFHO0lBRXZDO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNLO1lBQUlDLFdBQVU7OzhCQUNmLDhEQUFDYTtvQkFDQ2IsV0FBVTtvQkFPVkssU0FBUyxJQUFNTyxZQUFZO29CQUMzQkUsT0FBTTtvQkFDTkMsUUFBTztvQkFDUEMsU0FBUTtvQkFDUkMsT0FBTTs4QkFDTiw0RUFBQ0M7d0JBQUtDLEdBQUU7Ozs7Ozs7Ozs7OzhCQUVSLDhEQUFDcEI7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVywrREFHS1QsT0FERUEsc0JBQXNCLFNBQVMsS0FBSyxFQUFDLG9DQUl6Q0YsT0FIRUUsc0JBQXNCLE1BQU0sS0FBSyxFQUFDLGdHQUd2QixPQUFiRjtzQ0FFakJNOzs7Ozs7c0NBRUYsOERBQUNJOzRCQUFJQyxXQUFVO3NDQUNaSjs7Ozs7Ozs7Ozs7OzhCQUdMLDhEQUFDaUI7b0JBQ0NiLFdBQVU7b0JBT1ZLLFNBQVMsSUFBTU8sWUFBWTtvQkFDM0JFLE9BQU07b0JBQ05DLFFBQU87b0JBQ1BDLFNBQVE7b0JBQ1JDLE9BQU07OEJBQ04sNEVBQUNDO3dCQUFLQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEI7R0F2Sk0vQjtLQUFBQTtBQXlKTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9ob21lL1NsaWRlci50c3g/MjQwZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBzbGlkZXJJbWFnZXMgPSBbXG4gICdmZmYnLCAnZmZmJywgJ2ZmZicsICdmZmYnLCAnZmZmJ1xuXVxuXG5jb25zdCBTbGlkZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGVdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtpc1RyYW5zaXRpb25CbG9ja2VkLCBzZXRJc1RyYW5zaXRpb25CbG9ja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Rpc2FibGVkLCBzZXREaXNhYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaW1hZ2VBcnI6IFtdID0gW11cbiAgY29uc3QgbGFiZWxBcnI6IFtdID0gW11cbiAgXG4gIGNvbnN0IEltYWdlU2xpZGU6IFJlYWN0LkZDPHsga2V5OiBudW1iZXIgfSA+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBcbiAgICAgIGNsYXNzTmFtZT17J2ZsZXggbWluLXctWzYwMHB4XSBoLVs0MDBweF0nfVxuICAgICAga2V5PXtwcm9wcy5rZXl9XG4gICAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJlZC00MDAgdy0xLzIgbWluLWgtZnVsbFwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy15ZWxsb3ctMzAwIHctMS8yIG1pbi1oLWZ1bGxcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApXG4gIH1cbiAgXG4gIGNvbnN0IFNsaWRlTGFiZWw6IFJlYWN0LkZDPHsga2V5OiBudW1iZXIgfT4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICA8bGFiZWwgXG4gICAgICAgIGh0bWxGb3I9eydyYWRpbycgKyBwcm9wcy5rZXl9IFxuICAgICAgICBjbGFzc05hbWU9e2BcbiAgICAgICAgaW5saW5lLWJsb2NrIFxuICAgICAgICB3LTIgbWluLWgtWzhweF0gXG4gICAgICAgIHJvdW5kZWQtZnVsbCBcbiAgICAgIGhvdmVyOmJnLWJhc2UtMVxuICAgICAgICAke2N1cnJlbnRTbGlkZSA9PT0gcHJvcHMua2V5ID8gXG4gICAgICAgICdiZy1iYXNlLTEgYW5pbWF0ZS1bc2xpZGVyXzAuM3NfZWFzZS1pbi1vdXRfZm9yd2FyZHNdJyA6IFxuICAgICAgICAnYmctYmFzZS0zJ31gfVxuICAgICAgICBrZXk9eydyYWRpbycgKyBwcm9wcy5rZXl9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRTbGlkZShwcm9wcy5rZXkpfVxuICAgICAgICA+PC9sYWJlbD5cbiAgICAgIClcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHNsaWRlckltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgIGltYWdlQXJyLnB1c2goPEltYWdlU2xpZGUga2V5PXtpfSAvPilcbiAgICBsYWJlbEFyci5wdXNoKDxTbGlkZXJMYWJlbCBrZXk9e2l9IC8+KVxuICB9XG5cbi8vIGNvbnN0IGltYWdlRmlyc3QgPSBpbWFnZUFyclstMV1cbi8vIGNvbnN0IGltYWdlRmlyc3QgPSBpbWFnZUFyclstMV1cbi8vIGltYWdlQXJyLnVuc2hpZnQoaW1hZ2VGaXJzdClcblxuLy8gY29uc3QgaW1hZ2VMYXN0ICA9IGltYWdlQXJyWzFdXG4vLyBpbWFnZUxhc3Qua2V5ID0gJ2xhc3Qtc2xpZGUnXG4vLyBpbWFnZUFyci5wdXNoKGltYWdlTGFzdClcblxuICBmdW5jdGlvbiByZXNldFNsaWRlcihwcm9wczogJ2ZpcnN0JyB8ICdsYXN0Jykge1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRJc1RyYW5zaXRpb25CbG9ja2VkKHRydWUpO1xuICAgIH0sIDMwMClcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldElzVHJhbnNpdGlvbkJsb2NrZWQoZmFsc2UpO1xuICAgIH0sIDUwMClcblxuICAgIGlmIChwcm9wcyA9PT0gJ2ZpcnN0Jykge1xuICAgICAgc2V0Q3VycmVudFNsaWRlKDYpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRTbGlkZSgxKTtcbiAgICAgIH0sIDMwMClcblxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRDdXJyZW50U2xpZGUoMCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFNsaWRlKDUpO1xuICAgICAgfSwgMzAwKVxuXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2socHJvcHM6ICdsZWZ0JyB8ICdyaWdodCcpIHtcblxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc3dpdGNoKHByb3BzKSB7XG5cbiAgICAgIGNhc2UgJ2xlZnQnOiBcbiAgICAgICAgY3VycmVudFNsaWRlID4gMSA/IFxuICAgICAgICBzZXRDdXJyZW50U2xpZGUoY3VycmVudFNsaWRlIC0gMSkgOiBcbiAgICAgICAgcmVzZXRTbGlkZXIoJ2xhc3QnKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3JpZ2h0JzogXG4gICAgICAgIGN1cnJlbnRTbGlkZSA8IDUgPyBcbiAgICAgICAgc2V0Q3VycmVudFNsaWRlKGN1cnJlbnRTbGlkZSArIDEpIDogXG4gICAgICAgIHJlc2V0U2xpZGVyKCdmaXJzdCcpO1xuICAgIH1cblxuICAgIHNldERpc2FibGVkKHRydWUpXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXREaXNhYmxlZChmYWxzZSksIDUwMClcbiAgICBcbiAgfVxuXG4gIHJldHVybihcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPHN2ZyBcbiAgICAgICAgY2xhc3NOYW1lPVwiXG4gICAgICAgICAgZmlsbC1iYXNlLTMgXG4gICAgICAgICAgY3Vyc29yLXBvaW50ZXIgXG4gICAgICAgICAgZHVyYXRpb24tMTUwIFxuICAgICAgICAgIGVhc2UtaW4tb3V0IFxuICAgICAgICAgIGhvdmVyOmZpbGwtYmFzZS0xIFxuICAgICAgICAgIGhvdmVyOnNjYWxlLTEyNVwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCdsZWZ0Jyl9XG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBcbiAgICAgICAgaGVpZ2h0PVwiNDhcIiBcbiAgICAgICAgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiIFxuICAgICAgICB3aWR0aD1cIjQ4XCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNNTYxIDgxNiAzMjAgNTc1bDI0MS0yNDEgNDMgNDMtMTk4IDE5OCAxOTggMTk4LTQzIDQzWlwiLz5cbiAgICAgIDwvc3ZnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gdy1bNjAwcHhdIGgtWzQwMHB4XSByb3VuZGVkLTJ4bCB6LTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YFxuICAgICAgICAgICAgICAgICAgICBmbGV4IFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLSR7aXNUcmFuc2l0aW9uQmxvY2tlZCA/ICdub25lJyA6ICdhbGwnfSBcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24tJHtpc1RyYW5zaXRpb25CbG9ja2VkID8gJzAnIDogJzMwMCd9XG4gICAgICAgICAgICAgICAgICAgIHctWzYwMHB4XSBcbiAgICAgICAgICAgICAgICAgICAgaC1bNDAwcHhdXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlci0ke2N1cnJlbnRTbGlkZX1gXG4gICAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICB7aW1hZ2VBcnJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMyBmbGV4IGdhcC0zIGp1c3RpZnktY2VudGVyIHctWzYwMHB4XVwiPlxuICAgICAgICAgICAge2xhYmVsQXJyfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN2ZyBcbiAgICAgICAgICBjbGFzc05hbWU9XCJcbiAgICAgICAgICAgIGZpbGwtYmFzZS0zIFxuICAgICAgICAgICAgY3Vyc29yLXBvaW50ZXIgXG4gICAgICAgICAgICBkdXJhdGlvbi0xNTAgXG4gICAgICAgICAgICBlYXNlLWluLW91dCBcbiAgICAgICAgICAgIGhvdmVyOmZpbGwtYmFzZS0xIFxuICAgICAgICAgICAgaG92ZXI6c2NhbGUtMTI1XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygncmlnaHQnKX1cbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgXG4gICAgICAgICAgaGVpZ2h0PVwiNDhcIiBcbiAgICAgICAgICB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCIgXG4gICAgICAgICAgd2lkdGg9XCI0OFwiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJtMzc1IDgxNi00My00MyAxOTgtMTk4LTE5OC0xOTggNDMtNDMgMjQxIDI0MS0yNDEgMjQxWlwiLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXIiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzbGlkZXJJbWFnZXMiLCJTbGlkZXIiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJpc1RyYW5zaXRpb25CbG9ja2VkIiwic2V0SXNUcmFuc2l0aW9uQmxvY2tlZCIsImRpc2FibGVkIiwic2V0RGlzYWJsZWQiLCJpbWFnZUFyciIsImxhYmVsQXJyIiwiSW1hZ2VTbGlkZSIsInByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIiwia2V5IiwiU2xpZGVMYWJlbCIsImxhYmVsIiwiaHRtbEZvciIsIm9uQ2xpY2siLCJpIiwibGVuZ3RoIiwicHVzaCIsIlNsaWRlckxhYmVsIiwicmVzZXRTbGlkZXIiLCJzZXRUaW1lb3V0IiwiaGFuZGxlQ2xpY2siLCJzdmciLCJ4bWxucyIsImhlaWdodCIsInZpZXdCb3giLCJ3aWR0aCIsInBhdGgiLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/components/home/Slider.tsx\n"));

/***/ })

});