---
---

const DAYS = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const createCell = ({ row, text }) => {
  const cell = document.createElement('td');
  const url = document.createElement('a');
  const urlText = document.createTextNode(text);
  url.appendChild(urlText);
  // http://127.0.0.1:4000/blog/codelogs/2019-05-20-Codelog
  // http://localhost:4000/blog/codelogs/2019-4-16-Codelog
  url.href = `{{ site.url }}/blog/codelogs/${year}-${month}-${day}-Codelog.html`;
  cell.appendChild(url);
  row.appendChild(cell);
}

const now = new Date();
const currentMonth = now.getMonth();
const currentYear = now.getFullYear();

const calendar = document.getElementById('calendar');
const row = document.createElement('tr');

// createCell({ row, text: `${MONTHS[currentMonth]}, ${currentYear}` });

// calendar.appendChild(row);

let day, month, year;
let posts = [];

{% for log in site.posts %}
  day = {{ log.date | date: '%d' }}
  month = {{log.date | date: '%m'}}
  year = {{log.date | date: '%Y'}}
  posts.push({ day, month, year });
{% endfor %}

console.log(posts);

posts.forEach(post => {
  const newRow = document.createElement('tr');
  createCell({
    row: newRow,
    text: `${post.day}-${post.month}-${post.year}`,
    year: post.year,
    month: post.month,
    day: post.day,
  })
  calendar.appendChild(newRow);
})

