import React from 'react';
import {Layout, Menu, Icon} from 'antd';
import MainCountryComponent from "./MainCountryComponent";

const {Header, Content, Footer, Sider,} = Layout;

const CountryContainer = () => {
    return (
        <div>
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item key="1">
                            <Icon type="user"/>
                            <span className="nav-text">nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera"/>
                            <span className="nav-text">nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload"/>
                            <span className="nav-text">nav 3</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="flag"/>
                            <span className="nav-text">Country Module</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}/>
                    <Content style={{margin: '24px 16px 0'}}>
                        <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                                <MainCountryComponent/>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </div>
    )
};

export default CountryContainer;
