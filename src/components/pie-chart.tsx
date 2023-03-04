import { Card, Stack, HStack, Image, Text } from "@chakra-ui/react";

const PieChart = () => {
  return (
    <div>
      <Card
        width="380px"
        height="340px"
        display="flex"
        color="#ffffff"
        fontSize="14px"
        background="#1B1F30"
        borderRadius=" 13px"
        flexDirection="column"
        border="1px solid #272935"
      >
        <Stack
          display="flex"
          alignItems="end"
          flexDirection="row"
          justifyContent="end"
          padding="20px 20px  0px 0px "
        >
          <Image
            boxSize="25px"
            marginLeft="60px"
            marginTop="-5px"
            src="/images/arrow-diagonal.svg"
            alt="arrow"
          />

          <Stack width="100px" lineHeight="11px">
            <Text
              fontSize="10px"
              textAlign="center"
              _hover={{
                borderBottom: "1px solid blue",
              }}
            >
              REJECTED VOTES
            </Text>
            <Text
              textAlign="center"
              fontSize="16px"
              fontWeight="bold"
              _hover={{
                borderBottom: "1px solid blue",
              }}
            >
              8,400,000
            </Text>
          </Stack>
        </Stack>

        <Stack>
          <HStack boxSize="220px" padding="30px" top="-50px">
            <Image
              top="30px"
              left="60px"
              width="220px"
              height="220px"
              position="absolute"
              borderRadius="110px"
              border="1px solid #272935"
              src="/images/red-pie-chart.svg"
              _hover={{
                border: "2px solid blue",
              }}
            />
            <Image
              top="31px"
              left="47px"
              width="220px"
              height="220px"
              position="absolute"
              borderRadius="110px"
              border="1px solid #272935"
              _hover={{
                border: "2px solid blue",
              }}
              src="/images/green-pie-chart.svg"
            />
          </HStack>

          <Stack
            left="97px"
            top="-218px"
            width="145px"
            display="flex"
            height="145px"
            position="relative"
            alignItems="center"
            borderRadius="75px"
            flexDirection="column"
            justifyContent="center"
            border="2px solid #272935"
            _hover={{
              border: "1px solid blue",
            }}
          >
            <Text
              fontSize="14px"
              _hover={{
                borderBottom: "1px solid blue",
              }}
            >
              TOTAL VOTES
            </Text>
            <Text
              fontSize="20px"
              fontWeight="bold"
              _hover={{
                borderBottom: "1px solid blue",
              }}
            >
              168,912,222
            </Text>
          </Stack>
        </Stack>

        <Stack
          top="-40px"
          left="30px"
          align="end"
          paddingTop="280px"
          position="absolute"
        >
          <Image boxSize="25px" src="/images/arrow.svg" alt="arrow" />
          <Stack
            top="20px"
            width="100px"
            textAlign="left"
            lineHeight="11px"
            marginBottom="56px"
          >
            <Text
              fontSize="10px"
              textAlign="center"
              _hover={{
                borderBottom: "1px solid blue",
              }}
            >
              ACCEPTED VOTES
            </Text>
            <Text
              fontSize="16px"
              fontWeight="bold"
              textAlign="center"
              _hover={{
                borderBottom: "1px solid blue",
              }}
            >
              160,512,222
            </Text>
          </Stack>
        </Stack>
      </Card>
    </div>
  );
};

export default PieChart;
