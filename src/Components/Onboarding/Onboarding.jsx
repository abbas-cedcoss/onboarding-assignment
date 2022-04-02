import React, { useReducer } from 'react'
import { onboardingStates } from './onboardingHelper';
import Stepone from './onboardingsteps/stepone';
import Stepthree from './onboardingsteps/Stepthree';
import Steptwo from './onboardingsteps/Steptwo';
import Stepfour from './onboardingsteps/Stepfour';
import Stepsrenderer from './onboardingsteps/Stepsrenderer';
import { Col, Image, Row, Form, Button } from 'antd';
import eden_logo from '../../assets/images/eden_logo.png';
import { reducer } from './reducer';

function Onboarding() {
  const [state, dispatch] = useReducer(reducer, onboardingStates);

  function stateHandler(field = '', subfield = '', metafield = '', value = '', action_type, ...rest) {
    if (subfield !== '') {
      dispatch({
        type: action_type,
        payload: {
          subfield: subfield,
          metafield: metafield,
          value: value,
          rest: rest
        }
      });
    }
    else {
      dispatch({ type: field, payload: value });
    }
  }

  function getStep() {
    switch (state['currentStep']) {
      case 0:
        return <Stepone onChange={stateHandler.bind(this, 'steps', 'stepOne')} />
      case 1:
        return <Steptwo onChange={stateHandler.bind(this, 'steps', 'stepTwo')} />
      case 2:
        return <Stepthree />
      case 3:
        return <Stepfour {...state} />
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
              stateHandler('currentStep');
            }}>
              {state['currentStep'] === 3 ? 'Launch Eden' : 'Create workspace'}
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