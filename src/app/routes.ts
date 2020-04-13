import {Request, Response} from 'express';
import {HelloController} from './hello/hello-controller';

export class Routes {
    public nodesController: HelloController = new HelloController();

    public routes(app: any): void {
        app.route('/').get(this.nodesController.index);

        app.route('/nodes').get(this.nodesController.index);
    }
}