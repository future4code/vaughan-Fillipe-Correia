export enum USER_ROLES {
  NORMAL = 'NORMAL',
  ADMIN = 'ADMIN'
}

export type authenticationData = {
  id: string,
  role: USER_ROLES
}

export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,
    public role: USER_ROLES
  ) { }
}