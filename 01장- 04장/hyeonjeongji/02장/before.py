url_1 = "http://easyfarm.dothome.co.kr/db/user_data.php" #사용자가 키우는 품종의 정보
data_1 = urllib.request.urlopen(url_1).read().decode('utf-8')
j_1 = json.loads(data_1)
temp_1 = j_1[farm_id]['plant']
 
url_2 = "http://easyfarm.dothome.co.kr/db/raspberry.php" #품종에 대한 정보
data_2 = urllib.request.urlopen(url_2).read().decode('utf-8')
j_2 = json.loads(data_2)
temp_2 = j_2[temp_1]['water'] #품종의 물 공급량
