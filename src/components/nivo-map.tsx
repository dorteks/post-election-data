import { useMemo } from "react";
import { Flex } from "@chakra-ui/react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { nigMapFeatures } from "../lib/map-features";

const data = [
  {
    political_party_name: "Labour Party",
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 6,
    country_id: 160,
    name: "RIVERS",
    abbr: "RIVERS",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 323,
  },
  {
    political_party_name: "Labour Party",
    id: 7,
    country_id: 160,
    name: "SOKOTO",
    abbr: "SOKOTO",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 323,
  },
  {
    political_party_name: "Labour Party",
    id: 8,
    country_id: 160,
    name: "BORNO",
    abbr: "BORNO",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 323,
  },
  {
    political_party_name: "Labour Party",
    id: 9,
    country_id: 160,
    name: "OSUN",
    abbr: "OSUN",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 323,
  },
  {
    political_party_name: "People's Democratic Party",
    id: 10,
    country_id: 160,
    name: "FEDERAL CAPITAL TERRITORY",
    abbr: "FCT",
    is_active: 1,
    created_at: "2023-02-22 15:10:46",
    updated_at: "2023-02-22 15:10:46",
    candidate_votes: 6000,
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
          ? "APC"
          : item?.political_party_name === "Labour Party"
          ? "PDP"
          : "LP";
      const partyData = {
        id: item?.name,
        leadingParty: partyName,
        votes: item?.candidate_votes,
        value: partyName === "APC" ? 3 : partyName === "PDP" ? 2 : 1,
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
