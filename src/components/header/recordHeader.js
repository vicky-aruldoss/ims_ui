import data from "../../data.json";
import {
  Container1,
  RotatedContent,
  HeaderP,
  Header1,
  CenterContainer,
  HeaderNameContainer,
  NameContent,
  ValueBox,
  NameLine,
  FirstBoxContainer,
  SecondBoxContainer,
  ThirdBoxContainer,
  AddressBoxContainer,
} from "./header.style";

function RecordHeader() {
  return (
    <Container1>
      <RotatedContent>
        <CenterContainer>
          <HeaderP>{data.header1}</HeaderP>
          <Header1>{data.header2}</Header1>
          <HeaderP>{data.header3}</HeaderP>
          <HeaderNameContainer>
            <FirstBoxContainer>
              <NameContent>
                {data.labels.family_no} {data.colon}
              </NameContent>
              <ValueBox />
            </FirstBoxContainer>
            <SecondBoxContainer>
              <NameContent>
                {data.labels.name} {data.colon}
              </NameContent>
              <NameLine />
            </SecondBoxContainer>
            <ThirdBoxContainer>
              <NameContent>
                {data.labels.subscription_no} {data.colon}
              </NameContent>
              <ValueBox />
            </ThirdBoxContainer>
          </HeaderNameContainer>
          <HeaderNameContainer>
            <AddressBoxContainer>
              <NameContent>
                {data.labels.name} {data.colon}
              </NameContent>
              <NameLine />
            </AddressBoxContainer>
          </HeaderNameContainer>
        </CenterContainer>
      </RotatedContent>
    </Container1>
  );
}

export default RecordHeader;
