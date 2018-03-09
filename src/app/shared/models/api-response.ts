export class ApiResponse<T> {
  error: string;
  token?: string;
  result: T;
}