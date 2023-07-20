import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from '../03-examples/LoadingQuote';
import { Quotes } from "../03-examples/Quotes";

export const Layout = () => {
    const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);


    console.log(data, isLoading, hasError);


    // sirve para desectructurar arrays
    const { author, quote } = !!data && data[0];




    return (
        <>
            <h1>Test fetch</h1>
            <hr />

            {isLoading ?
                <LoadingQuote />
                :
                <div>
                    <Quotes quote={quote} author={author} />
                    <button onClick={() => increment(1)} disabled={isLoading} className="btn btn-primary mt-1">Next quote</button>
                </div>

            }
        </>
    )
}
