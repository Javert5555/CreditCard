import { useEffect, useState } from "react";

const useOutlineAnimation = (activeFormSelector, inputSelector) => {

    const [width, setWidth] = useState(0);

    useEffect(() => {

        let cardElement = getComputedStyle(document.querySelector(".card"));

        let defaultFocusStyles = {
            "top": "0px",
            "left": "0px",
            "width": cardElement.width,
            "height": cardElement.height,
            "opacity": "0",
        }
        
        let setFocusStyles = (styles = defaultFocusStyles) => {
            document.querySelector("#focus").style.top = styles.top;
            document.querySelector("#focus").style.left = styles.left;
            document.querySelector("#focus").style.width = styles.width;
            document.querySelector("#focus").style.height = styles.height;
            document.querySelector("#focus").style.opacity = styles.opacity;
        };

        let activeElement = getComputedStyle(document.querySelector(activeFormSelector));

        let toActiveFocusStyles = activeFormSelector === ".card" ?
            defaultFocusStyles : {
                "top": activeElement.top,
                "left": activeElement.left,
                "width": activeElement.width,
                "height": activeElement.height,
                "opacity": "1",
            }

        let activeInput = document.querySelector(inputSelector);


        const updateWindowDimensions = () => {
            const newWidth = window.width;
            setWidth(newWidth);

            cardElement = getComputedStyle(document.querySelector(".card"));

            defaultFocusStyles = {
                "top": "0px",
                "left": "0px",
                "width": cardElement.width,
                "height": cardElement.height,
                "opacity": "0",
            };

            setFocusStyles = (styles = defaultFocusStyles) => {
                document.querySelector("#focus").style.top = styles.top;
                document.querySelector("#focus").style.left = styles.left;
                document.querySelector("#focus").style.width = styles.width;
                document.querySelector("#focus").style.height = styles.height;
                document.querySelector("#focus").style.opacity = styles.opacity;
            };

            activeElement = getComputedStyle(document.querySelector(activeFormSelector));

            toActiveFocusStyles = activeFormSelector === ".card" ?
            defaultFocusStyles : {
                "top": activeElement.top,
                "left": activeElement.left,
                "width": activeElement.width,
                "height": activeElement.height,
                "opacity": "1",
            };

            activeInput = document.querySelector(inputSelector);

            if (document.activeElement === document.querySelector("body")) {
                setFocusStyles();
            }

            if (document.activeElement === activeInput) {
                setFocusStyles(toActiveFocusStyles);
            }

        };

        window.addEventListener("resize", updateWindowDimensions);
      
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
            window.removeEventListener("resize", updateWindowDimensions)
        }
    }, [width]);
};

export default useOutlineAnimation;