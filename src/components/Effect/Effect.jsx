import { useState, useEffect } from "react";
function Effect() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    console.log("rerendered");

    useEffect(function () {
        console.log("Rerendering")
    });

    useEffect(function () {
        console.log("Mounting")
    },[]);

    useEffect(function () {
        console.log("Count 1 changed")
    }, [count1]);

    useEffect(function () {
        console.log("Count Changed")
    }, [count]);

    return (
        <div>
            <button onClick={() => {setCount(count+1)}}>Add</button>
            <p>{ count}</p>
            <button onClick={() => { setCount1(count1 + 1) }}>Add 1</button>
            <p> { count1}</p>
        </div>
    );
}

export default Effect;


// Empty dependency array = only once mounting
// No dependency array = Mounting  + Rerendering
// With state variable  only on change of the state variable + mounting