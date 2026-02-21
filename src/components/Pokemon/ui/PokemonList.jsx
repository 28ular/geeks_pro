import {usePoke} from "../../../store/pokeStore.js";
import {useEffect} from "react";
import {Pokemon} from "./Pokemon.jsx";

export const PokemonList = () => {

    const { pokemon , getAllPoke , error , loading } = usePoke()

    useEffect(()=>{
        getAllPoke()
    }, [])
    console.log(pokemon)

    return (
        <>
            { loading && <p>Loading.....</p> }
            {error && <p>Error</p>}
            <div className="wrapper">
                <div className="card">
                    {
                        pokemon.map((p, i) => <Pokemon key={i} p={p}/>)// сделал с помощью индекс потому что  у апишки айди нету
                    }
                </div>
            </div>


        </>
    )
}