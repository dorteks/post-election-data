import { Box, VStack, Image, Text, HStack, Stack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      display="flex"
      color="#FFFFFF"
      fontSize="16px"
      fontStyle="normal"
      // fontFamily="Jost"
      lineHeight="23px"
      bgColor=" gray"
      flexDirection="row"
      fontWeight="400px"
      justifyContent="space-between"
      padding="80px 120px 60px 90px"
    >
      <Box width="360px" gap="12px">
        <Image src="/images/hernalytics-full-logo.svg" alt="hernalytics-logo" />
        <Stack paddingTop="12px">
          <Text>Isale Eko Avenue, Dolphin Estate, Ikoyi, Lagos, Nigeria</Text>
          <Text>© 2022 Hernalytics</Text>
        </Stack>
      </Box>

      <VStack alignItems="left" gap="24px">
        <Text fontWeight="bold">About</Text>
        <Text>Our Story</Text>
        <Text>Blog</Text>
        <Text>About Hernalytics</Text>
        <Text>Videos</Text>
      </VStack>
      <VStack alignItems="left" gap="24px">
        <Text fontWeight="bold">Support</Text>
        <Text>FAQs</Text>
        <Text>Privacy Policy</Text>
        <Text>Terms of Service</Text>
      </VStack>
      <VStack alignItems="left" gap="24px">
        <Text fontWeight="bold">Let's chat!</Text>
        <Text>hernalytics@gmail.com</Text>
        <Text>+234 801 234 5678</Text>
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
