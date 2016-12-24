import {
  Injectable
} from '@angular/core';
import {
  ServiceManagerApi,
  LoopBackConfig
} from './sdk';
@Injectable()
export class ConversationService {

  conversationContext: any = {};

  constructor(private _manager: ServiceManagerApi) {
    LoopBackConfig.setBaseURL("https://caf-lb-1.mybluemix.net");
    //LoopBackConfig.setBaseURL("http://127.0.0.1:3000");
    LoopBackConfig.setApiVersion('api');
  }

  public async sendToConversation(message: String): Promise<any> {




    let inp = {
      question: message,
      conversationContext: this.conversationContext
    }
    return new Promise((resolve, reject) =>
      this._manager.askQuestion(inp).subscribe((out: any) => {
        let data = null;
        if (out) {
          data = out['response'];
        }
        if (data && data.context) {
          this.conversationContext = data.context;
        }
        resolve(data.output.text);
      }));
  }

}
