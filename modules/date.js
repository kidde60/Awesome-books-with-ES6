import { DateTime } from './luxon.min.js';
// Show date and time
export default class Time {
  constructor() {
    this.date = DateTime.now();
  }

  getTime() {
    return this.date;
  }
}