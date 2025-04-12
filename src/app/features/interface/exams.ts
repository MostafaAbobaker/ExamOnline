export interface ExamInterface {
  message:string,
  metadata: metadataInterface,
  exams:exams []
}

interface metadataInterface {
  currentPage: number,
  numberOfPages:number,
  limit: number,
}

interface exams {
_id: string,
title: string,
duration: number,
subject:string,
numberOfQuestions: number,
active: boolean,

}
