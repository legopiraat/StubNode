'use strict';
import { Stub } from "../stub/Stub";

export class Matchers {

    public matchHttpMethod(stub: Stub, method: string): Boolean {
        console.log('attempting to match: ' + method + ' to: ' + stub.request.method);
        return stub.request.method === method;
    }

    public matchPath(stub: Stub, path: string): Boolean {
        console.log('Attempting to match: ' + stub.request.path + ' to: ' + path);
        return stub.request.path === path;
    }

    public matchHttpHeaders(stub: Stub, headers: { [key: string]: string; }): Boolean {

        console.log("Headers from config" + stub.request.headers)
        console.log("headers from request:" + headers);


        if (this.isActivated(stub, 'headers')) {
            var match: boolean;

            for (let key in stub.request.headers) {
                console.log(key + ' should be inside header string: ' + headers.toString());
                match = headers[key] != null
            }

            return match;
        } else {
            return true;
        }
    }

    public matchBody(stub: Stub, body: Object): Boolean {
        if (this.isActivated(stub, 'body')) {
            let stubKeys = Object.keys(JSON.parse(stub.request.body)).sort();
            let bodyKeys = Object.keys(body).sort();

            bodyKeys.forEach(function (key) {
                let index = stubKeys.indexOf(key);

                if (index <= -1) {
                    return false
                }
            });

            return true
        } else {
            return true;
        }
    }

    private isActivated(stub: Stub, identifier: String): Boolean {
        switch (identifier) {
            case 'body':
                return stub.request.method != 'GET' && stub.request.body.length > 0
            case 'headers':
                return stub.request.headers != null
        }
    }
}