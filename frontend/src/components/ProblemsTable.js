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
    const count_sub = useSelector((state) => state.submit)


    console.log("count", count_sub.response.problemmeta);
    const getProbelmStatus = (code) => {
        if (submission == null)
            return "Not attemted";
        const a = (submission?.sub?.filter((submit) =>
            submit.problemcode.includes(code)

        ));
        if (!a)
            return "Not attemted";
        console.log(a);
        const ans = (a[a.length - 1]?.result?.verdict);
        return ans ? ans : "Not Attempted";
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
