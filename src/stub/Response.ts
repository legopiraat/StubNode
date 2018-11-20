'use strict';

export class Response {

    constructor(public statusCode: number, public delay: number, public headers: {[key:string]:string}, public body: Object) {
    }
}