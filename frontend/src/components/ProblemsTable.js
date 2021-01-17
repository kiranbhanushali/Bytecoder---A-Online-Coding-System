import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function ProblemsTable() {
  const history = useHistory();
  const query = history.location.search.split("=")[1] || null;

  const problems_list = useSelector((state) => {
    if (query === null) {
      return state.problems.problems_list;
    } else {
      return state.problems.problems_list.filter(
        (problem) => problem.category === query
      );
    }
  });

  const onProblemClick = (id) => {
    history.push("/problem/" + id);
  };
  const onCategorieClick = (cat) => {
    history.push("/problems?cat=" + cat);
  };
  return (
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Code</th>
          <th scope="col">Category</th>
          <th scope="col">Accuracy</th>
          <th scope="col">Submissions</th>
        </tr>
      </thead>
      <tbody>
        {problems_list.map((item, index) => {
          return (
            <tr>
              <th scope="row">{index}</th>
              <td>
                <a onClick={() => onProblemClick(item.code)}>{item.title}</a>
              </td>
              <td>
                <a onClick={() => onProblemClick(item.code)}>{item.code}</a>
              </td>
              <td>
                <a onClick={() => onCategorieClick(item.category)}>
                  {" "}
                  {item.category}
                </a>
              </td>
              <td>0</td>
              <td>0</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
