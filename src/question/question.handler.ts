import { RequestHandler } from "express";
import { ajv } from "../ajv";
import { questionSchema } from "./question.schema";

interface Params {
  questionId: string;
}

export const getQuestion: RequestHandler<Params> = async (
  request,
  response
) => {
  const validate = ajv.getSchema("question") || ajv.compile(questionSchema);

  if (!validate(request.params)) {
    return response.status(400).send("error");
  }

  const { questionId } = request.params;
  return response.send(questionId);
};
