import React from 'react'
import { TeamOutlined, UserOutlined } from '@ant-design/icons'
import { Row, Card, Col, Space, Button } from 'antd'
import { Typography } from 'antd';
const { Title, Text } = Typography;

function Stepthree(props) {
  return (
    <>
      <Row justify='center' gutter={50}>
        <Col xs={{ span: 2, offset: 1 }} lg={{ span: 2, offset: 2 }}>
          <Card size="small" style={{ width: 200 }}>
            <Space direction='vertical'>
              <UserOutlined />
              <Title level={5}><b>For myself</b></Title>
              <Text type='secondary'>Write better. Think more clearly. Stay organized.</Text>
            </Space>
          </Card>
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Card size="small" style={{ width: 200 }}>
            <Space direction='vertical'>
              <UserOutlined />
              <Title level={5}><b>With my team</b></Title>
              <Text type='secondary'>Wikis, docs, tasks & projects, all in one.</Text>
            </Space>
          </Card>
        </Col>
      </Row>
      <Row>
      </Row>
      <Button type='primary' onClick={() => {
        props.onChange('currentStep', 3)
      }} >Create workspace</Button>
    </>
  )
}

export default Stepthree