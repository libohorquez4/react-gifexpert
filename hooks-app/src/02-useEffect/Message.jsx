import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0})

    useEffect(() => {
        const onMouseMove = ({x, y}) => {
            setCoords({x, y});
            // setCoords({x: x, y: y});
            console.log(coords);
        }
        window.addEventListener('mousemove', onMouseMove);

        // limpiar listener (parecido a unmount)
        return () => {
            window.removeEventListener('mousemove', onMouseMove);          
        }
    }, [])

    return (
        <>
            <h3>Este usuario ya existe</h3>
            {JSON.stringify(coords)}
        </>
    )
}
