interface CoinsType {
    id: string;
    symbol: string;
    name: string;
    nameid: string;
    rank: number;
    price_usd: string;
    percent_change_24h: string;
    percent_change_1h: string;
    percent_change_7d: string;
    price_btc: string;
    market_cap_usd: string;
    volume24: number;
    volume24a: number;
    csupply: string;
    tsupply: null | string;
    msupply: null | string;
    isHidden: boolean
  }
  
interface MarketType {
    name:       string;
    base:       string;
    quote:      string;
    price:      number;
    price_usd:  number;
    volume:     number;
    volume_usd: number;
    time:       number;
}

type Merge<P, T> = Omit<P, keyof T> & T;