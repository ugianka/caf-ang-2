import { Component, OnInit } from '@angular/core';
import { ConversationService } from '../conversation.service'


@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  conversations: ConversationItem[]
  inputMessage: String;
  constructor(private _cservice: ConversationService) {
    this.conversations = [];
  }

  ngOnInit() {

  }


  isOut(msg: ConversationItem): Boolean {
    return msg && msg.direction == DIRECTION.OUT;
  }

  private addMessage(msg: String, direction: DIRECTION) {
    let inp = new ConversationItem();
    inp.direction = direction;
    inp.text = msg;
    this.conversations.push(inp);
  }


  public sendMessage(): void {
    this.addMessage(this.inputMessage, DIRECTION.OUT);
    this._cservice.sendToConversation(this.inputMessage).then((data: any) => {
      //console.log(data);
      this.inputMessage = '';
      this.addMessage(data, DIRECTION.IN);
    }).catch((err: any) => {
      console.log(err);
    });
  }

}

enum DIRECTION {
  IN,
  OUT
};

class ConversationItem {
  text: String;
  direction: DIRECTION;
}
