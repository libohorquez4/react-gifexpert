import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();

    

    const onClickBtn = () => {
        console.log(inputRef)
        inputRef.current.select();
    }

    return (
        <>
            <h1>FocusScreen</h1>
            <hr />

            <input
                ref={inputRef}
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control" 
                id="input1"
            />

            <button className="btn btn-primary mt-2" onClick={onClickBtn}>Set focus</button>

        </>

    )
}
