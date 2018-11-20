'use strict';

import {Server} from './Server'
import {StubsMock} from "./stub/StubsMock";

const stubsMock = new StubsMock();

const server = new Server(stubsMock);
server.configureBodyParser();
server.configureRoutes();
server.startServer();