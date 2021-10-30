export const userReducer = (
    state = { perInfo: []},
    action
  ) => {
    if (action.type === "ADD_PERSONAL_INFO") {
      return {
        ...state,
        perInfo: [action.data],
      };
    }
    return state;
  };