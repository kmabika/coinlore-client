import { memo } from "react";
import MarketsTable from "components/MarketTable";
interface Props {
  markets: MarketType[];
}

const MarketSection = ({ markets }: Props) => {
  return <MarketsTable markets={markets} />;
};

export default memo(MarketSection);
