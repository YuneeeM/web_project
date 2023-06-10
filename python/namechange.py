import json

# 기존 JSON 파일 경로
input_file_path = 'meals.json'

# 새로운 JSON 파일 경로
output_file_path = 'meal.json'

# JSON 파일 불러오기
with open(input_file_path, 'r', encoding='utf-8') as input_file:
    data = json.load(input_file)

# 키 이름 변경
for item in data:
    item["시설명"] = item.pop("급식기관명")
    item["전화번호"] = item.pop("연락처")

# 새로운 JSON 파일 저장
with open(output_file_path, 'w', encoding='utf-8') as output_file:
    json.dump(data, output_file, indent=5, ensure_ascii=False)

print("새로운 JSON 파일이 생성되었습니다.")
