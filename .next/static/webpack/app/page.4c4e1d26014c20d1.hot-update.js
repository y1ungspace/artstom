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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst sliderArr = [\n    \"bg-sky-400\",\n    \"bg-red-400\",\n    \"bg-yellow-400\",\n    \"bg-green-400\",\n    \"bg-gray-400\"\n];\nconst Slider = ()=>{\n    _s();\n    const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [imageArr, setImageArr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [labelArr, setLabelArr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isTransitionBlocked, setIsTransitionBlocked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const ImageSlide = (props)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex min-w-[600px] h-[400px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-red-400 w-1/2 min-h-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-yellow-300 w-1/2 min-h-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, props.key, true, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined);\n    };\n    const SlideLabel = (props)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            htmlFor: \"radio\" + props.key,\n            className: \"\\n        inline-block \\n        w-2 min-h-[8px] \\n        rounded-full \\n      hover:bg-base-1\\n        \".concat(currentSlide === props.key ? \"bg-base-1 animate-[slider_0.3s_ease-in-out_forwards]\" : \"bg-base-3\"),\n            onClick: ()=>setCurrentSlide(i)\n        }, \"radio\" + props.key, false, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined);\n    };\n    for(let i1 = 1; i1 <= sliderArr.length; i1++){\n        setImageArr([\n            ...persons,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Person, {}, persons.length, false, {\n                fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                lineNumber: 52,\n                columnNumber: 29\n            }, undefined)\n        ]);\n    }\n    // double first and last slide in the ends\n    // const imageFirst = imageArr[-1]\n    const imageFirst = imageArr[-1];\n    imageArr.unshift(imageFirst);\n    const imageLast = imageArr[1];\n    imageLast.key = \"last-slide\";\n    imageArr.push(imageLast);\n    function resetSlider(props) {\n        setTimeout(()=>{\n            setIsTransitionBlocked(true);\n        }, 300);\n        setTimeout(()=>{\n            setIsTransitionBlocked(false);\n        }, 500);\n        if (props === \"first\") {\n            setCurrentSlide(6);\n            setTimeout(()=>{\n                setCurrentSlide(1);\n            }, 300);\n        } else {\n            setCurrentSlide(0);\n            setTimeout(()=>{\n                setCurrentSlide(5);\n            }, 300);\n        }\n    }\n    function handleClick(props) {\n        if (disabled) {\n            return;\n        }\n        switch(props){\n            case \"left\":\n                currentSlide > 1 ? setCurrentSlide(currentSlide - 1) : resetSlider(\"last\");\n                break;\n            case \"right\":\n                currentSlide < 5 ? setCurrentSlide(currentSlide + 1) : resetSlider(\"first\");\n        }\n        setDisabled(true);\n        setTimeout(()=>setDisabled(false), 500);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \" fill-base-3  cursor-pointer  duration-150  ease-in-out  hover:fill-base-1  hover:scale-125\",\n                    onClick: ()=>handleClick(\"left\"),\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    height: \"48\",\n                    viewBox: \"0 96 960 960\",\n                    width: \"48\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                        lineNumber: 130,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 117,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container relative overflow-hidden w-[600px] h-[400px] rounded-2xl z-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\\n                    flex \\n                    transition-\".concat(isTransitionBlocked ? \"none\" : \"all\", \" \\n                    duration-\").concat(isTransitionBlocked ? \"0\" : \"300\", \"\\n                    w-[600px] \\n                    h-[400px]\\n                    slider-\").concat(currentSlide),\n                            children: imageArr\n                        }, void 0, false, {\n                            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                            lineNumber: 133,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bottom-3 flex gap-3 justify-center w-[600px]\",\n                            children: labelArr\n                        }, void 0, false, {\n                            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                            lineNumber: 143,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 132,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \" fill-base-3  cursor-pointer  duration-150  ease-in-out  hover:fill-base-1  hover:scale-125\",\n                    onClick: ()=>handleClick(\"right\"),\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    height: \"48\",\n                    viewBox: \"0 96 960 960\",\n                    width: \"48\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                        lineNumber: 160,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 147,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 116,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Slider, \"8zHPQxg1Vmlx1iyoDbNs0Xs1IYY=\");\n_c = Slider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvaG9tZS9TbGlkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUVpQztBQUVqQyxNQUFNQyxZQUFZO0lBQ2hCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRDtBQUdELE1BQU1DLFNBQW1CLElBQU07O0lBQzdCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ08sVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ1MscUJBQXFCQyx1QkFBdUIsR0FBR1YsK0NBQVFBLENBQUMsS0FBSztJQUNwRSxNQUFNLENBQUNXLFVBQVVDLFlBQVksR0FBR1osK0NBQVFBLENBQUMsS0FBSztJQUU5QyxNQUFNYSxhQUFhLENBQUNDLFFBQXlCO1FBQzNDLHFCQUNFLDhEQUFDQztZQUNEQyxXQUFXOzs4QkFHWCw4REFBQ0Q7b0JBQUlDLFdBQVU7Ozs7Ozs4QkFDZiw4REFBQ0Q7b0JBQUlDLFdBQVU7Ozs7Ozs7V0FIVkYsTUFBTUcsR0FBRzs7Ozs7SUFNbEI7SUFFQSxNQUFNQyxhQUFhLENBQUNKLFFBQXlCO1FBQzNDLHFCQUNFLDhEQUFDSztZQUNDQyxTQUFTLFVBQVVOLE1BQU1HLEdBQUc7WUFDNUJELFdBQVcsNEdBT0MsT0FGVmIsaUJBQWlCVyxNQUFNRyxHQUFHLEdBQzVCLHlEQUNBLFdBQVc7WUFFWEksU0FBUyxJQUFNakIsZ0JBQWdCa0I7V0FEMUIsVUFBVVIsTUFBTUcsR0FBRzs7Ozs7SUFJOUI7SUFFQSxJQUFLLElBQUlLLEtBQUksR0FBR0EsTUFBS3JCLFVBQVVzQixNQUFNLEVBQUVELEtBQUs7UUFDMUNoQixZQUFZO2VBQUlrQjswQkFBUSw4REFBQ0MsWUFBWUQsUUFBUUQsTUFBTTs7Ozs7U0FBSztJQUMxRDtJQUVGLDBDQUEwQztJQUUxQyxrQ0FBa0M7SUFDbEMsTUFBTUcsYUFBYXJCLFFBQVEsQ0FBQyxDQUFDLEVBQUU7SUFDL0JBLFNBQVNzQixPQUFPLENBQUNEO0lBRWpCLE1BQU1FLFlBQWF2QixRQUFRLENBQUMsRUFBRTtJQUM5QnVCLFVBQVVYLEdBQUcsR0FBRztJQUNoQlosU0FBU3dCLElBQUksQ0FBQ0Q7SUFFWixTQUFTRSxZQUFZaEIsS0FBdUIsRUFBRTtRQUU1Q2lCLFdBQVcsSUFBTTtZQUNmckIsdUJBQXVCLElBQUk7UUFDN0IsR0FBRztRQUNIcUIsV0FBVyxJQUFNO1lBQ2ZyQix1QkFBdUIsS0FBSztRQUM5QixHQUFHO1FBRUgsSUFBSUksVUFBVSxTQUFTO1lBQ3JCVixnQkFBZ0I7WUFDaEIyQixXQUFXLElBQU07Z0JBQ2YzQixnQkFBZ0I7WUFDbEIsR0FBRztRQUVMLE9BQU87WUFDTEEsZ0JBQWdCO1lBQ2hCMkIsV0FBVyxJQUFNO2dCQUNmM0IsZ0JBQWdCO1lBQ2xCLEdBQUc7UUFFTCxDQUFDO0lBQ0g7SUFFQSxTQUFTNEIsWUFBWWxCLEtBQXVCLEVBQUU7UUFFNUMsSUFBSUgsVUFBVTtZQUNaO1FBQ0YsQ0FBQztRQUVELE9BQU9HO1lBRUwsS0FBSztnQkFDSFgsZUFBZSxJQUNmQyxnQkFBZ0JELGVBQWUsS0FDL0IyQixZQUFZLE9BQU87Z0JBQ25CLEtBQU07WUFFUixLQUFLO2dCQUNIM0IsZUFBZSxJQUNmQyxnQkFBZ0JELGVBQWUsS0FDL0IyQixZQUFZLFFBQVE7UUFDeEI7UUFFQWxCLFlBQVksSUFBSTtRQUNoQm1CLFdBQVcsSUFBTW5CLFlBQVksS0FBSyxHQUFHO0lBRXZDO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNHO1lBQUlDLFdBQVU7OzhCQUNmLDhEQUFDaUI7b0JBQ0NqQixXQUFVO29CQU9WSyxTQUFTLElBQU1XLFlBQVk7b0JBQzNCRSxPQUFNO29CQUNOQyxRQUFPO29CQUNQQyxTQUFRO29CQUNSQyxPQUFNOzhCQUNOLDRFQUFDQzt3QkFBS0MsR0FBRTs7Ozs7Ozs7Ozs7OEJBRVIsOERBQUN4QjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFXLCtEQUdLUCxPQURFQSxzQkFBc0IsU0FBUyxLQUFLLEVBQUMsb0NBSXpDTixPQUhFTSxzQkFBc0IsTUFBTSxLQUFLLEVBQUMsZ0dBR3ZCLE9BQWJOO3NDQUVqQkU7Ozs7OztzQ0FFRiw4REFBQ1U7NEJBQUlDLFdBQVU7c0NBQ1pUOzs7Ozs7Ozs7Ozs7OEJBR0wsOERBQUMwQjtvQkFDQ2pCLFdBQVU7b0JBT1ZLLFNBQVMsSUFBTVcsWUFBWTtvQkFDM0JFLE9BQU07b0JBQ05DLFFBQU87b0JBQ1BDLFNBQVE7b0JBQ1JDLE9BQU07OEJBQ04sNEVBQUNDO3dCQUFLQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEI7R0F2Sk1yQztLQUFBQTtBQXlKTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9ob21lL1NsaWRlci50c3g/MjQwZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3Qgc2xpZGVyQXJyID0gW1xuICAnYmctc2t5LTQwMCcsXG4gICdiZy1yZWQtNDAwJyxcbiAgJ2JnLXllbGxvdy00MDAnLFxuICAnYmctZ3JlZW4tNDAwJyxcbiAgJ2JnLWdyYXktNDAwJyxcbl1cblxuXG5jb25zdCBTbGlkZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGVdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtpbWFnZUFyciwgc2V0SW1hZ2VBcnJdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbGFiZWxBcnIsIHNldExhYmVsQXJyXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lzVHJhbnNpdGlvbkJsb2NrZWQsIHNldElzVHJhbnNpdGlvbkJsb2NrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgXG4gIGNvbnN0IEltYWdlU2xpZGUgPSAocHJvcHM6IHtrZXk6IG51bWJlcn0pID0+IHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IFxuICAgICAgY2xhc3NOYW1lPXsnZmxleCBtaW4tdy1bNjAwcHhdIGgtWzQwMHB4XSd9XG4gICAgICBrZXk9e3Byb3BzLmtleX1cbiAgICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkLTQwMCB3LTEvMiBtaW4taC1mdWxsXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXllbGxvdy0zMDAgdy0xLzIgbWluLWgtZnVsbFwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICBcbiAgY29uc3QgU2xpZGVMYWJlbCA9IChwcm9wczoge2tleTogbnVtYmVyfSkgPT4ge1xuICAgIHJldHVybihcbiAgICAgIDxsYWJlbCBcbiAgICAgICAgaHRtbEZvcj17J3JhZGlvJyArIHByb3BzLmtleX0gXG4gICAgICAgIGNsYXNzTmFtZT17YFxuICAgICAgICBpbmxpbmUtYmxvY2sgXG4gICAgICAgIHctMiBtaW4taC1bOHB4XSBcbiAgICAgICAgcm91bmRlZC1mdWxsIFxuICAgICAgaG92ZXI6YmctYmFzZS0xXG4gICAgICAgICR7Y3VycmVudFNsaWRlID09PSBwcm9wcy5rZXkgPyBcbiAgICAgICAgJ2JnLWJhc2UtMSBhbmltYXRlLVtzbGlkZXJfMC4zc19lYXNlLWluLW91dF9mb3J3YXJkc10nIDogXG4gICAgICAgICdiZy1iYXNlLTMnfWB9XG4gICAgICAgIGtleT17J3JhZGlvJyArIHByb3BzLmtleX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudFNsaWRlKGkpfVxuICAgICAgICA+PC9sYWJlbD5cbiAgICAgIClcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHNsaWRlckFyci5sZW5ndGg7IGkrKykge1xuICAgIHNldEltYWdlQXJyKFsuLi5wZXJzb25zLDxQZXJzb24ga2V5PXtwZXJzb25zLmxlbmd0aH0gLz5dKVxuICB9XG5cbi8vIGRvdWJsZSBmaXJzdCBhbmQgbGFzdCBzbGlkZSBpbiB0aGUgZW5kc1xuXG4vLyBjb25zdCBpbWFnZUZpcnN0ID0gaW1hZ2VBcnJbLTFdXG5jb25zdCBpbWFnZUZpcnN0ID0gaW1hZ2VBcnJbLTFdXG5pbWFnZUFyci51bnNoaWZ0KGltYWdlRmlyc3QpXG5cbmNvbnN0IGltYWdlTGFzdCAgPSBpbWFnZUFyclsxXVxuaW1hZ2VMYXN0LmtleSA9ICdsYXN0LXNsaWRlJ1xuaW1hZ2VBcnIucHVzaChpbWFnZUxhc3QpXG5cbiAgZnVuY3Rpb24gcmVzZXRTbGlkZXIocHJvcHM6ICdmaXJzdCcgfCAnbGFzdCcpIHtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNUcmFuc2l0aW9uQmxvY2tlZCh0cnVlKTtcbiAgICB9LCAzMDApXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRJc1RyYW5zaXRpb25CbG9ja2VkKGZhbHNlKTtcbiAgICB9LCA1MDApXG5cbiAgICBpZiAocHJvcHMgPT09ICdmaXJzdCcpIHtcbiAgICAgIHNldEN1cnJlbnRTbGlkZSg2KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50U2xpZGUoMSk7XG4gICAgICB9LCAzMDApXG5cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q3VycmVudFNsaWRlKDApO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRTbGlkZSg1KTtcbiAgICAgIH0sIDMwMClcblxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKHByb3BzOiAnbGVmdCcgfCAncmlnaHQnKSB7XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHN3aXRjaChwcm9wcykge1xuXG4gICAgICBjYXNlICdsZWZ0JzogXG4gICAgICAgIGN1cnJlbnRTbGlkZSA+IDEgPyBcbiAgICAgICAgc2V0Q3VycmVudFNsaWRlKGN1cnJlbnRTbGlkZSAtIDEpIDogXG4gICAgICAgIHJlc2V0U2xpZGVyKCdsYXN0Jyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdyaWdodCc6IFxuICAgICAgICBjdXJyZW50U2xpZGUgPCA1ID8gXG4gICAgICAgIHNldEN1cnJlbnRTbGlkZShjdXJyZW50U2xpZGUgKyAxKSA6IFxuICAgICAgICByZXNldFNsaWRlcignZmlyc3QnKTtcbiAgICB9XG5cbiAgICBzZXREaXNhYmxlZCh0cnVlKVxuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0RGlzYWJsZWQoZmFsc2UpLCA1MDApXG4gICAgXG4gIH1cblxuICByZXR1cm4oXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxzdmcgXG4gICAgICAgIGNsYXNzTmFtZT1cIlxuICAgICAgICAgIGZpbGwtYmFzZS0zIFxuICAgICAgICAgIGN1cnNvci1wb2ludGVyIFxuICAgICAgICAgIGR1cmF0aW9uLTE1MCBcbiAgICAgICAgICBlYXNlLWluLW91dCBcbiAgICAgICAgICBob3ZlcjpmaWxsLWJhc2UtMSBcbiAgICAgICAgICBob3ZlcjpzY2FsZS0xMjVcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygnbGVmdCcpfVxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgXG4gICAgICAgIGhlaWdodD1cIjQ4XCIgXG4gICAgICAgIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIiBcbiAgICAgICAgd2lkdGg9XCI0OFwiPlxuICAgICAgICA8cGF0aCBkPVwiTTU2MSA4MTYgMzIwIDU3NWwyNDEtMjQxIDQzIDQzLTE5OCAxOTggMTk4IDE5OC00MyA0M1pcIi8+XG4gICAgICA8L3N2Zz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHctWzYwMHB4XSBoLVs0MDBweF0gcm91bmRlZC0yeGwgei0wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BcbiAgICAgICAgICAgICAgICAgICAgZmxleCBcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi0ke2lzVHJhbnNpdGlvbkJsb2NrZWQgPyAnbm9uZScgOiAnYWxsJ30gXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uLSR7aXNUcmFuc2l0aW9uQmxvY2tlZCA/ICcwJyA6ICczMDAnfVxuICAgICAgICAgICAgICAgICAgICB3LVs2MDBweF0gXG4gICAgICAgICAgICAgICAgICAgIGgtWzQwMHB4XVxuICAgICAgICAgICAgICAgICAgICBzbGlkZXItJHtjdXJyZW50U2xpZGV9YFxuICAgICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAge2ltYWdlQXJyfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTMgZmxleCBnYXAtMyBqdXN0aWZ5LWNlbnRlciB3LVs2MDBweF1cIj5cbiAgICAgICAgICAgIHtsYWJlbEFycn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdmcgXG4gICAgICAgICAgY2xhc3NOYW1lPVwiXG4gICAgICAgICAgICBmaWxsLWJhc2UtMyBcbiAgICAgICAgICAgIGN1cnNvci1wb2ludGVyIFxuICAgICAgICAgICAgZHVyYXRpb24tMTUwIFxuICAgICAgICAgICAgZWFzZS1pbi1vdXQgXG4gICAgICAgICAgICBob3ZlcjpmaWxsLWJhc2UtMSBcbiAgICAgICAgICAgIGhvdmVyOnNjYWxlLTEyNVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soJ3JpZ2h0Jyl9XG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIFxuICAgICAgICAgIGhlaWdodD1cIjQ4XCIgXG4gICAgICAgICAgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiIFxuICAgICAgICAgIHdpZHRoPVwiNDhcIj5cbiAgICAgICAgICA8cGF0aCBkPVwibTM3NSA4MTYtNDMtNDMgMTk4LTE5OC0xOTgtMTk4IDQzLTQzIDI0MSAyNDEtMjQxIDI0MVpcIi8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic2xpZGVyQXJyIiwiU2xpZGVyIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwiaW1hZ2VBcnIiLCJzZXRJbWFnZUFyciIsImxhYmVsQXJyIiwic2V0TGFiZWxBcnIiLCJpc1RyYW5zaXRpb25CbG9ja2VkIiwic2V0SXNUcmFuc2l0aW9uQmxvY2tlZCIsImRpc2FibGVkIiwic2V0RGlzYWJsZWQiLCJJbWFnZVNsaWRlIiwicHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiLCJrZXkiLCJTbGlkZUxhYmVsIiwibGFiZWwiLCJodG1sRm9yIiwib25DbGljayIsImkiLCJsZW5ndGgiLCJwZXJzb25zIiwiUGVyc29uIiwiaW1hZ2VGaXJzdCIsInVuc2hpZnQiLCJpbWFnZUxhc3QiLCJwdXNoIiwicmVzZXRTbGlkZXIiLCJzZXRUaW1lb3V0IiwiaGFuZGxlQ2xpY2siLCJzdmciLCJ4bWxucyIsImhlaWdodCIsInZpZXdCb3giLCJ3aWR0aCIsInBhdGgiLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/components/home/Slider.tsx\n"));

/***/ })

});