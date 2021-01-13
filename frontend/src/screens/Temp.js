import React, { Fragment, useState } from "react";
import axios from "axios";

const FileUpload = () => {
    const [file, setFile] = useState("");
    const [filename, setFilename] = useState("Choose File");
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState("");
    const [uploadPercentage, setUploadPercentage] = useState(0);

    const onChange = (e) => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await axios.post(
                "http://localhost:5000/api/v1/upload",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                    onUploadProgress: (progressEvent) => {
                        setUploadPercentage(
                            parseInt(
                                Math.round(
                                    (progressEvent.loaded * 100) /
                                        progressEvent.total
                                )
                            )
                        );

                        // Clear percentage
                    },
                }
            );

            const { fileName, filePath } = res.data;

            setUploadedFile({ fileName, filePath });

            setMessage("File Uploaded");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="custom-file mb-4">
                <input
                    type="file"
                    className="custom-file-input"
                    id="customFile"
                    onChange={onChange}
                />
                <label className="custom-file-label" htmlFor="customFile">
                    {filename}
                </label>
            </div>

            <input
                type="submit"
                value="Upload"
                className="btn btn-primary btn-block mt-4"
            />
        </form>
    );
};

export default FileUpload;
