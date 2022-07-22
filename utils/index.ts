import { m } from "framer-motion";

//retrieve hidden coins from localstorage
export const retriveHiddenCoins = () => {
  let hiddenList;
  if (typeof window !== "undefined") {
    hiddenList = localStorage.getItem("hidden");
    hiddenList = JSON.parse(hiddenList!);
  }
  return hiddenList;
};

// save hidden coins to localstorage
export const saveHiddenCoins = (list: string[] | null) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("hidden", JSON.stringify(list));
  }
};

export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const tableColumns = [
  {
    Header: "rank",
    accessor: "rank" as const,
  },
  {
    Header: "name",
    accessor: "name" as const,
  },
  {
    Header: "price",
    accessor: "price" as const,
  },
  {
    Header: "1h %",
    accessor: "percent_change_1h",
  },
  {
    Header: "24h %",
    accessor: "percent_change_24h" as const,
  },
  {
    Header: "7d %",
    accessor: "percent_change_7d" as const,
  },
  {
    Header: "Market Cap",
    accessor: "market_cap",
  },
  {
    Header: "Volume",
    accessor: "volume24",
  },
  {
    Header: "Coin Supply",
    accessor: "csupply",
  },
  {
    Header: "Total Supply",
    accessor: "tsupply",
  },
  {
    Header: "M Supply",
    accessor: "msupply",
  },
  {
    Header: "hide",
    accessor: "action" as const,
  },
];

export const marketTableColumns = [
  {
    Header: "Name",
    accessor: "name" as const,
  },
  {
    Header: "Base",
    accessor: "base" as const,
  },
  {
    Header: "Qoute",
    accessor: "qoute" as const,
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Price Usd",
    accessor: "price_usd",
  },
  {
    Header: "Volume",
    accessor: "volume",
  },
  {
    Header: "Volume USD",
    acessor: "volume_usd"
  },
  {
    Header: "Time",
    accessor: "time"
  }
];
