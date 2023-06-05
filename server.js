const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('public')); // 정적 파일 호스팅을 위해 public 디렉토리를 사용합니다.

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/bokjiapi_order.html'));
});

app.get('/bokjiguan.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'bokjiguan.json'));
});

app.get('/gyeongro.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'gyeongro.json'));
});

app.get('/gyosil.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'gyosil.json'));
});

app.get('/yoyang.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'yoyang.json'));
});

app.get('/meals.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'meals.json'));
});


app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
