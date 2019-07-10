const initState = {
    authErr: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN_ERR":
            return {
                ...state,
                authErr: "Login Failed"
            };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                authErr: null
            };
        case "SIGNOUT_SUCCES":
            console.log("SignOut succeeded",);
            return state;
        case "SIGNUP_SUCCESS":
            console.log("SignUp succeeded");
            return {
                ...state,
            authErr: null
            };
        case "SIGNUP_ERR":
            return {
                ...state,
                authErr: action.err.message
            };
        default:
            return state;
    }
};

export default authReducer;