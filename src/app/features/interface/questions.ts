import { exams } from "./exams";
import { subjectItem } from "./subjects";

export interface QuestionsInterface {
  answers: AnswersInterface [],
  correct: string,
  exam:exams,
  question:string,
  subject: subjectItem,
  type:string,
  _id:string
}

export interface AnswersInterface{
  answer: string,
  key: string,
}

export interface AnswerUserExam {
  id:string,
  question: string,
  correctAnswer:string,
  answers:AnswersInterface[],
  answerUser:string,
  answerUserKey:string | null,
}
