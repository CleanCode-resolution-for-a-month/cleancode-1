import api from './src/api/index.js';
import { helper } from './src/utils/index.js';
import db from './src/db/index.js';

const LOCATION = '05803';
const CHECK_CYCLE = 3000;
const PROCESS = {
  START: 0,
  STOP: 1,
};

/**
 * 함수의 기능을 명확히 정했습니다.
 * 이전에는 배송 가능 여부를 가져왔다면 추상화 레벨을 낮추어 '배송 정보'를 가져왔습니다.
 * 이후에는 픽업 가능 여부도 가져올 수 있게 처리해볼 예정입니다.
 *
 * 개선점
 * 1. 배송 재고 정보만 가져오기 때문에 함수명 변경
 * 2. code가 아닌 sku라는 공식 명칭으로 변경
 */
async function fetchDeliveryInfo(sku, location) {
  const response = await api.apple.getStock({ productCode: sku, location });

  const {
    body: {
      content: { deliveryMessage },
    },
  } = response;

  return deliveryMessage[sku].regular;
}

async function logKindOfModel(kind) {
  const now = helper.now('YYYY.M.D HH:mm:ss');
  console.log(`<${kind}>`, now);
}

async function logStockInfo(deliveryInfo) {
  const buyableMessage = deliveryInfo.isBuyable ? '구매 가능' : '재고 없음';
  console.log(` - ${deliveryInfo.subHeader} - ${buyableMessage}`);
}

async function logStockInfos(stockInfos) {
  stockInfos.forEach(logStockInfo);
}

async function getModelsDeliveryInfo(models, location) {
  const result = await Promise.all(
    Object.keys(models).map(async (sku) => {
      const result = await fetchDeliveryInfo(sku, location);
      return result;
    })
  );
  return result;
}

//TODO: 에러 처리
function onFailedGetDeliveryInfo() {}

/**
 * 로직 분리를 통해 새로 추가된 함수입니다.
 *
 * 모델명과 시간을 출력하는 함수, 재고 정보를 가져오는 함수, 재고 정보를 출력하는 함수를 모두 분리했습니다.
 */
async function checkDeliveryStocks(kind, models) {
  try {
    logKindOfModel(kind);
    const stockInfos = await getModelsDeliveryInfo(models, LOCATION);
    logStockInfos(stockInfos);
  } catch (err) {
    onFailedGetDeliveryInfo();
  }
}

/**
 * 가장 추상화 레벨이 높은 함수입니다.
 *
 * 추상화 레벨이 높고 이후로 여러기능이 들어갈 가능성이 있기에 로직을 아예 분리시켰습니다.
 * 의미를 알 수 없는 값들은 상수로 정의해서 의도를 알 수 있게 했습니다.
 *  ex. STATUS, CHECK_CYCLE
 */
async function run() {
  const status = PROCESS.START;

  while (status) {
    for (const [kind, models] of Object.entries(db)) {
      await checkDeliveryStocks(kind, models);
    }
    console.log('');
    await helper.delay(CHECK_CYCLE);
  }

  //TODO: 특정 조건을 만족하면 프로세스 종료
  // status = PROCESS.STOP
}

run();
