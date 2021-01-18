import React, { Component, useState } from "react";
import Codemirror from "../components/Codemirror";
import { useDispatch, useSelector } from "react-redux";
import { submitF } from "../actions/submitAction";
function Submit() {
  const [content, setContent] = useState({ code: "", language: "C" });
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    console.log(event);
    setContent((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitF(dispatch, content);
    console.log("submit page ");
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
          <div>
            <select
              name="language"
              value={content.language}
              onChange={handleInputChange}
            >
              <option value="c">C</option>
              <option value="cpp">C++ </option>
              <option value="python">Python</option>
            </select>
            <Codemirror
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
        </div>
      </form>
    </div>
  );
}
export default Submit;
