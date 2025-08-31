import React from "react";
import data from "../data.json";
import {
  HeaderContainer,
  RecordPageWrapper,
  RecordPageContainer,
  HeaderP,
  Header1,
  DetailsContainer,
  FamilyNoContainer,
  FamilyNoLabel,
  FamilyNoValueBox,
  NameContainer,
  NameLabel,
  NameValueBox,
  SubNoContainer,
  SubNoLabel,
  SubNoValueBox,
  AddressWrapper,
  AddressValueBox
} from "./recordPage.style";

function RecordPage(memberData) {
  const {name,family_no,address,sub_no,address1} = memberData.data;
  return (
    <RecordPageWrapper>
      <RecordPageContainer>
        <HeaderContainer>
          <HeaderP>{data.header1}</HeaderP>
          <Header1>{data.header2}</Header1>
          <HeaderP>{data.header3}</HeaderP>
        </HeaderContainer>
        <DetailsContainer>
          <FamilyNoContainer>
            <FamilyNoLabel>
              {data.labels.family_no} {data.colon}
            </FamilyNoLabel>
            <FamilyNoValueBox>{family_no}</FamilyNoValueBox>
          </FamilyNoContainer>
          <NameContainer>
            <NameLabel>
              {data.labels.name} {data.colon}
            </NameLabel>
            <NameValueBox>{name}</NameValueBox>
          </NameContainer>
          <SubNoContainer>
            <SubNoLabel>
              {data.labels.subscription_no} {data.colon}
            </SubNoLabel>
            <SubNoValueBox>{sub_no}</SubNoValueBox>
          </SubNoContainer>
        </DetailsContainer>
        <AddressWrapper>
          <NameContainer>
            <NameLabel>
              {data.labels.address} {data.colon}
            </NameLabel>
            <AddressValueBox>{address}{address1 ? ", " + address1 : ""}</AddressValueBox>
          </NameContainer>
        </AddressWrapper>
      </RecordPageContainer>
    </RecordPageWrapper>
  );
}

export default RecordPage;
