import { useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

import filter from "lodash/filter";
import { hiddenItemsVar } from "graphql/cache";
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

//utils
import {
  numberWithCommas,
  marketTableColumns,
} from "utils";

interface Props {
  markets:  MarketType[];
}

const MarketTable = ({ markets }: Props) =>  {
  // Control current Page
  const [page, setPage] = useState(1);
  const tableData = markets?.map((market: MarketType) => ({
    name: (
      <Flex align="center">
        <Text>{market.name}</Text>
      </Flex>
    ),
    base: (
      <Text>
        {market.base}
      </Text>
    ),
    qoute: market.quote,
    price: numberWithCommas(market.price),
    price_usd: numberWithCommas(market.price_usd),
    volume: market.volume.toString(),
    volume_usd: market.volume.toString(),
    time: market.time.toString(),
  }));

  return (
    <Box p="12">
      <Heading size="sm" as="h3">
        Cryptocurrency Prices by Market Cap
        <Button>Go Back</Button>
      </Heading>
      <Box mt="6">
        <Table
          colorScheme="blue"
          // Fallback component when list is empty
          emptyData={{
            icon: FaCoins,
            text: "No coins available.",
          }}
          totalRegisters={markets?.length}
          page={page}
          // Listen change page event and control the current page using state
          onPageChange={(page) => setPage(page)}
          columns={marketTableColumns}
          data={tableData}
        />
      </Box>
    </Box>
  );
};

export default MarketTable;
