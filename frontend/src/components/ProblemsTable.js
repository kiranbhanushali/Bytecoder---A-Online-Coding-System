import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './pbtable.css'

export default function ProblemsTable() {
    const history = useHistory()
    const query = history.location.search.split('=')[1] || null
    const onProblemClick = (id) => {
        history.push('/problem/' + id)
    }
    const onCategorieClick = (cat) => {
        history.push('/problems?cat=' + cat)
    }
    const submission = useSelector(state => state.submit.submission)
    const getProbelmStatus = (code) => {
        if (submission == null)
            return "Not attemted";
        const a = (submission?.sub.filter((submit) =>
            submit.problemcode.includes(code)

        ));
        console.log(a);
        const ans = (a[a.length - 1]?.result?.verdict);
        const str = (a[a.length - 1]?.result?.verdict);
        var digit1 = 0, digit2 = 0, flag = 0;
        if (ans) {
            var n = str.length;
            for (let i = 0; i < n; i++) {
                if (flag == 0) {
                    while (i < n && str[i] >= '0' && str[i] <= '9') {
                        digit1 = digit1 * 10 + (str[i] - '0');
                        flag = 1;
                        i++;
                    }
                }
                else {
                    while (i < n && str[i] >= '0' && str[i] <= '9') {
                        digit2 = digit2 * 10 + (str[i] - '0');
                        i++;
                    }

                }

            }

        }
        var gen_ans = (digit2) + "/" + (digit1);
        console.log("digit1", digit1);
        console.log("digit2", digit2);
        if (digit1 === digit2) {
            gen_ans = "Solved";
        }
        else {
            if (digit2 == 0) {
                gen_ans = "Wrong";
            }
            else {
                gen_ans = "Partial Correct";
            }
        }

        return ans ? gen_ans : "Not Attempted";
    }
    const problemRow = (item, index) => {
        return (
            <tr key={index}>
                <th scope="row">{index}</th>
                <td>
                    <button
                        className="btn bg-transparent"
                        onClick={() => onProblemClick(item.code)}
                    >
                        {item.title}
                    </button>
                </td>
                <td>
                    <button
                        className="btn bg-transparent"
                        onClick={() => onProblemClick(item.code)}
                    >
                        {item.code}
                    </button>
                </td>
                <td>
                    <div>
                        {item.category.map((cat) => {
                            return (
                                <li onClick={() => onCategorieClick(cat)}>
                                    {cat}
                                </li>
                            )
                        })}
                    </div>
                </td>
                <td>0</td>
                <td>0</td>
                <td>{getProbelmStatus(item.code)}</td>

            </tr>
        )
    }

    const problems_list = useSelector((state) => {
        if (query === null) {
            return state.problems.problems_list
        } else {
            return state.problems.problems_list.filter((problem) =>
                problem.category.includes(query)
            )
        }
    })
    return (
        <div className="pbtable">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Code</th>
                        <th scope="col">Category</th>
                        <th scope="col">Accuracy</th>
                        <th scope="col">Submissions</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {problems_list.map((item, index) => {
                        return problemRow(item, index)
                    })}
                </tbody>
            </table>
        </div>
    )
}
