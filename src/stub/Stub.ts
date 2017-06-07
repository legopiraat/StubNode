'use strict';

import { Response } from './Response';
import { Request } from "./Request";
import {Type, plainToClass } from 'class-transformer';

export class Stub {

    @Type(() => Request)
    public request: Request

    @Type(() => Response)
    public response: Response

    public responseDelayTime: Number

    constructor(request: Request, response: Response, responseDelayTime: number) {
        this.request = request;
        this.response = response;
        this.responseDelayTime = responseDelayTime;
    }
}