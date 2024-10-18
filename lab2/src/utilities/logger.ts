export enum LogLevel {
  INFO,
  WARN,
  ERROR,
}

class Logger {
  private static instance: Logger;

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(level: LogLevel, message: string): void {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${LogLevel[level]}: ${message}`);
  }

  info(message: string): void {
    this.log(LogLevel.INFO, message);
  }

  warn(message: string): void {
    this.log(LogLevel.WARN, message);
  }

  error(message: string): void {
    this.log(LogLevel.ERROR, message);
  }
}

export const logger = Logger.getInstance();
