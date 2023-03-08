import { useMemo } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Flex, Image, Box, Text } from "@chakra-ui/react";

const data = [
  {
    party_vote: 12,
    lpImage: "/imgaes/lp.svg",
    political_party_percent: "(16.3%)",
    political_party_name: "Labour Party",
    party_id: "01gsxaa3v52mbr3aspbjn4w9bh",
  },
  {
    party_vote: 36,
    pdpImage: "/imgaes/pdp.svg",
    political_party_percent: "(46%)",
    party_id: "01gsxaarzz4gnvqykbb3ryewja",
    political_party_name: "People's Democratic Party",
  },
  {
    party_vote: 54,
    apcImage: "/imgaes/apc.svg",
    political_party_percent: "(51.3%)",
    candidate_id: "01gsxab585djcfcneefkpten1r",
    political_party_name: "All Progressives Congress",
  },
];

const HouseChart = () => {
  const newData = useMemo(() => {
    if (!data?.length) {
      return [];
    }

    const mapData = data?.map((item) => {
      const partyName =
        item?.political_party_name === "Labour Party"
          ? "LP"
          : item?.political_party_name === "People's Democratic Party"
          ? "PDP"
          : "APC";

      const partyData = {
        results: "election",
        [partyName]: item?.party_vote,
        [`${partyName.toLowerCase()}Percent`]: item?.political_party_percent,

        [`${partyName.toLowerCase()}Color`]:
          partyName === "PDP"
            ? "#D62B3C"
            : partyName === "LP"
            ? "#0AA83F"
            : "#64CCFF",
        [`${partyName.toLowerCase()}Name`]: item?.political_party_name,
        [`${partyName.toLowerCase()}Image`]:
          partyName === "PDP"
            ? "/images/pdp.svg"
            : partyName === "LP"
            ? "images/lp.svg"
            : "/images/apc.svg",
      };

      return partyData;
    });

    return [{ ...mapData[0], ...mapData[1], ...mapData[2] }];
  }, [data]);

  return (
    <ResponsiveBar
      data={newData}
      padding={0.6}
      indexBy="seats"
      axisLeft={null}
      innerPadding={1}
      borderRadius={1}
      valueFormat=" <-"
      axisBottom={null}
      layout="horizontal"
      labelSkipWidth={12}
      isInteractive={true}
      labelSkipHeight={12}
      motionConfig="molasses"
      keys={["APC", "LP", "PDP"]}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={["#64CCFF", "#0AA83F", "#D62B3C"]}
      margin={{ top: -30, right: 0, bottom: 0, left: 0 }}
      tooltip={({ id, color, data }) => (
        <Flex
          top={6}
          padding="8px"
          color={color}
          height="auto"
          align={"center"}
          bgColor="#FFFFFF"
          width="max-content"
          position={"absolute"}
          justifyContent="space-between"
          boxShadow="0px 4px 15px rgba(0, 0, 0, 0.15)"
        >
          <Image
            width="46px"
            height="40px"
            src={`${
              id === "PDP"
                ? data?.pdpImage
                : id === "APC"
                ? data?.apcImage
                : data?.lpImage
            }`}
          />
          <Box marginLeft="8px">
            <Text>{`${
              id === "PDP"
                ? data?.pdpName
                : id === "LP"
                ? data?.lpName
                : data?.apcName
            }`}</Text>

            <Text color={"#585858"}>
              {` ${
                id === "PDP" ? data?.PDP : id === "LP" ? data?.LP : data?.APC
              } Seats ${
                id === "PDP"
                  ? data?.pdpPercent
                  : id === "LP"
                  ? data?.lpPercent
                  : data?.apcPercent
              }  `}
            </Text>
          </Box>
        </Flex>
      )}
    />
  );
};

export default HouseChart;
