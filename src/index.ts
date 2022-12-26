import express from "express";
import { logger } from "./logger";
import { getQuestion } from "./question/question.handler";

const app = express();

app.use(logger);
app.get("/question/:questionId", getQuestion);

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
