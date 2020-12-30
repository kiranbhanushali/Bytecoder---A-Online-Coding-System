import React, { Component } from "react";
import PROBLEMAPI from '../api/problems'
import axios from 'axios'
import Markdown from './Markdown'
import ReactMarkdown from 'react-markdown'
const ProblemsDetails = (props) => {
    let [problem, setProblem] = React.useState('') // state hook
    React.useEffect(() => {                           // side effect hook
        axios.get('http://localhost:5000/api/v1/problem/' + props.match.params.id)
            .then(function (response) {
                setProblem( response.data ) ;
                console.log(response.data);
            });

        }, [])
        return (
            // <div>
            // <h1>{problem[0] &&  problem[0].title}</h1>
            // { problem[0] && <Markdown markdown = {problem[0].markdown }/> } 
            // </div>
         <div class="container-fluid text-center">
                <div class="align-center my-4">
                    <h1>{problem[0] &&  problem[0].title}</h1>
                </div>

                 <div class="align-center">
                    <h5> Time Limit 2s . Mem Limit 256 MB</h5>
                 </div>

                 <div class="align-center my-4">
                    { problem[0] && <Markdown markdown = {problem[0].markdown }/> } 
                 </div>

        </div>
    )
}
export default ProblemsDetails;
