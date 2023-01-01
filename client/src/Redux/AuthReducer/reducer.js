import * as types from "./actiontypes";

const initial = {
  isAuth: true,
  isLoading: false,
  isError: false,
  data:null,
};

export const reducer = (state = initial, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SIGNUP_REQUEST:
      return { ...state, isLoading: true };
    case types.SIGNUP_SUCCESS:
      return { ...state, isLoading: false, data:payload  };
    case types.SIGNUP_FAILURE:
      return { ...state, isLoading: false, isError:true  };

      default:
            return state
  }
};
