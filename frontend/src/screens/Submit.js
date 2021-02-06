import { response } from 'express'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submitF } from '../actions/submitAction'
import Codemirror from '../components/Codemirror'
import './theme.css'

function Submit(props) {
    const [content, setContent] = useState({
        code: '',
        language: 'c',
        problemcode: '',
    })
    const submit = useSelector((state) => state.submit)
    const dispatch = useDispatch()

    const handleInputChange = (event) => {
        setContent((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,

        }))
    }
    const loadComponent = () => {
        console.log(props.history)
        if (props.history.location.search) {
            if (content.problemcode === '') {
                var problemcode = props.history.location.search.split('=')[1]
                console.log(problemcode)
                setContent({
                    ...content,
                    problemcode,
                })
            }
            return <h1> Submit Problem : {content.problemcode}</h1>
        } else {
            return <h1> Code, Compile & Run </h1>
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        submitF(dispatch, content)
        console.log('submit page ')
    }

    return (
        <div className="mycontainer">
            <div className="editor-form">
                <form onSubmit={handleSubmit}>
                    <div
                        className="editor "
                        style={{
                            textAlign: 'left',
                            margin: 'auto',
                            width: '70%',
                            padding: 0,
                            marginTop: 0,
                        }}
                    >
                        {loadComponent()}
                        <div>
                            <h4>
                                {' '}
                                Choose Language
                                <select
                                    name="language"
                                    value={content.language}
                                    onChange={handleInputChange}
                                >
                                    <option value="c">C</option>
                                    <option value="cpp">C++ </option>
                                    <option value="py">Python</option>
                                </select>
                            </h4>

                            <Codemirror
                                mode={content.language}
                                content={content}
                                setContent={setContent}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div>
                        <div class="d-flex justify-content-center m-4">
                            <label for="myfile">Or Select a file:</label>
                            <input
                                type="file"
                                id="myfile"
                                name="myfile"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div class="d-flex justify-content-center">
                            <button>Submit</button>
                        </div>
                        <h1>{submit.response ? submit.response.stdout : "hello"}</h1>
                        <h1>{submit.response ? submit.response.stderr : "hello"}</h1>

                    </div>
                </form>
            </div>
        </div>
    )
}
export default Submit







