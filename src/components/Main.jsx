import React from "react";
import { useState } from 'react';


function Main() {
    const [count, setCount] = useState(0);
    const handleClick = () => setCount(count + 1);
    return (
        <main>
            <h2>Main Section...</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ducimus? Eveniet nostrum error vero fuga, facere reprehenderit? Minima quo, quisquam exercitationem, consequatur suscipit ratione consectetur aliquam dignissimos porro iure esse.</p>
            <h3>Counter: {count}</h3>
            <button onClick={handleClick} >
                Click Me!
            </button>
         </main>
            )
}

export default Main;