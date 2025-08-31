import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
//   transform: rotate(90deg);
`;

export const HeaderP = styled.h1`
  margin: 0;
  font-weight: 500;
  font-size: 22px;
`;

export const Header1 = styled.h1`
    margin: 0;
    font-size: 30px;
    font-weight: 900;
`;

export const Header2 = styled.h1`
    margin: 0;
    font-size: 22px;
    font-weight: 800;
`;

export const ContentLeftTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  transform: rotate(90deg);
`;


export const Container1 = styled.div`
    display: table;
    width: 100%;
    height: 100%;
`;

export const RotatedContent = styled.div`
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    height: 100%;
`;


export const RotatedContentWrapper = styled.div`
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    height: 100%;
`;

export const CenterContainer = styled.div`
    // display: flex;
    // flex-direction: column;
    text-align: center;
    // transform: rotate(90deg);
    // padding-bottom: 88%;
`;

export const HeaderNameContainer =  styled.div`
    display: flex;
    // margin-bottom: 10px;
`;

export const NameContent =  styled.div`
    display: table-cell;
    padding-top: 5px;

`;

export const NameLine = styled.div`
   display: table-cell;
    width: 88%;
    border-bottom: 1px solid;
    margin: 0 10px;
`;
export const ValueBox = styled.div`
    display: table-cell;
    width: 60px;
    height: 34px;
    border: 1px solid;
    margin: 0 10px;
`;

export const FirstBoxContainer = styled.div`
    margin-left: -140px;
    display: flex;
    width: 240px;
`;

export const SecondBoxContainer = styled.div`
    display: flex;
    width: 96%;
`;

export const AddressBoxContainer = styled.div`
    display: flex;
    width: 100%;
`;

export const ThirdBoxContainer = styled.div`
display: flex;
margin-right: -210px;
    width: 240px;
`;

export const AbsoluteContainer =  styled.div`
    position: absolute;
`;