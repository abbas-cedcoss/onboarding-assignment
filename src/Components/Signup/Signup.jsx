import { Button, Card, Input } from 'antd';
import Layout, { Header } from 'antd/lib/layout/layout';
import { UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { initialCredentials } from './signupHelper';
import { useNavigate } from 'react-router-dom';
import { errorValidator } from '../Common';

function Signup(Props) {
    const [credentials, setCredentials] = useState(initialCredentials);
    const navigate = useNavigate();

    function updateState(field = '', value = '') {
        credentials[field] = value;
        setCredentials({ ...credentials });
    }

    function navigateUser() {
        // let { errors } = errorValidator(credentials);
        // let errorPrompt = Object.keys(errors).forEach((value) => {
        //     if (errors[value]) return true;
        // })
        // console.log(errorPrompt);
        navigate('/registration');
    }

    return (
        <Layout>
            <Header></Header>
            <Card title='Sign-up' bordered>
                <>
                    <Input value={credentials['name']} onChange={(event) => { updateState('name', event.target.value) }} size="large" placeholder="Enter name" prefix={<UserOutlined />} />
                    <br /><br />
                    <Input value={credentials['email']} onChange={(event) => { updateState('email', event.target.value) }} size="large" placeholder="Enter email id" prefix={<MailOutlined />} />
                    <br /><br />
                    <Input value={credentials['phone']} onChange={(event) => { updateState('phone', event.target.value) }} size="large" placeholder="Enter number" prefix={<PhoneOutlined />} />
                    <br /><br />
                    <Button onClick={() => { navigateUser() }}>Sign up</Button>
                </>
            </Card>
        </Layout>
    )
}

export default Signup