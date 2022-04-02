import React from 'react'
import { TeamOutlined, UserOutlined } from '@ant-design/icons'
import { Row, Card, Col, Space } from 'antd'
import { Typography } from 'antd';
const { Title, Text } = Typography;

function Stepthree(props) {
  return (
    <>
      <Row justify='center' align='middle' gutter={32}>
        <Col span={12}>
          <Card size="small" style={{ width: 200 }}>
            <Space direction='vertical'>
              <UserOutlined />
              <Title level={5}><b>For myself</b></Title>
              <Text type='secondary'>Write better. Think more clearly. Stay organized.</Text>
            </Space>
          </Card>
        </Col>
        <Col span={12}>
          <Card size="small" style={{ width: 200 }}>
            <Space direction='vertical'>
              <TeamOutlined />
              <Title level={5}><b>With my team</b></Title>
              <Text type='secondary'>Wikis, docs, tasks & projects, all in one.</Text>
            </Space>
          </Card>
        </Col>
      </Row>
      <br/><br/>
    </>
  )
}

export default Stepthree