import { Box, Text } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  fontsize?: any;
  lineheight?: any;
  height?: any;
};

export const TEXT = (props: Props) => {
  return (
    <Box>
      <Text
        height={props.height}
        fontSize={props.fontsize}
        lineHeight={props.lineheight}
        _hover={{ borderBottom: "1px solid blue" }}
      >
        {props.children}
      </Text>
    </Box>
  );
};
