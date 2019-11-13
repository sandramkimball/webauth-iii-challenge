module.exports={
    validateUser
}

function validateUser(user){
    let errors = [];

    if (user.username === null){
        errors.push('Username cannot be null.')
    }

    if (user.password === null){
        errors.push('Password cannot be null.')
    }

    return {
        isSuccessful: errors.length > 0 ? false:true,
        errors
    }
}