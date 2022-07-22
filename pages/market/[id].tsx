import {GetStaticPaths, GetStaticProps} from 'next';
import {useRouter} from 'next/router';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { GET_MARKET_DATA, GET_ALL_COINS } from 'graphql/queries';
import client from 'graphql/apollo-client';

const MarketSection = dynamic(() => import("sections/MartketSection"), {
    ssr: false,
});


interface Props {
    markets: MarketType[]
    isValid: boolean;
}

const MarketPage =({ markets, isValid} : Props) => {
    const router = useRouter();
    useEffect(() => {
        if (!isValid) {
            router.push('/404');
        }
    },[]);
    return (
        <MarketSection markets={markets}/>
    )
};

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await client.query({
        query: GET_ALL_COINS,
      });
    const {coins} = data;
    //check if id exists from list of 
    const paths = Object.keys(coins)?.map((coin ) => ({
        params: {id: coins[coin].id}
    }));
    return {paths, fallback: false}   
};


export const getStaticProps: GetStaticProps = async (context) => {
    const { data } = await client.query({
        query: GET_MARKET_DATA,
        variables: {
            coinMarketsId: context?.params?.id
        }
    });

    const {coinMarkets} = data;
    
    if (coinMarkets) {
        return{
            props: {
                markets: coinMarkets,
                isValid: true,
            }
        }
    } else {
        return {
            props: {
                coin: {},
                isValid: false,
            }
        }
    }
};

export default MarketPage;