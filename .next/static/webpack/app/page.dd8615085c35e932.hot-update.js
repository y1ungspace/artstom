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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst sliderImages = [\n    1,\n    2,\n    3,\n    4,\n    5\n];\nconst Slider = ()=>{\n    _s();\n    const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [labels, setLabels] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [isTransitionBlocked, setIsTransitionBlocked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const test = imageArr();\n        setImages(test);\n        // images.unshift(<ImageSlide keyValue={50} />)\n        // images.push(<ImageSlide keyValue={100} />)\n        console.log(images);\n    });\n    const ImageSlide = (props)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row min-w-[600px] h-[400px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-red-400 w-1/2 min-h-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-yellow-300 w-1/2 min-h-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, props.keyValue, true, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, undefined);\n    };\n    const SlideLabel = (props)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            htmlFor: \"radio\" + props.keyValue,\n            className: \"\\n        inline-block \\n        w-2 min-h-[8px] \\n        rounded-full \\n      hover:bg-base-1\\n        \".concat(currentSlide === props.keyValue ? \"bg-base-1 animate-[slider_0.3s_ease-in-out_forwards]\" : \"bg-base-3\"),\n            id: \"radio\" + props.keyValue,\n            onClick: ()=>setCurrentSlide(props.keyValue)\n        }, void 0, false, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, undefined);\n    };\n    const imageArr = ()=>sliderImages.map((x)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageSlide, {\n                keyValue: x\n            }, void 0, false, {\n                fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                lineNumber: 59,\n                columnNumber: 12\n            }, undefined);\n        });\n    const labelArr = ()=>sliderImages.map((x)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SlideLabel, {\n                keyValue: x\n            }, void 0, false, {\n                fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                lineNumber: 64,\n                columnNumber: 12\n            }, undefined);\n        });\n    // const imageFirst = imageArr[-1]\n    // const imageFirst = imageArr[-1]\n    // imageArr.unshift(imageFirst)\n    // const imageLast  = imageArr[1]\n    // imageLast.key = 'last-slide'\n    // imageArr.push(imageLast)\n    function resetSlider(props) {\n        setTimeout(()=>{\n            setIsTransitionBlocked(true);\n        }, 300);\n        setTimeout(()=>{\n            setIsTransitionBlocked(false);\n        }, 500);\n        if (props === \"first\") {\n            setCurrentSlide(6);\n            setTimeout(()=>{\n                setCurrentSlide(1);\n            }, 300);\n        } else {\n            setCurrentSlide(0);\n            setTimeout(()=>{\n                setCurrentSlide(5);\n            }, 300);\n        }\n    }\n    function handleClick(props) {\n        if (disabled) {\n            return;\n        }\n        switch(props){\n            case \"left\":\n                currentSlide > 1 ? setCurrentSlide(currentSlide - 1) : resetSlider(\"last\");\n                break;\n            case \"right\":\n                currentSlide < 5 ? setCurrentSlide(currentSlide + 1) : resetSlider(\"first\");\n        }\n        setDisabled(true);\n        setTimeout(()=>setDisabled(false), 500);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \" fill-base-3  cursor-pointer  duration-150  ease-in-out  hover:fill-base-1  hover:scale-125\",\n                    onClick: ()=>handleClick(\"left\"),\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    height: \"48\",\n                    viewBox: \"0 96 960 960\",\n                    width: \"48\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                        lineNumber: 142,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 129,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container relative overflow-hidden w-[600px] h-[400px] rounded-2xl z-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\\n                    flex \\n                    transition-\".concat(isTransitionBlocked ? \"none\" : \"all\", \" \\n                    duration-\").concat(isTransitionBlocked ? \"0\" : \"300\", \"\\n                    w-[600px] \\n                    h-[400px]\\n                    slider-\").concat(currentSlide),\n                            children: images\n                        }, void 0, false, {\n                            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                            lineNumber: 145,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bottom-3 flex gap-3 justify-center w-[600px]\",\n                            children: labels\n                        }, void 0, false, {\n                            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                            lineNumber: 155,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 144,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \" fill-base-3  cursor-pointer  duration-150  ease-in-out  hover:fill-base-1  hover:scale-125\",\n                    onClick: ()=>handleClick(\"right\"),\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    height: \"48\",\n                    viewBox: \"0 96 960 960\",\n                    width: \"48\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                        lineNumber: 172,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n                    lineNumber: 159,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/bessonovnikita/Documents/GitHub/artstom/app/components/home/Slider.tsx\",\n            lineNumber: 128,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Slider, \"LB2TQIcUu4MSfXgP+6yDIP/xZl0=\");\n_c = Slider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvaG9tZS9TbGlkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUU0QztBQUU1QyxNQUFNRSxlQUFlO0lBQ25CO0lBQUc7SUFBRztJQUFHO0lBQUc7Q0FDYjtBQUVELE1BQU1DLFNBQW1CLElBQU07O0lBQzdCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ0ssUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUE7SUFDcEMsTUFBTSxDQUFDTyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQTtJQUNwQyxNQUFNLENBQUNTLHFCQUFxQkMsdUJBQXVCLEdBQUdWLCtDQUFRQSxDQUFDLEtBQUs7SUFDcEUsTUFBTSxDQUFDVyxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUFDLEtBQUs7SUFFOUNELGdEQUFTQSxDQUFDLElBQU07UUFFZCxNQUFNYyxPQUFPQztRQUViUixVQUFVTztRQUVWLCtDQUErQztRQUMvQyw2Q0FBNkM7UUFFN0NFLFFBQVFDLEdBQUcsQ0FBQ1g7SUFDZDtJQUVBLE1BQU1ZLGFBQThDLENBQUNDLFFBQVU7UUFDN0QscUJBQ0UsOERBQUNDO1lBQ0RDLFdBQVc7OzhCQUdYLDhEQUFDRDtvQkFBSUMsV0FBVTs7Ozs7OzhCQUNmLDhEQUFDRDtvQkFBSUMsV0FBVTs7Ozs7OztXQUhWRixNQUFNRyxRQUFROzs7OztJQU12QjtJQUVBLE1BQU1DLGFBQTZDLENBQUNKLFFBQVU7UUFDNUQscUJBQ0UsOERBQUNLO1lBQ0NDLFNBQVMsVUFBVU4sTUFBTUcsUUFBUTtZQUNqQ0QsV0FBVyw0R0FPQyxPQUZWakIsaUJBQWlCZSxNQUFNRyxRQUFRLEdBQ2pDLHlEQUNBLFdBQVc7WUFDWEksSUFBSSxVQUFVUCxNQUFNRyxRQUFRO1lBQzVCSyxTQUFTLElBQU10QixnQkFBZ0JjLE1BQU1HLFFBQVE7Ozs7OztJQUduRDtJQUVBLE1BQU1QLFdBQVcsSUFBTWIsYUFBYTBCLEdBQUcsQ0FBQyxDQUFDQyxJQUFNO1lBQzdDLHFCQUFPLDhEQUFDWDtnQkFBV0ksVUFBVU87Ozs7OztRQUM3QjtJQUdGLE1BQU1DLFdBQVcsSUFBTTVCLGFBQWEwQixHQUFHLENBQUMsQ0FBQ0MsSUFBTTtZQUM3QyxxQkFBTyw4REFBQ047Z0JBQVdELFVBQVVPOzs7Ozs7UUFDN0I7SUFJSixrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLCtCQUErQjtJQUUvQixpQ0FBaUM7SUFDakMsK0JBQStCO0lBQy9CLDJCQUEyQjtJQUV6QixTQUFTRSxZQUFZWixLQUF1QixFQUFFO1FBRTVDYSxXQUFXLElBQU07WUFDZnJCLHVCQUF1QixJQUFJO1FBQzdCLEdBQUc7UUFDSHFCLFdBQVcsSUFBTTtZQUNmckIsdUJBQXVCLEtBQUs7UUFDOUIsR0FBRztRQUVILElBQUlRLFVBQVUsU0FBUztZQUNyQmQsZ0JBQWdCO1lBQ2hCMkIsV0FBVyxJQUFNO2dCQUNmM0IsZ0JBQWdCO1lBQ2xCLEdBQUc7UUFFTCxPQUFPO1lBQ0xBLGdCQUFnQjtZQUNoQjJCLFdBQVcsSUFBTTtnQkFDZjNCLGdCQUFnQjtZQUNsQixHQUFHO1FBRUwsQ0FBQztJQUNIO0lBRUEsU0FBUzRCLFlBQVlkLEtBQXVCLEVBQUU7UUFFNUMsSUFBSVAsVUFBVTtZQUNaO1FBQ0YsQ0FBQztRQUVELE9BQU9PO1lBRUwsS0FBSztnQkFDSGYsZUFBZSxJQUNmQyxnQkFBZ0JELGVBQWUsS0FDL0IyQixZQUFZLE9BQU87Z0JBQ25CLEtBQU07WUFFUixLQUFLO2dCQUNIM0IsZUFBZSxJQUNmQyxnQkFBZ0JELGVBQWUsS0FDL0IyQixZQUFZLFFBQVE7UUFDeEI7UUFFQWxCLFlBQVksSUFBSTtRQUNoQm1CLFdBQVcsSUFBTW5CLFlBQVksS0FBSyxHQUFHO0lBRXZDO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNPO1lBQUlDLFdBQVU7OzhCQUNmLDhEQUFDYTtvQkFDQ2IsV0FBVTtvQkFPVk0sU0FBUyxJQUFNTSxZQUFZO29CQUMzQkUsT0FBTTtvQkFDTkMsUUFBTztvQkFDUEMsU0FBUTtvQkFDUkMsT0FBTTs4QkFDTiw0RUFBQ0M7d0JBQUtDLEdBQUU7Ozs7Ozs7Ozs7OzhCQUVSLDhEQUFDcEI7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVywrREFHS1gsT0FERUEsc0JBQXNCLFNBQVMsS0FBSyxFQUFDLG9DQUl6Q04sT0FIRU0sc0JBQXNCLE1BQU0sS0FBSyxFQUFDLGdHQUd2QixPQUFiTjtzQ0FFakJFOzs7Ozs7c0NBRUYsOERBQUNjOzRCQUFJQyxXQUFVO3NDQUNaYjs7Ozs7Ozs7Ozs7OzhCQUdMLDhEQUFDMEI7b0JBQ0NiLFdBQVU7b0JBT1ZNLFNBQVMsSUFBTU0sWUFBWTtvQkFDM0JFLE9BQU07b0JBQ05DLFFBQU87b0JBQ1BDLFNBQVE7b0JBQ1JDLE9BQU07OEJBQ04sNEVBQUNDO3dCQUFLQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEI7R0F4S01yQztLQUFBQTtBQTBLTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9ob21lL1NsaWRlci50c3g/MjQwZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBzbGlkZXJJbWFnZXMgPSBbXG4gIDEsIDIsIDMsIDQsIDVcbl1cblxuY29uc3QgU2xpZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2xhYmVscywgc2V0TGFiZWxzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtpc1RyYW5zaXRpb25CbG9ja2VkLCBzZXRJc1RyYW5zaXRpb25CbG9ja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Rpc2FibGVkLCBzZXREaXNhYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgY29uc3QgdGVzdCA9IGltYWdlQXJyKClcblxuICAgIHNldEltYWdlcyh0ZXN0KVxuXG4gICAgLy8gaW1hZ2VzLnVuc2hpZnQoPEltYWdlU2xpZGUga2V5VmFsdWU9ezUwfSAvPilcbiAgICAvLyBpbWFnZXMucHVzaCg8SW1hZ2VTbGlkZSBrZXlWYWx1ZT17MTAwfSAvPilcblxuICAgIGNvbnNvbGUubG9nKGltYWdlcylcbiAgfSlcbiAgXG4gIGNvbnN0IEltYWdlU2xpZGU6IFJlYWN0LkZDPHsga2V5VmFsdWU6IG51bWJlciB9ID4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IFxuICAgICAgY2xhc3NOYW1lPXsnZmxleCBmbGV4LXJvdyBtaW4tdy1bNjAwcHhdIGgtWzQwMHB4XSd9XG4gICAgICBrZXk9e3Byb3BzLmtleVZhbHVlfVxuICAgICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtNDAwIHctMS8yIG1pbi1oLWZ1bGxcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmcteWVsbG93LTMwMCB3LTEvMiBtaW4taC1mdWxsXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIFxuICBjb25zdCBTbGlkZUxhYmVsOiBSZWFjdC5GQzx7IGtleVZhbHVlOiBudW1iZXIgfT4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICA8bGFiZWwgXG4gICAgICAgIGh0bWxGb3I9eydyYWRpbycgKyBwcm9wcy5rZXlWYWx1ZX0gXG4gICAgICAgIGNsYXNzTmFtZT17YFxuICAgICAgICBpbmxpbmUtYmxvY2sgXG4gICAgICAgIHctMiBtaW4taC1bOHB4XSBcbiAgICAgICAgcm91bmRlZC1mdWxsIFxuICAgICAgaG92ZXI6YmctYmFzZS0xXG4gICAgICAgICR7Y3VycmVudFNsaWRlID09PSBwcm9wcy5rZXlWYWx1ZSA/IFxuICAgICAgICAnYmctYmFzZS0xIGFuaW1hdGUtW3NsaWRlcl8wLjNzX2Vhc2UtaW4tb3V0X2ZvcndhcmRzXScgOiBcbiAgICAgICAgJ2JnLWJhc2UtMyd9YH1cbiAgICAgICAgaWQ9eydyYWRpbycgKyBwcm9wcy5rZXlWYWx1ZX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudFNsaWRlKHByb3BzLmtleVZhbHVlKX1cbiAgICAgICAgPjwvbGFiZWw+XG4gICAgICApXG4gIH1cblxuICBjb25zdCBpbWFnZUFyciA9ICgpID0+IHNsaWRlckltYWdlcy5tYXAoKHgpID0+IHtcbiAgICByZXR1cm4oPEltYWdlU2xpZGUga2V5VmFsdWU9e3h9IC8+KVxuICAgIH1cbiAgKVxuXG4gIGNvbnN0IGxhYmVsQXJyID0gKCkgPT4gc2xpZGVySW1hZ2VzLm1hcCgoeCkgPT4ge1xuICAgIHJldHVybig8U2xpZGVMYWJlbCBrZXlWYWx1ZT17eH0gLz4pXG4gICAgfVxuICApXG5cblxuLy8gY29uc3QgaW1hZ2VGaXJzdCA9IGltYWdlQXJyWy0xXVxuLy8gY29uc3QgaW1hZ2VGaXJzdCA9IGltYWdlQXJyWy0xXVxuLy8gaW1hZ2VBcnIudW5zaGlmdChpbWFnZUZpcnN0KVxuXG4vLyBjb25zdCBpbWFnZUxhc3QgID0gaW1hZ2VBcnJbMV1cbi8vIGltYWdlTGFzdC5rZXkgPSAnbGFzdC1zbGlkZSdcbi8vIGltYWdlQXJyLnB1c2goaW1hZ2VMYXN0KVxuXG4gIGZ1bmN0aW9uIHJlc2V0U2xpZGVyKHByb3BzOiAnZmlyc3QnIHwgJ2xhc3QnKSB7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldElzVHJhbnNpdGlvbkJsb2NrZWQodHJ1ZSk7XG4gICAgfSwgMzAwKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNUcmFuc2l0aW9uQmxvY2tlZChmYWxzZSk7XG4gICAgfSwgNTAwKVxuXG4gICAgaWYgKHByb3BzID09PSAnZmlyc3QnKSB7XG4gICAgICBzZXRDdXJyZW50U2xpZGUoNik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFNsaWRlKDEpO1xuICAgICAgfSwgMzAwKVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEN1cnJlbnRTbGlkZSgwKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50U2xpZGUoNSk7XG4gICAgICB9LCAzMDApXG5cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhwcm9wczogJ2xlZnQnIHwgJ3JpZ2h0Jykge1xuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzd2l0Y2gocHJvcHMpIHtcblxuICAgICAgY2FzZSAnbGVmdCc6IFxuICAgICAgICBjdXJyZW50U2xpZGUgPiAxID8gXG4gICAgICAgIHNldEN1cnJlbnRTbGlkZShjdXJyZW50U2xpZGUgLSAxKSA6IFxuICAgICAgICByZXNldFNsaWRlcignbGFzdCcpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncmlnaHQnOiBcbiAgICAgICAgY3VycmVudFNsaWRlIDwgNSA/IFxuICAgICAgICBzZXRDdXJyZW50U2xpZGUoY3VycmVudFNsaWRlICsgMSkgOiBcbiAgICAgICAgcmVzZXRTbGlkZXIoJ2ZpcnN0Jyk7XG4gICAgfVxuXG4gICAgc2V0RGlzYWJsZWQodHJ1ZSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldERpc2FibGVkKGZhbHNlKSwgNTAwKVxuICAgIFxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICA8c3ZnIFxuICAgICAgICBjbGFzc05hbWU9XCJcbiAgICAgICAgICBmaWxsLWJhc2UtMyBcbiAgICAgICAgICBjdXJzb3ItcG9pbnRlciBcbiAgICAgICAgICBkdXJhdGlvbi0xNTAgXG4gICAgICAgICAgZWFzZS1pbi1vdXQgXG4gICAgICAgICAgaG92ZXI6ZmlsbC1iYXNlLTEgXG4gICAgICAgICAgaG92ZXI6c2NhbGUtMTI1XCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soJ2xlZnQnKX1cbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIFxuICAgICAgICBoZWlnaHQ9XCI0OFwiIFxuICAgICAgICB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCIgXG4gICAgICAgIHdpZHRoPVwiNDhcIj5cbiAgICAgICAgPHBhdGggZD1cIk01NjEgODE2IDMyMCA1NzVsMjQxLTI0MSA0MyA0My0xOTggMTk4IDE5OCAxOTgtNDMgNDNaXCIvPlxuICAgICAgPC9zdmc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiB3LVs2MDBweF0gaC1bNDAwcHhdIHJvdW5kZWQtMnhsIHotMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgXG4gICAgICAgICAgICAgICAgICAgIGZsZXggXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tJHtpc1RyYW5zaXRpb25CbG9ja2VkID8gJ25vbmUnIDogJ2FsbCd9IFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbi0ke2lzVHJhbnNpdGlvbkJsb2NrZWQgPyAnMCcgOiAnMzAwJ31cbiAgICAgICAgICAgICAgICAgICAgdy1bNjAwcHhdIFxuICAgICAgICAgICAgICAgICAgICBoLVs0MDBweF1cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyLSR7Y3VycmVudFNsaWRlfWBcbiAgICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgIHtpbWFnZXN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMyBmbGV4IGdhcC0zIGp1c3RpZnktY2VudGVyIHctWzYwMHB4XVwiPlxuICAgICAgICAgICAge2xhYmVsc31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdmcgXG4gICAgICAgICAgY2xhc3NOYW1lPVwiXG4gICAgICAgICAgICBmaWxsLWJhc2UtMyBcbiAgICAgICAgICAgIGN1cnNvci1wb2ludGVyIFxuICAgICAgICAgICAgZHVyYXRpb24tMTUwIFxuICAgICAgICAgICAgZWFzZS1pbi1vdXQgXG4gICAgICAgICAgICBob3ZlcjpmaWxsLWJhc2UtMSBcbiAgICAgICAgICAgIGhvdmVyOnNjYWxlLTEyNVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soJ3JpZ2h0Jyl9XG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIFxuICAgICAgICAgIGhlaWdodD1cIjQ4XCIgXG4gICAgICAgICAgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiIFxuICAgICAgICAgIHdpZHRoPVwiNDhcIj5cbiAgICAgICAgICA8cGF0aCBkPVwibTM3NSA4MTYtNDMtNDMgMTk4LTE5OC0xOTgtMTk4IDQzLTQzIDI0MSAyNDEtMjQxIDI0MVpcIi8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic2xpZGVySW1hZ2VzIiwiU2xpZGVyIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwibGFiZWxzIiwic2V0TGFiZWxzIiwiaXNUcmFuc2l0aW9uQmxvY2tlZCIsInNldElzVHJhbnNpdGlvbkJsb2NrZWQiLCJkaXNhYmxlZCIsInNldERpc2FibGVkIiwidGVzdCIsImltYWdlQXJyIiwiY29uc29sZSIsImxvZyIsIkltYWdlU2xpZGUiLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsImtleVZhbHVlIiwiU2xpZGVMYWJlbCIsImxhYmVsIiwiaHRtbEZvciIsImlkIiwib25DbGljayIsIm1hcCIsIngiLCJsYWJlbEFyciIsInJlc2V0U2xpZGVyIiwic2V0VGltZW91dCIsImhhbmRsZUNsaWNrIiwic3ZnIiwieG1sbnMiLCJoZWlnaHQiLCJ2aWV3Qm94Iiwid2lkdGgiLCJwYXRoIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/components/home/Slider.tsx\n"));

/***/ })

});