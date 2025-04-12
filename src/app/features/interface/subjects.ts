export interface SubjectsInterface {
  message:string,
  metadata: metadataInterface,
  subjects:subjectItem []
}

interface metadataInterface {
  currentPage: number,
  numberOfPages:number,
  limit: number,
}

export interface subjectItem {
  _id:string,
  name: string,
  icon : string,
}
