import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Spinner from '../components/Spinner'
import './theme.css'
import { storage } from '../base.js'
import { uploadImage } from '../actions/profileAction'
import { useDispatch, useSelector } from 'react-redux'
import { PieChart } from 'react-minimal-pie-chart';
import { Bar, Line, Pie } from "react-chartjs-2";

const Profile = (props) => {
    const userdata = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const submission = useSelector(state => state.submit.submission)
    //var output = employees.filter(submission => employee.department == "IT");
    const problem_list = useSelector((state) => state.problems.problems_list);
    console.log(problem_list);
    var array = 0;
    var string = 0;
    var searching = 0;
    var stackqueue = 0;
    var numbertheory = 0;
    var tree = 0;
    var graph = 0;
    var hashing = 0;
    var dsu = 0;
    var gredy = 0;
    var dp = 0;
    var bitwise = 0;
    var carray = 0;
    var cstring = 0;
    var csearching = 0;
    var cstackqueue = 0;
    var cnumbertheory = 0;
    var ctree = 0;
    var cgraph = 0;
    var chashing = 0;
    var cdsu = 0;
    var cgredy = 0;
    var cdp = 0;
    var cbitwise = 0;
    for (var j = 0; j < submission.sub.length; j++) {
        for (var i = 0; i < problem_list.length; i++) {
            if (problem_list[i].code == submission.sub[j].problemcode) {
                console.log(submission.sub[j].result.verdict);
                if (submission.sub[j].result.verdict == "Solved") {
                    for (var k = 0; k < problem_list[i].category.length; k++) {
                        if (problem_list[i].category[k] == "array") {
                            carray++;
                        }
                        if (problem_list[i].category[k] == "string") {
                            cstring++;
                        }
                        if (problem_list[i].category[k] == "searching") {
                            csearching++;
                        }
                        if (problem_list[i].category[k] == "stackqueue") {
                            cstackqueue++;
                        }
                        if (problem_list[i].category[k] == "numbertheory") {
                            cnumbertheory++;
                        }
                        if (problem_list[i].category[k] == "tree") {
                            ctree++;
                        }
                        if (problem_list[i].category[k] == "graph") {
                            cgraph++;
                        }
                        if (problem_list[i].category[k] == "hashing") {
                            chashing++;
                        }
                        if (problem_list[i].category[k] == "dsu") {
                            cdsu++;
                        }
                        if (problem_list[i].category[k] == "gredy") {
                            cgredy++;
                        }
                        if (problem_list[i].category[k] == "dp") {
                            cdp++;
                        }
                        if (problem_list[i].category[k] == "bitwise") {
                            cbitwise++;
                        }

                    }

                }
                for (var k = 0; k < problem_list[i].category.length; k++) {
                    if (problem_list[i].category[k] == "array") {
                        array++;
                    }
                    if (problem_list[i].category[k] == "string") {
                        string++;
                    }
                    if (problem_list[i].category[k] == "searching") {
                        searching++;
                    }
                    if (problem_list[i].category[k] == "stackqueue") {
                        stackqueue++;
                    }
                    if (problem_list[i].category[k] == "numbertheory") {
                        numbertheory++;
                    }
                    if (problem_list[i].category[k] == "tree") {
                        tree++;
                    }
                    if (problem_list[i].category[k] == "graph") {
                        graph++;
                    }
                    if (problem_list[i].category[k] == "hashing") {
                        hashing++;
                    }
                    if (problem_list[i].category[k] == "dsu") {
                        dsu++;
                    }
                    if (problem_list[i].category[k] == "gredy") {
                        gredy++;
                    }
                    if (problem_list[i].category[k] == "dp") {
                        dp++;
                    }
                    if (problem_list[i].category[k] == "bitwise") {
                        bitwise++;
                    }

                }
            }
        }
    }
    var Chart = {
        label: "Total",
        data: [
            array, string, searching, stackqueue, numbertheory, tree, graph, hashing, dsu, gredy, dp, bitwise
        ],
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 0, 0, 0.6)',
            'rgba(0,255, 0, 0.6)',
            'rgba(0, 0, 235, 0.6)',
            'rgba(255, 255, 0, 0.6)',
            'rgba(0, 192, 192, 0.6)',
            'rgba(0, 152, 255, 0.6)',
            'rgba(0, 159, 200, 0.6)',
            'rgba(255, 199, 232, 0.6)'
        ],


    };
    var Chart2 = {
        label: "Correct",
        data: [
            carray, cstring, csearching, cstackqueue, cnumbertheory, ctree, cgraph, chashing, cdsu, cgredy, cdp, cbitwise
        ],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 0, 0, 0.2)',
            'rgba(0,255, 0, 0.2)',
            'rgba(0, 0, 235, 0.2)',
            'rgba(255, 255, 0, 0.2)',
            'rgba(0, 192, 192, 0.2)',
            'rgba(0, 152, 255, 0.2)',
            'rgba(0, 159, 200, 0.2)',
            'rgba(255, 199, 232, 0.2)'
        ],

    };
    var chart3 = {
        labels: ['array', 'string', 'searching', 'stackqueue', 'numbertheory', 'tree', 'graph', 'hashing', 'dsu', 'gredy', 'dp', 'bitwise'],
        datasets: [Chart, Chart2]

    }


    var chartOptions = {
        scales: {
            xAxes: [{
                barPercentage: 1,
                categoryPercentage: 0.6
            }],
            yAxes: [{
                id: "y-axis-Total"
            }, {
                id: "y-axis-Correct"
            }]
        }
    };
    console.log(array, string, dp, searching);
    console.log(submission)
    const [file, setFile] = useState(null)

    function handleChange(e) {
        setFile(e.target.files[0])
    }

    function handleUpload(e) {
        e.preventDefault()
        uploadImage(dispatch, file, userdata.username)
    }

    if (userdata.isLoggedIn === false) {
        alert('Please Login ')
        return <Redirect to="/login" />
    } else if (userdata === null) {
        return <Spinner />
    } else {
        console.log(userdata)
        return (
            <div className="mycontainer">
                <div className="main-body">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img
                                            src={userdata.imageUrl}
                                            alt="Admin"
                                            className="rounded-circle"
                                            width="150"
                                        />
                                        <div className="mt-3">
                                            <h4>{userdata.username}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {userdata.firstname +
                                                ' ' +
                                                userdata.lastname}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {userdata.email}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Country</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {userdata.country
                                                ? userdata.country
                                                : 'India'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card justify-content-center btn-box-row row-fluid">
                                <b>
                                    {' '}
                                    {userdata.meta &&
                                        userdata.meta.totalSubmission
                                        ? userdata.meta.totalSubmission
                                        : 0}{' '}
                                </b>
                                <p className="text-muted">Total Submissions</p>
                                <b>
                                    {' '}
                                    {userdata.meta && userdata.meta.submissions
                                        ? (userdata.meta.submissions * 100.0) / (userdata.meta.totalSubmission)
                                        : 0}{' '}
                                </b>
                                <p className="text-muted">Accuracy</p>

                                <Bar
                                    data={chart3}
                                    options={{
                                        animationEnabled: true,
                                        scales: {
                                            xAxes: [{
                                                barPercentage: 1,
                                                categoryPercentage: 0.6
                                            }],

                                        }
                                    }}
                                />




                            </div>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleUpload}>
                    <input type="file" onChange={handleChange} />
                    <button disabled={!file}>upload to firebase</button>
                </form>
            </div>
        )
    }
}
export default Profile
