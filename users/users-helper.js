module.exports={
    validateUser
}

function validateUser(user){
    let errors = [];

    if (!user.username || username.length < 3){
        errors.push('Username must be a minimum of 5 characters.')
    }

    if (!user.password || user.password.length < 5){
        errors.push('Password must be a minimum of 5 characters.')
    }

    return {
        isSuccessful: errors.length > 0 ? false:true,
        errors
    }
}