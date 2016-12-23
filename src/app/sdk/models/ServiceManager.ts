/* tslint:disable */

declare var Object: any;
export interface ServiceManagerInterface {
  id?: number;
}

export class ServiceManager implements ServiceManagerInterface {
  id: number;
  constructor(data?: ServiceManagerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ServiceManager`.
   */
  public static getModelName() {
    return "ServiceManager";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ServiceManager for dynamic purposes.
  **/
  public static factory(data: ServiceManagerInterface): ServiceManager{
    return new ServiceManager(data);
  }  
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'ServiceManager',
      plural: 'ServiceManagers',
      properties: {
        id: {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
