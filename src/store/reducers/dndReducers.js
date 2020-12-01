import {
  FETCH_DND_START,
  FETCH_DND_SUCCESS,
  SET_FILTERED_LIST,
} from "../actions";

const initalState = {
  dndData: [],
  filteredList: [],
  isLoading: true,
  error: "",
};

export const dndReducers = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_DND_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };

    case FETCH_DND_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dndData: action.payload,
        filteredList: action.payload,
      };

    case SET_FILTERED_LIST:
      return {
        ...state,
        filteredList: action.payload,
      };

    default:
      return state;
  }
};
