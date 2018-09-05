import { PokemonController } from "../controllers/pokemonController";

export class PokemonRoutes {
    public pokemonController : PokemonController = new PokemonController();

    public setup(app): void {
        app
            .route('/pokemon')
            .get(this.pokemonController.getAllPokemon);
        app    
            .route('/pokemon/:nationalDexNumber')
            .get(this.pokemonController.getPokemonWithNationalDexNumber);
    }
}