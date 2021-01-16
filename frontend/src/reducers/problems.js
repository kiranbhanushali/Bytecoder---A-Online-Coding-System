// initially problems are empty
const initialState = {
  problems_list: [],
  pending: false,
  error: null,
  loaded: false,
  message: null,
};

export default function problemsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_PROBLEMS_PENDING":
      return {
        ...state,
        problems: action.payload,
        pending: true,
      };

    case "FETCH_PROBLEMS_SUCCESS":
      return {
        ...state,
        problems_list: action.payload,
        loaded: true,
        pending: false,
      };

    case "FETCH_PROBLEMS_ERROR":
      return {
        ...state,
        pending: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
