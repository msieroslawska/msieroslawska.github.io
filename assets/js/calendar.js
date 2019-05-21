---
---

/* eslint object-curly-newline: ["error", { "multiline": true }] */
/* global document */

const DAYS = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const createUrl = ({ text, year, month, day }) => {
  const url = document.createElement('a');
  const urlText = document.createTextNode(text);
  url.appendChild(urlText);
  url.href = `{{ site.url }}/blog/codelogs/${year}-${month}-${day}-Codelog.html`;
  return url;
};

const createCell = ({ row, text = '', year = '', month = '', day = '', isUrl = false }) => {
  const cell = document.createElement('td');
  if (isUrl) {
    const url = createUrl({ text, year, month, day });
    cell.appendChild(url);
  } else {
    const cellText = document.createTextNode(text);
    cell.appendChild(cellText);
  }

  row.appendChild(cell);
};

const getNumberOfDays = ({ month, year = 2019 }) => {
  return new Date(Number(year), Number(month) + 1, 0).getDate();
}

const generateCalendar = () => {
  const calendar = document.getElementById('calendar_table');

  MONTHS.forEach((monthName, idx) => {
    let monthRow = document.createElement('tr');
    createCell({ row: monthRow, text: monthName });
    calendar.appendChild(monthRow);

    let daysRow = document.createElement('tr');
    for (const day of Array(getNumberOfDays({ month: idx })).keys()) {
      createCell({ row: daysRow, text: day + 1 });
    }
    calendar.appendChild(daysRow);
  });
};

generateCalendar();

let day, month, year;
let posts = [];

{% for log in site.posts %}
  day = "{{ log.date | date: '%d' }}";
  month = "{{log.date | date: '%m'}}"
  year = "{{log.date | date: '%Y'}}"
  posts.push({ day, month, year });
{% endfor %}

let monthName = -1;
let yearName = -1;
let isFirst = true;

const calendar = document.getElementById('calendar_table');
posts.forEach((post) => {
  let row;

  if (yearName !== post.year) {
    row = document.createElement('tr');
    yearName = post.year;
    createCell({ row, text: yearName });
  } else if (monthName !== post.month) {
    row = document.createElement('tr');
    monthName = post.month;
    createCell({ row, text: monthName });
    isFirst = true;
  } else {
    if (isFirst) {
      row = document.createElement('tr');
      row.className = 'first';
      isFirst = false;
    } else {
      row = document.querySelector('.first');
      createCell({
        row,
        text: post.day,
        year: post.year,
        month: post.month,
        day: post.day,
        isUrl: true,
      });
    }
  }
  calendar.appendChild(row);
});
