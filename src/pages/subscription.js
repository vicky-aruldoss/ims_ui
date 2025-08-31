import React, { useEffect, useState } from "react";
import {
  PrintWrapper,
  Container,
  IndexPageContainer,
  NameSubContainer,
  SubNoContent,
  NameContent,
} from "./subscription.style";
import Header from "../components/header/header";
import RecordPage from "./recordPage";
import SubscriptionTable from "../components/table/SubscriptionTable";

// const data = [
//   {
//     name: "திரு.J.D.யுவராஜ் ஜான்சன் ",
//     familyNo: "01",
//     subNo: "01",
//     address: "காந்தி நகர், விச்சூர்.",
//   },
// ];

const Subscription = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("/members_subscription_2025.csv") // path relative to public folder
      .then((response) => response.text())
      .then((csv) => {
        // console.log("--> csv :",csv)
        const [headerLine, ...lines] = csv.trim().split("\n");
        const headers = headerLine.split(",");

        const json = lines.map((line) => {
          const values = line.split(",");
          return headers.reduce((obj, key, i) => {
            obj[key?.trim()] = values[i]?.trim();
            return obj;
          }, {});
        });
        setData(json);
      });
  }, []);

  return (
    <>
      <PrintWrapper style={{ "justify-content": "center" }}>
        <Container>
          <Header />
        </Container>
      </PrintWrapper>
      {data?.map((d) => (
        <PrintWrapper>
          <RecordPage data={d} />
          <SubscriptionTable />
        </PrintWrapper>
      ))}
    </>
  );
};

export default Subscription;
