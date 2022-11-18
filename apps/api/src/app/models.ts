export interface Message {
  title: string,
  author: string,
  messageId: string,
  messages:string[]
}

export interface User {
  uId: string,
  name: string,
  age: number,
  gender: string,
  email: string,
  messageIds: string[]
}
