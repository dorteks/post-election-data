import { useMemo } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Flex, Image, Box, Text } from "@chakra-ui/react";

const PresidentialChart = () => {
  const data = [
    {
      full_name: "Peter Obi",
      candidates_vote: 6101533,
      lpImage: "/imgaes/peter.svg",
      political_party_name: "Labour Party",
      candidate_id: "01gsxaa3v52mbr3aspbjn4w9bh",
    },
    {
      candidates_vote: 6984520,
      full_name: "Atiku Abubakar",
      pdpImage: "/imgaes/atiku.svg",
      candidate_id: "01gsxaarzz4gnvqykbb3ryewja",
      political_party_name: "People's Democratic Party",
    },
    {
      candidates_vote: 8794726,
      full_name: "Ahmed Bola Tinubu",
      apcImage: "/imgaes/tinubu.svg",
      candidate_id: "01gsxab585djcfcneefkpten1r",
      political_party_name: "All Progressives Congress",
    },
  ];

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
        [partyName]: item?.candidates_vote,
        [`${partyName.toLowerCase()}Color`]:
          partyName === "PDP"
            ? "#D62B3C"
            : partyName === "LP"
            ? "#0AA83F"
            : "#64CCFF",
        [`${partyName.toLowerCase()}Name`]: item?.full_name,
        [`${partyName.toLowerCase()}Image`]:
          partyName === "PDP"
            ? "/images/atiku.svg"
            : partyName === "LP"
            ? "images/peter.svg"
            : "/images/tinubu.svg",
      };

      return partyData;
    });

    return [{ ...mapData[0], ...mapData[1], ...mapData[2] }];
  }, [data]);

  return (
    <ResponsiveBar
      data={newData}
      padding={0.5}
      indexBy="votes"
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
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
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
            }, ${id}`}</Text>

            <Text color={"#585858"}>
              {` ${
                id === "PDP" ? data?.PDP : id === "LP" ? data?.LP : data?.APC
              } Votes`}
            </Text>
          </Box>
        </Flex>
      )}
    />
  );
};

export default PresidentialChart;
