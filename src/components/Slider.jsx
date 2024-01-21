import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 5,
    label: "5",
  },
  {
    value: 10,
    label: "10",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSliderMarks({ setRiskToleranceValue }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        aria-label="Custom marks"
        defaultValue={0}
        max={10}
        getAriaValueText={valuetext}
        step={1}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={(value) => setRiskToleranceValue(value?.target?.value)}
      />
    </Box>
  );
}
