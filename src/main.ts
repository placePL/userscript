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

function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
  
    // Change this to div.childNodes to support multiple top-level nodes.
    return div.firstChild;
  }
  

async function main() {
    window.accessToken = await getAccessToken();
    const x = await GM.getResourceText('TOASTIFY_CSS');
    GM.addStyle(x);

    document.body.appendChild(createElementFromHTML(`
    <div style="position: fixed; z-index: 9999999; bottom: 70px; left: 50%; right: 0; transform: translateX(-50%); text-align: center; width: 300px; background: white; border: 2px solid black; padding: 20px; border-radius: 20px; box-shadow: 0 0 20px 0 rgba(0,0,0,0.3)">
        <div style="">Bot PlacePL aktywny. 
        <a target="_blank" style="color: blue; text-decoration: underline" href="https://rplace.cubepotato.eu/web/current.png">Kliknij tutaj, aby zobaczyć obecny wzór obrazka</a></div>
    </div>`));

    console.log('connecting...');
    const socket =  io('https://rplace.cubepotato.eu', {
        "transports" : ["websocket"]
    });
    socket.on('connect', () => {
        console.log('ok!');
        socket.emit('ready');
    });

    socket.on('draw', async ({x, y, color}) => {
        try {
            Toastify({
                text: `Trying to draw:, x: ${x}, y: ${y}, color: ${color}`,
                duration: 30000
            }).showToast();
            console.log('drawing: ', x, y, color);
            let nextTs = await place(x, y, color);
            socket.emit('ratelimitUpdate', nextTs || (Date.now() + (5 * 60 * 1000)));
            socket.emit('ready');
        } catch(err) {

        }
    });

}

main().catch(console.error);

export { };