import {
  Box,
  Card,
  Text,
  Image,
  Input,
  Stack,
  HStack,
  VStack,
  Divider,
} from "@chakra-ui/react";
import Map from "./map";
import PieChart from "./pie-chart";

type Props = {
  children: React.ReactNode;
  fontsize?: any;
  lineheight?: any;
};

export const TExt = (props: Props) => {
  return (
    <div>
      <Text
        fontSize={props.fontsize}
        lineHeight={props.lineheight}
        _hover={{ borderBottom: "1px solid blue" }}
      >
        {props.children}
      </Text>
    </div>
  );
};

const BodyContainer = () => {
  return (
    <Box
      color="#FFFFFF"
      bgColor="#1F2335"
      fontFamily="Jost"
      fontStyle="normal"
      padding="0px 90px 30px 90px "
    >
      {/* first */}
      <HStack paddingBottom="50px" gap="15px">
        <Text
          fontSize="30px"
          fontWeight="bold"
          _hover={{ borderBottom: "1px solid blue" }}
        >
          Post Election Data
        </Text>
        <HStack
          fontSize="14px"
          border-radius=" 4px"
          border=" 1px solid #242B47"
          _hover={{
            bgColor: "#242B47",
          }}
        >
          <TExt>PRESIDENTIAL </TExt>
          <TExt> / </TExt>
          <TExt> 2023</TExt>
        </HStack>
      </HStack>

      {/* second */}
      <HStack
        display="flex"
        alignContent="center"
        justifyContent="space-between"
      >
        <TExt fontsize="24px" lineheight="35px">
          Presidential Race
        </TExt>
        <HStack gap="10px" width="800px" height="45px">
          <Input
            color="#C6C7CB"
            fontSize="14px"
            lineHeight="20px"
            bgColor="#1C2031"
            borderRadius="6px"
            border="1px solid #252B46"
            placeholder="Election Data"
          />
          <Image
            src="/images/arrow-head-down.svg"
            position="relative"
            alt="drop-down"
            left="-45px"
          />

          <Input
            color="#C6C7CB"
            fontSize="14px"
            lineHeight="20px"
            bgColor="#1C2031"
            borderRadius="6px"
            border="1px solid #252B46"
            placeholder="Presidential"
          />
          <Image
            src="/images/arrow-head-down.svg"
            position="relative"
            alt="drop-down"
            left="-45px"
          />
          <Input
            color="#C6C7CB"
            fontSize="14px"
            lineHeight="20px"
            bgColor="#1C2031"
            borderRadius="6px"
            border="1px solid #252B46"
            placeholder="2023"
          />
          <Image
            src="/images/arrow-head-down.svg"
            position="relative"
            alt="drop-down"
            left="-45px"
          />
        </HStack>
      </HStack>

      {/* third */}
      <Divider
        color="#393C4A"
        border=".5px solid gray"
        margin="30px 0px 30px 0px"
      />

      <Card
        margin="auto"
        color="white"
        display="flex"
        width="1300px"
        height="800px"
        bgColor="#1B1F30"
        flexDirection="row"
        marginBottom="30px"
        paddingBottom="30px"
        borderRadius=" 13px"
        border=" 1px solid #393C4A"
      >
        <Map />
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
                // bgColor="red"
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
      </Card>

      {/* fourth */}
      <Card
        gap="20px"
        margin="auto"
        display="flex"
        width="1300px"
        height="450px"
        bgColor="#1B1F30"
        flexDirection="row"
        padding="45px 30px"
        borderRadius=" 13px"
        justifyContent="space-between"
        border=" 1px solid #393C4A"
      >
        <PieChart />

        {/* map */}
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
          {/* <Text
            height="20px"
            fontSize="14px"
            _hover={{
              borderBottom: "1px solid blue",
            }}
          >
            CANDIDATES BY GEOPOLITICAL ZONES
          </Text> */}
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

        {/* data */}
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
      </Card>
    </Box>
  );
};

export default BodyContainer;
