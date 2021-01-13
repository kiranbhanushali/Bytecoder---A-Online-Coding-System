import React,{useState} from 'react';
import {LoginF,RegisterF} from '../functions/auth'
import {RunF} from '../functions/Run'
import {AddProblemF} from '../functions/AddProblem'
const UseForm = (initialValues) => {
    const [inputs,setInputs] = useState(initialValues);
    const handleSubmit = (event) => {
      if(event){
        event.preventDefault();
        if(inputs.type==="LOGIN"){
            LoginF( inputs);
        }else if( inputs.type==="REGISTER"){
            RegisterF(inputs);
        }else if( inputs.type==="RUN"){
            RunF(inputs);
        }else if( inputs.type==="ADDPROBLEM"){
            AddProblemF(inputs);
        }
      }
        console.log("From use form")
       console.log(inputs);
    }
    const handleInputChange = (event) => {
      event.persist();
      if( event.target.files && event.target.files[0] ) {
          console.log( event.target.file)
      }
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
      }
    return {
     inputs,setInputs,
     handleInputChange,
      handleSubmit
      };
}
export default UseForm;
