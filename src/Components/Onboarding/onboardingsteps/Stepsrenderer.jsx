import React from 'react';
import { Steps } from 'antd';

const { Step } = Steps;

function Stepsrenderer(props) {

    let { currentStep } = props;
    return (
        <Steps current={currentStep}>
            <Step />
            <Step />
            <Step />
            <Step />
        </Steps>
    )
}

export default Stepsrenderer