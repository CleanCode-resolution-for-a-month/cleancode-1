/**
 * 애플 상품 재고 확인 프로그램 일부
 *
 * [문제점]
 *  - 함수명, 변수명의 모호함과 run함수가 하는 일이 많음.
 *  - 한 함수에서 여러가지 일을 함
 *
 * [개선 방법]
 *  - 의미 있는 함수명으로 교체
 *  - run 함수 분리
 */

import api from './src/api/index.js';
import { helper } from './src/utils/index.js';
import db from './src/db/index.js';

// 우편번호
const LOCATION = '05803';

/**
 * 상품 구매 가능 여부 가져오기
 * @param {string} sku
 * @param {string} location
 * @returns {bool}
 *
 * 문제점
 *  - code 파라미터 명의 모호함
 *  - 함수명은 '재고 정보 패치 받기'지만 실제로 '구매 가능'여부를 리턴함
 */
async function fetchStockInfo(sku, location) {
  const response = await api.apple.getStock({ productCode: sku, location });

  const {
    body: {
      content: { deliveryMessage },
    },
  } = response;

  return deliveryMessage[code].regular.isBuyable;
}

/**
 * 상품들의 구매 가능 여부 가져오기
 * @param {string} models
 * @param {string} location
 * @returns {bool[]}
 *
 * 문제점
 *  - fetchStockInfo 함수를 사용하는 함수이지만 함수명만 봤을 때 추상화 레벨이 동일함
 */
async function getModelsBuyable(models, location) {
  const result = await Promise.all(
    Object.entries(models).map(async ([code, spec]) => {
      const isBuyable = await fetchStockInfo(code, location);
      return { result: isBuyable, data: { code, spec } };
    })
  );
  return result;
}

async function run() {
  while (true) {
    for (const [kind, models] of Object.entries(db)) {
      const now = helper.now('YYYY.M.D HH:mm:ss');
      console.log(`<${kind}>`, now);
      const buyableList = await fetchStockInfos(models, LOCATION);
      buyableList.forEach(({ result, data }) => {
        const { code, spec } = data;
        console.log(`  - [${code}] ${spec.size}-${spec.color}-${spec.storage}: ${result ? '구매 가능' : '재고 없음'}`);
      });
      console.log('');
    }
    await helper.delay(3000);
  }
}

run();
