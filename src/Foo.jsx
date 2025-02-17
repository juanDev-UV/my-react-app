import { useState } from "react";

export const Foo = (props) => {
    const [msg, setMsg] = useState("A este curso");

    return(
        <>
            <h1>{props.message}</h1>
            <p>Bienvenidos {msg} </p>
        </>
        

    );
}

export default Foo;