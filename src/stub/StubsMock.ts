'use strict';

import { Stub } from "./Stub";

const stubConfig = require('./config.json');

export class StubsMock {

    public getStubs(): Stub[] {
        return stubConfig;
    }
}