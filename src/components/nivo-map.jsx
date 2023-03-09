import { useMemo } from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { Box, Flex, Text } from "@chakra-ui/react";
import { nigMapFeatures } from "../lib/map-features";

const data = [
  {
    political_party_name: "Labour Party",
    id: 29,
    country_id: 160,
    name: "ABIA",
    abbr: "ABIA",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 6010,
  },
  {
    political_party_name: "People's Democratic Party",
    id: 25,
    country_id: 160,
    name: "ADAMAWA",
    abbr: "ADAMAWA",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 6000,
  },
  {
    political_party_name: "Labour Party",
    id: 4,
    country_id: 160,
    name: "ANAMBRA",
    abbr: "ANAMBRA",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 30000,
  },
  {
    political_party_name: "Labour Party",
    id: 15,
    country_id: 160,
    name: "CROSS RIVER",
    abbr: "CROSS RIVER",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 90900,
  },
  {
    political_party_name: "Labour Party",
    id: 5,
    country_id: 160,
    name: "LAGOS",
    abbr: "LAGOS",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 220,
  },
  {
    political_party_name: "Labour Party",
    id: 11,
    country_id: 160,
    name: "RIVERS",
    abbr: "RIVERS",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 323,
  },
  // {
  //   political_party_name: "People's Democratic Party",
  //   id: 1,
  //   country_id: 160,
  //   name: "SOKOTO",
  //   abbr: "SOKOTO",
  //   is_active: 1,
  //   created_at: "2023-02-22 15:10:46",
  //   updated_at: "2023-02-22 15:10:46",
  //   candidate_votes: 7563,
  // },
  // {
  //   political_party_name: "All Peoples Congress",
  //   id: 2,
  //   country_id: 160,
  //   name: "KANO",
  //   abbr: "KANO",
  //   is_active: 1,
  //   created_at: "2023-02-22 15:10:46",
  //   updated_at: "2023-02-22 15:10:46",
  //   candidate_votes: 7563,
  // },
];

const theme = {
  fontSize: 16,
};

const labelColor = {
  LP: "#0AA83F",
  APC: "#64CCFF",
  PDP: "#D62B3C",
};

const colorScheme = ["#64CCFF", "#0AA83F", "#D62B3C"];

const NigeriaMap = () => {
  const newData = useMemo(() => {
    if (!data?.length) {
      return [];
    }

    const mapData = data?.map((item) => {
      const partyName =
        item?.political_party_name === "People's Democratic Party"
          ? "PDP"
          : item?.political_party_name === "Labour Party"
          ? "LP"
          : "APC";
      const partyData = {
        id: item?.name,
        leadingParty: partyName,
        votes: item?.candidate_votes,
        value: partyName === "PDP" ? 3 : partyName === "LP" ? 2 : 1,
      };

      return partyData;
    });

    return mapData;
  }, []);

  return (
    <ResponsiveChoropleth
      data={newData}
      features={nigMapFeatures?.features}
      theme={theme}
      domain={[1, 3]}
      valueFormat=".2s"
      borderWidth={0.5}
      colors={colorScheme}
      isInteractive={true}
      borderColor="#111111"
      unknownColor="#FFFFFF"
      projectionScale={3800}
      enableGraticule={false}
      projectionRotation={[0, 0, 0]}
      projectionTranslation={[-0.12, 1.32]}
      margin={{
        top: 0,
        right: 0,
        left: 40,
        bottom: 0,
      }}
      label={(feature) => {
        const d = newData?.find((d) => d?.id === feature?.id);
        if (!d) return "";
        return `${feature?.properties?.admin1Name} - ${d?.leadingParty}`;
      }}
      // tooltip type is ?
      tooltip={({ feature }) => {
        const d = newData.find((d) => d?.id === feature?.id);
        if (!d) {
          return "";
        }
        return (
          <Flex
            top={6}
            height="auto"
            color="white"
            align={"center"}
            bgColor="#131726"
            padding="15px 21px"
            width="max-content"
            borderRadius={"6px"}
            position={"absolute"}
            border="1px solid #212842"
            justifyContent="space-between"
            boxShadow="0px 4px 15px rgba(0, 0, 0, 0.15)"
          >
            {feature?.data?.value ? (
              <Flex align={"center"} gap="5px">
                <Box>
                  <Flex w="100%" gap="50px" justifyContent={"space-between"}>
                    <Text
                      opacity="0.5"
                      fontSize="12px"
                      fontWeight="400"
                      lineHeight="20px"
                      marginBottom="15px"
                    >
                      VOTE COUNT
                    </Text>
                    <Text
                      opacity="0.5"
                      fontSize="12px"
                      fontWeight="400"
                      lineHeight="20px"
                      marginBottom="15px"
                    >
                      SEE FULL LIST
                    </Text>
                  </Flex>

                  <Flex w="100%" gap="80px" justifyContent={"space-between"}>
                    <Box gap="40px" flexDirection="row" display="flex">
                      <Text>
                        {d?.leadingParty === "PDP"
                          ? "Atiku Abubakar"
                          : d?.leadingParty === "APC"
                          ? "Bola Ahmed Tinubu"
                          : "Peter Obi"}
                      </Text>
                      <Text>{d?.leadingParty}</Text>
                    </Box>

                    <Text>{d?.votes}</Text>
                  </Flex>
                </Box>
              </Flex>
            ) : (
              <Text color={"black"}>No info yet</Text>
            )}
          </Flex>
        );
      }}
      legends={[
        {
          padding: 0,
          justify: true,
          itemWidth: 120,
          itemHeight: 18,
          itemOpacity: 1,
          symbolSize: 28,
          translateY: -50,
          translateX: -200,
          itemsSpacing: 25,
          direction: "column",
          itemTextColor: "gray",
          anchor: "bottom-right",
          itemDirection: "left-to-right",
          data: Object.entries(labelColor).map((value) => ({
            id: 1,
            color: value[1],
            label: value[0],
          })),
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
                itemTextColor: "#ffffff",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default NigeriaMap;
