import { Request, Response } from 'express';
import { PokemonController } from "../controllers/pokemonController";

export class PokemonRoutes {
    public pokemonController : PokemonController = new PokemonController();

    public setup(app): void {
        app
            .route('/pokemon/:number')
            .get(this.pokemonController.getPokemonWithNumber);
    }
}