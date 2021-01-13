import React, { Component } from "react";
import UseForm from "../components/UseForm";
export default function AddProblem() {
    const { inputs, handleInputChange, handleSubmit } = UseForm({
        title: "",
        code: "",
        category: "",
        statement: "",
        type: "ADDPROBLEM",
    });
    return (
        <div class="container">
            <h2 class="text-center">Add Problem</h2>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="email">Problem Title:</label>
                    <input
                        type="title"
                        required
                        class="form-control"
                        id="title"
                        placeholder="Title"
                        onChange={handleInputChange}
                        value={inputs.title}
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
                        value={inputs.code}
                        name="code"
                    />
                </div>
                <div id="chk_option_error">
                    Please select at least one category.
                    <div>
                        brutforce
                        <input
                            id="brutforce"
                            value="brutforce"
                            name="category"
                            type="radio"
                            onChange={handleInputChange}
                        />
                        greedy
                        <input
                            id="greedy"
                            value="greedy"
                            name="category"
                            type="radio"
                            onChange={handleInputChange}
                        />
                        dp
                        <input
                            id="dp"
                            value="dp"
                            name="category"
                            type="radio"
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <label for="comment">Statement:</label>
                <textarea
                    name="statement"
                    required
                    onChange={handleInputChange}
                    value={inputs.statement}
                    class="form-control"
                    rows="5"
                    id="comment"
                ></textarea>
                <button type="submit" class="btn btn-default">
                    Submit
                </button>
            </form>
        </div>
    );
}
