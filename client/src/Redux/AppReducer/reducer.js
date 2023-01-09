import * as types from "./actiontypes";

const initial = {
  isLoading: false,
  isError: false,
  data: [],
  userblog:[]
};

export const reducer = (state = initial, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_ALL_BLOG_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_ALL_BLOG_SUCCESS:
      return { ...state, isLoading: false, data: payload };
    case types.GET_ALL_BLOG_FAILURE:
      return { ...state, isError: true, data: [] };

      case types.GET_USER_BLOG_REQUEST:
        return { ...state, isLoading: true };
      case types.GET_USER_BLOG_SUCCESS:
        return { ...state, isLoading: false, userblog: payload };
      case types.GET_USER_BLOG_FAILURE:
        return { ...state, isError: true, userblog: [] };

      //   case types.ADD_USER_BLOG_REQUEST:
      //   return { ...state, isLoading: true };
      // case types.ADD_USER_BLOG_SUCCESS:
      //   return { ...state, isLoading: false, userblog: payload };
      // case types.ADD_USER_BLOG_FAILURE:
      //   return { ...state, isError: true, userblog: [] };




    default:
      return state;
  }
};
