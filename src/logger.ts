import { NextFunction, Request, Response } from "express";

export const logger = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  console.log("handle request");
  next();
  console.log("handle response");
};
