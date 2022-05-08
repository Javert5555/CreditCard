import React from "react";
import "../../styles/upload-img.scss"

const UploadImg = () => {

    const imgLoader = ({ target }) => {
        console.log(123)
    };

    return (
        <form className="image-uploader" name="uploader" encType="multipart/form-data" method="POST">
            <label>
                <input 
                        type="file"
                        className="image-uploader__upload-img"
                        name="img-loader"
                        accept=".jpg, .jpeg, .png"
                        multiple
                        onChange={imgLoader}
                    />
                <input className="image-uploader__btn_load-img" type="submit" name="load_img" value={"Upload"} />
            </label>
        </form>

    );
};

export default UploadImg;