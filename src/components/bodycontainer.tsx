import {
  Box,
  Card,
  Text,
  Image,
  Input,
  HStack,
  Divider,
} from "@chakra-ui/react";
import Map from "./map";
import Legend from "./legend";
import PieChart from "./pie-chart";
import SmallMap from "./small-map";
import GenderStats from "./gender-stats";
import { TEXT } from "./text";

const BodyContainer = () => {
  return (
    <Box
      color="#FFFFFF"
      bgColor="#1F2335"
      fontFamily="Jost"
      fontStyle="normal"
      padding="0px 90px 30px 90px "
    >
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
          <TEXT>PRESIDENTIAL </TEXT>
          <TEXT> / </TEXT>
          <TEXT> 2023</TEXT>
        </HStack>
      </HStack>

      <HStack
        display="flex"
        alignContent="center"
        justifyContent="space-between"
      >
        <Text
          fontSize="24px"
          lineHeight="35px"
          _hover={{ borderBottom: "1px solid blue" }}
        >
          Presidential Race
        </Text>
        <HStack gap="10px" width="800px" height="45px">
          <>
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
              left="-45px"
              alt="drop-down"
              position="relative"
              src="/images/arrow-head-down.svg"
            />
          </>

          <>
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
              left="-45px"
              alt="drop-down"
              position="relative"
              src="/images/arrow-head-down.svg"
            />
          </>

          <>
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
              left="-45px"
              alt="drop-down"
              position="relative"
              src="/images/arrow-head-down.svg"
            />
          </>
        </HStack>
      </HStack>

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
        <Legend />
      </Card>

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
        <SmallMap />
        <GenderStats />
      </Card>
    </Box>
  );
};

export default BodyContainer;
