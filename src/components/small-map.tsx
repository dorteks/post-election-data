import { Box, Card, HStack, Stack, Image, Text } from "@chakra-ui/react";

const SmallMap = () => {
  return (
    <Box>
      <Card
        width="510px"
        display="flex"
        color="#ffffff"
        fontSize="14px"
        background="#1B1F30"
        borderRadius=" 13px"
        flexDirection="column"
        padding="20px 0px 0px 30px"
        border="1px solid #272935"
      >
        <Stack display="flex" flexDirection="row">
          <Image src="/images/map.svg" alt="map" />

          <Stack paddingTop="122px" paddingRight="30px">
            {[
              {
                id: 1,
                src: "/images/NE.svg",
                alt: "north-east",
                region: "North East",
              },
              {
                id: 2,
                src: "/images/NW.svg",
                alt: "north-west",
                region: "North West",
              },
              {
                id: 3,
                src: "/images/NC.svg",
                alt: "north-central",
                region: "North Central",
              },
              {
                id: 4,
                src: "/images/SW.svg",
                alt: "south-west",
                region: "South West",
              },
              {
                id: 5,
                src: "/images/SS.svg",
                alt: "south-south",
                region: "South South",
              },
              {
                id: 6,
                src: "/images/SE.svg",
                alt: "south-est",
                region: "South East",
              },
            ].map((item) => {
              return (
                <HStack key={item.id} justifyContent="space-between">
                  <HStack>
                    <Image
                      width="22px"
                      height="17px"
                      borderRadius="3px"
                      border="1px solid inherit"
                      src={item.src}
                      alt={item.alt}
                      _hover={{ height: "16px", border: "1px solid blue" }}
                    />
                    <Text
                      height="18px"
                      fontSize="12px"
                      _hover={{ borderBottom: "1px solid blue" }}
                    >
                      {item.region}
                    </Text>
                  </HStack>
                  <Text
                    height="18px"
                    fontSize="12px"
                    _hover={{ borderBottom: "1px solid blue" }}
                  >
                    3,000
                  </Text>
                </HStack>
              );
            })}
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
};

export default SmallMap;
