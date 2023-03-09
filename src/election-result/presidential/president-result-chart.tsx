import PresidentialChart from "./data";
import { Card, Image, Stack, Text } from "@chakra-ui/react";

type Props = {
  src: string;
  alt: string;
  color: string;
  party: string;
  votes: number;
  positionArrow: string;
  candidate?: string;
  percentage: number;
};

const PresidentialCandidateCard = (props: Props) => {
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
        <Stack display="flex" flexDirection="column">
          <Text height="15px" color={props.color}>
            {props.candidate}, {props.party}
          </Text>
          <Text>
            {props.votes} votes ({props.percentage}%){" "}
          </Text>
        </Stack>
      </Card>
    </Stack>
  );
};

const PresidentResultChart = () => {
  return (
    <Stack height="180px" marginBottom="50px">
      <Text fontSize="18px" lineHeight="35px">
        PRESIDENT
      </Text>
      <PresidentialChart />

      <Stack
        display="flex"
        bgColor="inherit"
        flexDirection="row"
        justifyContent="space-between"
      >
        <PresidentialCandidateCard
          party="APC"
          alt="tinubu"
          votes={2125}
          color="#64CCFF"
          percentage={1.5}
          candidate="Tinubu"
          positionArrow={"10px"}
          src="/images/tinubu.svg"
        />

        <PresidentialCandidateCard
          party="LP"
          alt="peter"
          votes={131453}
          color="#0AA83F"
          percentage={94}
          candidate="Peter"
          positionArrow={"110px"}
          src="/images/peter.svg"
        />

        <PresidentialCandidateCard
          alt="atiku"
          party="PDP"
          votes={6220}
          color="#D62B3C"
          percentage={4.4}
          candidate="Atiku"
          positionArrow={"210px"}
          src="/images/atiku.svg"
        />
      </Stack>
    </Stack>
  );
};

export default PresidentResultChart;
