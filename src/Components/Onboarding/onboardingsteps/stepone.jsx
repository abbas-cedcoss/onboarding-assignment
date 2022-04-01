import { Button, Card, Input } from 'antd'
import React from 'react'

function Stepone(props) {
    return (
        <Card>
            <label>Full Name</label>
            <Input /><br /><br />
            <label>Display Name</label>
            <Input /><br /><br />
            <Button type='primary' onClick={() => {
                props.onChange('currentStep', 1)
            }} >Create workspace</Button>
        </Card>
    )
}

export default Stepone