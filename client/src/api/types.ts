export type UserStatus = "active" | "inactive"

export interface User {
  id: number
  username: string
  name: string
  lastname: string
  email: string
  status: UserStatus
  age: number
}
