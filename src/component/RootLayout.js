"use client"
import { Dropdown, Space, Menu, Button, Drawer, Layout, theme, Popover, Avatar, Tooltip } from 'antd';
import { UserOutlined, MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSession, signOut } from "next-auth/react"
import auth from '@/firebase/firebase.auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components';
import styles from '@/styles/Root.module.css'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
//
const { Header, Content, } = Layout;
const MobileMenuToggle = styled(Button)`
  display: none; /* Hide on desktop screens */

  @media (max-width: 768px) {
    display: block; /* Show on mobile screens */
  }
`;


const MobileDrawer = styled(Drawer)`
  .ant-drawer-content-wrapper {
    width: 80%; /* Adjust width as needed */

    @media (max-width: 768px) {
      width: 100%; /* Occupy full width on mobile screens */
    }
  }
`;


const RootLayout = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const { data: session } = useSession()
    const [open, setOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        // Function to handle window resize
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Set initial width on client-side only
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []);


    const handleMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const hide = () => {
        setOpen(false);
    };
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const items = [
        {
            key: '1',
            label: (

                <Link style={{ color: "black" }} href={"/productDetailsPage/CpuProcessor"}>CPU</Link>

            ),
        },
        {
            key: '2',
            label: (
                <Link style={{ color: "black" }} href={"/productDetailsPage/MotherBoard"}>Motherboard</Link>
            ),

        },
        {
            key: '3',
            label: (
                <Link style={{ color: "black" }} href={"/productDetailsPage/RAM"}>Ram</Link>
            ),

        },
        {
            key: '4',
            label: (
                <Link style={{ color: "black" }} href={"/productDetailsPage/PowerSupply"}>Power</Link>
            ),
        },
        {
            key: '5',
            label: (
                <Link style={{ color: "black" }} href={"/productDetailsPage/StorageDevice"}>Storage</Link>
            ),
        },
        {
            key: '6',
            label: (
                <Link style={{ color: "black" }} href={"/productDetailsPage/Monitors"}>Monitor</Link>
            ),
        },
        {
            key: '7',
            label: (
                <Link style={{ color: "black" }} href={"/productDetailsPage/Others"}>Others</Link>
            ),
        },
    ];

    return (



        <Layout className="layout">
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',


                }}
            >

                <h1><Link style={{ color: "white", display: 'flex', justifyItems: 'center' }} href={"/"}>Hero Tech</Link></h1>

                <div className="demo-logo" />



                {/* Mobile Menu Toggle Button */}


                {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <div style={{ display: 'flex', gap: '170px', justifyContent: 'space-between' }}>




                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '5px' }}>
                        <div style={{ gap: '5px', color: "white", display: windowWidth <= 1006 ? 'none' : 'block' }}>
                            <Link style={{ color: "white", marginRight: "15px" }} href={"/"}>Home</Link>
                            <Dropdown menu={{ items }}>
                                <a style={{ color: "white" }} onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        Categories
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>


                        </div>
                        <Link href={"/pccomponent/pcBuilder/pcBuilder"}><Button type="primary">Pc Builder</Button></Link>
                        <Popover className={styled.container}
                            content={<a onClick={hide}>Close</a>}
                            title={
                                <div style={{ display: "block", marginBottom: '10px' }}>

                                    {session?.user?.email ?
                                        <>
                                            <div style={{ marginBottom: '10px' }}>
                                                <Link href={"/userDashboard"}><Button type="primary" ghost>User Dashboard</Button></Link>
                                            </div>
                                            <div style={{ marginBottom: '10px' }}>
                                                <Link href={"/"}><Button type="primary" onClick={() => signOut()} danger>LoggedOut</Button></Link>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div style={{ marginBottom: '10px' }}>
                                                <Link href={"/login/login"}><Button type="primary" ghost>LogIn</Button></Link>
                                            </div>
                                            <div style={{ marginBottom: '10px' }}>
                                                <Link href={"/register/register"}><Button type="primary" ghost>Register</Button></Link>
                                            </div>
                                        </>
                                    }
                                </div>
                            }
                            trigger="click"
                            open={open}
                            onOpenChange={handleOpenChange}
                        >

                            <Tooltip title={session?.user?.email} placement="top">

                                <Avatar
                                    style={{
                                        backgroundColor: '#87d068',
                                    }}
                                    icon={<UserOutlined />}
                                />
                            </Tooltip>
                        </Popover>
                        {/*  */}

                    </div>
                </div>
                {/* bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb */}

                <div style={{ display: windowWidth >= 700 && windowWidth <= 1006 ? 'block' : 'none' }}>
                    <MobileMenuToggle
                        type="text"
                        icon={<a style={{ color: "white" }}><MenuOutlined /></a>}
                        onClick={handleMenuToggle}
                    />

                    {/* Drawer for Mobile Menu */}

                    <div>
                        <MobileDrawer
                            title="Menu"
                            placement="left"
                            visible={isMobileMenuOpen}
                            onClose={handleMenuToggle}

                        >

                            <div style={{ display: "block", marginBottom: '10px' }}>

                                {session?.user?.email ?
                                    <>
                                        <div style={{ marginBottom: '10px' }}>
                                            <Link href={"/userDashboard"}><Button type="primary" ghost>User Dashboard</Button></Link>
                                        </div>
                                        <div style={{ marginBottom: '10px' }}>
                                            <Link href={"/"}><Button type="primary" onClick={() => signOut()} danger>LoggedOut</Button></Link>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div style={{ marginBottom: '10px' }}>
                                            <Link href={"/login/login"}><Button type="primary" ghost>LogIn</Button></Link>
                                        </div>
                                        <div style={{ marginBottom: '10px' }}>
                                            <Link href={"/register/register"}><Button type="primary" ghost>Register</Button></Link>
                                        </div>
                                    </>
                                }
                            </div>

                            <Link href={"/pccomponent/pcBuilder/pcBuilder"}><Button type="primary">Pc Builder</Button></Link>
                            <Menu mode="vertical">

                                <Menu.Item key="1"> <Link href={"/productDetailsPage/CpuProcessor"}>CPU/Processor</Link></Menu.Item>

                                <Menu.Item key="2"> <Link href={"/productDetailsPage/MotherBoard"}>Motherboard</Link></Menu.Item>

                                <Menu.Item key="3">  <Link href={"/productDetailsPage/RAM"}>Ram</Link></Menu.Item>

                                <Menu.Item key="4">  <Link href={"/productDetailsPage/Power%20Supply"}>Power Supply</Link></Menu.Item>

                                <Menu.Item key="5">  <Link href={"/productDetailsPage/Storage%20Device"}>Storage Device</Link></Menu.Item>

                                <Menu.Item key="6"><Link href={"/productDetailsPage/Monitors"}>Monitor</Link></Menu.Item>

                                <Menu.Item key="7"><Link href={"/productDetailsPage/Others"}>Others</Link></Menu.Item>

                                {/* Add more menu items as needed */}
                            </Menu>
                        </MobileDrawer>
                    </div>




                    {/*  */}
                </div>

            </Header >
            <Content
                style={{
                    padding: '0 50px',
                }}
            >

                <div
                    className="site-layout-content"
                    style={{
                        // background: colorBgContainer,
                        minHeight: "50vh"

                    }}
                >
                    {children}
                </div>
            </Content>

        </Layout>
    );
};

export default RootLayout;



















