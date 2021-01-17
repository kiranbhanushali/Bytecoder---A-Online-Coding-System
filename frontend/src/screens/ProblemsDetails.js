import React, { Component } from "react";
import PROBLEMAPI from "../api/problems";
import axios from "axios";
import Markdown from "../components/Markdown";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";
const ProblemsDetails = (props) => {
  const problem_code = props.match.params.id;
  const problem = useSelector((state) => state.problems.problems_list).find(
    (p) => p.code === problem_code
  );
  console.log(problem);
  const submitProblem = () => {
    // redirect to the submit page
    props.history.push("/run", { problem });
  };
  return (
    // <div>
    // <h1>{problem[0] &&  problem[0].title}</h1>
    // { problem[0] && <Markdown markdown = {problem[0].markdown }/> }
    // </div>
    <div class="container-fluid">
      <div class="align-center my-4 text-center">
        <div>
          <h1>{problem && problem.title}</h1>

          <div class=" justify-content-end ">
            <button onClick={() => submitProblem()}> Submit</button>
          </div>
        </div>
      </div>

      <div class="align-center text-center ">
        <h5> Time Limit 2s . Mem Limit 256 MB</h5>
      </div>

      <div class="align-left my-4">
        {problem && <Markdown markdown={problem.markdown} />}
      </div>

      <div class="align-left my-4">
        {problem && <Markdown markdown={problem.input[0]} />}
      </div>
      <div class="align-left my-4">
        {problem && <Markdown markdown={problem.output[0]} />}
      </div>
    </div>
  );
};
export default ProblemsDetails;
