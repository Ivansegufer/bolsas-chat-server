const username = 'Ivansegufer';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikl2YW5zZWd1ZmVyIiwiZGF0ZSI6IjE2MTM3NzgxNTM1MDEiLCJpYXQiOjE2MTM3NzgxNTMsImV4cCI6MTYxMzg2NDU1M30.S1JkN-Ecl1P3KIaS2yWq11gcTgLkI0A3vidnlCFL05Y';
const io = require('socket.io-client');

const socket = io('ws://localhost:3300');

socket.on('connect', () => {
    socket.emit('authenticate', { username, token });
});

setTimeout(() => {
    console.log('Chaaooo');
    socket.emit('disconnect_socket', username);
}, 4000);