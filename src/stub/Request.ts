'use strict';

import {HttpMethods} from '../model/HttpMethods'; 

export class Request {

    constructor(public method: HttpMethods, public path: string, public headers: { [key: string]: string } | null, public body: string | null) {
    }
}