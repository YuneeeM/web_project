from geopy.geocoders import Nominatim
import json

# JSON 파일 경로
json_file = "meals.json"

# Geocoding API를 사용하여 주소로부터 위도와 경도 검색
geolocator = Nominatim(user_agent="my-custom-application")

with open(json_file, "r", encoding="utf-8") as file:
    data = json.load(file)
    last_location = None  # 가장 최근에 검색한 주소의 위치 정보를 저장할 변수

    for item in data:
        address = item["주소"]

        # 저장할 위도와 경도가 없는 경우에만 가장 최근에 검색한 주소의 위치 정보를 사용하여 위도와 경도 검색
        if "위도" not in item and "경도" not in item:
            if last_location is not None:
                location = last_location
            else:
                location = geolocator.geocode(address)

            if location is not None:
                latitude = str(location.latitude)
                longitude = str(location.longitude)
                item["위도"] = latitude
                item["경도"] = longitude
                last_location = location  # 가장 최근에 검색한 주소의 위치 정보 업데이트
            else:
                # 위치 정보를 찾을 수 없는 경우에는 가장 최근에 검색한 주소의 위치 정보를 사용
                if last_location is not None:
                    latitude = str(last_location.latitude)
                    longitude = str(last_location.longitude)
                    item["위도"] = latitude
                    item["경도"] = longitude
                    last_location = last_location  # 최신 위치 정보 갱신


# 수정된 JSON 데이터를 파일에 저장
updated_json_file = "updated_data.json"
with open(updated_json_file, "w", encoding="utf-8") as file:
    json.dump(data, file, ensure_ascii=False)
