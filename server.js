const express = require('express');
const path = require('path');
const prerender = require('prerender-node');

const app = express();
const buildPath = path.join(__dirname, 'dist');

// 👇 Tích hợp Prerender middleware
app.use(
  prerender
    .set('prerenderToken', 'Cqaw4UJ1fuNz7732bOAI')
    .whitelisted(['googlebot', 'bingbot', 'yandex'])
);


app.use(express.static(buildPath));


app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
