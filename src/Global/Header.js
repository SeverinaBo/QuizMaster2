import {useEffect} from 'react';
import io from "socket.io-client";


// eslint-disable-next-line import/no-mutable-exports
let socket
function Header()  {

    useEffect(() => {
/*
        const endpoint = 'http://localhost:3000'
*/
        socket.on("connect", () => {
            console.log(socket.connected); // true
        });
        socket = io("/");

        return () => {
            socket.disconnect();
        };
    }, []);

    return null;
}

export { Header, socket };

/* socket is better for real time/online collaboration */
