import { UserOutlined } from '@ant-design/icons';
import { Avatar, Layout, Menu, Tooltip } from 'antd';
import { MenuClickEventHandler } from 'rc-menu/lib/interface';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import style from './Main.module.css';
import { menuData } from './menuData';

const { Header, Content, Footer, Sider } = Layout;


const Main: React.FC = () => {
  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();
  const navigate = useNavigate();
  const navigateTo: MenuClickEventHandler = (item: any) => {
    navigate(item.key);
  }

  return (
    <Layout className={style.main}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu 
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={menuData}
          style={{ flex: 1, minWidth: 0 }}
          onSelect={navigateTo}
        />
        <Tooltip title="Nevostruev.Team" placement="top">
          <Avatar icon={<UserOutlined />}/>
        </Tooltip>        
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
        ©{new Date().getFullYear()} Created by Nevostruev.Team
      </Footer>
    </Layout>
  );
};

export default Main;