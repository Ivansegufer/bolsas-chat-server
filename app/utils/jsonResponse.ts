import STATUS from "./status"

export interface IJsonResponse {
    key: STATUS,
    status: string,
    response: string
}

export const badLogin: IJsonResponse = {
    key: STATUS.BAD_REQUEST,
    status: 'Bad request',
    response: 'User input incorrect'
}

export const dbConnectionError: IJsonResponse = {
    key: STATUS.INTERNAL_SERVER_ERROR,
    status: 'Internal server error',
    response: 'Error connection instance database'
}

export const notFoundItem: IJsonResponse = {
    key: STATUS.NOT_FOUND,
    status: 'Not found',
    response: 'Not found the item in database'
}

export const notAddItem: IJsonResponse = {
    key: STATUS.INTERNAL_SERVER_ERROR,
    status: 'Internal server error',
    response: `The database instance can't add the item`
}

export const dbError: IJsonResponse = {
    key: STATUS.INTERNAL_SERVER_ERROR,
    status: 'Internal server error',
    response: `Has been error in database when tryin' of find item`
}

export const passwordIncorrect: IJsonResponse = {
    key: STATUS.BAD_REQUEST,
    status: 'Bad request',
    response: 'The password is incorrect'
}

export const userCreated: IJsonResponse = {
    key: STATUS.CREATED,
    status: 'Created',
    response: 'The user has been created'
}

export const userAlreadyExist: IJsonResponse = {
    key: STATUS.BAD_REQUEST,
    status: 'Bad request',
    response: 'The user already exist'
}