import PresidentialChart from "./data";
import { Card, Image, Stack, Text } from "@chakra-ui/react";

type Props = {
  src: string;
  alt: string;
  color: string;
  party: string;
  votes: number;
  candidate?: string;
  percentage: number;
};

const PresidentialCandidateCard = (props: Props) => {
  return (
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
      <Stack display="flex" flexDirection="column">
        <Text height="15px" color={props.color}>
          {props.candidate}, {props.party}
        </Text>
        <Text>
          {props.votes} votes ({props.percentage}%){" "}
        </Text>
      </Stack>
    </Card>
  );
};

const PresidentResultChart = () => {
  return (
    <Stack height="100px" marginBottom="50px">
      <Text fontSize="18px" lineHeight="35px">
        PRESIDENT
      </Text>
      <PresidentialChart />

      {/* <Stack
        display="flex"
        bgColor="inherit"
        flexDirection="row"
        justifyContent="space-between"
      >
        <PresidentialCandidateCard
          src="/images/tinubu.svg"
          alt="tinubu"
          color="#64CCFF"
          candidate="Tinubu"
          party="APC"
          votes={81283786}
          percentage={51.3}
        />

        <PresidentialCandidateCard
          src="/images/peter.svg"
          alt="peter"
          color="#0AA83F"
          candidate="Peter"
          party="LP"
          votes={60283786}
          percentage={42}
        />

        <PresidentialCandidateCard
          src="/images/atiku.svg"
          alt="atiku"
          color="#D62B3C"
          candidate="Atiku"
          party="PDP"
          votes={283786}
          percentage={7.3}
        />
      </Stack> */}
    </Stack>
  );
};

export default PresidentResultChart;
