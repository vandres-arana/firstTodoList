export default class DataException extends Error {
  private exception?: Error;

  constructor(message: string, exception?: Error) {
    super(message);

    this.exception = exception;
  }
}
