import { Box, HStack, VStack, Image, Text } from "@chakra-ui/react";

const Legend = () => {
  return (
    <VStack
      display="flex"
      alignItems="end"
      flexDirection="column"
      padding="60px 60px 70px 0px"
      justifyContent="space-between"
    >
      <VStack>
        <Box
          boxSize="40px"
          display="flex"
          bgColor="#ffffff"
          alignItems="center"
          justifyContent="center"
          _hover={{
            border: "2px solid  #64CCFF",
          }}
        >
          <Image
            alt="plus"
            boxSize="15px"
            src="/images/plus.svg"
            _hover={{
              borderBottom: "2px solid  #64CCFF",
            }}
          />
        </Box>

        <Box
          boxSize="40px"
          display="flex"
          bgColor="#ffffff"
          alignItems="center"
          justifyContent="center"
          _hover={{
            border: "2px solid  #64CCFF",
          }}
        >
          <Image
            alt="plus"
            boxSize="15px"
            src="/images/minus.svg"
            _hover={{
              borderBottom: "2x solid  #64CCFF",
            }}
          />
        </Box>
      </VStack>
      <VStack paddingRight="60px" gap="30px">
        <HStack gap="12px">
          <Image
            alt="apc"
            width="32px"
            height="24px"
            src="/images/blue.svg"
            border="1px solid blue"
            _hover={{
              width: "32px",
              height: "24px",
              border: "1px solid #64CCFF ",
            }}
          />
          <Text
            height="20px"
            borderBottom="1px solid inherit"
            _hover={{
              borderBottom: "1px solid #64CCFF",
            }}
          >
            APC
          </Text>
        </HStack>
        <HStack gap="12px">
          <Image
            alt="lp"
            width="32px"
            height="24px"
            src="/images/green.svg"
            border="1px solid green"
            _hover={{
              width: "32px",
              height: "24px",
              border: "1px solid #64CCFF ",
            }}
          />
          <Text
            height="20px"
            borderBottom="1px solid inherit"
            _hover={{
              borderBottom: "1px solid #64CCFF",
            }}
          >
            LP
          </Text>
        </HStack>
        <HStack gap="12px">
          <Image
            alt="pdp"
            width="32px"
            height="24px"
            src="/images/red.svg"
            border="1px solid red"
            _hover={{
              width: "32px",
              height: "24px",
              border: "1px solid #64CCFF ",
            }}
          />
          <Text
            height="20px"
            borderBottom="1px solid inherit"
            _hover={{
              borderBottom: "1px solid #64CCFF",
            }}
          >
            PDP
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Legend;
