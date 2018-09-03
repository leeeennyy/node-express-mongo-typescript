import * as express from 'express';
import * as bodyParser from 'body-parser';
import { DefaultRoutes } from './routes/default';
import * as mongoose from 'mongoose';

class App {
    public app: express.Application;
    public defaultRoutes: DefaultRoutes = new DefaultRoutes();
    public mongoUrl: string = 'mongodb://localhost/pokeapi';

    constructor() {
        this.app = express();
        this.config();
        this.defaultRoutes.setup(this.app);
        this.mongoSetup();
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());

        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
}

export default new App().app;