import { DateTime } from './luxon.min.js';
// Show date and time
export default class Time {
  constructor() {
    this.date = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  }

  getTime() {
    return this.date;
  }
}