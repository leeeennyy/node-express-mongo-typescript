import { Schema, Model, model } from 'mongoose';
import { Pokemon } from 'database/interfaces/pokemon';

export const PokemonSchema: Schema = new Schema({
    nationalDexNumber: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    }
});

export const Pokemons : Model<Pokemon> = model<Pokemon>('pokemon', PokemonSchema, 'pokemon');