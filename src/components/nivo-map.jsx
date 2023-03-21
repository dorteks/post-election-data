import { useMemo } from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { Box, Flex, Text } from "@chakra-ui/react";
import { nigMapFeatures } from "../lib/map-features";

const data = [
  {
    political_party_name: "All Peoples Congress",
    id: 1,
    country_id: 160,
    name: "EKITI",
    abbr: "EKITI",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 201494,
  },
  {
    political_party_name: "All Peoples Congress",
    id: 2,
    country_id: 160,
    name: "KWARA",
    abbr: "KWARA",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 263572,
  },
  {
    political_party_name: "Peoples Democratic Party",
    id: 3,
    country_id: 160,
    name: "OSUN",
    abbr: "OSUN",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 354366,
  },
  {
    political_party_name: "All Peoples Congress",
    id: 4,
    country_id: 160,
    name: "ONDO",
    abbr: "ONDO",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 369924,
  },
  {
    political_party_name: "All Peoples Congress",
    id: 5,
    country_id: 160,
    name: "OGUN",
    abbr: "OGUN",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 341554,
  },
  {
    political_party_name: "All Peoples Congress",
    id: 6,
    country_id: 160,
    name: "OYO",
    abbr: "OYO",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 449884,
  },
  {
    political_party_name: "People's Democratic Party",
    id: 7,
    country_id: 160,
    name: "YOBE",
    abbr: "YOBE",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 198567,
  },
  {
    political_party_name: "Labour Party",
    id: 8,
    country_id: 160,
    name: "ENUGU",
    abbr: "ENUGU",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 428640,
  },
  {
    political_party_name: "Labour Party",
    id: 9,
    country_id: 160,
    name: "LAGOS",
    abbr: "LAGOS",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 582454,
  },
  {
    political_party_name: "People's Democratic Party",
    id: 10,
    country_id: 160,
    name: "GOMBE",
    abbr: "GOMBE",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 319123,
  },
  {
    political_party_name: "People's Democratic Party",
    id: 11,
    country_id: 160,
    name: "ADAMAWA",
    abbr: "ADAMAWA",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 417611,
  },
  {
    political_party_name: "People's Democratic Party",
    id: 12,
    country_id: 160,
    name: "KATSINA",
    abbr: "KATSINA",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 489045,
  },
  {
    political_party_name: "All Peoples Congress",
    id: 13,
    country_id: 160,
    name: "JIGAWA",
    abbr: "JIGAWA",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 421390,
  },
  {
    political_party_name: "Labour Party",
    id: 14,
    country_id: 160,
    name: "NASARAWA",
    abbr: "NASARAWA",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 191361,
  },
  {
    political_party_name: "All Peoples Congress",
    id: 15,
    country_id: 160,
    name: "NIGER",
    abbr: "NIGER",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 375183,
  },
  {
    political_party_name: "All Peoples Congress",
    id: 16,
    country_id: 160,
    name: "BENUE",
    abbr: "BENUE",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 310468,
  },
  {
    political_party_name: "Labour Party",
    id: 17,
    country_id: 160,
    name: "FEDERAL CAPITAL TERRITORY",
    abbr: "FCT",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 281717,
  },
  {
    political_party_name: "People's Democratic Party",
    id: 18,
    country_id: 160,
    name: "AKWA IBOM",
    abbr: "AKWA IBOM",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 214012,
  },
  {
    political_party_name: "Labour Party",
    id: 19,
    country_id: 160,
    name: "EDO",
    abbr: "EDO",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 331163,
  },
  {
    political_party_name: "Labour Party",
    id: 20,
    country_id: 160,
    name: "ABIA",
    abbr: "ABIA",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 327095,
  },
  {
    political_party_name: "All Peoples Congress",
    id: 21,
    country_id: 160,
    name: "KOGI",
    abbr: "KOGI",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 240751,
  },
  {
    political_party_name: "People's Democratic Party",
    id: 22,
    country_id: 160,
    name: "BAUCHI",
    abbr: "BAUCHI",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 426607,
  },
  {
    political_party_name: "Labour Party",
    id: 23,
    country_id: 160,
    name: "PLATEAU",
    abbr: "PLATEAU",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 466272,
  },
  {
    political_party_name: "People's Democratic Party",
    id: 24,
    country_id: 160,
    name: "BAYELSA",
    abbr: "BAYELSA",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 68818,
  },
  {
    political_party_name: "People's Democratic Party",
    id: 25,
    country_id: 160,
    name: "KADUNA",
    abbr: "KADUNA",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 554360,
  },
  {
    political_party_name: "People's Democratic Party",
    id: 26,
    country_id: 160,
    name: "KEBBI",
    abbr: "KEBBI",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 285175,
  },
  {
    political_party_name: "All Peoples Congress",
    id: 27,
    country_id: 160,
    name: "KANO",
    abbr: "KANO",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 517341,
  },
  {
    political_party_name: "All Peoples Congress",
    id: 28,
    country_id: 160,
    name: "ZAMFARA",
    abbr: "ZAMFARA",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 298396,
  },
  {
    political_party_name: "People's Democratic Party",
    id: 29,
    country_id: 160,
    name: "SOKOTO",
    abbr: "SOKOTO",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 288679,
  },
  {
    political_party_name: "Labour Party",
    id: 30,
    country_id: 160,
    name: "CROSS RIVER",
    abbr: "CROSS RIVER",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 179917,
  },
  {
    political_party_name: "Labour Party",
    id: 31,
    country_id: 160,
    name: "DELTA",
    abbr: "DELTA",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 341866,
  },
  {
    political_party_name: "Labour Party",
    id: 32,
    country_id: 160,
    name: "EBONYI",
    abbr: "EBONYI",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 259738,
  },
  {
    political_party_name: "Labour Party",
    id: 33,
    country_id: 160,
    name: "ANAMBRA",
    abbr: "ANAMBRA",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 584621,
  },
  {
    political_party_name: "People's Democratic Party",
    id: 34,
    country_id: 160,
    name: "TARABA",
    abbr: "TARABA",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 189017,
  },
  {
    political_party_name: "All Peoples Congress",
    id: 35,
    country_id: 160,
    name: "BORNO",
    abbr: "BORNO",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 252282,
  },
  {
    political_party_name: "All Peoples Congress",
    id: 36,
    country_id: 160,
    name: "RIVERS",
    abbr: "RIVERS",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 231591,
  },
  {
    political_party_name: "Labour Party",
    id: 37,
    country_id: 160,
    name: "IMO",
    abbr: "IMO",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 340495,
  },
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
