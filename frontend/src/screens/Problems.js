import React, { Component } from "react";
import PROBLEMAPI from "../api/problems";
import axios from "axios";
import Spinner from "../components/Spinner";
import ProblemsTable from "../components/ProblemsTable";
import fetchProblems from "../actions/fetchProblems";

import { useDispatch, useSelector } from "react-redux";
const Problems = (props) => {
  const dispatch = useDispatch();
  const problems_pending = useSelector((state) => state.problems.pending);

  const problems_loaded = useSelector((state) => state.problems.loaded);

  if (!problems_loaded) {
    fetchProblems(dispatch);
    return <Spinner />;
  } else if (problems_pending) {
    return <Spinner />;
  } else {
    return <ProblemsTable />;
  }
};

export default Problems;
