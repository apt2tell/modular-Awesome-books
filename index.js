import './modules/navigation.js';
import './modules/awesomeBooks.js';
import showContactInfo from './modules/contact.js';
import { DateTime } from './modules/luxon.js';

const currentDate = () => {
  const dt = DateTime.now();
  const date = dt.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  document.getElementById('date').innerHTML = date;
  setTimeout(currentDate, 1000);
};
window.onload = currentDate();

showContactInfo();
