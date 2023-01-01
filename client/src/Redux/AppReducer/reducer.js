import * as types from "./actiontypes";

const initial = {
  isLoading: false,
  isError: false,
};

export const reducer = (state = initial, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_ALL_BLOG_REQUEST:
      return {
        ...state,
      };
    default:
      return state;
  }
};
