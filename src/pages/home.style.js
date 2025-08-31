import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 20mm;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const A4 = styled.section`
  width: 210mm;
  min-height: 297mm;
  margin: 10mm auto;
  background: white;
  box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);
`;


export const A4Sub = styled.section`
  padding: 0.7cm;
  height: 297mm;
`;

export const Content = styled.section`
  height: 100%;
`;