import React from "react";

const UploadImg = () => {

    imgLoader = ({ target }) => {
        console.log(123)
    };

    return (
        <input 
            type={file}
            className="upload-img"
            name="img-loader"
            accept="image/jpeg"
            onChange={imgLoader}
        />
    );
};

export default UploadImg;