import "codemirror/keymap/sublime";
import "codemirror/theme/monokai.css";
import Codemirror from "../components/Codemirror";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

var api = {
    run: "http://localhost:5000/api/v1/run",
};
function Run() {
    const [selectedOption, setSelectedOption] = useState();
    var [code, setCode] = React.useState("// my code goes here");
    console.log(selectedOption);
    return (
        <div className="editor-form">
            <form action={api.run} method="POST">
                <div
                    className="editor "
                    style={{
                        textAlign: "left",
                        margin: "auto",
                        width: "70%",
                        padding: 10,
                        height: "80%",
                        marginTop: 100,
                    }}
                >
                    <h1> Code, Compile & Run </h1>
                    <select
                        id="lang"
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    >
                        <option value="c">C</option>
                        <option value="cpp">C++ </option>
                        <option value="python">Python</option>
                    </select>

                    <Codemirror code={code} setCode={setCode} />
                </div>
                <div>
                    <label for="myfile">Or Select a file:</label>
                    <input type="file" id="myfile" name="myfile" />
                </div>
                <div>
                    <button class="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Run;
