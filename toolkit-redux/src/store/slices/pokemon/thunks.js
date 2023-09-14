// thunks sn acciones asincronas que llaman otra accion

import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());

        // Realizar accion http

        const {data}  = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
        console.log(data);

        // ejemplo con fetch
        // const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`;
        // const resp = await fetch(url);
        // const {results} = await resp.json();
        // console.log(results);

        dispatch(setPokemons({pokemons: data.results, page: page + 1,}));
    }
}

