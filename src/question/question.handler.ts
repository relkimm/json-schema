import { Request, RequestHandler, Response } from "express";

interface Params {
  questionId: string;
}

export const getQuestion: RequestHandler<Params> = async (
  request,
  response
) => {
  const { questionId } = request.params;
  console.log("questionId", questionId);
  return response.send(questionId);
};
