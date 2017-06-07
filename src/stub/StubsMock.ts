'use strict';

import { Stub } from "./Stub";
import { Request } from "./Request";
import { Response } from "./Response";
import { plainToClass } from "class-transformer";
const stubConfig = require('./config.json');

export class StubsMock {

    public getStubs(): Stub[] {
        //let stub1 = new Stub(new Request('GET', '/test/get/route', { 'custom-header': 'value' }, ""), new Response(200, { 'custom-header': 'value' }, { woohoo: "Stub found!" }), 0);
        //let stub2 = new Stub(new Request('GET', '/test/different/route', null, ""), new Response(200, { 'custom-header': 'value' }, { woohoo: "Stub found! on route /test/different/route" }), 5000);
        //let stub3 = new Stub(new Request('POST', '/test/get/different/route', { 'custom-header': 'value' }, '{"some":"mdslkamdklsa"}'), new Response(200, { 'custom-header': 'value' }, { woohoo: "Stub found!" }), 0);
        //let stub4 = new Stub(new Request('GET', '/test/get/route', headers), new Response(200, headers, {woohoo: "Duplicate Stub found!"}), 0);

        return plainToClass(Stub, stubConfig);
    }
}