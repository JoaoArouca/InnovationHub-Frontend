export class CreateUser {
  name: string
  password: string
  email: string
  role: number

  constructor() {
    this.name = ''
    this.email = ''
    this.password = ''
    this.role = 1
  }
}
