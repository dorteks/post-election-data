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
        political_party_name: "People's Democratic Party",
        candidate_votes: 6000,
      },
      {
        state_name: "ADAMAWA",
        political_party_name: "Labour Party",
        candidate_votes: 4000,
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
        political_party_name: "All Progressives Congress",
        candidate_votes: 1,
      },
      {
        state_name: "ANAMBRA",
        political_party_name: "People's Democratic Party",
        candidate_votes: 0,
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
        political_party_name: "All Progressives Congress",
        candidate_votes: 9,
      },
      {
        state_name: "CROSS RIVER",
        political_party_name: "People's Democratic Party",
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
        political_party_name: "All Progressives Congress",
        candidate_votes: 74,
      },
      {
        state_name: "LAGOS",
        political_party_name: "People's Democratic Party",
        candidate_votes: 6,
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
    <HStack justifyContent="space-between" marginBottom="100px">
      <Stack>
        <TableContainer width="500px" marginTop="8px">
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
              <Tr>
                <Td border=" 1px solid #393C4A">Abia</Td>
                <Td border=" 1px solid #393C4A">34%</Td>
                <Td border=" 1px solid #393C4A">53%</Td>
                <Td border=" 1px solid #393C4A">13%</Td>
                <Td border=" 1px solid #393C4A" bgColor="#0AA83F">
                  LP
                </Td>
              </Tr>
              <Tr>
                <Td border=" 1px solid #393C4A">Adamawa</Td>
                <Td border=" 1px solid #393C4A">34%</Td>
                <Td border=" 1px solid #393C4A">53%</Td>
                <Td border=" 1px solid #393C4A">13%</Td>
                <Td border=" 1px solid #393C4A" bgColor="#D62B3C">
                  PDP
                </Td>
              </Tr>
              <Tr>
                <Td border=" 1px solid #393C4A">Bauchi</Td>
                <Td border=" 1px solid #393C4A">34%</Td>
                <Td border=" 1px solid #393C4A">53%</Td>
                <Td border=" 1px solid #393C4A">13%</Td>
                <Td border=" 1px solid #393C4A" bgColor="#64CCFF">
                  APC
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
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
          </Table>
        </TableContainer>
      </Stack>
    </HStack>
  );
};

export default StateDataTable;
