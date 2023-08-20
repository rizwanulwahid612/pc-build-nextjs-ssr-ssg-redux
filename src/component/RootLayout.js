import { Breadcrumb, Menu, Button, Drawer, Layout, theme, Popover, Avatar, Divider, Tooltip } from 'antd';
import { AntDesignOutlined, LaptopOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import auth from '@/firebase/firebase.auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components';
import styles from '@/styles/Root.module.css'
//
const { Header, Content, Footer } = Layout;
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

    return (

        <Layout className="layout">
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',


                }}
            >
                <h1><Link style={{ backgroundColor: "white", display: 'flex', justifyItems: 'center' }} href={"/"}><LaptopOutlined /></Link></h1>

                <div className="demo-logo" />



                {/* Mobile Menu Toggle Button */}



                <div style={{ display: 'flex', gap: '170px', justifyContent: 'space-between' }}>


                    <div style={{ gap: '5px' }} className={styles.container}>
                        <div >
                            <Link href={"/productDetailsPage/CpuProcessor"}>CPU</Link>
                        </div>
                        <div>
                            <Link href={"/productDetailsPage/MotherBoard"}>Motherboard</Link>
                        </div>
                        <div>
                            <Link href={"/productDetailsPage/RAM"}>Ram</Link>
                        </div>
                        <div>
                            <Link href={"/productDetailsPage/Power%20Supply"}>Power</Link>
                        </div>
                        <div>
                            <Link href={"/productDetailsPage/Storage%20Device"}>Storage</Link>
                        </div>
                        <div>
                            <Link href={"/productDetailsPage/Monitors"}>Monitor</Link>
                        </div>
                        <div>
                            <Link href={"/productDetailsPage/Others"}>Others</Link>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '5px' }}>
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
                        <Link href={"/pccomponent/pcBuilder/pcBuilder"}><Button type="primary">Pc Builder</Button></Link>

                    </div>
                </div>

                <div>
                    <MobileMenuToggle
                        type="text"
                        icon={<a><MenuOutlined /></a>}
                        onClick={handleMenuToggle}
                    />

                    {/* Drawer for Mobile Menu */}
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
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default RootLayout;



















