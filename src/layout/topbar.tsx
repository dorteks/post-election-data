import { Box, Button, HStack, Text, Image } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

export const TEXT = (props: Props) => {
  return (
    <div>
      <Text _hover={{ borderBottom: "1px solid purple  " }}>
        {props.children}
      </Text>
    </div>
  );
};

const Topbar = () => {
  return (
    <Box
      display="flex"
      color="#FFFFFF"
      fontSize="14px"
      lineHeight="20px"
      bgColor="#1F2335"
      fontFamily="Jost"
      fontStyle="normal"
      flexDirection="row"
      alignItems="center"
      padding="42px 122px 42px 90px"
      justifyContent="space-between"
    >
      <Image src="/images/hernalytics-full-logo.svg" alt="hernalytics-logo" />
      <TEXT>ABOUT US</TEXT>
      <HStack>
        <TEXT>OUR COMMUNITIES</TEXT>
        <Image src="/images/arrow-down.svg" />
      </HStack>
      <HStack>
        <TEXT>ELECTION DATA</TEXT>

        <Image src="/images/arrow-down.svg" />
      </HStack>
      <TEXT>E-BUDDY</TEXT>
      <TEXT>VEO PLATFORM</TEXT>
      <Text _hover={{ borderBottom: "1px solid purple  " }} fontSize="16px">
        LOGIN
      </Text>
      <Button
        width="130px"
        height="50px"
        color="#000000"
        fontSize="16px"
        bgColor="#E5B805"
        _hover={{
          border: "1px solid purple",
        }}
      >
        <TEXT>SIGN UP</TEXT>
      </Button>
    </Box>
  );
};

export default Topbar;
