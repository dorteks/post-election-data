import {
  Box,
  Card,
  Text,
  Image,
  Input,
  Stack,
  HStack,
  Divider,
} from "@chakra-ui/react";

const BodyContainer = () => {
  return (
    <Box
      color="#FFFFFF"
      bgColor=" gray"
      fontStyle="normal"
      padding="0px 90px 30px 90px "
      // fontFamily="Jost"
    >
      {/* first */}
      <HStack paddingBottom="50px" gap="15px">
        <Text fontSize="30px" fontWeight="bold">
          Post Election Data
        </Text>{" "}
        <HStack
          fontSize="14px"
          border-radius=" 4px"
          border=" 1px solid #242B47"
          _hover={{
            bgColor: "#242B47",
          }}
        >
          <Text>PRESIDENTIAL </Text>
          <Text> / </Text>
          <Text> 2023</Text>
        </HStack>
      </HStack>

      {/* second */}
      <HStack
        display="flex"
        alignContent="center"
        justifyContent="space-between"
      >
        <Text fontSize="24px" lineHeight="35px">
          Presidential Race
        </Text>
        <HStack gap="10px" width="800px" height="45px">
          <Input
            color="#C6C7CB"
            fontSize="14px"
            lineHeight="20px"
            bgColor="#1B1F30"
            borderRadius="6px"
            border="1px solid #252B46"
            placeholder="Election Data"
          />
          <Input
            color="#C6C7CB"
            fontSize="14px"
            lineHeight="20px"
            bgColor="#1B1F30"
            borderRadius="6px"
            border="1px solid #252B46"
            placeholder="Presidential"
          />
          <Input
            color="#C6C7CB"
            fontSize="14px"
            lineHeight="20px"
            bgColor="#1B1F30"
            borderRadius="6px"
            border="1px solid #252B46"
            placeholder="2023"
          />
        </HStack>
      </HStack>

      {/* third */}
      <Divider margin="30px 0px 30px 0px" color="gray" />

      <Card
        margin="auto"
        display="flex"
        width="1300px"
        height="800px"
        bgColor="#1B1F30"
        marginBottom="30px"
        paddingBottom="30px"
        borderRadius=" 13px"
        border=" 1px solid #393C4A"
        color="white"
      >
        <Text>Map here</Text>
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
        border=" 1px solid #393C4A"
      >
        {/* pie chart */}
        <Card
          display="flex"
          color="#ffffff"
          fontSize="14px"
          padding="35px 30px"
          background="#1B1F30"
          borderRadius=" 13px"
          flexDirection="column"
          border="1px solid #272935"
        >
          <Text>Pie chart here</Text>
        </Card>

        {/* map */}
        <Card
          display="flex"
          color="#ffffff"
          fontSize="14px"
          background="#1B1F30"
          borderRadius=" 13px"
          flexDirection="column"
          border="1px solid #272935"
        >
          <Text>Map here</Text>
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
          <Text>Details here</Text>
        </Card>
      </Card>
    </Box>
  );
};

export default BodyContainer;
