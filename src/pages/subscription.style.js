import styled from 'styled-components';


export const PrintWrapper = styled.div`
  width: 297mm;
  height: 210mm;
  background: white;
  margin: 20px auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media print {
    margin: 0;
    box-shadow: none;
    padding: 0;
    page-break-after: always;
  }
`;


export const Container = styled.div`
    padding:100px;
`;

export const IndexPageContainer = styled.div`
    display:flex;
`;

export const NameSubContainer = styled.div`
    
 display:flex;
`;

export const SubNoContent = styled.div`
 display:flex;
`;

export const NameContent = styled.div`
 display:flex;
`;