import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
let api = {
    problemid:"problem/",
    categoty:"problems?category="
}
export default function ProblemsTable(props) {
    let problems = props.problems
    console.log( problems) ;
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
                {problems.problems_list.map((item, index) => {
                    return (
                        <tr>
                            <th scope="row">{index}</th>
                            <td><a href={api.problemid + item.code}>{item.title}</a></td>
                            <td><a href={api.problemid + item.code}>{item.code}</a></td>
                            <td><a href={api.category + item.category}>{item.category}</a></td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
