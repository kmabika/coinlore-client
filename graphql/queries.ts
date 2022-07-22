import { gql } from "@apollo/client";

export const GET_ALL_COINS = gql`
  query Coins {
    hiddenItems @client
    coins {
      id
      symbol
      name
      rank
      price_usd
      percent_change_24h
      percent_change_7d
      percent_change_1h
      price_btc
      market_cap_usd
      volume24
      volume24a
      csupply
      tsupply
      msupply
    }
  }
`;

export const GET_MARKET_DATA = gql`
  query Coins($coinMarketsId: ID!) {
    coinMarkets(id: $coinMarketsId) {
      name
      base
      qoute
      price
      price_usd
      volume
      volume_usd
      time
    }
  }
`;
