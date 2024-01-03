"use strict";
exports.id = 206;
exports.ids = [206];
exports.modules = {

/***/ 8206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1788);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7374);
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_space__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(274);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3800);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8000);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5417);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6653);
/* harmony import */ var antd_lib_theme__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_theme__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(628);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5998);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9348);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2127);
/* harmony import */ var _ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ant_design_icons_lib_icons_MenuOutlined__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2458);
/* harmony import */ var _ant_design_icons_lib_icons_MenuOutlined__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_MenuOutlined__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3299);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _firebase_firebase_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1236);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(830);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _ant_design_icons_lib_icons_DownOutlined__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1470);
/* harmony import */ var _ant_design_icons_lib_icons_DownOutlined__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_DownOutlined__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _ant_design_icons_lib_icons_SmileOutlined__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1265);
/* harmony import */ var _ant_design_icons_lib_icons_SmileOutlined__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_SmileOutlined__WEBPACK_IMPORTED_MODULE_20__);
/* __next_internal_client_entry_do_not_use__ default auto */ 





















//
const { Header, Content } = (antd_lib_layout__WEBPACK_IMPORTED_MODULE_6___default());
const MobileMenuToggle = styled_components__WEBPACK_IMPORTED_MODULE_18___default()((antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default()))`
  display: none; /* Hide on desktop screens */

  @media (max-width: 768px) {
    display: block; /* Show on mobile screens */
  }
`;
const MobileDrawer = styled_components__WEBPACK_IMPORTED_MODULE_18___default()((antd_lib_drawer__WEBPACK_IMPORTED_MODULE_5___default()))`
  .ant-drawer-content-wrapper {
    width: 80%; /* Adjust width as needed */

    @media (max-width: 768px) {
      width: 100%; /* Occupy full width on mobile screens */
    }
  }
`;
const RootLayout = ({ children })=>{
    const [user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_17__.useAuthState)(_firebase_firebase_auth__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z);
    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_15__.useSession)();
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(false);
    const [windowWidth, setWindowWidth] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(()=>{
        // Function to handle window resize
        const handleResize = ()=>{
            setWindowWidth(window.innerWidth);
        };
        // Set initial width on client-side only
        if (false) {}
        return ()=>{
            if (false) {}
        };
    }, []);
    const handleMenuToggle = ()=>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const hide = ()=>{
        setOpen(false);
    };
    const handleOpenChange = (newOpen)=>{
        setOpen(newOpen);
    };
    const { token: { colorBgContainer } } = antd_lib_theme__WEBPACK_IMPORTED_MODULE_7___default().useToken();
    const items = [
        {
            key: "1",
            label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                style: {
                    color: "black"
                },
                href: "/productDetailsPage/CpuProcessor",
                children: "CPU"
            })
        },
        {
            key: "2",
            label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                style: {
                    color: "black"
                },
                href: "/productDetailsPage/MotherBoard",
                children: "Motherboard"
            })
        },
        {
            key: "3",
            label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                style: {
                    color: "black"
                },
                href: "/productDetailsPage/RAM",
                children: "Ram"
            })
        },
        {
            key: "4",
            label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                style: {
                    color: "black"
                },
                href: "/productDetailsPage/PowerSupply",
                children: "Power"
            })
        },
        {
            key: "5",
            label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                style: {
                    color: "black"
                },
                href: "/productDetailsPage/StorageDevice",
                children: "Storage"
            })
        },
        {
            key: "6",
            label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                style: {
                    color: "black"
                },
                href: "/productDetailsPage/Monitors",
                children: "Monitor"
            })
        },
        {
            key: "7",
            label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                style: {
                    color: "black"
                },
                href: "/productDetailsPage/Others",
                children: "Others"
            })
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_layout__WEBPACK_IMPORTED_MODULE_6___default()), {
        className: "layout",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Header, {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                            style: {
                                color: "white",
                                display: "flex",
                                justifyItems: "center"
                            },
                            href: "/",
                            children: "Hero Tech"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "demo-logo"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            display: "flex",
                            gap: "170px",
                            justifyContent: "space-between"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                gap: "5px"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        gap: "5px",
                                        color: "white",
                                        display: windowWidth <= 1006 ? "none" : "block"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                                            style: {
                                                color: "white",
                                                marginRight: "15px"
                                            },
                                            href: "/",
                                            children: "Home"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            menu: {
                                                items
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                style: {
                                                    color: "white"
                                                },
                                                onClick: (e)=>e.preventDefault(),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_space__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    children: [
                                                        "Categories",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_DownOutlined__WEBPACK_IMPORTED_MODULE_19___default()), {})
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                                    href: "/pccomponent/pcBuilder/pcBuilder",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        type: "primary",
                                        children: "Pc Builder"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_popover__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    className: (styled_components__WEBPACK_IMPORTED_MODULE_18___default().container),
                                    content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        onClick: hide,
                                        children: "Close"
                                    }),
                                    title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            display: "block",
                                            marginBottom: "10px"
                                        },
                                        children: session?.user?.email ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        marginBottom: "10px"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                        href: "/userDashboard",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                            type: "primary",
                                                            ghost: true,
                                                            children: "User Dashboard"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        marginBottom: "10px"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                            type: "primary",
                                                            onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_15__.signOut)(),
                                                            danger: true,
                                                            children: "LoggedOut"
                                                        })
                                                    })
                                                })
                                            ]
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        marginBottom: "10px"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                        href: "/login/login",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                            type: "primary",
                                                            ghost: true,
                                                            children: "LogIn"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        marginBottom: "10px"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                        href: "/register/register",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                            type: "primary",
                                                            ghost: true,
                                                            children: "Register"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    trigger: "click",
                                    open: open,
                                    onOpenChange: handleOpenChange,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_10___default()), {
                                        title: session?.user?.email,
                                        placement: "top",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_avatar__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            style: {
                                                backgroundColor: "#87d068"
                                            },
                                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_11___default()), {})
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            display: windowWidth >= 700 && windowWidth <= 1006 ? "block" : "none"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileMenuToggle, {
                                type: "text",
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    style: {
                                        color: "white"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ant_design_icons_lib_icons_MenuOutlined__WEBPACK_IMPORTED_MODULE_12___default()), {})
                                }),
                                onClick: handleMenuToggle
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MobileDrawer, {
                                    title: "Menu",
                                    placement: "left",
                                    visible: isMobileMenuOpen,
                                    onClose: handleMenuToggle,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                display: "block",
                                                marginBottom: "10px"
                                            },
                                            children: session?.user?.email ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            marginBottom: "10px"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                            href: "/userDashboard",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                type: "primary",
                                                                ghost: true,
                                                                children: "User Dashboard"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            marginBottom: "10px"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                            href: "/",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                type: "primary",
                                                                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_15__.signOut)(),
                                                                danger: true,
                                                                children: "LoggedOut"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            marginBottom: "10px"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                            href: "/login/login",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                type: "primary",
                                                                ghost: true,
                                                                children: "LogIn"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            marginBottom: "10px"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                            href: "/register/register",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                type: "primary",
                                                                ghost: true,
                                                                children: "Register"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                                            href: "/pccomponent/pcBuilder/pcBuilder",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                type: "primary",
                                                children: "Pc Builder"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            mode: "vertical",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default().Item), {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                            href: "/productDetailsPage/CpuProcessor",
                                                            children: "CPU/Processor"
                                                        })
                                                    ]
                                                }, "1"),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default().Item), {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                            href: "/productDetailsPage/MotherBoard",
                                                            children: "Motherboard"
                                                        })
                                                    ]
                                                }, "2"),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default().Item), {
                                                    children: [
                                                        "  ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                            href: "/productDetailsPage/RAM",
                                                            children: "Ram"
                                                        })
                                                    ]
                                                }, "3"),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default().Item), {
                                                    children: [
                                                        "  ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                            href: "/productDetailsPage/Power%20Supply",
                                                            children: "Power Supply"
                                                        })
                                                    ]
                                                }, "4"),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default().Item), {
                                                    children: [
                                                        "  ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                            href: "/productDetailsPage/Storage%20Device",
                                                            children: "Storage Device"
                                                        })
                                                    ]
                                                }, "5"),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default().Item), {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                        href: "/productDetailsPage/Monitors",
                                                        children: "Monitor"
                                                    })
                                                }, "6"),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default().Item), {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                        href: "/productDetailsPage/Others",
                                                        children: "Others"
                                                    })
                                                }, "7")
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Content, {
                style: {
                    padding: "0 50px"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "site-layout-content",
                    style: {
                        // background: colorBgContainer,
                        minHeight: "50vh"
                    },
                    children: children
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RootLayout);


/***/ }),

/***/ 1236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ firebase_auth)
});

// EXTERNAL MODULE: external "firebase/auth"
var auth_ = __webpack_require__(4610);
// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__(4324);
;// CONCATENATED MODULE: ./src/firebase/firebase.config.js
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7CJKAI3S_m6n1ST91-tqTYy6FytHyaDI",
    authDomain: "pcbuilder-7fd66.firebaseapp.com",
    projectId: "pcbuilder-7fd66",
    storageBucket: "pcbuilder-7fd66.appspot.com",
    messagingSenderId: "716574398772",
    appId: "1:716574398772:web:15e3869f1723096ca76d61"
};
// Initialize Firebase
const app = (0,app_.initializeApp)(firebaseConfig);
/* harmony default export */ const firebase_config = (app);

;// CONCATENATED MODULE: ./src/firebase/firebase.auth.js


const auth = (0,auth_.getAuth)(firebase_config);
//use firebase hooks
/* harmony default export */ const firebase_auth = (auth);


/***/ })

};
;