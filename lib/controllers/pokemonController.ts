import { Pokemons } from '../database/models/pokemon';
import { Request, Response } from 'express';

export class PokemonController {
    public getAllPokemon(req: Request, res: Response) {
        Pokemons.find({}, (err, pokemon) => {
            if (err) {
                res.send(err);
            }

            res.json(pokemon);
        })
    }

    public getPokemonWithNationalDexNumber(req: Request, res: Response) {
        Pokemons.find({ ndn: +req.params.nationalDexNumber }, (err, pokemon) => {
            if (err) {
                res.send(err);
            }

            res.json(pokemon);
        });
    }
}