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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst sliderImages = [\n    1,\n    2,\n    3,\n    4,\n    5\n];\nconst Slider = ()=>{\n    _s();\n    const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [isTransitionBlocked, setIsTransitionBlocked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const ImageSlide = (props)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex min-w-[600px] h-[400px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-red-400 w-1/2 min-h-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-yellow-300 w-1/2 min-h-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, props.keyValue, true, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, undefined);\n    };\n    const SlideLabel = (props)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            htmlFor: \"radio\" + props.keyValue,\n            className: \"\\n        inline-block \\n        w-2 min-h-[8px] \\n        rounded-full \\n      hover:bg-base-1\\n        \".concat(currentSlide === props.keyValue ? \"bg-base-1 animate-[slider_0.3s_ease-in-out_forwards]\" : \"bg-base-3\"),\n            id: \"radio\" + props.keyValue,\n            onClick: ()=>setCurrentSlide(props.keyValue)\n        }, void 0, false, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined);\n    };\n    const imageArr = ()=>sliderImages.map((x)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageSlide, {\n                keyValue: x\n            }, void 0, false, {\n                fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                lineNumber: 49,\n                columnNumber: 12\n            }, undefined);\n        });\n    imageArr.push;\n    const labelArr = ()=>sliderImages.map((x)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SlideLabel, {\n                keyValue: x\n            }, void 0, false, {\n                fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                lineNumber: 56,\n                columnNumber: 12\n            }, undefined);\n        });\n    // const imageFirst = imageArr[-1]\n    // const imageFirst = imageArr[-1]\n    // imageArr.unshift(imageFirst)\n    // const imageLast  = imageArr[1]\n    // imageLast.key = 'last-slide'\n    // imageArr.push(imageLast)\n    function resetSlider(props) {\n        setTimeout(()=>{\n            setIsTransitionBlocked(true);\n        }, 300);\n        setTimeout(()=>{\n            setIsTransitionBlocked(false);\n        }, 500);\n        if (props === \"first\") {\n            setCurrentSlide(6);\n            setTimeout(()=>{\n                setCurrentSlide(1);\n            }, 300);\n        } else {\n            setCurrentSlide(0);\n            setTimeout(()=>{\n                setCurrentSlide(5);\n            }, 300);\n        }\n    }\n    function handleClick(props) {\n        if (disabled) {\n            return;\n        }\n        switch(props){\n            case \"left\":\n                currentSlide > 1 ? setCurrentSlide(currentSlide - 1) : resetSlider(\"last\");\n                break;\n            case \"right\":\n                currentSlide < 5 ? setCurrentSlide(currentSlide + 1) : resetSlider(\"first\");\n        }\n        setDisabled(true);\n        setTimeout(()=>setDisabled(false), 500);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \" fill-base-3  cursor-pointer  duration-150  ease-in-out  hover:fill-base-1  hover:scale-125\",\n                    onClick: ()=>handleClick(\"left\"),\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    height: \"48\",\n                    viewBox: \"0 96 960 960\",\n                    width: \"48\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                        lineNumber: 133,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 120,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container relative overflow-hidden w-[600px] h-[400px] rounded-2xl z-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\\n                    flex \\n                    transition-\".concat(isTransitionBlocked ? \"none\" : \"all\", \" \\n                    duration-\").concat(isTransitionBlocked ? \"0\" : \"300\", \"\\n                    w-[600px] \\n                    h-[400px]\\n                    slider-\").concat(currentSlide),\n                            children: imageArr()\n                        }, void 0, false, {\n                            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                            lineNumber: 136,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bottom-3 flex gap-3 justify-center w-[600px]\",\n                            children: labelArr()\n                        }, void 0, false, {\n                            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                            lineNumber: 146,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 135,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \" fill-base-3  cursor-pointer  duration-150  ease-in-out  hover:fill-base-1  hover:scale-125\",\n                    onClick: ()=>handleClick(\"right\"),\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    height: \"48\",\n                    viewBox: \"0 96 960 960\",\n                    width: \"48\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                        lineNumber: 163,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 150,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 119,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Slider, \"Kyc0HW1TDLGBtRy6AofgfQTw3qk=\");\n_c = Slider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvaG9tZS9TbGlkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUU0QztBQU01QyxNQUFNQyxlQUFlO0lBQ25CO0lBQUc7SUFBRztJQUFHO0lBQUc7Q0FDYjtBQUVELE1BQU1DLFNBQW1CLElBQU07O0lBQzdCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ0sscUJBQXFCQyx1QkFBdUIsR0FBR04sK0NBQVFBLENBQUMsS0FBSztJQUNwRSxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUU5QyxNQUFNUyxhQUE4QyxDQUFDQyxRQUFVO1FBQzdELHFCQUNFLDhEQUFDQztZQUNEQyxXQUFXOzs4QkFHWCw4REFBQ0Q7b0JBQUlDLFdBQVU7Ozs7Ozs4QkFDZiw4REFBQ0Q7b0JBQUlDLFdBQVU7Ozs7Ozs7V0FIVkYsTUFBTUcsUUFBUTs7Ozs7SUFNdkI7SUFFQSxNQUFNQyxhQUE2QyxDQUFDSixRQUFVO1FBQzVELHFCQUNFLDhEQUFDSztZQUNDQyxTQUFTLFVBQVVOLE1BQU1HLFFBQVE7WUFDakNELFdBQVcsNEdBT0MsT0FGVlQsaUJBQWlCTyxNQUFNRyxRQUFRLEdBQ2pDLHlEQUNBLFdBQVc7WUFDWEksSUFBSSxVQUFVUCxNQUFNRyxRQUFRO1lBQzVCSyxTQUFTLElBQU1kLGdCQUFnQk0sTUFBTUcsUUFBUTs7Ozs7O0lBR25EO0lBRUEsTUFBTU0sV0FBVyxJQUFNbEIsYUFBYW1CLEdBQUcsQ0FBQyxDQUFDQyxJQUFNO1lBQzdDLHFCQUFPLDhEQUFDWjtnQkFBV0ksVUFBVVE7Ozs7OztRQUM3QjtJQUdGRixTQUFTRyxJQUFJO0lBRWIsTUFBTUMsV0FBVyxJQUFNdEIsYUFBYW1CLEdBQUcsQ0FBQyxDQUFDQyxJQUFNO1lBQzdDLHFCQUFPLDhEQUFDUDtnQkFBV0QsVUFBVVE7Ozs7OztRQUM3QjtJQUdKLGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEMsK0JBQStCO0lBRS9CLGlDQUFpQztJQUNqQywrQkFBK0I7SUFDL0IsMkJBQTJCO0lBRXpCLFNBQVNHLFlBQVlkLEtBQXVCLEVBQUU7UUFFNUNlLFdBQVcsSUFBTTtZQUNmbkIsdUJBQXVCLElBQUk7UUFDN0IsR0FBRztRQUNIbUIsV0FBVyxJQUFNO1lBQ2ZuQix1QkFBdUIsS0FBSztRQUM5QixHQUFHO1FBRUgsSUFBSUksVUFBVSxTQUFTO1lBQ3JCTixnQkFBZ0I7WUFDaEJxQixXQUFXLElBQU07Z0JBQ2ZyQixnQkFBZ0I7WUFDbEIsR0FBRztRQUVMLE9BQU87WUFDTEEsZ0JBQWdCO1lBQ2hCcUIsV0FBVyxJQUFNO2dCQUNmckIsZ0JBQWdCO1lBQ2xCLEdBQUc7UUFFTCxDQUFDO0lBQ0g7SUFFQSxTQUFTc0IsWUFBWWhCLEtBQXVCLEVBQUU7UUFFNUMsSUFBSUgsVUFBVTtZQUNaO1FBQ0YsQ0FBQztRQUVELE9BQU9HO1lBRUwsS0FBSztnQkFDSFAsZUFBZSxJQUNmQyxnQkFBZ0JELGVBQWUsS0FDL0JxQixZQUFZLE9BQU87Z0JBQ25CLEtBQU07WUFFUixLQUFLO2dCQUNIckIsZUFBZSxJQUNmQyxnQkFBZ0JELGVBQWUsS0FDL0JxQixZQUFZLFFBQVE7UUFDeEI7UUFFQWhCLFlBQVksSUFBSTtRQUNoQmlCLFdBQVcsSUFBTWpCLFlBQVksS0FBSyxHQUFHO0lBRXZDO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNHO1lBQUlDLFdBQVU7OzhCQUNmLDhEQUFDZTtvQkFDQ2YsV0FBVTtvQkFPVk0sU0FBUyxJQUFNUSxZQUFZO29CQUMzQkUsT0FBTTtvQkFDTkMsUUFBTztvQkFDUEMsU0FBUTtvQkFDUkMsT0FBTTs4QkFDTiw0RUFBQ0M7d0JBQUtDLEdBQUU7Ozs7Ozs7Ozs7OzhCQUVSLDhEQUFDdEI7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVywrREFHS1AsT0FERUEsc0JBQXNCLFNBQVMsS0FBSyxFQUFDLG9DQUl6Q0YsT0FIRUUsc0JBQXNCLE1BQU0sS0FBSyxFQUFDLGdHQUd2QixPQUFiRjtzQ0FFakJnQjs7Ozs7O3NDQUVGLDhEQUFDUjs0QkFBSUMsV0FBVTtzQ0FDWlc7Ozs7Ozs7Ozs7Ozs4QkFHTCw4REFBQ0k7b0JBQ0NmLFdBQVU7b0JBT1ZNLFNBQVMsSUFBTVEsWUFBWTtvQkFDM0JFLE9BQU07b0JBQ05DLFFBQU87b0JBQ1BDLFNBQVE7b0JBQ1JDLE9BQU07OEJBQ04sNEVBQUNDO3dCQUFLQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEI7R0EzSk0vQjtLQUFBQTtBQTZKTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9ob21lL1NsaWRlci50c3g/MjQwZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBrZXk6IG51bWJlclxufVxuXG5jb25zdCBzbGlkZXJJbWFnZXMgPSBbXG4gIDEsIDIsIDMsIDQsIDVcbl1cblxuY29uc3QgU2xpZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbaXNUcmFuc2l0aW9uQmxvY2tlZCwgc2V0SXNUcmFuc2l0aW9uQmxvY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkaXNhYmxlZCwgc2V0RGlzYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBcbiAgY29uc3QgSW1hZ2VTbGlkZTogUmVhY3QuRkM8eyBrZXlWYWx1ZTogbnVtYmVyIH0gPiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgXG4gICAgICBjbGFzc05hbWU9eydmbGV4IG1pbi13LVs2MDBweF0gaC1bNDAwcHhdJ31cbiAgICAgIGtleT17cHJvcHMua2V5VmFsdWV9XG4gICAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJlZC00MDAgdy0xLzIgbWluLWgtZnVsbFwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy15ZWxsb3ctMzAwIHctMS8yIG1pbi1oLWZ1bGxcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApXG4gIH1cbiAgXG4gIGNvbnN0IFNsaWRlTGFiZWw6IFJlYWN0LkZDPHsga2V5VmFsdWU6IG51bWJlciB9PiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybihcbiAgICAgIDxsYWJlbCBcbiAgICAgICAgaHRtbEZvcj17J3JhZGlvJyArIHByb3BzLmtleVZhbHVlfSBcbiAgICAgICAgY2xhc3NOYW1lPXtgXG4gICAgICAgIGlubGluZS1ibG9jayBcbiAgICAgICAgdy0yIG1pbi1oLVs4cHhdIFxuICAgICAgICByb3VuZGVkLWZ1bGwgXG4gICAgICBob3ZlcjpiZy1iYXNlLTFcbiAgICAgICAgJHtjdXJyZW50U2xpZGUgPT09IHByb3BzLmtleVZhbHVlID8gXG4gICAgICAgICdiZy1iYXNlLTEgYW5pbWF0ZS1bc2xpZGVyXzAuM3NfZWFzZS1pbi1vdXRfZm9yd2FyZHNdJyA6IFxuICAgICAgICAnYmctYmFzZS0zJ31gfVxuICAgICAgICBpZD17J3JhZGlvJyArIHByb3BzLmtleVZhbHVlfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50U2xpZGUocHJvcHMua2V5VmFsdWUpfVxuICAgICAgICA+PC9sYWJlbD5cbiAgICAgIClcbiAgfVxuXG4gIGNvbnN0IGltYWdlQXJyID0gKCkgPT4gc2xpZGVySW1hZ2VzLm1hcCgoeCkgPT4ge1xuICAgIHJldHVybig8SW1hZ2VTbGlkZSBrZXlWYWx1ZT17eH0gLz4pXG4gICAgfVxuICApXG5cbiAgaW1hZ2VBcnIucHVzaFxuXG4gIGNvbnN0IGxhYmVsQXJyID0gKCkgPT4gc2xpZGVySW1hZ2VzLm1hcCgoeCkgPT4ge1xuICAgIHJldHVybig8U2xpZGVMYWJlbCBrZXlWYWx1ZT17eH0gLz4pXG4gICAgfVxuICApXG5cbi8vIGNvbnN0IGltYWdlRmlyc3QgPSBpbWFnZUFyclstMV1cbi8vIGNvbnN0IGltYWdlRmlyc3QgPSBpbWFnZUFyclstMV1cbi8vIGltYWdlQXJyLnVuc2hpZnQoaW1hZ2VGaXJzdClcblxuLy8gY29uc3QgaW1hZ2VMYXN0ICA9IGltYWdlQXJyWzFdXG4vLyBpbWFnZUxhc3Qua2V5ID0gJ2xhc3Qtc2xpZGUnXG4vLyBpbWFnZUFyci5wdXNoKGltYWdlTGFzdClcblxuICBmdW5jdGlvbiByZXNldFNsaWRlcihwcm9wczogJ2ZpcnN0JyB8ICdsYXN0Jykge1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRJc1RyYW5zaXRpb25CbG9ja2VkKHRydWUpO1xuICAgIH0sIDMwMClcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldElzVHJhbnNpdGlvbkJsb2NrZWQoZmFsc2UpO1xuICAgIH0sIDUwMClcblxuICAgIGlmIChwcm9wcyA9PT0gJ2ZpcnN0Jykge1xuICAgICAgc2V0Q3VycmVudFNsaWRlKDYpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRTbGlkZSgxKTtcbiAgICAgIH0sIDMwMClcblxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRDdXJyZW50U2xpZGUoMCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFNsaWRlKDUpO1xuICAgICAgfSwgMzAwKVxuXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2socHJvcHM6ICdsZWZ0JyB8ICdyaWdodCcpIHtcblxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc3dpdGNoKHByb3BzKSB7XG5cbiAgICAgIGNhc2UgJ2xlZnQnOiBcbiAgICAgICAgY3VycmVudFNsaWRlID4gMSA/IFxuICAgICAgICBzZXRDdXJyZW50U2xpZGUoY3VycmVudFNsaWRlIC0gMSkgOiBcbiAgICAgICAgcmVzZXRTbGlkZXIoJ2xhc3QnKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3JpZ2h0JzogXG4gICAgICAgIGN1cnJlbnRTbGlkZSA8IDUgPyBcbiAgICAgICAgc2V0Q3VycmVudFNsaWRlKGN1cnJlbnRTbGlkZSArIDEpIDogXG4gICAgICAgIHJlc2V0U2xpZGVyKCdmaXJzdCcpO1xuICAgIH1cblxuICAgIHNldERpc2FibGVkKHRydWUpXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXREaXNhYmxlZChmYWxzZSksIDUwMClcbiAgICBcbiAgfVxuXG4gIHJldHVybihcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPHN2ZyBcbiAgICAgICAgY2xhc3NOYW1lPVwiXG4gICAgICAgICAgZmlsbC1iYXNlLTMgXG4gICAgICAgICAgY3Vyc29yLXBvaW50ZXIgXG4gICAgICAgICAgZHVyYXRpb24tMTUwIFxuICAgICAgICAgIGVhc2UtaW4tb3V0IFxuICAgICAgICAgIGhvdmVyOmZpbGwtYmFzZS0xIFxuICAgICAgICAgIGhvdmVyOnNjYWxlLTEyNVwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCdsZWZ0Jyl9XG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBcbiAgICAgICAgaGVpZ2h0PVwiNDhcIiBcbiAgICAgICAgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiIFxuICAgICAgICB3aWR0aD1cIjQ4XCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNNTYxIDgxNiAzMjAgNTc1bDI0MS0yNDEgNDMgNDMtMTk4IDE5OCAxOTggMTk4LTQzIDQzWlwiLz5cbiAgICAgIDwvc3ZnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gdy1bNjAwcHhdIGgtWzQwMHB4XSByb3VuZGVkLTJ4bCB6LTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YFxuICAgICAgICAgICAgICAgICAgICBmbGV4IFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLSR7aXNUcmFuc2l0aW9uQmxvY2tlZCA/ICdub25lJyA6ICdhbGwnfSBcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24tJHtpc1RyYW5zaXRpb25CbG9ja2VkID8gJzAnIDogJzMwMCd9XG4gICAgICAgICAgICAgICAgICAgIHctWzYwMHB4XSBcbiAgICAgICAgICAgICAgICAgICAgaC1bNDAwcHhdXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlci0ke2N1cnJlbnRTbGlkZX1gXG4gICAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICB7aW1hZ2VBcnIoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0zIGZsZXggZ2FwLTMganVzdGlmeS1jZW50ZXIgdy1bNjAwcHhdXCI+XG4gICAgICAgICAgICB7bGFiZWxBcnIoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdmcgXG4gICAgICAgICAgY2xhc3NOYW1lPVwiXG4gICAgICAgICAgICBmaWxsLWJhc2UtMyBcbiAgICAgICAgICAgIGN1cnNvci1wb2ludGVyIFxuICAgICAgICAgICAgZHVyYXRpb24tMTUwIFxuICAgICAgICAgICAgZWFzZS1pbi1vdXQgXG4gICAgICAgICAgICBob3ZlcjpmaWxsLWJhc2UtMSBcbiAgICAgICAgICAgIGhvdmVyOnNjYWxlLTEyNVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soJ3JpZ2h0Jyl9XG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIFxuICAgICAgICAgIGhlaWdodD1cIjQ4XCIgXG4gICAgICAgICAgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiIFxuICAgICAgICAgIHdpZHRoPVwiNDhcIj5cbiAgICAgICAgICA8cGF0aCBkPVwibTM3NSA4MTYtNDMtNDMgMTk4LTE5OC0xOTgtMTk4IDQzLTQzIDI0MSAyNDEtMjQxIDI0MVpcIi8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic2xpZGVySW1hZ2VzIiwiU2xpZGVyIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwiaXNUcmFuc2l0aW9uQmxvY2tlZCIsInNldElzVHJhbnNpdGlvbkJsb2NrZWQiLCJkaXNhYmxlZCIsInNldERpc2FibGVkIiwiSW1hZ2VTbGlkZSIsInByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIiwia2V5VmFsdWUiLCJTbGlkZUxhYmVsIiwibGFiZWwiLCJodG1sRm9yIiwiaWQiLCJvbkNsaWNrIiwiaW1hZ2VBcnIiLCJtYXAiLCJ4IiwicHVzaCIsImxhYmVsQXJyIiwicmVzZXRTbGlkZXIiLCJzZXRUaW1lb3V0IiwiaGFuZGxlQ2xpY2siLCJzdmciLCJ4bWxucyIsImhlaWdodCIsInZpZXdCb3giLCJ3aWR0aCIsInBhdGgiLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/components/home/Slider.tsx\n"));

/***/ })

});