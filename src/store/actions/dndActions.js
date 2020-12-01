import axios from "axios";

export const FETCH_DND_START = "FETCH_DND_START";
export const FETCH_DND_SUCCESS = "FETCH_DND_SUCCESS";
export const SET_FILTERED_LIST = "SET_FILTERED_LIST";

export const fetchDnd = () => (dispatch) => {
  dispatch({ type: FETCH_DND_START });
  axios
    .get("https://www.dnd5eapi.co/api/monsters")
    .then((res) => {
      dispatch({ type: FETCH_DND_SUCCESS, payload: res.data.results });
    })
    .catch((err) => console.log(err));
};

export const setFilteredlist = (value) => (dispatch) => {
  dispatch({ type: SET_FILTERED_LIST, payload: value });
};
