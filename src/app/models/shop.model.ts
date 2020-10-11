export class Shop {
  /**
   *
   */
  constructor(
    public id: number = +new Date(),
    public name: string = null,
    public typeId: number = 1,
    public type: string = null,
    public contact: string = null,
  ) {

  }
}
