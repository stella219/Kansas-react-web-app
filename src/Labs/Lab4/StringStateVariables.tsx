import React, { useState } from "react";

export default function StringStateVariables() {
    const [firstName, setFirstName] = useState("John");
    return (
        <div>
            <h2>String State Variable</h2>
            <p>{firstName}</p>
            <input className="form-control" value={firstName}
                onChange={(e) => setFirstName(e.target.value)}/>
                <hr />
        </div>
    )
}