import Ajv from "ajv";
import { questionSchema } from "./question/question.schema";

const ajv = new Ajv();
ajv.addSchema(questionSchema, "question");

export { ajv };
