import React from 'react';
import { Button, Card, Input } from 'antd'

function Steptwo(props) {
    return (
        <Card>
            <label>Workspace Name</label>
            <Input /><br /><br />
            <label>Workspace URL</label>
            <Input addonBefore='www.eden.com' /><br /><br />
            <Button type='primary' onClick={() => {
                props.onChange('currentStep', 2)
            }} >Create workspace</Button>
        </Card>
    )
}

export default Steptwo