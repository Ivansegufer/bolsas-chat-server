import express from 'express';

const app = express();

app.use(express.json());

app
    .set('port', process.env.PORT || 3300);

export default app; 