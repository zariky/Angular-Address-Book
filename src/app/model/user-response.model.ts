import User from './user.model';

export interface ApiInfo {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export default interface UserResponse {
  results: User[];
  info: ApiInfo;
}
