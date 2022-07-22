import {
  Box,
  Flex,
  Heading,
  Button,
  IconButton,
  useDisclosure,
  VStack,
  CloseButton,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const mobileNav = useDisclosure();
  const bg = useColorModeValue("white", "rgb(14, 16, 21)");
  return (
    <Flex as="header" width="full" align="center">
      <Heading as="h1" size="md" className="grad-txt">
        <Link href="/">CoinLore Market</Link>
      </Heading>

      <Box marginLeft="auto">
        <Box display={{ base: "inline-flex", md: "none" }}>
          <IconButton
            display={{ base: "flex", md: "none" }}
            aria-label="Open menu"
            fontSize="20px"
            variant="ghost"
            icon={<AiOutlineMenu />}
            onClick={mobileNav.onOpen}
          />
          <VStack
            pos="absolute"
            top={0}
            left={0}
            right={0}
            display={mobileNav.isOpen ? "flex" : "none"}
            flexDirection="column"
            p={2}
            pb={4}
            m={2}
            bg={bg}
            spacing={3}
            rounded="sm"
            shadow="sm"
          >
            <CloseButton
              aria-label="Close menu"
              justifySelf="self-start"
              onClick={mobileNav.onClose}
            />
            <Link href="/exchanges" passHref>
              Crypto Currencies
            </Link>
          </VStack>
        </Box>
        <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
          <Link href="/crypto-currencies" passHref>
            Crypto Currencies
          </Link>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Header;
