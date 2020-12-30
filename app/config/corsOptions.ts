import { CorsOptions } from 'cors';

const corsOptions: CorsOptions = {
    origin: process.env.ORIGIN,
    methods: process.env.METHODS
}

export default corsOptions;