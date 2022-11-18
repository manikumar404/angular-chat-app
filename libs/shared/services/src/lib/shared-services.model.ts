export interface Users {
  users: User[]
}
export interface Query {
  data: Users,
  loading: boolean,
  networkStatus: number,
}



export interface User {
  uId?: string
  name?: string
  age?: number
  gender?: string
  email?: string
  messageIds?: string[]
  message?: Message[]
}

export interface Message {
  title?: string
  author?: string
  messageId?: string
  messages?: string[]
}
