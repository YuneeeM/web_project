const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('public')); // 정적 파일 호스팅을 위해 public 디렉토리를 사용합니다.

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/bokjiapi_homeless.html'));
});

app.get('/homeless.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'homeless.json'));
});

app.get('/jonghap.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'jonghap.json'));
});

app.get('/jinryo.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'jinryo.json'));
});


app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
