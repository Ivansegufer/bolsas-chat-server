import { RequestParam, ResponseParam } from '../utils/types/handlerTypes';

const login = (req: RequestParam, res: ResponseParam): void => {
    res.end('<h1>Hola desde el login</h1>');
}

export default login;