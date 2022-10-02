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
  return deliveryMessage[sku].regular
}

async function logKindOfModel(kind) {
  const now = helper.now('YYYY.M.D HH:mm:ss')
  console.log(`<${kind}>`, now)
}

async function logStockInfo(deliveryInfo) {
  const buyableMessage = deliveryInfo.isBuyable ? '구매 가능' : '재고 없음'
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

//TODO: 에러 처리
function onFailedGetDeliveryInfo() {}

async function runStockChecker(kind, models) {
  try {
    logKindOfModel(kind)
    const stockInfos = await getModelsDeliveryInfo(models, LOCATION)
    logStockInfos(stockInfos)
  } catch (err) {
    onFailedGetDeliveryInfo()
  }
}

// 앞으로 추가할 기능
async function runServerChecker() {}

async function run() {
  const status = PROCESS.START

  while (status) {
    for (const [kind, models] of Object.entries(db)) {
      await runStockChecker(kind, models)
      await runServerChecker()
    }
    await helper.delay(CHECK_CYCLE)
  }

  //TODO: 특정 조건을 만족하면 프로세스 종료
  // status = PROCESS.STOP
}

run()
