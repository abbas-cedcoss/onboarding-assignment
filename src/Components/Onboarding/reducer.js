export function reducer(state, action) {
    const tempState = { ...state };
    switch (action.type) {
        case 'currentStep':
            tempState['currentStep'] = state['currentStep'] + 1;
            break;
        case 'onchange':
            tempState['steps'][action.payload.subfield][action.payload.metafield] = action.payload.value;
            break;
        default:
            break;
    };
    return { ...tempState };
}