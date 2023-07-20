import React, { useLayoutEffect, useRef, useState } from 'react'

export const Quotes = ({ quote, author }) => {
    const pRef = useRef()

    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

    useLayoutEffect(() => {
        // saber tamaño contenedor
        
        const {width, height} = pRef.current.getBoundingClientRect();
        setBoxSize({width, height})
    }, [quote])

    return (

        <>
            <blockquote className="blockquote text-end" style={{ display: 'flex' }}>
                {/* sin desestructuracion */}
                {/* <p className="mb-1">{data[0].quote}</p>
                        <footer className="blockquote-footer mt-1">{data[0].author}</footer> */}

                {/* con desestructuracion */}
                <p className="mb-1" ref={pRef}>{quote}</p>
                <footer className="blockquote-footer mt-1">{author}</footer>
            </blockquote>

            <code>{JSON.stringify(boxSize)}</code>
        </>


    )
}
