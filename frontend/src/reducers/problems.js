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
    case "UPDATE PROBLEMS META":



      const newArray = [...state.problems_list];
      console.log(newArray);
      const index = newArray.findIndex(i => i.code == action.problemcode);
      // for (var i = 0; i < l; i++) {
      //   if (newArray[i].code === action.problemcode) {
      //     index = i;
      //     break;
      //   }
      // } //making a new array
      newArray[index].meta = action.meta//changing value in the new array
      //log("index", index)
      console.log("index", index, newArray[index]);
      return {
        ...state,
        problem_list: newArray,

      };


    default:
      return state;
  }
}
