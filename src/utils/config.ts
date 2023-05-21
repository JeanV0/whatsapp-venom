import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

dotenv.config({
  path: path.resolve(__dirname, '../../.env.local')
});

export class ConfigUtils {
  private quantity: number;

  constructor() {
    const quantityEnv = process.env.QUANTITY;
    if (!quantityEnv) {
      throw new Error('Variável QUANTITY não encontrada no arquivo .env.local');
    }
    const parsedQuantity = parseInt(quantityEnv, 10);
    if (isNaN(parsedQuantity)) {
      throw new Error('Variável QUANTITY deve ser um número válido');
    }
    this.quantity = parsedQuantity;
  }
  
  async getMessage(): Promise<Message> {
    const messageEnv = process.env.MESSAGE;
    const imageEnv = process.env.IMAGE ?? '';

    const message = new Message();

    if (imageEnv === '') {
      message.image = false;
    } else {
      message.image = true;
      message.pathImage = this.resolveImagePath(imageEnv);
    }

    if (messageEnv) {
      const fileContents = await fs.promises.readFile(this.resolveImagePath(messageEnv), 'utf-8');

      message.message = fileContents;
      message.quantity = this.quantity;
    }

    return message;
  }

  private resolveImagePath(imageEnv: string): string {
    const isWindows = process.platform === 'win32';

    const filePath = `../files/${imageEnv}`;
    const resolvedPath = path.resolve(__dirname, filePath);

    if (isWindows) {
      return resolvedPath.replace(/\\/g, '\\\\');
    }

    return resolvedPath;
  }
}

export class Message {
  message: string = '';
  image: boolean = false;
  pathImage: string = '';
  quantity: number = 0;
}
