import { GetStaticProps } from "next";
import { GET_ALL_COINS } from "graphql/queries";
import client from "graphql/apollo-client";
import HomeSection from 'sections/HomeSection'
interface Props {
  coins: CoinsType[];
}
const Home = ({ coins }: Props) => {
  return (
    <HomeSection />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GET_ALL_COINS,
  });
  const { coins } = data;
  return {
    props: {
      coins,
    },
  };
};

export default Home;
