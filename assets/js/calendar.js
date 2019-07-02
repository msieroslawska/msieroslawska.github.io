---
---

/* eslint object-curly-newline: ["error", { "multiline": true }] */
/* global document */

let postDay, postMonth, postYear;
let posts = [];

{% for log in site.posts %}
  postDay = "{{ log.date | date: '%d' }}";
  postMonth = "{{log.date | date: '%m'}}"
  postYear = "{{log.date | date: '%Y'}}"
  posts.push(`${postYear}-${postMonth}-${postDay}`);
{% endfor %}

const MONTHS = [
  'December', 'November', 'October', 'September', 'August', 'July', 'June', 'May', 'April', 'March', 'February', 'January'];
  // 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const createUrl = ({ day, month, year }) => {
  const url = document.createElement('a');
  const urlText = document.createTextNode(day);
  url.appendChild(urlText);
  url.href = `{{ site.url }}/blog/codelogs/${year}-${month}-${day}-Codelog.html`;
  return url;
};

const createCell = ({
  cellType = 'td',
  className = '',
  day = '',
  isUrl = false,
  month = '',
  row,
  text = '',
  year = '',
}) => {
  const cell = document.createElement(cellType);

  if (isUrl) {
    cell.className = `${className} url`;
    const url = createUrl({ className, day, month, year });
    // url.className = 'url';
    cell.appendChild(url);
  } else {
    cell.className = className;
    const cellText = document.createTextNode(text);
    cell.appendChild(cellText);
  }

  row.appendChild(cell);
};

const getNumberOfDays = ({
  month,
  year = 2019
}) => new Date(Number(year), Number(month) + 1, 0).getDate();

const createDayCell = ({ day, idx, row }) => {
  const m = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;
  const d = day < 9 ? `0${day + 1}` : `${day + 1}`;
  const isUrl = Boolean(posts.indexOf(`2019-${m}-${d}`) + 1);

  createCell({ className: 'cell', day: d, isUrl, month: m, row, text: d, year: 2019 });
};

const generateCalendar = () => {
  const calendar = document.getElementById('calendar-table');
  const currentDate = new Date();
  let newRow;

  MONTHS.forEach((monthName, i) => {
    const idx = 11 - i;
    if (currentDate.getMonth() >= Number(idx)) {
      const monthHeader = document.createElement('h3');
      monthHeader.className = 'month';
      const monthText = document.createTextNode(monthName)
      monthHeader.appendChild(monthText);
      calendar.appendChild(monthHeader);
      const monthTable = document.createElement('table');
      calendar.appendChild(monthTable);

      let isFirstDay = true;

      console.log('day', currentDate.getDay())

      for (const day of Array(getNumberOfDays({ month: idx })).keys()) {
        if (isFirstDay || day % 7 === 0) {
          newRow = document.createElement('tr');
          newRow.className = 'row';

          if (currentDate.getMonth() === Number(idx)) {
            if (day < currentDate.getDay()) {
              createDayCell({ day, idx, row: newRow });

              monthTable.appendChild(newRow);
              isFirstDay = false;
            }
          } else {
            createDayCell({ day, idx, row: newRow });

            monthTable.appendChild(newRow);
            isFirstDay = false;
          }
        } else {
          if (currentDate.getMonth() === Number(idx)) {
            if (day < currentDate.getDay()) {
              createDayCell({ day, idx, row: newRow });
            }
          } else {
            createDayCell({ day, idx, row: newRow });
          }
        }
      }
    }
  });
};

generateCalendar();
