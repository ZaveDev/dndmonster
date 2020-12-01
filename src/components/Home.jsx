import { styled } from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchDnd, setFilteredlist } from "../store";
import SearchBar from "./Searchbar";

const Home = (props) => {
  const { filteredList } = props;
  const history = useHistory();

  useEffect(() => {
    props.fetchDnd();
  }, []);

  return (
    <>
      <SearchBar />
      {props.isLoading ? <h4>Loading dndData now...</h4> : null}

      {props.error ? <p style={{ color: "red" }}>{props.error}</p> : null}
      <div className="spell-container">
        {filteredList.length > 0
          ? filteredList.map((monster) => {
              return (
                <div
                  className={"spell"}
                  onClick={() => history.push(`/${monster.index}`)}
                >
                  <h4>{monster.name}</h4>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    dndData: state.dndData,
    filteredList: state.filteredList,
    isLoading: state.isLoading,
    error: state.error,
  };
};
export default connect(mapStateToProps, { fetchDnd, setFilteredlist })(Home);
