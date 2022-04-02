import React, { useState } from 'react'
import { onboardingStates } from './onboardingHelper';
import Stepone from './onboardingsteps/stepone';
import Stepthree from './onboardingsteps/Stepthree';
import Steptwo from './onboardingsteps/Steptwo';
import Stepfour from './onboardingsteps/Stepfour';
import Stepsrenderer from './onboardingsteps/Stepsrenderer';
import { Col, Image, Row, Form, Button } from 'antd';
import eden_logo from '../../assets/images/eden_logo.png';

function Onboarding() {

  const [state, setStates] = useState(onboardingStates);

  function updateState(stepType = '', value = 0, data = {}) {
    let tempStates = { ...state };
    tempStates[stepType] = tempStates[stepType] + 1;
    setStates({ ...tempStates });
  }

  function getStep() {
    switch (state['currentStep']) {
      case 0:
        return <Stepone />
      case 1:
        return <Steptwo />
      case 2:
        return <Stepthree />
      case 3:
        return <Stepfour />
      default:
        break;
    }
  }

  function renderStep() {
    return <Row justify='center' align='middle'>
      <Col span={24}>
        <Form layout='vertical'>
          {getStep()}
          <Form.Item>
            <Button block type="primary" onClick={() => {
              updateState('currentStep', 1);
            }}>
              Create workspace
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  }

  return (
    <Row justify='center' align='middle' style={{ minHeight: '50vh' }}>
      <Col span={6}>
        <Row justify='center' gutter={[0, 32]}>
          <Col>
            <Image src={eden_logo} preview={false} />
          </Col>
          <Col span={22}>
            <Stepsrenderer
              currentStep={state['currentStep']}
              renderer={<p>HEllo</p>}
            />
          </Col>
          <Col span={24}>
            {renderStep()}
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Onboarding