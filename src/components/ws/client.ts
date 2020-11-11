

export type Handler = (evt: object) => void

export function createConn(url: string, handler: Handler) {
    let ws: WebSocket | null = null;
    const createConn = () => {
        if (ws) return;
        ws = new WebSocket(url);
        ws.onclose = function () {
            ws = null;
            createConn();
        }
        ws.onerror = function () {
            if (ws) ws.close();
        }
        ws.onmessage = function ({ data }) {
            handler(JSON.parse(data));
        }
    }
    const interval = setInterval(createConn, 5000);
    return function closeConn() {
        clearInterval(interval);
        if (ws) ws.close();
    }
}
