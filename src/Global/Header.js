import { Component } from 'react';
import io from "socket.io-client";


// eslint-disable-next-line import/no-mutable-exports
let socket
class Header extends Component {
    constructor() {
        super();
        this.state = {
            endpoint: 'http://localhost:3000'
        };
        socket = io(this.state.endpoint);
    }

    render() {
        return null
    }
}

export { Header, socket };


/* socket is better for real time/online collaboration */
