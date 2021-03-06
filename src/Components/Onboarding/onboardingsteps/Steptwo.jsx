import React from 'react';
import { Typography, Input, Form, Col } from 'antd';
let { Title, Text } = Typography;


function Steptwo(props) {
    let { onChange } = props;
    return (
        <>
            <Col span={24} align='middle'>
                <React.Fragment>
                    <Title level={3}>Let's set up a home for all your work</Title>
                    <Text type='secondary'>You can always create another workspace later</Text>
                </React.Fragment>
            </Col>
            <Form.Item
                label="Workspace Name"
                name="workspace_name"
            >
                <Input placeholder='Eden' onChange={(event) => {
                    onChange('workspacename', event.target.value, 'onchange');
                }} />
            </Form.Item>

            <Form.Item
                label={<><Text>Workspace URL </Text><Text type='secondary'>(optional)</Text></>}
                name="workspace_url"
            >
                <Input addonBefore='www.eden.com/' placeholder='example' onChange={(event) => {
                    onChange('workspace_url', event.target.value, 'onchange');
                }} />
            </Form.Item>
        </>
    )
}

export default Steptwo