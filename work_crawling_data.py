from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup

# Chrome 웹 드라이버 경로 설정
webdriver_service = Service('/chromedriver.exe')

# Chrome 옵션 설정
options = Options()
options.add_argument('--headless')  # 브라우저를 띄우지 않고 실행 (headless 모드)

# Chrome 웹 드라이버 생성
driver = webdriver.Chrome(service=webdriver_service, options=options)

# 첫 번째 페이지부터 마지막 페이지까지 순환
for page in range(1, 681):
    url = f'https://www.work.go.kr/empInfo/empInfoSrch/list/dtlEmpSrchList.do?careerTo=&keywordJobCd=&occupation=&templateInfo=&shsyWorkSecd=&rot2WorkYn=&payGbn=&resultCnt=10&keywordJobCont=&cert=&cloDateStdt=&moreCon=&minPay=&codeDepth2Info=11000&isChkLocCall=&sortFieldInfo=DATE&major=&resrDutyExcYn=&eodwYn=&sortField=DATE&staArea=&sortOrderBy=DESC&keyword=&termSearchGbn=all&carrEssYns=&benefitSrchAndOr=O&disableEmpHopeGbn=&webIsOut=&actServExcYn=&maxPay=&keywordStaAreaNm=&emailApplyYn=&listCookieInfo=DTL&pageCode=&codeDepth1Info=11000&keywordEtcYn=&publDutyExcYn=&keywordJobCdSeqNo=&exJobsCd=&templateDepthNmInfo=&computerPreferential=&regDateStdt=&employGbn=&empTpGbcd=1&region=26000&infaYn=&resultCntInfo=10&siteClcd=all&cloDateEndt=&sortOrderByInfo=DESC&currntPageNo={page}&indArea=&careerTypes=&searchOn=Y&tlmgYn=&subEmpHopeYn=&academicGbn=&templateDepthNoInfo=&foriegn=&mealOfferClcd=&station=&moerButtonYn=&holidayGbn=&srcKeyword=&enterPriseGbn=all&academicGbnoEdu=noEdu&cloTermSearchGbn=all&keywordWantedTitle=&stationNm=&benefitGbn=&keywordFlag=&notSrcKeyword=&essCertChk=&isEmptyHeader=&depth2SelCode=&_csrf=3f9dc6aa-3feb-438a-8ab8-b99a44c5d4d6&keywordBusiNm=&preferentialGbn=&rot3WorkYn=&pfMatterPreferential=&regDateEndt=&staAreaLineInfo1=11000&staAreaLineInfo2=1&pageIndex={page}&termContractMmcnt=&careerFrom=&laborHrShortYn=#viewSPL'

    # 웹 페이지 로드
    driver.get(url)

    # 페이지 소스 가져오기
    html = driver.page_source

    # BeautifulSoup을 사용하여 파싱
    soup = BeautifulSoup(html, 'html.parser')

    # 원하는 요소 가져오기
    for i in range(1, 11):
        tr_id = f'list{i}'
        element = soup.find('tr', {'id': tr_id})
        if element:
            text = element.get_text(strip=True)
            print(text)

# 웹 드라이버 종료
driver.quit()
