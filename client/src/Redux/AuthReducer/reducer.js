import * as types from "./actiontypes";

const initial = {
  isAuth: false,
  isLoading: false,
  isError: false,
  data: null,
};

export const reducer = (state = initial, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SIGNUP_REQUEST:
      return { ...state, isLoading: true };
    case types.SIGNUP_SUCCESS:
      return { ...state, isLoading: false, data: payload, isAuth: true };
    case types.SIGNUP_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case types.LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case types.LOGIN_SUCCESS:
      localStorage.setItem("userId", JSON.stringify(payload))
      return { ...state, isLoading: false, data: payload, isAuth: true };
    case types.LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true };

      case types.LOGOUT_SUCCESS:
        localStorage.removeItem("userId",payload)
        return {...state, isAuth:false, data:null}

    default:
      return state;
  }
};
