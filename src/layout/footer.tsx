import { Box, VStack, Image, Text, HStack, Stack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      display="flex"
      color="#FFFFFF"
      fontSize="16px"
      fontFamily="Jost"
      fontStyle="normal"
      bgColor=" #353949"
      flexDirection="row"
      justifyContent="space-between"
      padding="80px 120px 60px 90px"
    >
      <Box width="360px" gap="12px">
        <Image src="/images/hernalytics-full-logo.svg" alt="hernalytics-logo" />

        <Stack paddingTop="12px">
          <Text
            width="90%"
            height="24px"
            _hover={{ borderBottom: "1px solid blue" }}
          >
            Isale Eko Avenue, Dolphin Estate, Ikoyi, Lagos
          </Text>
          <Text
            width="56px"
            height="24px"
            _hover={{ borderBottom: "1px solid blue" }}
          >
            Nigeria
          </Text>
          <Text
            height="24px"
            width="140px"
            _hover={{ borderBottom: "1px solid blue" }}
          >
            © 2022 Hernalytics
          </Text>
        </Stack>
      </Box>

      <Stack display="flex" flexDirection="row" gap="220px">
        <VStack alignItems="left" gap="24px">
          <Text
            height="24px"
            fontWeight="bold"
            _hover={{ borderBottom: "1px solid blue" }}
          >
            About
          </Text>
          <Text height="24px" _hover={{ borderBottom: "1px solid blue" }}>
            Our Story
          </Text>
          <Text height="24px" _hover={{ borderBottom: "1px solid blue" }}>
            Blog
          </Text>
          <Text height="24px" _hover={{ borderBottom: "1px solid blue" }}>
            About Hernalytics
          </Text>
          <Text
            height="24px"
            width="50px"
            _hover={{ borderBottom: "1px solid blue" }}
          >
            Videos
          </Text>
        </VStack>

        <Stack
          gap="24px"
          display="flex"
          alignItems="left"
          flexDirection="column"
        >
          <Text
            width="80px"
            height="24px"
            fontWeight="bold"
            _hover={{ borderBottom: "1px solid blue" }}
          >
            Support
          </Text>

          <Text _hover={{ borderBottom: "1px solid blue" }} height="24px">
            FAQs{" "}
          </Text>
          <Text
            _hover={{ borderBottom: "1px solid blue" }}
            height="24px"
            width="140px"
          >
            Privacy Policy
          </Text>
          <Text
            _hover={{ borderBottom: "1px solid blue" }}
            height="24px"
            width="120px"
          >
            Terms of Service
          </Text>
        </Stack>

        <Stack
          gap="24px"
          display="flex"
          fontSize="16px"
          alignItems="left"
          flexDirection="column"
        >
          <Text
            width="80px"
            height="24px"
            fontWeight="bold"
            _hover={{ borderBottom: "1px solid blue" }}
          >
            Let's chat!
          </Text>
          <Text height="24px" _hover={{ borderBottom: "1px solid blue" }}>
            hernalytics@gmail.com
          </Text>
          <Text
            width="160px"
            height="24px"
            _hover={{ borderBottom: "1px solid blue" }}
          >
            +234 801 234 5678
          </Text>
          <HStack gap="30px">
            <Image src="/images/instagram.svg" alt="instagram" />
            <Image src="/images/twitter.svg" alt="twitter" />
            <Image src="/images/whatsapp.svg" alt="whatsapp" />
          </HStack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
