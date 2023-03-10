import { Box, Text } from "@chakra-ui/react";

type Props = {
  color?: any;
  height?: any;
  fontsize?: any;
  lineheight?: any;
  children: React.ReactNode;
};

export const TEXT = (props: Props) => {
  return (
    <Box>
      <Text
        color={props.color}
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
