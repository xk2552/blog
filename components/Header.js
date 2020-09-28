import React, { useState, useEffect } from "react";
import "../styles/components/header.css";
import { Row, Col, Menu } from "antd";
// import { HomeOutlined, AreaChartOutlined, ContainerOutlined } from '@ant-design/icons';
import Router from 'next/router';
// import Link from 'next/link';
import axios from 'axios';
import service from '../config/apiUrl'

const Header = () => {
  const [navArray, setNavArray] = useState([])

  useEffect(() => {
    const fecthData = async () => {
      const result = await axios(service.getTypeInfo).then((res) => {
        return res.data.data
      })
      setNavArray(result)
    }

    fecthData()
  }, [])

  const handleClick = (e) => {
    if (e.key === 0) {
      Router.push('/index')
    } else {
      Router.push('/list?id=' + e.key)
    }
  }



  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">玲玲的小乐园</span>
          <span className="header-txt">转React博客</span>
        </Col>
        <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" onClick={handleClick}>
            {
              navArray.map((item) => {
                return (
                  <Menu.Item key={item.id}>                   
                    {item.typeName}
                  </Menu.Item>
                )
              })
            }
          </Menu>
        </Col>
      </Row>
    </div>
  )
};

export default Header;
