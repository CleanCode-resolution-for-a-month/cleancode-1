interface StockExchange {
	currentPrice: () => { [key: string]: number }; 
}

class FixedStockExchangeStub implements StockExchange {
	#prices:{ [key: string]: number } = {};
	
	currentPrice() {
		return this.#prices;
	}
	
	fix(name: string, price: number) {
		this.#prices[name] = price;
	}
}

class Portfolio {
	exchange: StockExchange;
	#stocks:{ [key: string]: number } = {};

	constructor(exchange: StockExchange) {
		this.exchange = exchange;
	}

	add(count: number, name: string) {
		let price = this.exchange.currentPrice()[name];
		if(!price) price = 0;
		this.#stocks[name] = price * count;
	}

	value() {
		return Object.values(this.#stocks).reduce((p,c) => p+c, 0);
	}
}

class PortfolioTest {
	#exchange: FixedStockExchangeStub;
	#portfolio: Portfolio;

	// SETUP
	constructor() {
		this.#exchange = new FixedStockExchangeStub();
		this.#exchange.fix('MSFT', 100);
		this.#portfolio = new Portfolio(this.#exchange);
	}

	// TEST
	GivenFiveMSFTTotalShouldBe500() {
		this.#portfolio.add(5, 'MSFT');
		// Assert.assertEquals(500, this.#portfolio.value());
		return 0 === this.#portfolio.value()
	}
}