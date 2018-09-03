import * as mongoose from 'mongoose';
import { PokemonSchema } from '../models/pokemon';
import { Request, Response } from 'express';

const Pokemon = mongoose.model('pokemon', PokemonSchema);

export class PokemonController {
    public getPokemonWithNumber(req: Request, res: Response) {
        Pokemon.find(req.params.number, (err, pokemon) => {
            if (err) {
                res.send(err);
            }

            res.json(pokemon);
        });
    }
}