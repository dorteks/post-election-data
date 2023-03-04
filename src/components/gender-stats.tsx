import { Box, Card, HStack, Stack, Image, Text } from "@chakra-ui/react";

const GenderStats = () => {
  return (
    <Box>
      <Card
        display="flex"
        color="#ffffff"
        fontSize="14px"
        paddingTop="40px"
        paddingLeft="30px"
        paddingRight="70px"
        background="#1B1F30"
        borderRadius=" 13px"
        flexDirection="column"
        border="1px solid #272935"
      >
        <Stack textAlign="start" marginBottom="40px">
          <Text
            height="20px"
            borderBottom="1px solid inherit"
            _hover={{
              borderBottom: "1px solid #64CCFF",
            }}
          >
            TOTAL ELECTED MEMBERS
          </Text>
          <Text
            width="70px"
            height="30px"
            fontSize="20px"
            fontWeight="bold"
            borderBottom="1px solid inherit"
            _hover={{
              borderBottom: "1px solid #64CCFF",
            }}
          >
            10,000
          </Text>
        </Stack>
        <Stack marginBottom="40px">
          <HStack>
            <Text
              height="20px"
              borderBottom="1px solid inherit"
              _hover={{
                borderBottom: "1px solid #64CCFF",
              }}
            >
              MALE
            </Text>
            <Image src="/images/male.svg" alt="male" />
          </HStack>
          <Text
            width="60px"
            height="30px"
            fontSize="20px"
            fontWeight="bold"
            borderBottom="1px solid inherit"
            _hover={{
              borderBottom: "1px solid #64CCFF",
            }}
          >
            9,000
          </Text>
        </Stack>
        <Stack>
          <HStack>
            <Text
              height="20px"
              borderBottom="1px solid inherit"
              _hover={{
                borderBottom: "1px solid #64CCFF",
              }}
            >
              FEMALE
            </Text>
            <Image src="/images/female.svg" alt="female" />
          </HStack>{" "}
          <Text
            width="60px"
            height="30px"
            fontSize="20px"
            fontWeight="bold"
            borderBottom="1px solid inherit"
            _hover={{
              borderBottom: "1px solid #64CCFF",
            }}
          >
            1,000
          </Text>
        </Stack>
      </Card>
    </Box>
  );
};

export default GenderStats;
