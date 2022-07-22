import { useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

import filter from "lodash/filter";
// Use Chakra Ui for create a custom component for display field data in table

import {
  Flex,
  Text,
  Box,
  Icon,
  Button,
  Link,
  Heading,
  Switch,
} from "@chakra-ui/react";
import { Table } from "react-chakra-pagination";

// Recommended for icons
import { FaCoins } from "react-icons/fa";
import { BiHide } from "react-icons/bi";

//utils
import {
  retriveHiddenCoins,
  saveHiddenCoins,
  numberWithCommas,
  tableColumns,
} from "utils";

interface Props {
  coins: CoinsType[];
}

const CurrenciesTable = ({ coins }: Props) =>  {
  // Control current Page
  const [page, setPage] = useState(1);
  const hiddenCoins = retriveHiddenCoins();
  const [hiddenCryptos, setHideCrypt] = useState<string[]>(hiddenCoins || []);
  const router = useRouter();

  const newArr = filter(coins, isHidden);

  function isHidden(coin: CoinsType) {
    return !hiddenCoins?.includes(coin.id);
  }

  const tableData = newArr?.map((coin: CoinsType) => ({
    rank: (
      <Flex align="center">
        <Text>{coin.rank}</Text>
      </Flex>
    ),
    name: (
      <Flex>
        <NextLink href={`/market/${coin.id}`} passHref>
          <Link>{coin.name}</Link>
        </NextLink>
      </Flex>
    ),
    price: `$${numberWithCommas(parseInt(coin.price_usd)).toString()}`,
    percent_change_1h: (
      <Flex>
        {parseInt(coin.percent_change_1h) > 0 ? (
          <Text color="green">{coin.percent_change_1h}%</Text>
        ) : (
          <Text color="tomato">{coin.percent_change_1h}%</Text>
        )}
      </Flex>
    ),
    percent_change_24h: (
      <Flex>
        {parseInt(coin.percent_change_24h) > 0 ? (
          <Text color="green">{coin.percent_change_24h}%</Text>
        ) : (
          <Text color="tomato">{coin.percent_change_24h}%</Text>
        )}
      </Flex>
    ),
    percent_change_7d: (
      <Flex>
        {parseInt(coin.percent_change_7d) > 0 ? (
          <Text color="green">{coin.percent_change_7d}%</Text>
        ) : (
          <Text color="tomato">{coin.percent_change_7d}%</Text>
        )}
      </Flex>
    ),
    market_cap: `$${numberWithCommas(parseInt(coin.market_cap_usd))}`,
    volume24: `$${numberWithCommas(coin.volume24)}`,
    csupply: (
      <Text>
        <Text>{coin.symbol}</Text>
        {numberWithCommas(parseInt(coin.csupply))}
      </Text>
    ),
    tsupply: (
      <Flex align="center">
        {coin.tsupply ? (
          <Text>
            <Text fontSize={"xs"}>{coin.symbol}</Text>
            {`${numberWithCommas(parseInt(coin.tsupply))}`}
          </Text>
        ) : (
          <Text>-</Text>
        )}
      </Flex>
    ),
    msupply: (
      <Flex align="center">
        {coin.msupply ? (
          <Text>
            <Text fontSize={"xs"}>{coin.symbol}</Text>
            {`${numberWithCommas(parseInt(coin.msupply))}`}
          </Text>
        ) : (
          <Text>-</Text>
        )}
      </Flex>
    ),
    action: (
      <Button
        colorScheme="gray"
        onClick={() => {
          setHideCrypt((arr) => [...arr, coin.id]);
          saveHiddenCoins(hiddenCryptos);
        }}
        size="sm"
      >
        <Icon as={BiHide} fontSize="20" />
      </Button>
    ),
  }));

  return (
    <Box p="12">
      <Heading size="sm" as="h3">
        Cryptocurrency Prices by Market Cap
        <Box mt="10">
          {hiddenCoins?.length > 0 ? (
            <>
              <Text>
                Show Hidden{" "}
                <Switch
                  size="sm"
                  onChange={() => {
                    saveHiddenCoins([]);
                    router.reload();
                  }}
                />
              </Text>
            </>
          ) : null}
        </Box>
      </Heading>

      <Box mt="6">
        <Table
          colorScheme="blue"
          // Fallback component when list is empty
          emptyData={{
            icon: FaCoins,
            text: "No coins available.",
          }}
          totalRegisters={newArr.length}
          page={page}
          // Listen change page event and control the current page using state
          onPageChange={(page) => setPage(page)}
          columns={tableColumns}
          data={tableData}
        />
      </Box>
    </Box>
  );
}

export default CurrenciesTable;