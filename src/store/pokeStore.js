import {create} from "zustand";
import axios from "axios";

export const usePoke = create((set) => ({
    pokemon: [],
    loading: false,
    error: null,
    getAllPoke: async () => {
        try {
            set({ loading: true , error: null });
            const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/ ')
            set({ pokemon: data.results , loading: false })
        } catch (error) {
            console.log(error.message)
        }
    }
}))