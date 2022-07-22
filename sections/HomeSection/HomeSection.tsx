import { useState, useEffect, memo } from 'react';
import { Flex, Stack, Heading, Text, Button } from "@chakra-ui/react";
import Link from 'next/link';
import Image from "next/image";
 
import MotionBox from "components/motion/Box";

const HomeSection = () => {
  const [curImg, setCurImg] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurImg(prev => {
        let newImg = prev+1;
        
        if (newImg > 4) {
          newImg = 1;
        }

        return newImg; 
      })
    },2500)
    return () => clearTimeout(timeout);
  },[curImg])

  return (
    <>
        <Flex
        textAlign={'start'}
        align={'end'}
        py={{ base: 16, md: "55px" }}
        direction={{base:"column",lg:"row"}}
        minH="74vh">
        <Stack spacing={6} >
          <Heading
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            >
            Cryptocurrency Prices{' '}
            <Text as={'span'} variant="primary">
              by Market Cap
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
          The global crypto market cap is $1.03T, a 3.37% decrease over the last day.
          </Text>
          <Flex>
              <Link href="/crypto-currencies" passHref>
                <Button
                  variant="primary"  px={6} mr={6}>
                  View Crypto-Currencies
                </Button>
              </Link>
          </Flex>
        </Stack>
        <Flex w={'full'}>
          <MotionBox
              animate={{ y: 20, scale: 0.97 }}
              transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
              maxWidth={600}
              
              marginX="auto"
            >
              <img
                src={`/images/coins-banner.png`}
                width={877}
                height={280}
                alt="coins"
              />
            </MotionBox>
        </Flex>
      </Flex>
    </>
  );
};

export default memo(HomeSection);
