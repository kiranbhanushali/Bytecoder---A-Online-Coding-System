import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProblemF } from '../actions/addProblemAction'
import "./theme.css"
export default function AddProblem() {
    const dispatch = useDispatch();
    const [newProblem, setNewProblem] = useState({
        title: "",
        code: "",
        category: [],
        tmpCategory: "",
        statement: "",
        input: [],
        output: [],
    });
    const [isLoading, setIsLoading] = useState(false)
    const handleInputChange = (event) => {

        event.preventDefault();
        if (event.target.name === "addCategory") {
            if (newProblem.tmpCategory === "") {
            } else {
                setNewProblem((prevState) => ({
                    ...prevState,
                    category: [...prevState.category, prevState.tmpCategory],
                    tmpCategory: "",
                }));
            }
        } else if (event.target.name === "addTestCase") {
            if (newProblem.tempInput === "" || newProblem.tempOutput === "") {
            } else {
                setNewProblem((prevState) => ({
                    ...prevState,
                    input: [...prevState.input, prevState.tempInput],
                    output: [...prevState.output, prevState.tempOutput],
                    tempOutput: "",
                    tempInput: "",
                }));
            }
        } else
            setNewProblem({
                ...newProblem,
                [event.target.name]: event.target.value,
            });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(event)
        if (event.target.name === "submit") {
            setIsLoading(true)
            await addProblemF(newProblem);

            setIsLoading(false);
        }
    };
    if (isLoading) {
        return <div> Loading </div>
    } else
        return (
            <div class="mycontainer">
                <h2 class="text-center">Add Problem</h2>
                <form method="POST">
                    <div class="form-group">
                        <label for="email">Problem Title:</label>
                        <input
                            type="title"
                            required
                            class="form-control"
                            id="title"
                            placeholder="Title"
                            onChange={handleInputChange}
                            value={newProblem.title}
                            name="title"
                        />
                    </div>
                    <div class="form-group">
                        <label for="email">Problem Code:</label>
                        <input
                            type="code"
                            class="form-control"
                            required
                            id="code"
                            placeholder="Enter code"
                            onChange={handleInputChange}
                            value={newProblem.code}
                            name="code"
                        />
                    </div>
                    <div id="chk_option_error">
                        Please select at least one category.
                    <div>

                            <select name="tmpCategory"
                                class="form-control"
                                value={newProblem.tmpCategory}
                                onChange={handleInputChange}
                                type="text">
                                <option value="array">array</option>
                                <option value="string">string</option>
                                <option value="searching">searching</option>
                                <option value="stackqueue">stackqueue</option>
                                <option value="numbertheory">numbertheory</option>
                                <option value="tree">tree</option>
                                <option value="graph">graph</option>
                                <option value="hashing">hashing</option>
                                <option value="dsu">dsu</option>
                                <option value="gredy">gredy</option>
                                <option value="dp">dp</option>
                                <option value="bitwise">bitwise</option>
                            </select>
                            <button
                                class="form-control"
                                name="addCategory"
                                onClick={(event) => {
                                    handleInputChange(event);
                                }}
                            >
                                Add
                        </button>
                        </div>
                        <div>
                            <ul>
                                {newProblem.category.map((category) => {
                                    return <li>{category} </li>;
                                })}
                            </ul>
                        </div>
                    </div>

                    <label for="comment">Statement:</label>
                    <textarea
                        name="statement"
                        required
                        onChange={handleInputChange}
                        value={newProblem.statement}
                        class="form-control"
                        rows="5"
                        id="comment"
                    ></textarea>
                    <label for="tempInput">Input:</label>
                    <textarea
                        name="tempInput"
                        onChange={handleInputChange}
                        value={newProblem.tempInput}
                        class="form-control"
                        rows="5"
                        id="input"
                    ></textarea>
                    <label for="tempOutput">OUTPUT</label>
                    <textarea
                        name="tempOutput"
                        onChange={handleInputChange}
                        value={newProblem.tempOutput}
                        class="form-control"
                        rows="5"
                        id="output"
                    ></textarea>
                    <button
                        class="form-control"
                        name="addTestCase"
                        onClick={(event) => {
                            handleInputChange(event);
                        }}
                    >
                        Add New Testcase
                </button>

                    <button name="submit" onClick={handleSubmit} type="submit" class="btn btn-default">
                        Submit
                </button>
                </form>
            </div>
        );
}

