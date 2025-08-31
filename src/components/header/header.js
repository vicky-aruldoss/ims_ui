import data from "../../data.json";
import { Container, Content, HeaderP, Header1, Header2 } from "./header.style";

const Header = () => {
  return (
    <Container>
      <Content>
        <HeaderP>{data.header_dio}</HeaderP>
        <HeaderP>{data.header_pastorate}</HeaderP>
        <Header1>{data.header2}</Header1>
        <HeaderP>{data.header3}</HeaderP>
        <Header2>{data.header_sandha}</Header2>
      </Content>
    </Container>
  );
};

export default Header;
