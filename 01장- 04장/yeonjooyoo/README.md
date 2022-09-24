# 1~4 장

# 복간에 부쳐

- 박재호
    - 프로그래밍도 유행이나 스타일이 조금씩 바뀌기 때문에 본문에서 소개하는 원칙이 현실과 잘 맞지 않을 수 있음
    - 핵심은 팀이나 공동체에서 서로 동의하는 합리적인 원칙을 세우기 위한 소통
    - Clean Code는 이런 소통을 위한 기초 지식을 제공하고 생각할 거리를 던져주는 책
- 로버트 C.마틴
    - 이 책은 절대적이지 않고, 개선의 여지가 있음

# 옮긴이 서문

- 박재호
    - 프로그램을 짜다 보면, 코드를 쓰는 시간보다 (남은 물론이고 자신도 정신없이 어지럽힌) 코드를 읽는 시간이 훨씬 더 많음
    - 코드를 가져올 때보다 넣을 때 더 깨끗한 상태로 만들어 할 의무가 있음
- 이해영
    - 프로그래밍 실력은 계단식으로 성장
    - 프로그램을 잘 짜는 사람과 같이 일하면 가장 좋음
        - 같이 일하면서 그 사람이 생각하는 방식을 배운다면 프로그래밍 실력이 순식간에 뜀
        - 반면 생각의 흐름을 파악하기 어려우므로 그만큼의 노력이 필요함

# 추천사

- James O. Coplien
- 책임 있는 전문가라면 프로젝트를 시작할 때 생각하고 계획할 시간을 확보해야 함
    - 테스트와 코드만으로 설계를 주도한다는 생각으로는  안 됨
- 소프트웨어는 80% 이상이 소위 “유지보수”
- 5S 원칙
*TPM (Total Productive Management) 품질 관리론*
    1. Seiri (정리/조직/정렬 sort) : 적절한 명명법 등과 같은 방법을 사용해 무엇이 어디에 있는지 알아야 함
    2. Seiton (정돈/단정함/체계화) : 물건마다 모두 제자리가 있음. 코드는 누구나 예상하는 위치에 있어야 함
    3. Seiso (청소/정리/광내기) : 작업 공간에서 부스러기나 쓰레기는 치운다. 과거 이력이나 미래 바람을 위한 주석이나 주석으로 처리한 코드는 처리하여 제거
    4. Seiketsu (청결/표준화) : 작업 공간 청소 방식에 대해 그룹이 동의하기. 그룹 내에서 일관적인 구현 스타일과 기법의 필요성
    5. Shutsuke (생활화/규율) : 관례를 따르고, 자기 작품을 자주 돌아보고, 기꺼이 변경하는 규율
- 읽기 좋은 코드는 돌아가는 코드만큼이나 중요함
- 코드에 정직하고, 코드의 상태에 관하여 동료들에게 정직하고, 자기 코드에 대해서 자신에게 정직하라
- 아키텍처도, 깨끗한 코드도, 완벽을 주장하지 않음 → 최선을 다해 정직하라 요구할 뿐임
- 코드는 결코 완벽하지 않음

# 들어가면서

- 깨끗한 코드를 작성하는 방법은 배우기 어려움 (단순히 원칙과 패턴을 안다고 구현할 수 없음)
- 고생 해야 함 (스스로 연습하고 실패도 맛봐야 함)

# 1. 깨끗한 코드

좋은 코드와 나쁜 코드 구분하는 능력

좋은 코드를 작성하는 방법

나쁜 코드를 좋은 코드로 바꾸는 실력

## 코드가 존재하리라

코드는 사라지지 않음 (자동 완성이 되더라도)

코드는 요구사항을 상세히 표현하는 수단

기계가 실행할 정도로 상세하게 요구사항을 명시하는 작업이 프로그래밍이고, 명시한 결과가 코드

## 나쁜코드

- Killer App : 단순한 상품이나 발명품의 의미를 넘어 시장을 크게 변화시키고, 나아가 사회인식과 문화코드까지 바꿔버리는 제품 또는 서비스를 통칭
- 고행 (wading) : 나쁜 코드에 발목 잡혀 힘겹게 헤쳐나가는 상태
- 나쁜 코드가 생기는 이유? 급해서, 빨리 끝내고 싶어서, 나중에 손보겠다고 생각해서…
- 르블랑의 법칙 : 나중은 결코 오지 않음

## 나쁜 코드로 치르는 대가

- 원대한 재설계의 꿈
    - 깨끗한 코드를 만드는 노력이 비용을 절감하는 방법일 뿐만 아니라 전문가로서 살아남는 길
    - 나쁜 코드는 개발 속도를 크게 떨어트림 → 팀 생산성 떨어짐 → 생산성이 0으로 수렴함 (인력을 더 추가해도..) → 재설계 (유능한 사람들로 구성된 타이거팀) → 오랜 시간 뒤, 새로운 팀원들로 재설계 …
- 태도
    - 좋은 코드를 사수하는 일은 프로그래머들의 책임
    - 나쁜 코드의 위험을 이해하지 못하는 관리자 말을 그대로 따르는 행동은 전문가 답지 못함
    - 마케팅팀의 요구 사항에 대해 적극적으로 정보를 제공 해야함 (현실성)
- 원초적 난제
    - 프로그래머가 기한을 맞추려면 나쁜 코드를 양산 할 수 밖에 없다? → 틀렸다
    - 언제나 코드를 최대한 깨끗하게 유지하는 습관이 빨리 가는 유일한 방법
- 깨끗한 코드라는 예술?
    - 깨끗한 코드와 나쁜 코드를 구분할 줄 안다고 깨끗한 코드를 작성할 줄 안다는 뜻은 아님
    - 코드 감각 - 타고나거나 기르거나 코드 감각이 필요함
- 깨끗한 코드란?
    - 비야네 스트롭스트룹 (Bjarne Stroustrup) - C++ 창시자
        - 우아하고 효율적인 코드를 좋아함
            - 우아한 : 보기에 즐거움
        - 논리가 간단해야 버그가 숨어들지 못함
        - 의존성을 최대한 줄여야 유지보수가 쉬움
        - 오류는 명백한 전략에 의거해 철저히 처리
            - 개발자가 대충 넘어가는 부분 : 오류 처리, 메모리 누수, 경쟁 상태, 일관성 없는 명명법 등
            - 섬세한 코드는 세세한 사항까지 꼼꼼하게 처리하는 코드
        - 성능을 최적으로 유지해야 사람들이 원칙 없는 최적화로 코드를 망치려는 유혹에 빠지지 않음
            - 나쁜 코드를 고치면서 더 나쁜 코드를 만든다
            - 깨진 창문의 법칙
        - 깨끗한 코드는 한 가지를 제대로 함
            - 각 함수와 클래스와 모듈은 주변 상황에 현혹되거나 오염되지 않아야 함
    - 그래디 부치 (Grady Booch) - Object Oriented Analysis and Design with Application 책 저자
        - 깨끗한 코드는 단순하고 직접적
        - 깨끗한 코드는 잘 쓴 문장처럼 읽힘
            - 가독성 강조
        - 깨끗한 코드는 결코 설계자의 의도를 숨기지 않음
        - 명쾌한 추상화와 단순한 제어문으로 가득함
            - 코드는 사실에 기반하고, 반드시 필요한 내용만 담아야 함
    - 데이브 토마스 (Dave Thomas) - OTI 창립자이자 이클립스 전략의 대부
        - 작성자가 아닌 사람도 읽기 쉽고 고치기 쉬움
        - 단위 테스트 케이스와 인수 테스트 케이스가 존재함
        - 의미있는 이름을 붙임
        - 특정 목적을 달성하는 벙법은 하나만 제공
        - 의존성은 최소이며 각 의존성을 명확히 정의
        - API는 명확하며 최소로 줄임
            - 작을수록 좋음
    - 마이클 페더스 (Michael Feathers) - Working Effectively with Legacy Code 저자
        - 언제나 누군가 주의 깊게 짰다는 느낌을 줌
        - 작성자가 이미 모든 사항을 고려했기 때문에, 딱히 수정할 곳이 없음
    - 론 제프리스 (Ron Jeffries) - Extreme Programming ~~ 저자, 거의 모든 언어로 코드를 구현
        - 켄트 벡이 제안한 단순한 코드 규칙으로 구현을 시작함
            - 모든 테스트를 통과함
            - 중복이 없음
            - 시스템 내 모든 설계 아이디어를 표현
            - 클래스, 메서드, 함수 등을 최대한 줄임
        - 의미 있는 이름 사용
        - 여러 기능을 수행한다면 여러 개로 나눔
        - 깨끗한 코드 만드는 비결 : 중복 줄이기, 표현력 높이기, 초반부터 간단한 추상화 고려하기 (작게 추상화 하라)
    - 워드 커닝햄 (Ward Cunningham) - wiki, Fit 창시자, eXtreme Programming 공동 창시자 등등
        - 코드를 읽으면서 짐작했던 기능을 각 루틴이 그대로 수행함
        - 코드가 그 문제를 풀기 위한 언어처럼 보인다면 아름다운 코드
        - 깨끗한 코드는 읽으면서 놀랄 일이 없어야 함
- 우리는 저자다
    - 새 코드를 짜면서 끊임없이 기존 코드를 읽는다
    - 코드를 읽는 시간 : 코드를 짜는 시간 은 10 : 1을 훌쩍 넘는다
- 보이스카우트 규칙
    - 시간이 지나도 언제나 깨끗하게 유지 해야함
    - 좀 더 깨끗한 코드를 넣기
        - 변수 이름 하나를 개선
        - 조금 긴 함수 분할
        - 중복 제거
        - 복잡한 if 문 제거
        - 등등..
- 결론
    - 연습!!!

# 2. 의미 있는 이름

## 의도를 분명히 밝혀라

- 좋은 이름으로 절약하는 시간이 이름을 짓는데 걸리는 시간보다 더 많다

```tsx
let d; // Bad
let fileAgeInDays; // Good
```

```tsx
// Bad
const getThem = (theList: number[][]) => {
	const list1: number[][] = [];
	for (const x of theList) {
		if (x[0] === 4) list1.push(x);
	}
	return list1;
}
getThem([[0,0,0],[0,2,0],[4,0,0]]);

// Good (1) (지뢰 찾기)
const STATUS_VALUE = 0;
const FLAGGED = 4; // 깃발이 꽂힌 상태

const getFlaggedCells = (gameBoard: number[][]) => {
	const flaggedCell: number[][] = [];
	for (const cell of gameBoard) {
		if (cell[STATUS_VALUE] === FLAGGED) flaggedCell.push(cell);
	}
	return flaggedCell;
}
getFlaggedCells([[0,0,0],[0,2,0],[4,0,0]]);

// Good (2)
class Cell extends Array<number> {
	isFlagged() {
		const STATUS_VALUE = 0;
		const FLAGGED = 4;

		if (this[STATUS_VALUE] === FLAGGED) return true
		else return false
	}
}

const getFlaggedCells = (gameBoard: Cell[]) => {
	const flaggedCell: Cell[] = [];
	for (const cell of gameBoard) {
		if (cell.isFlagged()) flaggedCell.push(cell);
	}
	return flaggedCell;
}
getFlaggedCells([new Cell(0,0,0), new Cell(0,4,0), new Cell(4,0,0)]);
```

## 그릇된 정보를 피하라

- 프로그래머는 코드에 그릇된 단서를 남기지 않기
    - 나름대로 널리 쓰이는 의미가 있는 단어를 다른 의미로 사용하지 않기
        - hp, aix, sco (X)
        - hypotenuse (빗변) → hp (X)
    - 여러 그룹으로 묶을 때, 실제 List 자료형이 아니라면 accountList라 명칭하지 않기
        - accountGroup, Accounts 를 쓰는 것이 낫다
    - 서로 흡사한 이름을 사용하지 않도록 주의
        - 예를 들어, XYZControllerForEfficientHandlinfOfStrings 와 XYZControllerForEfficientStorageOfStrings
    - 유사한 개념은 유사한 표기법 사용 (일관성 유지)
    - 소문자 `l(엘)`은 숫자 1처럼 보이고 대문자 `O(오)`는 숫자 0처럼 보이기에 사용을 권장하지 않음

## 의미 있게 구분하라

- 이름이 달라야 한다면 의미도 달라져야 함
    - 안 좋은 예 : class & klass, a1 & a2 & a3 …
    
    ```tsx
    // Bad
    const copyChar = (a1: string[], a2: string[]) => {	
    	for(const i in a1){
    		a2[i] = a1[i];
    	}
    }
    
    // Good
    const copyChar = (source: string[], destination: string[]) => {	
    	for(const i in a1){
    		destination[i] = source[i];
    	}
    }
    ```
    
- 불용어를 사용하지 않기
    - 불용어 : 인터넷 검색 시 검색 용어로 사용하지 않는 단어. 관사, 전치사, 조사, 접속사 등은 검색 색인 단어로 의미가 없는 단어
    - a, the 등 관사를 쓰지 말라는 의미는 아님 (의미가 나뉜다면 써도 무방)
    - 아무런 정보를 제공하지 못하는 이름일 뿐 (저자의 의도가 전혀 드러나지 않는 이름)
        - 예를 들어, userInfo & userData 로 나누지 말 것
    - 읽는 사람이 차이를 알도록 이름 짓기

## 발음하기 쉬운 이름을 사용하라

- 발음하기 어려우면 토론하기 어려움
    
    ```tsx
    // Bad
    class DtaRcrd102 {
        genymdhms: Date = new Date;
        modymdhms: Date = new Date;
        static pszqint = "102";
    };
    
    // Good
    class Customer {
        generationTimestamp: Date = new Date;
        modificationTimestamp: Date = new Date;
        static recordId = "102";
    };
    ```
    

## 검색하기 쉬운 이름을 사용하라

- 숫자나 영문 e 등 은 좋지 않음
- 이름 길이는 범위 크기에 비례해야 한다
- 변수나 상수를 코드 여러 곳에서 사용한다면 검색하기 쉬운 이름이 바람직

```tsx
// Bad
for (let i=0; i < 10; i++) {
	s += (t[i]*4)/5;
}

// Good
let realDaysPerIdealDay = 4;
const WORK_DAYS_PER_WEEK = 5;
let sum = 0;
for (let i=0; i < NUMBER_OF_TASKS; i++) {
	const realTaskDays = taskEstimate[i] * realDaysPerIdealDay;
	const realTaskWeeks = realTaskDays / WORK_DAYS_PER_WEEK;
	sum += realTaskWeeks;
}
```

## ****인코딩을 피하라****

- 유형이나 범위 등 부가 정보를 덧붙이면 이름 해독하기 어려움
- 헝가리식 표기법
    - 과거와 달리, 컴파일러에서 타입을 기억하고 강제하고 클래스와 함수가 작아지면서 변수를 선언한 위치와 사용 위치가 멀지 않음
    
    ```tsx
    let phoneString: PhoneNumber; // Bad 타입이 바뀌어도 이름이 바뀌지 않음
    ```
    
- 멤버 변수 접두어
    - `m_` 접두어 붙이지 않기
    - 클래스와 함수는 접두어가 필요없을 정도로 작아야 하고, 표시되는 IDE 사용하기
    
    ```tsx
    // Bad
    class Part {
    	#m_dsc: string = '';
    	setDsc(dsc: string) {
    		this.#m_dsc = dsc;
    	}
    }
    
    // Good
    class Part {
    	#description: string = '';
    	setDescription(description: string) {
    		this.#description= description;
    	}
    }
    ```
    
- 인터페이스 클래스와 구현 클래스
    - 인터페이스 클래스와 구현 클래스를 나눠야 한다면 구현 클래스의 이름에 정보를 인코딩하자
        - 예를 들어, ShapeFactory → ( IShapeFactory & ShapeFactory ) 보다 ( ShapeFactory & ShapeFactoryImp 또는 CShapeFactory ) 이 좋음

## 자신의 기억력을 자랑하지 마라

- 독자가 머리속으로 한번 더 생각해 변환해야 할만한 변수명을 쓰지 말라
- 똑똑한 프로그래머와 전문가 프로그래머를 나누는 기준 한가지는 "Clarity(명료함)”
    - 명로함이 최고다

## 클래스 이름

- 명사 혹은 명사구를 사용하기
    - Customer, WikiPage, Account, AddressParser
- Manager, Processor, Data, Info와 같은 단어는 피하기
- 동사는 사용하지 않기

## 메서드 이름

- 동사 혹은 동사구를 사용하기
    - postPayment, deletePayment, deletePage, save 등
- 접근자, 변경자, 조건자는 get, set, is로 시작하기
    - should, has 등도 가능
- 생성자를 중복정의(오버로드)할 경우 정적 팩토리 메서드를 사용하는 것이 좋음 **(질문!)**
    
    ```tsx
    Complex fulcrumPoint = new Complex(23.0);
    Complex fulcrumPoint = Complex.FromRealNumber(23.0); // Better
    ```
    

## 기발한 이름은 피하라

- 특정 문화에서만 사용되는 재미있는 이름보다 의도를 분명히 표현하는 이름을 사용하라
    - HolyHandGrenade → DeleteItems
    - whack() → kill()

## 한 개념에 한 단어를 사용하라

- 추상적인 개념 하나에 단어 하나를 사용하기 (섞어 쓰지 않기)
    - fetch, retrieve, get
    - controller, manager, driver
- 일관성 있는 어휘 사용

## 말장난을 하지 마라

- 한 단어를 두 가지 목적으로 사용하지 말기

```tsx
const add = (a: number, b: number) => a + b;
const add = (a: string, b: string) => a + b;

// Bad - insert 나 append 가 낫다
const add = (a: number[], b: number) => {
	a.push(b);
	return a;
}
```

## 해법 영역에서 가져온 이름을 사용하라

- 전산 용어, 알고리즘 이름, 패턴 이름, 수학 용어 등은 사용
    - 개발자라면 당연히 알고 있을 `JobQueue`, `AccountVisitor(from Visitor pattern)` 사용 가능

## 문제 영역에서 가져온 이름을 사용하라

- 적절한 프로그래머 용어가 없거나 문제 영역과 관련이 깊은 용어의 경우 문제 영역 용어를 사용하자
- 우수한 프로그래머와 설계자는 해법 영역과 문제 영역을 구분할 줄 알아야 함

## 의미 있는 맥락을 추가하라

- 클래스, 함수, namespace등으로 감싸서 맥락(Context)을 표현하라
- 그래도 불분명하다면 접두어를 사용하자
    - name, street, city, state, zipcode → addrName, addrStreet, addrCity …
    - 물론 Address 클래스를 생성하면 더 좋음
    
    ```tsx
    // Bad
    class printGuessStatistics {
        number: string = '';
        verb: string = '';
        pluralModifier: string = '';
    	
    	constructor (candidate: string, count: number) {
    		if (count === 0) {  
    			this.number = "no";  
    			this.verb = "are";  
    			this.pluralModifier = "s";  
    		}  else if (count === 1) {
    			this.number = "1";  
    			this.verb = "is";  
    			this.pluralModifier = "";  
    		}  else {
    			this.number = String(count);  
    			this.verb = "are";  
    			this.pluralModifier = "s";  
    		}
    
    		const guessMessage = `There ${this.verb} ${this.number} ${candidate}${this.pluralModifier }`;
    		console.log(guessMessage);
    	}
    }
    
    // Good
    class printGuessStatistics {
      number: string = '';
      verb: string = '';
      pluralModifier: string = '';
    
    	constructor (candidate: string, count: number) {
    		this.#createPluralDependentMessageParts(count);
    		const guessMessage = `There ${this.verb} ${this.number} ${candidate}${this.pluralModifier }`;
    		console.log(guessMessage);
    	}
    
    	#createPluralDependentMessageParts(count: number) {
        if (count == 0) {
          this.#thereAreNoLetters();
        } else if (count == 1) {
          this.#thereIsOneLetter();
        } else {
          this.#thereAreManyLetters(count);
        }
      }
    
      #thereAreManyLetters(count: number) {
        this.number = String(count);
        this.verb = "are";
        this.pluralModifier = "s";
      }
    
      #thereIsOneLetter() {
        this.number = "1";  
    		this.verb = "is";  
    		this.pluralModifier = "";  
      }
    
      #thereAreNoLetters() {
        this.number = "No";  
    		this.verb = "are";  
    		this.pluralModifier = "s";  
      }
    }
    ```
    

## 불필요한 맥락을 없애라

- 의미를 분명하게 하자
    - `Gas Station Delux` 이라는 어플리케이션을 작성한다고 해서 클래스 이름의 앞에 GSD를 붙이지는 말자
    - `GSDAccountAddress` 대신 `Address`라고만 해도 충분함
    - `accountAddress`와 `customerAddress`는 `Address`의 인스턴스로는 좋음

## 결론

좋은 이름을 선택하는 능력은 교육의 문제

누군가의 질책을 두려워하지 말고 서로의 명명을 지적하고 고치자

# 3. 함수

- 어떤 프로그램이든 가장 기본적인 단위가 함수

## 작게 만들어라!

- 함수는 최대한 작을 수록 좋다
- 블록과 들여쓰기
    - if/else, while문 등(중첩구조)에 들어가는 블록은 한 줄이어야 한다
    - 중첩구조가 생길만큼 함수가 커져서 안되고, 들여쓰기 수준은 최대 2단을 넘어서면 안 됨

## 한 가지만 해라!

- 함수는 한 가지만을 잘 해야한다
- 지정된 함수 이름 아래에서 추상화 수준이 하나인 단계만 수행한다면 그 함수는 한 가지 작업만 한다
    - 추상화 수준에서 여러 단계를 처리함
    - `const renderPageWithSetupsAndTeardowns = () ⇒ { … }`
- 함수 내 섹션
    - 의미 있는 이름으로 다른 함수를 추출할 수 있다면 그 함수는 여러 작업을 하는 셈

## 함수 당 추상화 수준은 하나로

- 함수가 ‘한가지’ 작업만 하려면 함수 내 모든 문장의 추상화 수준이 동일해야 됨
- 만약 한 함수 내에 추상화 수준이 섞이게 된다면 읽는 사람이 헷갈리고, 근본 개념과 세부사항이 뒤섞기 시작하면 함수에 세부사항을 점점 더 추가하게 됨
- 위에서 아래로 코드 읽기: 내려가기 규칙
    - 코드는 위에서 아래로 이야기처럼 읽혀야 좋음
    - 내려가기 규칙 : 함수 추상화 부분이 한번에 한 단계씩 낮아지는 것이 가장 이상적임

## Switch 문

- if/else 가 여럿 이어지는 구문도 포함된 얘기
- switch문은 작게 만들기 어렵지만, 다형성을 이용하여 switch문을 abstract factory에 숨겨 다형적 객체를 생성하는 코드 안에서만 switch를 사용할 수 있음
    - JS에는 추상 클래스와 메소드 지원하지 않음..

## 서술적인 이름을 사용하라!

> “코드를 읽으면서 짐작했던 기능을 각 루틴이 그대로 수행한다면 깨끗한 코드라 불러도 되겠다” - 워드
> 
- 작은 함수는 그 기능이 명확하므로 이름을 붙이기가 더 쉬우며, 일관성 있는 서술형 이름을 사용한다면 코드를 순차적으로 이해하기도 쉬워진다
- 이름이 길어도 괜찮다. 길고 서술적인 이름이 짧고 어려운 이름보다 좋다
- 서술적인 이름을 사용하면 개발자 머릿속에서도 설계가 뚜렷해지므로 코드를 개선하기 쉬워짐
    - 좋은 이름을 고른 후 코드를 더 좋게 재구성하는 사례도 있음
- 이름을 붙일 때 일관성이 있어야 함

## 함수 인수

- 함수에서 이상적인 인수 개수는 0개(무항)
    - 인수는 코드 이해에 방해가 되는 요소이므로 최선은 0개이고, 차선은 1개뿐인 경우
    - 3개 이상은 피하는 것이 좋고 4개 이상은 특별한 이유가 있어야 하고 사용하면 안 됨
- 출력 인수(함수의 반환 값이 아닌 입력 인수로 결과를 받는 경우)는 이해하기 어려우므로 웬만하면 쓰지 않는 것이 좋음
- 테스트 관점에서도 인수는 어렵다
- 많이 쓰는 단항 형식
    - 인수에 질문을 던지는 경우 → `boolean fileExists(“MyFile”);`
    - 인수를 뭔가로 변환해 결과를 변환하는 경우 → `InputStream fileOpen(“MyFile”);`
    - 이벤트 함수일 경우 (이 경우에는 이벤트라는 사실이 코드에 명확하게 드러나야 함)
    
    ⇒ 위의 3가지가 아니라면 단항 함수는 가급적 피하는 것이 좋음
    
- 플래그 인수
    - boolean 값을 넘기는 것 자체가 함수에서 여러가지 일을 처리하겠다는 의미로 쓰지 마라
- 이항 함수
    - 단항 함수보다 이해하기가 어렵다
    - 2개의 인수간의 자연적인 순서가 있어야함
        - Point 클래스의 경우에는 이항 함수가 적절
        - `Point p = new Point(x,y);`
    - 무조건 나쁜 것은 아니지만, 인수가 2개이니 만큼 이해가 어렵고 위험이 따르므로 가능하면 단항으로 바꿔야 함
- 삼항 함수
    - 이항 함수보다 이해하기가 훨씬 어려우므로, 위험도 2배 이상 늘어남
- 인수 객체
    - 인수가 많이 필요할 경우, 일부 인수를 독자적인 클래스 변수로 선언할 가능성을 살펴보자
    - x, y를 인자로 넘기는 것보다 `Point`를 넘기는 것이 더 낫다
- 인수 목록
    - 때로는 String.format같은 함수들처럼 인수 개수가 가변적인 함수도 필요하다
    - String.format에서 가변 인수를 하나로 취급하면 이항 함수라고 할 수 있다
        - `public String format(String format, Object… args)`
- 동사와 키워드
    - 함수의 의도나 인수의 순서와 의도를 제대로 표현하려면 좋은 함수 이름이 필수
    - 단항 함수는 함수와 인수가 동사/명사 쌍을 이뤄야 함 → `writeField(name);`
    - 함수 이름에 키워드(인수 이름)을 추가하면 인수 순서를 기억할 필요가 없어짐 → `assertExpectedEqualsActual(expected, actual);`

## **부수 효과를 일으키지 마라!**

- 부수 효과(side effects)는 거짓말이다
- 함수에서 한 가지를 하겠다고 약속하고는 남몰래 다른 짓을 하는 것

```tsx
public class UserValidator {
	private Cryptographer cryptographer;
	public boolean checkPassword(String userName, String password) { 
		User user = UserGateway.findByName(userName);
		if (user != User.NULL) {
			String codedPhrase = user.getPhraseEncodedByPassword(); 
			String phrase = cryptographer.decrypt(codedPhrase, password); 
			if ("Valid Password".equals(phrase)) {
				Session.initialize(); // 부수 효과
				return true; 
			}
		}
		return false; 
	}
}
```

- 출력인수
    - 일반적으로 출력 인수는 피해야 한다
    - 함수에서 상태를 변경해야 한다면 함수가 속한 객체 상태를 변경하는 방식을 택하라
    
    ```tsx
    // Bad
    public void appendFooter(StringBuffer report);
    
    // Good
    report.appendFooter();
    ```
    

## **명령과 조회를 분리하라**

- 함수는 뭔가 객체 상태를 변경하거나, 객체 정보를 반환하거나 둘 중 하나만 해야함
- 둘 다 수행해서는 안 됨

```tsx
// Bad
const set = (attribute: string, value: string): boolean => {...}
if (set("username", "bob")) ...

// Good
if (attributeExists("username")) {
	setAttribute("username" "bob");
	...
}
```

## **오류 코드보다 예외를 사용하라!**

- 명령 함수에서 오류 코드 반환 시 명령/조회 분리 규칙을 미묘하게 위반
- try/catch를 사용하면 오류 처리 코드가 원래 코드에서 분리되므로 코드가 깔끔해 짐
    
    ```tsx
    // Bad
    if (deletePage(page) == E_OK) {
    	if (registry.deleteReference(page.name) == E_OK) {
    		if (configKeys.deleteKey(page.name.makeKey()) == E_OK) {
    			logger.log("page deleted");
    		} else {
    			logger.log("configKey not deleted");
    		}
    	} else {
    		logger.log("deleteReference from registry failed"); 
    	} 
    } else {
    	logger.log("delete failed");
    	return E_ERROR;
    }
    
    // Good
    try {
    	deletePage(page);
    	registry.deleteReference(page.name);
    	configKeys.deleteKey(page.name.makeKey());
    } catch (e) {
    	logger.log(e.getMessage());
    }
    ```
    
- Try/Catch 블록 뽑아내기
    - try/catch 블록을 별도 함수로 뽑아내는 편이 좋다
        - try/catch 블록은 원래 추하다
        - 코드 구조에 혼란을 일으키며, 정상 동작과 오류 처리 동작을 뒤섞음
        
        ```tsx
        public void delete(Page page) {
        	try {
        		deletePageAndAllReferences(page);
          	} catch (Exception e) {
          		logError(e);
          	}
        }
        
        private void deletePageAndAllReferences(Page page) throws Exception { 
        	deletePage(page);
        	registry.deleteReference(page.name); 
        	configKeys.deleteKey(page.name.makeKey());
        }
        
        private void logError(Exception e) { 
        	logger.log(e.getMessage());
        }
        ```
        
- 오류 처리도 한가지 작업이다.
    - 오류를 처리하는 함수는 오류만 처리해야 마땅함 (함수는 한 가지 작업만 해야함)
- Error.java 의존성 자석
    - 오류 코드 반환 == 어디선가 오류 코드를 정의 함
        
        ```tsx
        // 오류 코드
        public enum Error { 
        	OK,
        	INVALID,
        	NO_SUCH,
        	LOCKED,
        	OUT_OF_RESOURCES, 	
        	WAITING_FOR_EVENT;
        }
        ```
        
        - enum 클래스는 의존성 자석 : 다른 클래스에서 위 클래스를 import 해서 사용해야 함
        - 새 오류 코드를 추가하거나 변경할 때 재컴파일/재배치를 피할 수 없음 → 기존 오류 코드를 재사용하기도 함
        - 오류 코드 대신 예외를 사용하면 새 예외는 Exception 클래스에서 파생되므로 재컴파일/재배치 없이도 새 예외 클래스를 추가할 수 있음 (OCP, Open Closed Principle)

## **반복하지 마라!**

- 중복은 모든 소프트웨어에서 모든 악의 근원이므로 늘 중복을 없애도록 노력해야 함
- AOP, COP 모두 어떤 면에서 중복 제거 전략임

## **구조적 프로그래밍**

- 에츠허르 데이크스트라(Edsger Dijkstra)의 구조적 프로그래밍의 원칙
    - 모든 함수와 함수 내 모든 블록에 입구와 출구가 하나 여야 함
    - 함수는 return문이 하나여야 되며, **루프 안에서 break나 continue를 사용해선 안된며 goto는 절대로, 절대로 사용하지 말자**
- 함수가 클 경우에만 상당 이익을 제공하므로, 함수를 작게 만든다면 오히려 여러 차례 사용하는 것이 함수의 의도를 표현하기 쉬워짐
    - 구조적 프로그래밍의 목표와 규율은 공감하지만 함수가 작다면 위 규칙은 별 이익을 제공하지 못함
    - 함수를 작게 만든다면 간혹 return, break, continue를 사용해도 괜찮음
    - 오히려 때로는 단일 입/출구 규칙보다 의도를 표현하기 쉬움

## **함수를 어떻게 짜죠?**

- 처음에는 길고 복잡하고, 들여쓰기 단계나 중복된 루프도 많고, 인수 목록도 길다
- 이 코드들을 빠짐없이 테스트하는 단위 테스트 케이스도 만들고, 코드를 다듬고, 함수를 만들고, 이름을 바꾸고, 중복을 제거한다
- 처음부터 탁 짜지지는 않는다

## 결론

- 함수는 길이가 짧고, 이름이 좋고, 체계가 잡혀야 좋음
- 함수의 목표는 시스템이라는 이야기를 풀어가는데 있음
- 함수가 분명하고 정확한 언어로 깔끔하게 같이 맞아 떨어져야 이야기를 풀어가기 쉬워진다는 사실을 기억하자

# 4. 주석

- 나쁜 코드에 주석을 달지 마라. 새로 짜라 - 브라이언 W.커니핸, P.J.플라우거
- 코드만이 자기가 하는 일을 진실되게 말함
- 주석이 오래될수록 코드에서 멀어져서 거짓말을 하게 될 가능성이 커짐
    - 코드는 유지보수를 해도, 주석을 계속 유지보수하기란 현실적으로 불가능하기 때문
- 부정확한 주석은 아예 없는 주석보다 훨씬 더 나쁘다

## 주석은 나쁜 코드를 보완하지 못한다

- 코드에 주석을 추가하는 일반적인 이유는 코드 품질이 나빠서임
- 깔끔하고 주석이 거의 없는 코드가, 복잡하고 어수선하며 주석이 많이 달린 코드보다 훨씬 좋음
- 주석으로 설명하려 애쓰는 대신에 그 난장판을 깨끗이 치우는 데 시간을 보내라!

## **코드를 의도로 표현하라!**

```tsx
// Bad
// 직원에게 복지 혜택을 받을 자격이 있는지 검사한다.
if ((emplotee.flags & HOURLY_FLAG) && (employee.age > 65)

// Good - 주석도 필요없이 함수 이름만으로 충분히 깔끔하게 표현 가능
if (employee.isEligibleForFullBenefits())
```

## **좋은 주석**

- 법적인 주석
    - 각 소스 파일 첫머리에 들어가는 저작권 정보와 소유권 정보 등
    
    ```tsx
    **//** Copyright (C) 2003, 2004, 2005 by Object Montor, Inc. All right reserved.
    // GNU General Public License
    ```
    
- 정보를 제공하는 주석
    - 주석으로 제공된 정보가 유용할지라도, 가능하다면 함수 이름에 정보를 담는 편이 좋음
    
    ```tsx
    // Not Bad
    // 테스트 중인 Responder 인스턴스를 반환
    protected abstract Responder responderInstance();
    
    // Better
    protected abstract Responder responderBeingTested();
    
    // Not Bad (2) - 이왕이면 시각과 날짜를 변환하는 클래스를 만들어 코드를 옮겨주면 더 좋음
    // kk:mm:ss EEE, MMM dd, yyyy 형식이다.
    Pattern timeMatcher = Pattern.compile("\\d*:\\d*\\d* \\w*, \\w*, \\d*, \\d*");
    ```
    
- 의도를 설명하는 주석
    
    ```tsx
    // Not Bad (1)
    const compareTo = (a: string, b: string) => {
    	...
    	 return 1; // 정렬 순위가 더 높다.
    }
    
    // Not Bad (2)
    // 스레드를 대량 생성하는 방법으로 어떻게든 경쟁 조건을 만들려 시도한다. 
    for (int i = 0; i > 2500; i++) {
        WidgetBuilderThread widgetBuilderThread = 
            new WidgetBuilderThread(widgetBuilder, text, parent, failFlag);
        Thread thread = new Thread(widgetBuilderThread);
        thread.start();
    }
    ```
    
- 의미를 명료하게 밝히는 주석
    - 일반적으로 인수나 반환값 자체를 명확하게 만들면 더 좋겠지만, 라이브러리나 변경하지 못하는 코드에 속한다면 의미를 명료하게 밝히는 주석이 유용함
    - 더 나은 방법이 없는지 고민하고 정확히 달도록 주의 바람
- 결과를 경고하는 주석
    
    ```tsx
    // 여유 시간이 충분하지 않다면 실행하지 마십시오.
    public void _testWithReallyBigFile() {
    	...
    }
    ```
    
- TODO 주석
    - 프로그래머가 필요하다 여기지만 당장 구현하기 어려운 업무를 기술
        - IDE에서 TODO 주석을 찾아서 보여주는 기능 제공함
- 중요성을 강조하는 주석
    
    ```tsx
    String listItemContent = match.group(3).trim();
    // 여기서 trim은 정말 중요하다. trim 함수는 문자열에서 시작 공백을 제거한다.
    // 문자열에 시작 공백이 있으면 다른 문자열로 인식되기 때문이다. 
    new ListItemWidget(this, listItemContent, this.level + 1);
    return buildList(text.substring(match.end()));
    ```
    
- 공개 API 에서 Javadocs
    - 공개 API를 구현한다면 반드시 훌륭한 Javadocs 작성을 추천
        - JavaScript → **jsdoc**
    - 여느 주석과 마찬가지로 그릇된 정보를 전달할 가능성 존재함

## **나쁜 주석**

- 대다수의 주석이 이 범주에 속함
    - 허술한 코드를 지탱하거나, 엉성한 코드를 변명하거나, 미숙한 결정을 합리화하는 등 프로그래머가 주절거리는 독백에서 크게 벗어나지 못함
- 주절거리는 주석
    - 특별한 이유 없이 달리는 주석
- 같은 이야기를 중복하는 주석 & 오해할 여지가 있는 주석
    
    ```tsx
    // this.closed가 true일 때 반환되는 유틸리티 메서드다.
    // 타임아웃에 도달하면 예외를 던진다. 
    public synchronized void waitForClose(final long timeoutMillis) throws Exception {
        if (!closed) {
            wait(timeoutMillis);
            if (!closed) {
                throw new Exception("MockResponseSender could not be closed");
            }
        }
    }
    ```
    
    - this.closed가 true로 변하는 순간에 메서드는 반환되지 않음. this.closed가 true여야 메서드는 반환된다. 아니면 무조건 타임 아웃을 기다렸다 this.closed가 그래도 true가 아니면 예외를 던진다. 주석에 담긴 '살짝 잘못된 정보'로 인해 어느 프로그래머가 경솔하게 함수를 호출해 자기 코드가 아주 느려진 이유를 못 찾게 됨
- 의무적으로 다는 주석
    - 모든 함수에 주석을 달 필요 없음
    
    ```tsx
    /**
     * @param {number} a 첫번째 숫자
     * @param {number} b 두번째 숫자
     * @returns {number} 반환값
     * @description Add two numbers.
     */
    function add(a, b) {
    	return a + b;
    }
    ```
    
- 이력을 기록하는 주석
    - 코드 관리 시스템이 있으니 전혀 필요 없음
    
    ```tsx
    변경 이력 (11-Oct-2001부터)
    * ------------------------------------------------
    * 11-Oct-2001 : 클래스를 다시 정리하고 새로운 패키징
    * 05-Nov-2001: getDescription() 메소드 추가
    * 이하 생략
    ```
    
- 있으나 마나한 주석
    - 너무 당연한 사실을 언급하며 새로운 정보 제공하지 못하는 주석
- 무서운 잡음
    - 때로는 Javadocs도 잡음. 단지 문서화를 제공해야 한다는 잘못된 욕심일 수 있음
- 함수나 변수로 표현할 수 있다면 주석 달지 마라
    
    ```tsx
    // Bad
    // 전역 목록 <smodule>에 속하는 모듈이 우리가 속한 하위 시스템에 의존하는가?
    if (module.getDependSubsystems().contains(subSysMod.getSubSystem()))
    
    // Good
    ArrayList moduleDependencies = smodule.getDependSubSystems();
    String ourSubSystem = subSysMod.getSubSystem();
    if (moduleDependees.contains(ourSubSystem))
    ```
    
- 위치를 표시하는 주석
    - 반드시 필요할 때 아주 드몰게 사용하는 편이 좋음 (너무 자주 사용하지 않을 때만 배너는 눈에 띄며 주위를 환기 시킴)
    
    ```tsx
    // Actions /////////////////////////////////////////////
    ```
    
- 닫는 괄호에 다는 주석
    - 중첩이 심하고 장황한 함수라면 의미가 있을지도 모르지만 작고 캡슐화면 함수에는 잡음일 뿐
    - 닫는 괄호에 주석을 달아야겠다는 생각이 든다면 대신에 함수를 줄이려 시도하자
    
    ```tsx
    for (..) {
    ...
    } // for
    ```
    
- 공로를 돌리거나 저자를 표시하는 주석
    - 소스 코드 관리 시스템 활용하기
- 주석으로 처리한 코드
    - 주석으로 처리된 코드는 사람들이 지우기 주저함 (이유가 있어서 남겨 놓았다고 생각할 수 있기 때문)
    - 소스 코드 관리 시스템 활용하기
- HTML 주석
    - 혐오 그 자체 (IDE 나 편집기에서조차 읽기 어려움)
- 전역 정보
    - 주석을 달아야 한다면 근처에 있는 코드만 기술하라. 코드가 변해도 주석은 변경되지 않을 수 있음
    - 시스템의 전반적인 정보를 기술하지 마라
    - 심하게 중복된 주석도 확인하자
    
    ```tsx
    /**
     * 적합성 테스트가 동작하는 포트: 기본값은 <b>8082</b>.
     *
     * @param fitnessePort
     */
    public void setFitnessePort(int fitnessePort) {
        this.fitnewssePort = fitnessePort;
    }
    ```
    
- 너무 많은 정보
    - 흥미로운 역사나 관련 없는 정보를 장황하게 늘어놓지 마라
- 모호한 관계
    - 주석과 코드 사이 관계는 명확해야 함
    - 주석이 다시 설명을 요구하면 안 됨
- 함수 헤더
    - 짧은 함수는 긴 설명이 필요 없음
    - 이름 잘 붙인 함수가 주석으로 헤더를 추가한 함수보다 훨씬 좋음
- 비공개 코드에서 Javadocs
    - 공개 API는 Javadocs가 유용하지만 공개하지 않을 코드라면 Javadocs는 쓸모가 없음