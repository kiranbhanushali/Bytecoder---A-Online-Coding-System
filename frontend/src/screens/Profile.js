import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Spinner from '../components/Spinner'
import './theme.css'
import { storage } from '../base.js'
import { uploadImage } from '../actions/profileAction'
import { useDispatch, useSelector } from 'react-redux'

const Profile = (props) => {
    const userdata = useSelector((state) => state.auth)
    const dispatch = useDispatch()

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
