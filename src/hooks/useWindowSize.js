import { useState, useEffect } from "react";
function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    function calcSize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }
    useEffect(() => {
        window.addEventListener('resize', calcSize)
        return (() => {
            window.removeEventListener('resize', calcSize);
        })
    }, [])

    return windowSize;
}

export default useWindowSize;