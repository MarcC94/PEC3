/**
 * @class Model
 *
 * Manages the data of the application.
 */

export default class Todo {
  id: any;
  text: any;
  complete: any;

  constructor({ text, complete } = { text: '',complete: false }) {
    this.id = this.uuidv4();
    this.text = text;
    this.complete = complete;
  }

  uuidv4() {
    return (Math.random() * (9999 - 1000) + 1000).toFixed();
    /*return (1e7 + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
    */
  }

}
