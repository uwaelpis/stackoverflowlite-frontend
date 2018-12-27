import {
LOGIN_FAILURE, LOGIN_SUCCESS
  } from '../../actions/types/login'
import {
SIGN_UP_SUCCESS, SIGN_UP_FAILURE
}from '../../actions/types/signup'
  let initialState;
  
  try {
    const persistedLogin = JSON.parse(localStorage.getItem('user'));
    if (persistedLogin) {
      initialState = persistedLogin;
    } else {
      initialState = {
        loading: false,
        success: false,
        error: null,
        token: null,
        username: null,
        
      };
    }
  } catch (error) { /* do nothing */ }
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: true,
      };
  
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        token: action.user.token,
        username: action.user.name,
      };
  
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
  
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        token: action.user.data.token,
        username: action.user.data.userName
      };
  
    case SIGN_UP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        user: null,
      };
  
    // case LOGOUT:
    //   return {
    //     ...state,
    //     success: true,
    //     loading: false,
    //     token: null,
    //     id: null,
    //   };
  
    default:
      return state;
    }
  };
  
  export default loginReducer;
  