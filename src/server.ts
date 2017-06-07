'use strict';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Matchers } from "./matcher/Matchers"
import { StubsMock } from './stub/StubsMock';
import { Stub } from './stub/Stub';

export class Server {

    private app: express.Express;
    private stubsMock: StubsMock;
    private matchers: Matchers = new Matchers();

    constructor(stubsMock: StubsMock) {
        this.app = express();
        this.stubsMock = stubsMock;
    }

    public configureBodyParser() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
    }

    public configureRoutes() {
        this.app.get('/stubnode/stub/all', (req: express.Request, res: express.Response) => this.allStubsRoute(req, res));
        this.app.all('*', (req: express.Request, res: express.Response) => this.catchAllRoutes(req, res));
    }

    public startServer() {
        this.app.listen(8888, function () {
            console.log("Stub server is listening at http://localhost:8888");
        });
    }

    private allStubsRoute(req: express.Request, res: express.Response) {
        res.setHeader('content-type', 'application/json');
        res.status(200).send(this.stubsMock.getStubs());
    };

    /**
     *  For each stub in stubsMock try to match it.
     *  In the end of the chain the value should still be true and be placed in a list.
     */
    private catchAllRoutes = (req: express.Request, res: express.Response) => {
        let matchingStubs: Stub[] = [];

        this.stubsMock.getStubs().forEach((stub: Stub) => {

            console.log(req.headers);

            let match: Boolean = this.matchers.matchHttpMethod(stub, req.method) &&
                this.matchers.matchHttpHeaders(stub, req.headers) &&
                this.matchers.matchPath(stub, req.path) &&
                this.matchers.matchBody(stub, req.body);

            if (match) {
                matchingStubs.push(stub)
            }
        });

        this.sendResponse(matchingStubs, res)
    };

    private sendResponse = (matchingStubs: Stub[], res: express.Response): void => {
        if (matchingStubs.length == 1) {
            this.sendResponseAfterDelay(matchingStubs[0], res);
        } else if (matchingStubs.length > 1) {
            res.setHeader('content-type', 'application/json');
            res.status(400).send({ error: 'More then one matching stub found: ', matchingStubs: matchingStubs });
        } else {
            res.status(404).send('No matching stub found!');
        }
    };

    private sendResponseAfterDelay = (stub: Stub, res: express.Response): void => {
        setTimeout(() => {
            res.setHeader('content-type', 'application/json');
            res.status(stub.response.statusCode).send(stub.response.body);
        }, stub.responseDelayTime)
    }
}