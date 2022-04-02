export const onboardingStates = {
    currentStep: 0,
    steps: {
        stepOne: {
            fullname: '',
            displayname: ''
        },
        stepTwo: {
            workspacename: '',
            workspace_url: ''
        }
    }
}

export function validator(currentStep = 0, states = {}) {
    const validated = {
        currentStep: currentStep,
        errors: {}
    }

    let { stepOne, stepTwo } = states.steps;
    let validationNode = currentStep === 0 ? stepOne : stepTwo;
    Object.keys(validationNode).map(error => {
        if (validationNode[error] === '')
            validated['errors'][error] = true;
        else validated['errors'][error] = false;
    })

    return { ...validated }
}