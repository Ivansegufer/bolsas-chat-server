import { ParamsDictionary, Request, Response } from "express-serve-static-core";
import QueryString from "qs";

export type RequestParam = 
    Request<ParamsDictionary, any, any, QueryString.ParsedQs>;

export type ResponseParam = Response<any, number>;