import { RequestParam, ResponseParam } from '../utils/types/handlerTypes';

const register = (req: RequestParam, res: ResponseParam): void => {
    res.end('<h1>Hola desde el register</h1>');
}

export default register;