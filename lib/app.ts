import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import { DefaultRoutes } from './routes/default';
import { PokemonRoutes } from './routes/pokemon';

class App {
    public app: express.Application;
    public defaultRoutes: DefaultRoutes = new DefaultRoutes();
    public pokemonRoutes: PokemonRoutes = new PokemonRoutes();
    public mongoUrl: string = 'mongodb://localhost/pokeapi';

    constructor() {
        this.app = express();
        this.config();
        this.defaultRoutes.setup(this.app);
        this.pokemonRoutes.setup(this.app);
        this.mongoSetup();
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());

        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void {
        (<any>mongoose).Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    }
}

export default new App().app;