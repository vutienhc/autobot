import { StatusCode } from './enums';

export class MessageResult {
  constructor(
    public readonly status: StatusCode,
    public readonly message: string,
    public readonly detail?: any,
  ) {}
}
