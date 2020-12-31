import React, { Component } from "react";
import PROBLEMAPI from "../api/problems";
import axios from "axios";
import Spinner from "../components/Spinner";
const Profile = (props) => {
    const [userdata, setUserdata] = React.useState(null);
    React.useEffect(() => {
        // side effect hook
        axios.defaults.headers.common["authorization"] = localStorage.getItem(
            "token"
        );
        axios
            .get("http://localhost:5000/api/v1/profile")
            .then(function (response) {
                if (response.data.success === false) {
                    alert("you are not logged in please log in");
                    props.history.push("/login");
                } else {
                    setUserdata(response.data);
                }
            });
    }, []);

    if (userdata === null) {
        return <Spinner />;
    } else {
        console.log(userdata);
        return (
            <div className="container">
                <div className="main-body">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img
                                            src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                            alt="Admin"
                                            className="rounded-circle"
                                            width="150"
                                        />
            <div className="mt-3">
                                            <h4>
                                                {userdata.username}
                                                                                          </h4>
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
                                                    " " +
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
                                            {userdata.country? userdata.country:"India"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card btn-box-row row-fluid">
                                <a href="#" className="btn-box big span4">
                                    <i className=" icon-random"></i>
                                    <b> {userdata.meta&&userdata.meta.total_submissions ? userdata.meta.total_submissions : 0 }   </b>
                                    <p className="text-muted">Total Submissions</p>
                                </a>
                                <a href="#" className="btn-box big span4">
                                    <i className="icon-user"></i>
                                    <b> {userdata.meta&&userdata.meta.accuracy ? userdata.meta.accuracy : 0 }   </b>
                                    <b>  </b>
                                    <p className="text-muted">Accuracy</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
export default Profile;
