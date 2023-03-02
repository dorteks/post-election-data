import React from "react";
import theme from "../theme/ChakraTheme";
import { ChakraProvider } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

const AppProvider = (props: Props) => {
  return <ChakraProvider theme={theme}>{props.children}</ChakraProvider>;
};

export default AppProvider;
