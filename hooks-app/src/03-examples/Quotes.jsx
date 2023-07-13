import React from 'react'

export const Quotes = ({quote, author}) => {
    return (

            <blockquote className="blockquote text-end">
                {/* sin desestructuracion */}
                {/* <p className="mb-1">{data[0].quote}</p>
                        <footer className="blockquote-footer mt-1">{data[0].author}</footer> */}

                {/* con desestructuracion */}
                <p className="mb-1">{quote}</p>
                <footer className="blockquote-footer mt-1">{author}</footer>

            </blockquote>
    )
}
