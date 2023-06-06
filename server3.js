const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // JSON 형식의 요청 데이터를 파싱하기 위해 미들웨어를 추가합니다.

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/signuppage.html'));
});

app.get('/media/free-icon-up-sign-3601914.png', (req, res) => {
  res.sendFile(path.join(__dirname, 'media/free-icon-up-sign-3601914.png'));
});

app.post('/register', (req, res) => {
  const userData = req.body;

  // JSON 파일에서 기존 데이터 가져오기
  let existingData = [];
  try {
    const jsonData = fs.readFileSync('userdata.json', 'utf8');
    existingData = JSON.parse(jsonData);
  } catch (error) {
    console.error('JSON 파일 읽기 오류:', error);
    return res.status(500).json({ error: '회원가입 실패' });
  }

  // 회원가입 정보에 personid 추가
  const personId = existingData.length + 1;
  userData.personid = personId;

  // 회원가입 정보 추가
  existingData.push(userData);

  // JSON 파일에 데이터 저장
  try {
    fs.writeFileSync('userdata.json', JSON.stringify(existingData, null, 2));
    console.log('회원가입 정보 저장 완료');
  } catch (error) {
    console.error('JSON 파일 저장 오류:', error);
    return res.status(500).json({ error: '회원가입 실패' });
  }

  // 회원가입 완료 응답
  res.json({ message: '회원가입 완료', personid: personId });
});

//로그인 페이지로 이동
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '/loginpage.html'));
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
