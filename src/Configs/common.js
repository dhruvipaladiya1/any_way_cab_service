import io from 'socket.io-client';

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL;

const SOCKET = io(SOCKET_URL, {
  transports: ['websocket'],
  reconnection: true, // Enable reconnection
  reconnectionAttempts: 5,
});

const COMMON = {
  SOCKET,
}

export default COMMON;