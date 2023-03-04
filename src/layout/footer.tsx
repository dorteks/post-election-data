import { Box, VStack, Image, Text, HStack, Stack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      display="flex"
      color="#FFFFFF"
      fontSize="16px"
      lineHeight="23px"
      fontStyle="normal"
      bgColor=" #353949"
      fontWeight="400px"
      flexDirection="row"
      // fontFamily="Jost"
      justifyContent="space-between"
      padding="80px 120px 60px 90px"
    >
      <Box width="360px" gap="12px">
        <Image src="/images/hernalytics-full-logo.svg" alt="hernalytics-logo" />
        <Stack paddingTop="12px">
          <Text _hover={{ borderBottom: "1px solid blue" }}>
            Isale Eko Avenue, Dolphin Estate, Ikoyi, Lagos
          </Text>
          <Text width="56px" _hover={{ borderBottom: "1px solid blue" }}>
            Nigeria
          </Text>
          <Text width="140px" _hover={{ borderBottom: "1px solid blue" }}>
            © 2022 Hernalytics
          </Text>
        </Stack>
      </Box>

      <VStack alignItems="left" gap="24px">
        <Text fontWeight="bold">About</Text>
        <Text>Our Story</Text>
        <Text>Blog</Text>
        <Text>About Hernalytics</Text>
        <Text width="50px">Videos</Text>
      </VStack>
      <VStack alignItems="left" gap="24px">
        <Text _hover={{ borderBottom: "1px solid blue" }} fontWeight="bold">
          Support
        </Text>
        <Text _hover={{ borderBottom: "1px solid blue" }}>FAQs</Text>
        <Text _hover={{ borderBottom: "1px solid blue" }}>Privacy Policy</Text>
        <Text _hover={{ borderBottom: "1px solid blue" }}>
          Terms of Service
        </Text>
      </VStack>
      <VStack alignItems="left" gap="24px">
        <Text _hover={{ borderBottom: "1px solid blue" }} fontWeight="bold">
          Let's chat!
        </Text>
        <Text _hover={{ borderBottom: "1px solid blue" }}>
          hernalytics@gmail.com
        </Text>
        <Text _hover={{ borderBottom: "1px solid blue" }}>
          +234 801 234 5678
        </Text>
        <HStack gap="30px">
          <Image src="/images/instagram.svg" alt="instagram" />
          <Image src="/images/twitter.svg" alt="twitter" />
          <Image src="/images/whatsapp.svg" alt="whatsapp" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Footer;
