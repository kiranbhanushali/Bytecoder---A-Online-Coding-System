import React from 'react'
import ReactMarkdown from 'react-markdown'
import {render} from 'react-dom'
 
 
const Markdown = ( props ) =>{

return(<ReactMarkdown children={props.markdown} />)


}

export default Markdown;
