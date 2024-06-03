import React, { useState } from "react";

export default function ObjectStateVariable() {
    const [person, setPerson] = useState ({ name: "Peter", age: 24});
    return (
        <div>
            <h2>Object State Variables</h2>
            <pre>{JSON.stringify(person, null, 2)}</pre>
            <input value={person.name} className="rounded-2 mt-2" onChange={(e) => setPerson( { ...person, name: e.target.value})} /> <br />
            <input value={person.age} className="rounded-2 mt-2" onChange={(e) => setPerson ( { ...person, age: parseInt(e.target.value)})} />
            <hr />
        </div>
    )
}