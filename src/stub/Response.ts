'use strict';

export class Response {

    constructor(public statusCode:number, public headers:{[key:string]:string}, public body:Object) {

    }
}