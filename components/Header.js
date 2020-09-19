import React from "react";
import "../styles/components/header.css";
import { Row, Col, Menu, Icon } from "antd";

const Header = () => (
  <div className="header">
    <Row type="flex" justify="center">
      <Col xs={24} sm={24} md={10} lg={15} xl={12}>
        <span className="header-logo">前端kui</span>
        <span className="header-txt">前端开发第一年。</span>
      </Col>
      <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
        <Menu mode="horizontal">
          <Menu.Item key="home">
            <Icon type="home" />
            首页
          </Menu.Item>
          <Menu.Item key="video">
            <Icon type="youtube" />
            文章
          </Menu.Item>
          <Menu.Item key="life">
            <Icon type="smile" />
            说说
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </div>
);

export default Header;
