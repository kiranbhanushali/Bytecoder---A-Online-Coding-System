import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchProblems from '../actions/fetchProblems'
import { fetchSubmission } from '../actions/fetchSubmission'
import ProblemsTable from '../components/ProblemsTable'
import Spinner from '../components/Spinner'
import './theme.css'

const Problems = (props) => {
    const dispatch = useDispatch()
    const problems_pending = useSelector((state) => state.problems.pending)

    const problems_loaded = useSelector((state) => state.problems.loaded)
    function loadcompo() {
        if (!problems_loaded) {
            fetchProblems(dispatch)
            fetchSubmission(dispatch)
            return <Spinner />
        } else if (problems_pending) {
            return <Spinner />
        } else {
            return <ProblemsTable />
        }
    }
    return <div className="mycontainer">{loadcompo()}</div>
}

export default Problems
