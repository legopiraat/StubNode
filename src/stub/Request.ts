'use strict';

export class Request {

    constructor(public method:string, public path:string, public headers:{[key:string]:string} | null, public body: string | null) {
    }
}