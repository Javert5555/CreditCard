const defaultFocusStyles = {
    "top": "0px",
    "left": "0px",
    "width": "430px",
    "height": "270px",
    "opacity": "0",
}

const setFocusStyles = (styles = defaultFocusStyles) => {
    document.querySelector("#focus").style.top = styles.top;
    document.querySelector("#focus").style.left = styles.left;
    document.querySelector("#focus").style.width = styles.width;
    document.querySelector("#focus").style.height = styles.height;
    document.querySelector("#focus").style.opacity = styles.opacity;
};

export default setFocusStyles;
