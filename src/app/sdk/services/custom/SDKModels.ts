/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Message } from '../../models/Message';
import { ServiceManager } from '../../models/ServiceManager';

@Injectable()
export class SDKModels {

  private models: { [name: string]: any } = {
    User: User,
    Message: Message,
    ServiceManager: ServiceManager,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }
}
