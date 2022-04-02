import React from 'react'
import { Col, Typography, Input, Form } from 'antd';
let { Title, Text } = Typography;

function Stepone(props) {
    let { onChange } = props;
    return (
        <>
            <Col span={24} align='middle'>
                <React.Fragment>
                    <Title level={3}>Welcome! first things first...</Title>
                    <Text type='secondary'>We will streamline your setup</Text>
                </React.Fragment>
            </Col>
            <Form.Item
                label="Full Name"
                name="full_name"
            >
                <Input placeholder='Steve Jobs' onChange={(event) => {
                    onChange('fullname', event.target.value, 'onchange')
                }} />
            </Form.Item>

            <Form.Item
                label="Display Name"
                name="display_name"
            >
                <Input placeholder='Steve' onChange={(event) => {
                    onChange('displayname', event.target.value, 'onchange')
                }} />
            </Form.Item>
        </>
    )
}

export default Stepone;