import React, { useState } from 'react'
import { onboardingStates } from './onboardingHelper';
import Stepone from './onboardingsteps/stepone';
import Stepthree from './onboardingsteps/Stepthree';
import Steptwo from './onboardingsteps/Steptwo';
import Stepfour from './onboardingsteps/Stepfour';
import Stepsrenderer from './Stepsrenderer';
import { Card } from 'antd';

function Onboarding() {

  const [state, setStates] = useState(onboardingStates);

  function moveToNextStep(stepType = '', value = 0, data = {}) {
    let tempStates = { ...state };
    tempStates[stepType] = value;
    setStates({ ...tempStates });
  }

  function renderStepContent() {
    switch (state['currentStep']) {
      case 0:
        return <Stepone onChange={moveToNextStep.bind(this)} />
      case 1:
        return <Steptwo onChange={moveToNextStep.bind(this)} />
      case 2:
        return <Stepthree onChange={moveToNextStep.bind(this)} />
      case 3:
        return <Stepfour onChange={moveToNextStep.bind(this)} />
      default:
        break;
    }
  }

  return (
    <Card>
      <Stepsrenderer
        currentStep={state['currentStep']}
        renderer={<p>HEllo</p>}
      />
      {renderStepContent()}
    </Card>
  )
}

export default Onboarding