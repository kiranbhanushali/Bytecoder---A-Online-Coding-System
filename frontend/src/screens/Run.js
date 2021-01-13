import "codemirror/keymap/sublime";
import "codemirror/theme/monokai.css";
import Codemirror from "../components/Codemirror";
import React, { useState } from "react";

import UseForm from "../components/UseForm";
var api = {
    run: "http://localhost:5000/api/v1/run",
};
function Run(props) {
    // for mode of editor
    const [selectedOption, setSelectedOption] = useState("c");
    const { inputs ,  handleInputChange, handleSubmit } = UseForm({
        myfile:"",
        code:"",
        type:"RUN"
    });
    const [code, setCode] = useState("//write code here ");
    const loadComponent = () => {
        if (
            props.history.location.state &&
            props.history.location.state.problem
        ) {
            var problem = props.history.location.state.problem;
            return <h1> Submit Problem : {problem[0].code}</h1>;
        } else {
            return <h1> Code, Compile & Run </h1>;
        }
    };
    return (
        <div className="editor-form">
            <form onSubmit={handleSubmit}>
                <div
                    className="editor "
                    style={{
                        textAlign: "left",
                        margin: "auto",
                        width: "70%",
                        padding: 10,
                        marginTop: 100,
                    }}
                >
                    {loadComponent()}

                    <div>
                        <select
                            id="mode"
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.target.value)}
                        >
                            <option value="c">C</option>
                            <option value="cpp">C++ </option>
                            <option value="python">Python</option>
                        </select>
                        <Codemirror
                            code={code}
                            setCode={setCode}
                            mode={selectedOption}
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
                </div>
            </form>
        </div>
    );
}

export default Run;
