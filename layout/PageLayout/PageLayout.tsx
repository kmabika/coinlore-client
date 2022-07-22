import { Box } from "@chakra-ui/react";
import dynamic from 'next/dynamic'
import { ReactNode } from "react";

// import Header from "./Header";
import Footer from "components/Footer";
const Header: any = dynamic(
  () => {
      return import("components/Header");
   },{ loading: () => null, ssr: false }
);

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth={"100vw"} transition="0.75s ease-out">
      <Box margin="8">
        <Header />
        <Box as="main" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
