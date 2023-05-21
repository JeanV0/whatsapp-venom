import { Whatsapp, create } from "venom-bot";
import { ConfigUtils, Message } from "../utils/config";
import { generate } from "randomstring";
export class WhatsappBot {
  constructor() {
  }

  private async randNumbers(count: number): Promise<string[]> {
    const numbers: string[] = [];
    for (let i = 0; i < count; i++) {
      const number = `3519${generate({ length: 8, charset: 'numeric' })}`;
      numbers.push(number);
    }
    return numbers;
  }

  private async sendMessage(message: Message, number: string, client: Whatsapp) {
    await client.sendText(`${number}@c.us`, message.message);
  }

  private async sendImageWithMessage(message: Message, number: string, client: Whatsapp) {
    await client.sendImage(`${number}@c.us`, message.pathImage, 'image.png', message.message);
  }

  private async applicationRunner(client: Whatsapp) {
    client.onMessage((message) => {
      console.log(`Mensagem recebida de ${message.from}`);
    });

    const config = new ConfigUtils();
    const message = await config.getMessage();
    const numbers = this.randNumbers(message.quantity);
    const functionsUsage = message.image ? this.sendImageWithMessage : this.sendMessage;
    for (const number of await numbers) {
      try {
        await functionsUsage(message,number, client);
        console.log(`${number} enviada`);
        await new Promise(resolve => setTimeout(resolve, 30000));
      } catch (err) {}
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  start() {
    create({
      session: 'session-name', //name of session
    })
    .then((client) => this.applicationRunner(client))
    .catch((erro) => {
      console.log(erro);
    });
  }
}