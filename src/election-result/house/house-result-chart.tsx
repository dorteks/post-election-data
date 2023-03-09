import HouseChart from "./data";
import { Card, Stack, Text, Image } from "@chakra-ui/react";

type Props = {
  src: string;
  alt: string;
  color: string;
  party: string;
  votes: number;
  percentage: number;
  positionArrow: string;
};

const HouseCandidateCard = (props: Props) => {
  return (
    <Stack>
      <Image
        boxSize="12px"
        alt="arrow-up"
        src="/images/arrow-up.svg"
        marginLeft={props.positionArrow}
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
          alt="APC"
          votes={54}
          color="#64CCFF"
          percentage={51.3}
          src="/images/apc.svg"
          positionArrow={"110px"}
          party="All Progressive Congress"
        />
        <HouseCandidateCard
          alt="LP"
          votes={12}
          color="#0AA83F"
          percentage={16.3}
          src="/images/lp.svg"
          positionArrow={"200px"}
          party="The Labour Party"
        />
        <HouseCandidateCard
          alt="PDP"
          votes={36}
          color="#D62B3C"
          percentage={46}
          src="/images/pdp.svg"
          positionArrow={"110px"}
          party="People Democratic Party"
        />
      </Card>
    </Stack>
  );
};

export default HouseResultChart;
