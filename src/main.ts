// import { io } from 'socket.io-client';

import { place } from "./place";

declare const io: any;

declare global {
    interface Window {
        accessToken: string;
    }
    function Toastify(...args);
}

async function getAccessToken() {
	const usingOldReddit = window.location.href.includes('new.reddit.com');
	const url = usingOldReddit ? 'https://new.reddit.com/r/place/' : 'https://www.reddit.com/r/place/';
	const response = await fetch(url);
	const responseText = await response.text();

	return responseText.split('\"accessToken\":\"')[1].split('"')[0];
}

async function main() {
    window.accessToken = await getAccessToken();
    const x = await GM.getResourceText('TOASTIFY_CSS');
    GM.addStyle(x);
    Toastify({
        text: 'Bot PlacePL aktywny!',
        duration: 10000
    }).showToast();

    console.log('connecting...');
    const socket =  io('http://localhost:3000', {
        "transports" : ["websocket"]
    }); // io('https://rplace.cubepotato.eu');
    socket.on('connect', () => {
        console.log('ok!');
        socket.emit('ready');
    });

    socket.on('draw', async ({x, y, color}) => {
        try {
            console.log('drawing: ', x, y, color);
            let nextTs = await place(x, y, color);
            socket.emit('ratelimitUpdate', nextTs);
            socket.emit('ready');
        } catch(err) {

        }
    });

}

main().catch(console.error);

export { };