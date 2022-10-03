/**
 * 1. 예외 처리 추가
 * 2. prettier 설정을 통해 들여쓰기 등 코드 스타일 적용
 * 3. null 반환할 가능성이 있는 부분에 처리
 * 4. 함수 추상화(1~4장 내용) 개선
 */

import api from './src/api/index.js'
import { helper } from './src/utils/index.js'
import db from './src/db/index.js'

const LOCATION = '05803'
const CHECK_CYCLE = 3000
const PROCESS = {
  START: 0,
  STOP: 1,
}

async function fetchDeliveryInfo(sku, location) {
  const response = await api.apple.getStock({ productCode: sku, location })

  const {
    body: {
      content: { deliveryMessage },
    },
  } = response

  // undefined 혹은 null일 가능성이 있음
  // 어떤 값이라도 반환해보려 했지만, 해당 값이 넘어오지 않는다는 것은 데이터 자체에 문제가 있는 것이고 이를 임의의 값으로 return했을 때
  // 이 함수를 사용하는 곳에서 해당 값이 오류로 인해 넘어온 값인지, 실제 값이지 알 수가 없음
  // 그렇기 때문에 이 함수에서 따로 에러처리를 하지않고 함수를 사용하는 곳에서 try-catch로 에러처리를 진행함
  return deliveryMessage[sku].regular
}

async function logKindOfModel(kind) {
  const now = helper.now('YYYY.M.D HH:mm:ss')
  console.log(`<${kind}>`, now)
}

async function logStockInfo(deliveryInfo) {
  const buyableMessage = deliveryInfo?.isBuyable ? '구매 가능' : '재고 없음'
  console.log(` - ${deliveryInfo.subHeader} - ${buyableMessage}`)
}

async function logStockInfos(stockInfos) {
  stockInfos.forEach(logStockInfo)
}

async function getModelsDeliveryInfo(models, location) {
  const result = await Promise.all(
    Object.keys(models).map(async (sku) => {
      const result = await fetchDeliveryInfo(sku, location)
      return result
    }),
  )
  return result
}

/**
 * 에러 처리 추가
 * 에러가 발생하면 해당 모델과 에러로그를 출력하며 sentry에 로그를 남김
 */
function onFailedGetDeliveryInfo(err, models) {
  tool.sentry.log(err)
  console.log('[Failed]', models, err)
}

async function runStockChecker(kind, models) {
  try {
    logKindOfModel(kind)
    const stockInfos = await getModelsDeliveryInfo(models, LOCATION)
    logStockInfos(stockInfos)
  } catch (err) {
    // getModelsDeliveryInfo(fetchDeliveryInfo에서 발생할 가능성이 큼) 함수에서 문제가 발생한다면 이곳에서 에러처리를 하면 됨
    onFailedGetDeliveryInfo(err, models)
  }
}

async function run() {
  const status = PROCESS.START

  while (status) {
    for (const [kind, models] of Object.entries(db)) {
      // 함수명 교체, runXXX 형식의 함수명은 해당 기능의 최상단 레이어의 함수임
      await runStockChecker(kind, models)
    }
    await helper.delay(CHECK_CYCLE)
  }

  //TODO: 특정 조건을 만족하면 프로세스 종료
  // status = PROCESS.STOP
}

run()
