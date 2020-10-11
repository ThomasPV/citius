export class Shop {
  /**
   *
   */
  constructor(
    public id: number = Math.ceil(Math.random()*10),
    public name: string = null,
    public typeId: number = 1,
    public type: string = null,
    public contact: string = null,
  ) {

  }
}
