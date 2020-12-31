import React,{useState} from 'react';
import {LoginF,RegisterF} from '../functions/auth'
const UseForm = (initialValues) => {
    const [inputs,setInputs] = useState(initialValues);
    const handleSubmit = (event) => {
      if(event){
        event.preventDefault();
        if(inputs.type==="LOGIN"){
            LoginF( inputs);
        }else if( inputs.type==="REGISTER"){
            RegisterF(inputs);
        }
      }
      // console.log(inputs);
    }
    const handleInputChange = (event) => {
      event.persist();
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
      }
    return {
     inputs,
     handleInputChange,
      handleSubmit
      };
}
export default UseForm;
