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
        <Stack display="flex" flexDirection="row">
          <Image
            alt="sokoto"
            paddingTop="30px"
            marginLeft="280px"
            src="/images/SOKOTO.svg"
            boxSize="200px"
            top="35px"
            left="16.63%"
          />
          <Image
            top="70px"
            left="-134px"
            alt="zamfara"
            height="172px"
            width="168px"
            position="relative"
            src="/images/ZAMFARA.svg"
          />
          <Image
            top="60px"
            left="-165px"
            alt="katsina"
            height="163px"
            width="164px"
            position="relative"
            src="/images/KATSINA.svg"
          />
          <Image
            top="115px"
            alt="kano"
            left="-265px"
            height="147px"
            width="145px"
            position="relative"
            src="/images/KANO.svg"
          />
          <Image
            top="83px"
            alt="jigawa"
            left="-359px"
            width="187px"
            height="153px"
            position="relative"
            src="/images/JIGAWA.svg"
          />

          <Image
            top="39px"
            alt="borno"
            left="-294px"
            width="294px"
            height="259px"
            position="relative"
            src="/images/BORNO.svg"
          />
          <Image
            top="62px"
            alt="yobe"
            left="-649px"
            width="207px"
            height="195px"
            position="relative"
            src="/images/YOBE.svg"
          />
        </Stack>
        <Stack display="flex" flexDirection="row">
          <Image
            alt="kebbi"
            top="-189px"
            left="221px"
            width="215px"
            height="223px"
            position="relative"
            src="/images/KEBBI.svg"
          />
          <Image
            left="27px"
            alt="niger"
            top="-101px"
            width="273px"
            height="295px"
            position="relative"
            src="/images/NIGER.svg"
          />
          <Image
            left="-65px"
            top="-75px"
            alt="kaduna"
            height="177px"
            width="197px"
            position="relative"
            src="/images/KADUNA.svg"
          />
          <Image
            top="-147px"
            left="-78px"
            alt="bauchi"
            width="186px"
            height="217px"
            position="relative"
            src="/images/BAUCHI.svg"
          />
          <Image
            top="-63px"
            alt="gombe"
            left="-132px"
            width="122px"
            height="129px"
            position="relative"
            src="/images/GOMBE.svg"
          />
        </Stack>
        <Stack display="flex" flexDirection="row">
          <Image
            alt="FCT"
            top="-221px"
            left="470px"
            width="65px"
            height="68px"
            position="relative"
            src="/images/FCT.svg"
          />
          <Image
            top="-229px"
            left="418px"
            width="197px"
            height="113px"
            alt="nassarawa"
            position="relative"
            src="/images/NASARAWA.svg"
          />
          <Image
            top="-299px"
            left="326px"
            width="178px"
            alt="plateau"
            height="142px"
            position="relative"
            src="/images/PLATEAU.svg"
          />
          <Image
            top="-244px"
            left="194px"
            alt="taraba"
            width="216px"
            height="214px"
            position="relative"
            src="/images/TARABA.svg"
          />
          <Image
            top="-341px"
            left="133px"
            width="192px"
            alt="adamawa"
            height="249px"
            position="relative"
            src="/images/ADAMAWA.svg"
          />
        </Stack>
        <Stack display="flex" flexDirection="row">
          <Image
            alt="kwara"
            top="-597px"
            left="182px"
            width="249px"
            height="281px"
            position="relative"
            src="/images/KWARA.svg"
          />
          <Image
            alt="kogi"
            left="81px"
            top="-444px"
            width="262px"
            height="159px"
            position="relative"
            src="/images/KOGI.svg"
          />
          <Image
            left="12px"
            alt="benue"
            top="-466px"
            width="177px"
            height="248px"
            position="relative"
            src="/images/BENUE.svg"
          />
        </Stack>

        <Stack display="flex" flexDirection="row">
          <Image
            alt="oyo"
            left="176px"
            top="-747px"
            width="140px"
            height="150px"
            position="relative"
            src="/images/OYO.svg"
          />

          <Image
            alt="osun"
            top="-717px"
            left="133px"
            width="77px"
            height="151px"
            position="relative"
            src="/images/OSUN.svg"
          />
          <Image
            alt="ekiti"
            top="-716px"
            left="118px"
            width="68px"
            height="131px"
            position="relative"
            src="/images/EKITI.svg"
          />
          <Image
            alt="ondo"
            left="-9px"
            top="-659px"
            width="160px"
            height="134px"
            position="relative"
            src="/images/ONDO.svg"
          />
          <Image
            alt="edo"
            top="-649px"
            left="-123px"
            width="159px"
            height="135px"
            position="relative"
            src="/images/EDO.svg"
          />
          <Image
            alt="delta"
            top="-593px"
            width="133px"
            height="150px"
            left="-264px"
            position="relative"
            src="/images/DELTA.svg"
          />
          <Image
            top="-588px"
            left="-279px"
            width="62px"
            alt="anambra"
            height="79px"
            position="relative"
            src="/images/ANAMBRA.svg"
          />
          <Image
            alt="enugu"
            top="-669px"
            width="70px"
            left="-319px"
            height="200px"
            position="relative"
            src="/images/ENUGU.svg"
          />
          <Image
            position="relative"
            top="-690px"
            left="-345px"
            width="69px"
            height="280px"
            src="/images/EBONYI.svg"
            alt="ebonyi"
          />
          <Image
            alt="CRS"
            top="-658px"
            left="-390px"
            width="121px"
            height="280px"
            position="relative"
            src="/images/CROSS-RIVERS.svg"
          />
        </Stack>
        <Stack display="flex" flexDirection="row">
          <Image
            alt="ogun"
            top="-977px"
            left="179px"
            width="139px"
            height="160px"
            position="relative"
            src="/images/OGUN.svg"
          />
          <Image
            alt="lagos"
            top="-946px"
            left="43px"
            width="119px"
            height="162px"
            position="relative"
            src="/images/LAGOS.svg"
          />
          <Image
            top="-814px"
            left="109px"
            width="104px"
            alt="bayelsa"
            height="150px"
            position="relative"
            src="/images/BAYELSA.svg"
          />
          <Image
            left="81px"
            top="-829px"
            width="98px"
            alt="rivers"
            height="152px"
            position="relative"
            src="/images/RIVERS.svg"
          />
          <Image
            alt="imo"
            left="3px"
            top="-865px"
            width="57px"
            height="150px"
            position="relative"
            src="/images/IMO.svg"
          />
          <Image
            alt="abia"
            left="-17px"
            top="-854px"
            width="63px"
            height="150px"
            position="relative"
            src="/images/ABIA.svg"
          />
          <Image
            left="-57px"
            top="-826px"
            width="67px"
            height="150px"
            alt="akwa-ibom"
            position="relative"
            src="/images/AKWA-IBOM.svg"
          />
        </Stack>
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
          <Stack textAlign="start" marginBottom="40px">
            <Text>TOTAL ELECTED MEMBERS</Text>
            <Text fontSize="20px" fontWeight="bold">
              10,000
            </Text>
          </Stack>
          <Stack marginBottom="40px">
            <HStack>
              <Text>MALE</Text>
              <Image src="/images/male.svg" alt="male" />
            </HStack>
            <Text fontSize="20px" fontWeight="bold">
              9,000
            </Text>
          </Stack>
          <Stack>
            <HStack>
              <Text>FEMALE</Text>
              <Image src="/images/female.svg" alt="female" />
            </HStack>{" "}
            <Text fontSize="20px" fontWeight="bold">
              1,000
            </Text>
          </Stack>
        </Card>
      </Card>
    </Box>
  );
};

export default BodyContainer;
