import React from "react";
import {
  SubscriptionTableWrapper,
  TableRow,
  TableColumn,
  TableWrapper,
  StyledTable,
  TableHeader,
  TableCell,
  TableCellFirst,
  TableHeaderFirst
} from "./SubscriptionTable.style";

const data = [
  "விவரம்",
  "ஏப்ரல்",
  "மே",
  "ஜூன்",
  "ஜூலை",
  "ஆகஸ்ட்",
  "செப்",
  "அக்டோ",
  "நவம்பர்",
  "டிசம்பர்",
  "ஜனவரி",
  "பிப்ரவரி",
  "மார்ச்",
];

const column = [
  "மாத சந்தா",
  "கட்டிட நிதி",
  "ஆண்டு விழா",
  "நற்செய்தி பணி",
  "ஏழைகள் நிதி",
  "விடுதிகள் வாரியம்",
  "ஓய்வுநாள் பள்ளி",
  "வேதாகம ஐக்கியம்",
  "நன்றி படையல்",
  "கல்லறை நிதி",
  "ஆண்கள் ஐக்கியம்",
  "பெண்கள் ஐக்கியம்",
  "வாலிபர் ஐக்கியம்",
  "மொத்தம்",
  "தேதி",
  "கையெப்பம்",
];

const SubscriptionTable = () => {
  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <TableRow>
            {data.map((d,index) => (
                index === 0 ? <TableCellFirst>{d}</TableCellFirst> : <TableHeader>{d}</TableHeader>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {column.map((c, cIndex) => (
            <TableRow key={c}>
              {data.map((d, dIndex) => (
                dIndex === 0 ? <TableCellFirst>{column[cIndex]}</TableCellFirst> : <TableCell>{}</TableCell>
                
              ))}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

export default SubscriptionTable;
