import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PokemonSchema = new Schema({
    number: {
        type: Number
    },
    name: {
        type: String
    }
})