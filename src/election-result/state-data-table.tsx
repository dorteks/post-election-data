import {
  Tr,
  Th,
  Td,
  Table,
  Thead,
  Tbody,
  Stack,
  HStack,
  TableContainer,
} from "@chakra-ui/react";

const data = [
  {
    Abia: [
      {
        state_name: "ABIA",
        political_party_name: "Labour Party",
        candidate_votes: 6010,
      },
      {
        state_name: "ABIA",
        political_party_name: "People's Democratic Party",
        candidate_votes: 200,
      },
      {
        state_name: "ABIA",
        political_party_name: "All Progressives Congress",
        candidate_votes: 40,
      },
    ],
    Adamawa: [
      {
        state_name: "ADAMAWA",
        political_party_name: "Labour Party",
        candidate_votes: 4000,
      },
      {
        state_name: "ADAMAWA",
        political_party_name: "People's Democratic Party",
        candidate_votes: 6000,
      },

      {
        state_name: "ADAMAWA",
        political_party_name: "All Progressives Congress",
        candidate_votes: 2000,
      },
    ],
    Anambra: [
      {
        state_name: "ANAMBRA",
        political_party_name: "Labour Party",
        candidate_votes: 30000,
      },
      {
        state_name: "ANAMBRA",
        political_party_name: "People's Democratic Party",
        candidate_votes: 0,
      },
      {
        state_name: "ANAMBRA",
        political_party_name: "All Progressives Congress",
        candidate_votes: 1,
      },
    ],
    "Cross River": [
      {
        state_name: "CROSS RIVER",
        political_party_name: "Labour Party",
        candidate_votes: 90900,
      },
      {
        state_name: "CROSS RIVER",
        political_party_name: "People's Democratic Party",
        candidate_votes: 9,
      },
      {
        state_name: "CROSS RIVER",
        political_party_name: "All Progressives Congress",
        candidate_votes: 9,
      },
    ],
    Lagos: [
      {
        state_name: "LAGOS",
        political_party_name: "Labour Party",
        candidate_votes: 220,
      },
      {
        state_name: "LAGOS",
        political_party_name: "People's Democratic Party",
        candidate_votes: 6,
      },
      {
        state_name: "LAGOS",
        political_party_name: "All Progressives Congress",
        candidate_votes: 74,
      },
    ],
    Rivers: [
      {
        state_name: "RIVERS",
        political_party_name: "Labour Party",
        candidate_votes: 323,
      },
      {
        state_name: "RIVERS",
        political_party_name: "People's Democratic Party",
        candidate_votes: 5,
      },
      {
        state_name: "RIVERS",
        political_party_name: "All Progressives Congress",
        candidate_votes: 1,
      },
    ],
  },
];

const StateDataTable = () => {
  return (
    <HStack
      marginTop="10px"
      marginBottom="100px"
      justifyContent="space-between"
    >
      <Stack>
        <TableContainer width="500px">
          <Table size="sm" variant="unstyled">
            <Thead>
              <Tr>
                <Th border=" 1px solid #393C4A">States</Th>
                <Th border=" 1px solid #393C4A">APC</Th>
                <Th border=" 1px solid #393C4A">LP</Th>
                <Th border=" 1px solid #393C4A">PDP</Th>
                <Th border=" 1px solid #393C4A">Leading</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((item) => {
                return (
                  <Tr>
                    <Td border=" 1px solid #393C4A">{"Abia"}</Td>
                    <Td border=" 1px solid #393C4A">
                      {item.Abia?.[2].candidate_votes}
                    </Td>
                    <Td border=" 1px solid #393C4A">
                      {item.Abia?.[0].candidate_votes}
                    </Td>
                    <Td border=" 1px solid #393C4A">
                      {item.Abia?.[1].candidate_votes}
                    </Td>
                    <Td border=" 1px solid #393C4A" bgColor="#0AA83F">
                      LP
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
            <Tbody>
              {data?.map((item) => {
                return (
                  <Tr>
                    <Td border=" 1px solid #393C4A">{"Adamawa"}</Td>
                    <Td border=" 1px solid #393C4A">
                      {item.Adamawa?.[2].candidate_votes}
                    </Td>
                    <Td border=" 1px solid #393C4A">
                      {item.Adamawa?.[0].candidate_votes}
                    </Td>
                    <Td border=" 1px solid #393C4A">
                      {item.Adamawa?.[1].candidate_votes}
                    </Td>
                    <Td border=" 1px solid #393C4A" bgColor="#D62B3C">
                      PDP
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
            <Tbody>
              {data?.map((item) => {
                return (
                  <Tr>
                    <Td border=" 1px solid #393C4A">{"Anambra"}</Td>
                    <Td border=" 1px solid #393C4A">
                      {item.Anambra?.[2].candidate_votes}
                    </Td>
                    <Td border=" 1px solid #393C4A">
                      {item.Anambra?.[0].candidate_votes}
                    </Td>
                    <Td border=" 1px solid #393C4A">
                      {item.Anambra?.[1].candidate_votes}
                    </Td>
                    <Td border=" 1px solid #393C4A" bgColor="#0AA83F">
                      LP
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
            <Tbody>
              {data?.map((item) => {
                return (
                  <Tr>
                    <Td border=" 1px solid #393C4A">{"Cross River"}</Td>
                    <Td border=" 1px solid #393C4A">
                      {item["Cross River"]?.[2].candidate_votes}
                    </Td>
                    <Td border=" 1px solid #393C4A">
                      {item["Cross River"]?.[0].candidate_votes}
                    </Td>
                    <Td border=" 1px solid #393C4A">
                      {item["Cross River"]?.[1].candidate_votes}
                    </Td>
                    <Td border=" 1px solid #393C4A" bgColor="#0AA83F">
                      LP
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
            <Tbody>
              {data?.map((item) => {
                return (
                  <Tr>
                    <Td border=" 1px solid #393C4A">{"Lagos"}</Td>
                    <Td border=" 1px solid #393C4A">
                      {item.Lagos?.[2].candidate_votes}
                    </Td>
                    <Td border=" 1px solid #393C4A">
                      {item.Lagos?.[0].candidate_votes}
                    </Td>
                    <Td border=" 1px solid #393C4A">
                      {item.Lagos?.[1].candidate_votes}
                    </Td>
                    <Td border=" 1px solid #393C4A" bgColor="#0AA83F">
                      LP
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
            <Tbody>
              {data?.map((item) => {
                return (
                  <Tr>
                    <Td border=" 1px solid #393C4A">{"Rivers"}</Td>
                    <Td border=" 1px solid #393C4A">
                      {item.Rivers?.[2].candidate_votes}
                    </Td>
                    <Td border=" 1px solid #393C4A">
                      {item.Rivers?.[0].candidate_votes}
                    </Td>
                    <Td border=" 1px solid #393C4A">
                      {item.Rivers?.[1].candidate_votes}
                    </Td>
                    <Td border=" 1px solid #393C4A" bgColor="#0AA83F">
                      LP
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </HStack>
  );
};

export default StateDataTable;
