const express = require('express');
const path = require('path');
const prerender = require('prerender-node');

const app = express();
const buildPath = path.join(__dirname, 'dist');


console.log('===================================================')
app.use(
  prerender
    .set('prerenderToken', 'Cqaw4UJ1fuNz7732bOAI')
    .set('beforeRender', (req, done) => {
      console.log('Prerender request from:', req.get('user-agent'), 'url:', req.url);
      done();
    })
);

app.use(express.static(buildPath));


app.get('*', (req, res) => {
  // console.log('========', req)
  res.sendFile(path.join(buildPath, 'index.html'));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
