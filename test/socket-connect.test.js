const username = 'Ivansegufer';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikl2YW5zZWd1ZmVyIiwiZGF0ZSI6IjE2MTI2NjE5MTY4OTYiLCJpYXQiOjE2MTI2NjE5MTYsImV4cCI6MTYxMjc0ODMxNn0.Th9wEbAUPCHAjuJT2a290aZ3EzqAqWmFqpZ2u2d4RCA';
const io = require('socket.io-client');

const socket = io('ws://localhost:3300');

socket.on('connect', () => {
    socket.emit('authenticate', { username, token });
});