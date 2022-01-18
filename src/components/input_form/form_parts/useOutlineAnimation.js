import { useEffect } from "react";

const useOutlineAnimation = (activeFormSelector, inputSelector) => {

    useEffect(() => {

        const cardElement = getComputedStyle(document.querySelector(".card"));

        const defaultFocusStyles = {
            "top": "0px",
            "left": "0px",
            "width": cardElement.width,
            "height": cardElement.height,
            "opacity": "0",
        }
        
        const setFocusStyles = (styles = defaultFocusStyles) => {
            document.querySelector("#focus").style.top = styles.top;
            document.querySelector("#focus").style.left = styles.left;
            document.querySelector("#focus").style.width = styles.width;
            document.querySelector("#focus").style.height = styles.height;
            document.querySelector("#focus").style.opacity = styles.opacity;
        };

        const activeElement = getComputedStyle(document.querySelector(activeFormSelector));

        const toActiveFocusStyles = activeFormSelector === ".card" ?
            {
                "top": "0px",
                "left": "0px",
                "width": cardElement.width,
                "height": cardElement.height,
                "opacity": "0",
            } : {
                "top": activeElement.top,
                "left": activeElement.left,
                "width": activeElement.width,
                "height": activeElement.height,
                "opacity": "1",
            }

        const activeInput = document.querySelector(inputSelector);


        activeInput.addEventListener("focus", () => {
            setFocusStyles(toActiveFocusStyles);
        });
        
        activeInput.addEventListener("blur", () => {
            setTimeout(() => {
                if (document.activeElement === document.querySelector("body")) {
                    setFocusStyles();
                }
            }, 300)
        });

        return () => {
            activeInput.removeEventListener("focus", setFocusStyles);
            activeInput.removeEventListener("blur", setFocusStyles); 
        }
    }, []);
};

export default useOutlineAnimation;