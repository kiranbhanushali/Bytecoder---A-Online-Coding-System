import React, { Component } from "react";
import PROBLEMAPI from "../api/problems";
import axios from "axios";
import Spinner from "../components/Spinner";
import ProblemsTable from "../components/ProblemsTable";
import fetchProblems from "../actions/fetchProblems";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
const Problems = (props) => {
    var problems =  []
    React.useEffect(() => {
         props.fetchProblems();
        problems = props.problems   
        console.log( problems);
        
        console.log( props);
    }, []);

    if (props.problems.pending === false ) {
        return <ProblemsTable problems={props.problems} />;
    } else {
        return <Spinner />;
    }
};

function mapStateToProps(state) {
  return { problems: state.problems};
}
    
const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProblems: fetchProblems
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Problems);
// export default Problems;
