import React, { Component } from "react";
import PROBLEMAPI from '../api/problems'
import axios from 'axios'
import Spinner from '../components/Spinner'
import ProblemsTable from '../components/ProblemsTable'
const Problems = (props) => {
    let [problems, setProblems] = React.useState('') // state hook
    React.useEffect(() => {                           // side effect hook
        axios.get('http://localhost:5000/api/v1/problems')
            .then(function (response) {
                setProblems( response.data ) ;
                console.log(response.data);
            });

    }, [])

    if( problems.length >0 ) {
        return <ProblemsTable problems ={problems} />
    }else 
    {
        return <Spinner />
    }
}
export default Problems;
