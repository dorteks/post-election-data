import HouseChart from "./data";
import { Card, Stack, Text, Image } from "@chakra-ui/react";

type Props = {
  src: string;
  alt: string;
  color: string;
  party: string;
  votes: number;
  percentage: number;
};

const HouseCandidateCard = (props: Props) => {
  return (
    <Stack>
      <Image
        boxSize="12px"
        alt="arrow-up"
        alignSelf="center"
        src="/images/arrow-up.svg"
      />
      <Card
        gap="9px"
        width="250px"
        height="auto"
        padding="8px"
        display="flex"
        bgColor="#FFFFFF"
        flexDirection="row"
        alignItems="flex-start"
        boxShadow="0px 4px 15px rgba(0, 0, 0, 0.15) "
      >
        <Image src={props.src} alt={props.alt} />
        <Stack display="flex" flexDirection="column" marginLeft="10px">
          <Text height="45px" width="120px" color={props.color}>
            {props.party}
          </Text>
          <Text>
            {props.votes} seats ({props.percentage}%)
          </Text>
        </Stack>
      </Card>
    </Stack>
  );
};

const HouseResultChart = () => {
  return (
    <Stack height="206px" width="auto">
      <Text fontSize="18px" lineHeight="35px">
        HOUSE
      </Text>
      <HouseChart />

      <Card
        display="flex"
        bgColor="inherit"
        flexDirection="row"
        justifyContent="space-between"
      >
        <HouseCandidateCard
          src="/images/apc.svg"
          alt="APC"
          color="#64CCFF"
          party="All Progressive Congress"
          votes={54}
          percentage={51.3}
        />
        <HouseCandidateCard
          src="/images/lp.svg"
          alt="LP"
          color="#0AA83F"
          party="The Labour Party"
          votes={12}
          percentage={16.3}
        />
        <HouseCandidateCard
          src="/images/pdp.svg"
          alt="PDP"
          color="#D62B3C"
          party="People Democratic Party"
          votes={36}
          percentage={46}
        />
      </Card>
    </Stack>
  );
};

export default HouseResultChart;