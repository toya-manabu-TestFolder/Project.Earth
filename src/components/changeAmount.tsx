import React, { useState } from "react";

export default function ChangeAmount() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <span>数量: {count} </span>
            <br />
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}
