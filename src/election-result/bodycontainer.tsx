import Map from "../container/map";
import { TEXT } from "../components/text";
import StateDataTable from "./state-data-table";
import HouseResultChart from "./house/house-result-chart";
import SenateResultChart from "./senate/senate-result-chart";
import PresidentResultChart from "./presidential/president-result-chart";
import { Box, Card, Text, HStack, Stack, Select } from "@chakra-ui/react";

const BodyContainer = () => {
  return (
    <Box
      color="#FFFFFF"
      bgColor="#1F2335"
      fontFamily="Jost"
      fontStyle="normal"
      padding="0px 90px 30px 90px "
    >
      <HStack
        display="flex"
        alignContent="center"
        justifyContent="space-between"
      >
        <Stack display="flex" flexDirection="column" gap="15px">
          <HStack>
            <Text
              height="20px"
              fontSize="30px"
              fontWeight="bold"
              _hover={{ borderBottom: "1px solid blue" }}
            >
              Election Data
            </Text>
            <HStack
              fontSize="14px"
              border-radius=" 4px"
              border=" 1px solid #242B47"
              _hover={{
                bgColor: "#242B47",
              }}
            >
              <TEXT height="20px">PRESIDENTIAL </TEXT>
              <TEXT> / </TEXT>
              <TEXT height="20px"> 2023</TEXT>
            </HStack>
          </HStack>

          <HStack fontSize="14px">
            <TEXT color="#E5B805">UPDATED</TEXT>
            <Text>MAR. 15, 2021, 9:43 A.M. EDT</Text>
          </HStack>
        </Stack>

        <HStack gap="10px" width="1000px" height="45px">
          <Select
            color="#C6C7CB"
            fontSize="14px"
            lineHeight="20px"
            bgColor="#1C2031"
            borderRadius="6px"
            border="1px solid #252B46"
            placeholder="Election Data"
          >
            <option value="pre-election">Pre-Election</option>
            <option value="liv-updates">Electin Day Live Updates </option>
            <option value="post-election-analysis">
              Post Election Analysis
            </option>
          </Select>

          <Select
            color="#C6C7CB"
            fontSize="14px"
            lineHeight="20px"
            bgColor="#1C2031"
            borderRadius="6px"
            border="1px solid #252B46"
            placeholder="Presidential"
          >
            <option value="gubernatorial">Gubernatorial</option>
            <option value="senate">Senate </option>
            <option value="house-of-reps">House of Representatives</option>
          </Select>

          <Select
            color="#C6C7CB"
            fontSize="14px"
            lineHeight="20px"
            bgColor="#1C2031"
            placeholder="2023"
            borderRadius="6px"
            border="1px solid #252B46"
          >
            <option value="2019">2019</option>
            <option value="2015">2015</option>
            <option value="2011">2011</option>
            <option value="2007">2007</option>
            <option value="2003">2003</option>
            <option value="1999">1999</option>
            <option value="1995">1995</option>
            <option value="1991">1991</option>
            <option value="1987">1987</option>
          </Select>
        </HStack>
      </HStack>

      <Stack display="flex" margin="30px  0px" flexDirection="column">
        <PresidentResultChart />
      </Stack>

      {/* <HStack
        gap="20px"
        display="flex"
        marginBottom="150px"
        justifyContent="space-between"
      >
        <Stack
          flexGrow="1"
          display="flex"
          flexBasis="50%"
          flexDirection="column"
        >
          <SenateResultChart />
        </Stack>
        <Stack
          flexGrow="1"
          display="flex"
          flexBasis="50%"
          flexDirection="column"
        >
          <HouseResultChart />
        </Stack>
      </HStack> */}

      <Text
        fontSize="24px"
        lineHeight="35px"
        marginLeft="220px"
        marginBottom="30px"
      >
        Presidential Race
      </Text>
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
      </Card>

      <Card
        margin="auto"
        color="white"
        display="flex"
        width="1300px"
        height="auto"
        bgColor="#1B1F30"
        borderRadius=" 13px"
        flexDirection="column"
        border=" 1px solid #393C4A"
      >
        <Text
          bgColor="#080c1f"
          fontSize="26px"
          padding="15px 20px"
          borderRadius="13px 0px 13px 0px"
        >
          State Results
        </Text>
        <Stack padding="0px 20px">
          <StateDataTable />
        </Stack>
      </Card>
    </Box>
  );
};

export default BodyContainer;
