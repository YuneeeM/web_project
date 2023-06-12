const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('public')); // 정적 파일 호스팅을 위해 public 디렉토리를 사용합니다.

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/startpage.html'));
});

app.get('/startpage.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/startpage.html'));
});

//노숙인 복지시설
app.get('/bokjiapi_homeless.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/bokjiapi_homeless.html'));
});

//노인 복지 시설
app.get('/bokjiapi_order.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/bokjiapi_order.html'));
});

//자유게시판
app.get('/main_post.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/main_post.html'));
});

//글쓰기
app.get('/post_write.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/post_write.html'));
});

//글쓰기-상세
app.get('/post_detail.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/post_detail.html'));
});

//공공일자리
app.get('/openapi_workpost.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/openapi_workpost.html'));
});

//공공일자리 - 상세
app.get('/openapi_details.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/openapi_details.html'));
});

//사설일자리
app.get('/worknet_post.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/worknet_post.html'));
});

//사설일자리 - 상세
app.get('/worknet_details.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/worknet_details.html'));
});

//영양폼
app.get('/self_check_nutrition.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/self_check_nutrition.html'));
});

//마이페이지
app.get('/mypage.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/mypage.html'));
});

//로그인
app.get('/loginpage.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/loginpage.html'));
});

//맞춤
app.get('/memberinfo_post.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/memberinfo_post.html'));
});

//회원가입
app.get('/signuppage.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/signuppage.html'));
});

//회원정보 수정
app.get('/userchange_page.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/userchange_page.html'));
});

//밀도
app.get('/bokjimildo.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/bokjimildo.html'));
});

app.get('/busangeo.json', (req, res) => {
  res.sendFile(path.join(__dirname, '/json/busangeo.json'));
});


//json파일

//노숙인
app.get('/homeless.json', (req, res) => {
  res.sendFile(path.join(__dirname, '/json/homeless.json'));
});

//종합
app.get('/jonghap.json', (req, res) => {
  res.sendFile(path.join(__dirname, '/json/jonghap.json'));
});

//진료
app.get('/jinryo.json', (req, res) => {
  res.sendFile(path.join(__dirname, '/json/jinryo.json'));
});

//돌봄
app.get('/dolbom.json', (req, res) => {
  res.sendFile(path.join(__dirname, '/json/dolbom.json'));
});

//복지관
app.get('/bokjiguan.json', (req, res) => {
  res.sendFile(path.join(__dirname, '/json/bokjiguan.json'));
});

//경로당
app.get('/gyeongro.json', (req, res) => {
  res.sendFile(path.join(__dirname, '/json/gyeongro.json'));
});

//노인교실
app.get('/gyosil.json', (req, res) => {
  res.sendFile(path.join(__dirname, '/json/gyosil.json'));
});

//요양
app.get('/yoyang.json', (req, res) => {
  res.sendFile(path.join(__dirname, '/json/yoyang.json'));
});

//급식시설
app.get('/meals.json', (req, res) => {
  res.sendFile(path.join(__dirname, '/json/meals.json'));
});

//워크넷 맞춤
app.get('/json/worknet_1.json', (req, res) => {
  res.sendFile(path.join(__dirname, '/json/worknet_1.json'));
});

app.get('/json/worknet_2.json', (req, res) => {
  res.sendFile(path.join(__dirname, '/json/worknet_2.json'));
});

app.get('/json/worknet_3.json', (req, res) => {
  res.sendFile(path.join(__dirname, '/json/worknet_3.json'));
});

app.get('/json/worknet_4.json', (req, res) => {
  res.sendFile(path.join(__dirname, '/json/worknet_4.json'));
});

app.get('/json/worknet_5.json', (req, res) => {
  res.sendFile(path.join(__dirname, '/json/worknet_5.json'));
});

app.get('/json/worknet_6.json', (req, res) => {
  res.sendFile(path.join(__dirname, '/json/worknet_6.json'));
});

app.get('/json/worknet_7.json', (req, res) => {
  res.sendFile(path.join(__dirname, '/json/worknet_7.json'));
});

app.get('/json/worknet_8.json', (req, res) => {
  res.sendFile(path.join(__dirname, '/json/worknet_8.json'));
});

app.get('/json/worknet_9.json', (req, res) => {
  res.sendFile(path.join(__dirname, '/json/worknet_9.json'));
});

app.get('/json/worknet_10.json', (req, res) => {
  res.sendFile(path.join(__dirname, '/json/worknet_10.json'));
});

app.get('/json/worknet_11.json', (req, res) => {
  res.sendFile(path.join(__dirname, '/json/worknet_11.json'));
});

app.get('/json/worknet_12.json', (req, res) => {
  res.sendFile(path.join(__dirname, '/json/worknet_12.json'));
});

app.get('/json/userdata.json', (req, res) => {
  res.sendFile(path.join(__dirname, '/json/userdata.json'));
});


//사진
app.get('/media/free-icon-help-7071035.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-help-7071035.png'));
});

app.get('/media/free-icon-family-4547180.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-family-4547180.png'));
});

app.get('/media/logo-removebg-preview.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/logo-removebg-preview.png'));
});

app.get('/media/001.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/001.png'));
});

app.get('/media/002.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/002.png'));
});

app.get('/media/003.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/003.png'));
});

app.get('/media/004.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/004.png'));
});

app.get('/media/005.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/005.png'));
});

app.get('/media/006.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/006.png'));
});

app.get('/media/007.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/007.png'));
});

app.get('/media/mildo.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/mildo.png'));
});

app.get('/media/free-icon-alarm-bell-1059065.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-alarm-bell-1059065.png'));
});

app.get('/media/free-icon-search-2697422.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-search-2697422.png'));
});

app.get('/media/free-icon-enter-1828395.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-enter-1828395.png'));
});

app.get('/media/free-icon-person-5393061.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-person-5393061.png'));
});

//글쓰기
app.get('/media/free-icon-instagram-post-5660560.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-instagram-post-5660560.png'));
});


//startpage
app.get('/media/welfare.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/welfare.png'));
});

app.get('/media/eldery.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/eldery.png'));
});

app.get('/media/recruitment.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/recruitment.png'));
});

app.get('/media/handshake.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/handshake.png'));
});

app.get('/media/free-icon-density-8709539.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-density-8709539.png'));
});

app.get('/media/free-icon-nutritional-pyramid-10504844.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-nutritional-pyramid-10504844.png'));
});

app.get('/media/communication.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/communication.png'));
});

//일자리 상세

app.get('/media/busanjob_logo.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/busanjob_logo.jpg'));
});

app.get('/media/worknet_logo.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/worknet_logo.jpg'));
});

app.get('/media/heart.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/heart.png'));
});

app.get('/media/free-icon-up-arrow-3385656.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-up-arrow-3385656.png'));
});

app.get('/media/free-icon-arrow-down-sign-to-navigate-32195.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-arrow-down-sign-to-navigate-32195.png'));
});

//맞춤
app.get('/media/free-icon-demand-1935064.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-demand-1935064.png'));
});

//회원가입
app.get('/media/free-icon-up-sign-3601914.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-up-sign-3601914.png'));
});

//로그인
app.get('/media/free-icon-login-2250207.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-login-2250207.png'));
});

//영양 폼
app.get('/media/free-icon-nutrients-5286612.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-nutrients-5286612.png'));
});

//마이페이지

app.get('/media/free-icon-sign-out-7046204.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-sign-out-7046204.png'));
});

app.get('/media/free-icon-developer-4293722.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-developer-4293722.png'));
});

//아이디
app.get('/media/free-icon-smart-id-7435734.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-smart-id-7435734.png'));
});


app.get('/media/free-icon-password-6772337.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-password-6772337.png'));
});


app.get('/media/free-icon-social-media-7440003.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-social-media-7440003.png'));
});


app.get('/media/free-icon-developer-4293722.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-developer-4293722.png'));
});


app.get('/media/free-icon-date-of-birth-8926835.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-date-of-birth-8926835.png'));
});

app.get('/media/free-icon-age-3788610.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-age-3788610.png'));
});

app.get('/media/free-icon-gender-4214361.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-gender-4214361.png'));
});

app.get('/media/free-icon-cityscape-2451728.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-cityscape-2451728.png'));
});

app.get('/media/free-icon-income-chart-7650916.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-income-chart-7650916.png'));
});

app.get('/media/free-icon-family-3321905.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-family-3321905.png'));
});

app.get('/media/free-icon-search-job-1215725.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-search-job-1215725.png'));
});

app.get('/media/free-icon-school-desk-6917653.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-school-desk-6917653.png'));
});

app.get('/media/free-icon-hearts-138533.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-hearts-138533.png'));
});



//회원정보 수정

app.get('/media/free-icon-correction-tape-3196902.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/media/free-icon-correction-tape-3196902.png'));
});


//css

app.get('/css/alarm_dialog.css', (req, res) => {
  res.sendFile(path.join(__dirname, '/css/alarm_dialog.css'));
});

app.get('/css/style_startpage.css', (req, res) => {
  res.sendFile(path.join(__dirname, '/css/style_startpage.css'));
});


app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
