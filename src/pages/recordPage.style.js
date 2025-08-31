import styled from "styled-components";

export const RecordPageWrapper = styled.div``;

export const RecordPageContainer = styled.div``;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px;
  text-align: center;
`;

export const HeaderP = styled.h1`
  margin: 0;
  font-weight: 500;
  font-size: 16px;
`;

export const Header1 = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 900;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 0 30px 0px 60px;
`;

export const FamilyNoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const FamilyNoLabel = styled.div`
  display: flex;
  align-items: center;
`;

export const FamilyNoValueBox = styled.div`
  width: 58px;
  height: 34px;
  border: 1px solid #000;
  display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 800;
`;
export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: calc(100% - 380px);
  flex-grow: 4;
`;

export const NameLabel = styled.div`
  display: flex;
  align-items: center;
`;

export const NameValueBox = styled.div`
  width: calc(100% - 80px);
  border-bottom: 1px solid #000;
  margin: 0 10px;
  display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 800;
`;

export const SubNoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const SubNoLabel = styled.div`
  display: flex;
  align-items: center;
`;

export const SubNoValueBox = styled.div`
  width: 60px;
  height: 34px;
  border: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 800;
`;


export const AddressWrapper = styled.div`
    margin: 0;
    display: flex;
    justify-content: end;
    width: calc(100% - 80px);
    padding: 10px 0 20px 60px;
`;

export const AddressValueBox =  styled.div`
  width: calc(100% - 90px);
  border-bottom: 1px solid;
  margin: 0 10px;
  display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 800;
`;