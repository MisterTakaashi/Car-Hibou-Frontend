export class User {
    id?: number;
    username: string;
    password: string;
    password2?: string;
    mail?: string;
}

export class UserSession{
  user: User;
  token?: string;
}
  