export class TokenService {
  private readonly tokenKey = 'token';
  isLogged: boolean;

  constructor() {
    this.isLogged = this.isTokenExist();
  }

  isTokenExist(): boolean {
    return Boolean(this.getToken());
  }

  getToken(): string | undefined {
    return localStorage.getItem(this.tokenKey);
  }

  setToken(token: string) {
    this.isLogged = true;
    localStorage.setItem(this.tokenKey, token);
  }

  clearToken() {
    this.isLogged = false;
    localStorage.removeItem(this.tokenKey);
  }
}
