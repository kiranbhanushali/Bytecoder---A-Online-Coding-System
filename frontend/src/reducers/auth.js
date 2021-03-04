const initialState = {
  imageUrl: null,
  username: null,
  firstname: null,
  lastname: null,
  email: null,
  isLoggedIn: false,
  error: { login: null, register: null, uploadImage: null },
  message: null,
  token: null,
  pending: false,
  isAdmin: false,
  meta: {
    totalSubmission: 0,
    submission: 0,
  },
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        pending: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        token: action.token,
        username: action.username,
        firstname: action.firstname,
        lastname: action.lastname,
        email: action.email,
        isLoggedIn: true,
        message: action.msg,
        error: null,
        pending: false,
        imageUrl: action.imageUrl,
        isAdmin: action.isAdmin,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        error: {
          login: action.error,
          register: state?.error?.register,
        },
        pending: false,
      };
    case "LOGOUT":
      return {
        ...state,
        username: null,
        firstname: action.firstname,
        lastname: action.lastname,
        email: action.email,
        token: null,
        isLoggedIn: false,
        message: null,
        error: null,
        pending: false,
        isAdmin: false,
      };
    case "REGISTER_REQUEST":
      return {
        ...state,
        pending: true,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        token: action.token,
        username: action.username,
        isLoggedIn: true,
        message: action.msg,
        error: null,
        pending: false,
      };
    case "REGISTER_ERROR":
      return {
        ...state,
        error: {
          login: state?.error?.login,
          register: action.error,
        },
        pending: false,
      };
    case "CLEAR_AUTH_ERROR":
      return {
        ...state,
        error: null,
      };
    case "UPLOAD_IMAGE_PENDING":
      return {
        ...state,
        pending: true,
      };
    case "UPLOAD_IMAGE_ERROR":
      return {
        ...state,
        error: {
          login: state?.error?.login,
          register: state?.error?.register,
          uploadImage: action.payload,
        },
        pending: false,
      };
    case "UPLOAD_IMAGE_SUCCESS":
      return {
        ...state,
        imageUrl: action.payload,
        pending: false,
      };
    case "UPDATE META":
      return {
        ...state,
        meta: action.meta,


      }
    default:
      return state;
  }
}
