# 50 학력무관


import json
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

# Chrome 웹 드라이버 경로 설정
webdriver_service = Service('/chromedriver.exe')

# Chrome 옵션 설정
options = Options()
options.add_argument('--headless')  # 브라우저를 띄우지 않고 실행 (headless 모드)

# Chrome 웹 드라이버 생성
driver = webdriver.Chrome(service=webdriver_service, options=options)

# 웹 페이지 로드
driver.get('https://www.work.go.kr/empInfo/empInfoSrch/list/dtlEmpSrchList.do?careerTo=&keywordJobCd=&occupation=&shsyWorkSecd=&rot2WorkYn=&templateInfo=&payGbn=&resultCnt=50&keywordJobCont=&cert=&cloDateStdt=&moreCon=&minPay=&codeDepth2Info=11000&currentPageNo=1&isChkLocCall=&sortFieldInfo=DATE&major=&resrDutyExcYn=&eodwYn=&sortField=DATE&staArea=&keyword=&sortOrderBy=DESC&termSearchGbn=all&carrEssYns=&benefitSrchAndOr=O&disableEmpHopeGbn=&webIsOut=&actServExcYn=&maxPay=&keywordStaAreaNm=&emailApplyYn=&listCookieInfo=SPL&pageCode=&codeDepth1Info=11000&keywordEtcYn=&publDutyExcYn=&keywordJobCdSeqNo=&exJobsCd=&templateDepthNmInfo=&computerPreferential=&regDateStdt=&employGbn=&empTpGbcd=1%2C2&region=26000&infaYn=&resultCntInfo=50&siteClcd=all&cloDateEndt=&sortOrderByInfo=DESC&indArea=&careerTypes=&searchOn=Y&tlmgYn=&subEmpHopeYn=&academicGbn=00&foriegn=&templateDepthNoInfo=&mealOfferClcd=&station=&moerButtonYn=Y&holidayGbn=&srcKeyword=&enterPriseGbn=all&academicGbnoEdu=&cloTermSearchGbn=all&keywordWantedTitle=&stationNm=&benefitGbn=&keywordFlag=&notSrcKeyword=&essCertChk=&isEmptyHeader=&depth2SelCode=&_csrf=6aaaa9e5-6a20-48d9-8e23-e3402351e536&keywordBusiNm=&preferentialGbn=&rot3WorkYn=&pfMatterPreferential=B&regDateEndt=&staAreaLineInfo1=11000&staAreaLineInfo2=1&pageIndex=1&termContractMmcnt=&careerFrom=&laborHrShortYn=#viewSPL')
# 페이지 소스 가져오기
html = driver.page_source

# BeautifulSoup을 사용하여 파싱
soup = BeautifulSoup(html, 'html.parser')

# 데이터를 저장할 리스트 생성
data_list = []

# 원하는 요소 가져오기
table = soup.find('table', class_='board-list')
if table:
    rows = table.find_all('tr')
    for row in rows:
        cells = row.find_all('td')
        if cells:
            row_data = {}
            # 회사명/정보제공처 데이터 가져오기
            company_info = cells[1].find('a')
            row_data['회사명/정보제공처'] = company_info.get_text(strip=True)

            # 채용공고명/담당업무/지원자격, 근무조건 데이터 가져오기
            row_data['채용공고명/담당업무/지원자격'] = cells[2].text

            # 근무조건 데이터 가져오기
            row_data['근무조건'] = cells[3].text

            # 등록/마감일 데이터 가져오기
            row_data['등록/마감일'] = cells[4].text

            data_list.append(row_data)

# 웹 드라이버 종료
driver.quit()

# 결과 출력
for data in data_list:
    print(data)

# JSON 파일로 저장
with open('json/worknet_11.json', 'w', encoding='utf-8') as f:
    json.dump(data_list, f, ensure_ascii=False, indent=4)
