'use strict';

import { Response } from './Response';
import { Request } from "./Request";

export class Stub {

    public request: Request
    public response: Response
    public responseDelay: number

    constructor(request: Request, response: Response, responseDelay: number) {
        this.request = request;
        this.response = response;
        this.responseDelay = responseDelay;
    }
}