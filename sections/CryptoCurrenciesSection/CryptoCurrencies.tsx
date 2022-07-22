import { memo } from "react";
import CurrenciesTable from "components/CurrenciesTable";
interface Props {
  coins: CoinsType[];
}

const HomeSection = ({ coins }: Props) => {
  return <CurrenciesTable coins={coins} />;
};

export default memo(HomeSection);
