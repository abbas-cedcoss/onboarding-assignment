export function errorValidator(states) {
    let errors = { ...states }
    Object.keys(states).forEach(error => {
        if (errors[error] === '')
            errors[error] = true;
    })
    return { errors };
}