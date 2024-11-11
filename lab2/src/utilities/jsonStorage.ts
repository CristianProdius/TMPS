import fs from "fs";
import path from "path";

export class JsonStorage {
  private filePath: string;

  constructor(fileName: string) {
    this.filePath = path.join(process.cwd(), "data", `${fileName}.json`);
  }

  readData<T>(): T[] {
    try {
      const data = fs.readFileSync(this.filePath, "utf8");
      return JSON.parse(data) as T[];
    } catch (error) {
      return [];
    }
  }

  writeData<T>(data: T[]): void {
    try {
      fs.mkdirSync(path.dirname(this.filePath), { recursive: true });
      fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
    } catch (error) {
      throw new Error(`Failed to write data: ${error}`);
    }
  }
}
