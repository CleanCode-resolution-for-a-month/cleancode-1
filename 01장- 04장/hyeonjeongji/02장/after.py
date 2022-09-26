userUrl = "http://easyfarm.dothome.co.kr/db/user_data.php"
userData = urllib.request.urlopen(userUrl).read().decode('utf-8')
userJson = json.loads(userData)
userTemp = userJson[farm_id]['plant']
 
plantUrl = "http://easyfarm.dothome.co.kr/db/raspberry.php" #품종에 대한 정보
plantData = urllib.request.urlopen(plantUrl).read().decode('utf-8')
plantJson = json.loads(data_2)
plantTemp = plantJson[userTemp]['water'] #품종의 물 공급량
