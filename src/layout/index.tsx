import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "./footer";
import Topbar from "./topbar";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <Box>
      <Topbar />
      <section>{props.children}</section>
      <Footer />
    </Box>
  );
};

export default Layout;
