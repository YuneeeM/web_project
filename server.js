const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('public')); // 정적 파일 호스팅을 위해 public 디렉토리를 사용합니다.

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/bokjiapi_order.html'));
});

app.get('json/dolbom.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'json/dolbom.json'));
});

app.get('/bokjiguan.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'json/bokjiguan.json'));
});

app.get('json/gyeongro.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'json/gyeongro.json'));
});

app.get('json/gyosil.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'json/gyosil.json'));
});

app.get('json/yoyang.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'json/yoyang.json'));
});

app.get('json/meals.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'json/meals.json'));
});

app.get('/media/free-icon-family-4547180.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-family-4547180.png'));
});

app.get('/media/logo-removebg-preview.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/logo-removebg-preview.png'));
});



app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
