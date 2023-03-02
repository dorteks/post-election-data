import { Box, Button, HStack, Text, Image } from "@chakra-ui/react";

const Topbar = () => {
  return (
    <Box
      display="flex"
      color="#FFFFFF"
      fontSize="14px"
      lineHeight="20px"
      bgColor=" #1E1E1E"
      fontStyle="normal"
      flexDirection="row"
      alignItems="center"
      //   fontFamily="Jost"
      padding="42px 122px 42px 48px"
      justifyContent="space-between"
    >
      <Image src="/images/hernalytics-full-logo.svg" alt="hernalytics-logo" />
      <Text>ABOUT US</Text>
      <HStack>
        <Text>OUR COMMUNITIES</Text>
        <Image src="/images/arrow-down.svg" />
      </HStack>
      <HStack>
        <Text>ELECTION DATA</Text>
        <Image src="/images/arrow-down.svg" />
      </HStack>
      <Text>E-BUDDY</Text>
      <Text>VEO PLATFORM</Text>
      <Text fontSize="16px">LOGIN</Text>
      <Button
        width="130px"
        height="50px"
        color="#000000"
        fontSize="16px"
        bgColor="#E5B805"
      >
        SIGN UP
      </Button>{" "}
    </Box>
  );
};

export default Topbar;
