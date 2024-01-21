import { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import DiscreteSliderMarks from "./Slider";
import { publicRequest } from "../functions/requestMethods";
import axios from "axios";
import { defaultData } from "../utils/defaultDataset";
import GetStarted from "./GetStarted";

ChartJS.register(ArcElement, Tooltip, Legend);

const RiskTolerance = () => {
  // RISK TOLERANCE VALUE
  const [backendResponse, setBackendResponse] = useState(null);

  // RISK TOLERANCE VALUE
  const [riskToleranceValue, setRiskToleranceValue] = useState(0);

  //   CHART DATA
  const [data, setData] = useState({
    labels: [
      "Nigerian Stocks",
      "Foriegn Stocks",
      "Tech Stocks",
      "Emerging Stocks",
      "Nigerian Bonds",
      "Foriegn Bonds",
      "Commodities",
      "Real Estate",
      "T-Bills",
      "Alternative",
    ],
    datasets: [
      {
        label: "Allocation",
        data: [18, 4, 2, 7, 35, 15, 7, 12],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  //   FUNCTION TO CONVERT PERCENTAGE STRING TO NUMBERS

  function convertPercentageStringsToNumbersArray(dataArray) {
    return dataArray.map((entry) => {
      const convertedStocks = {};

      for (const key in entry.stocks) {
        if (entry.stocks.hasOwnProperty(key)) {
          const percentageString = entry.stocks[key];
          const numericValue = parseFloat(percentageString.replace("%", ""));
          convertedStocks[key] = numericValue;
        }
      }

      return { ...entry, stocks: convertedStocks };
    });
  }
  //   END OF FUNCTION TO CONVERT PERCENTAGE STRING TO NUMBERS

  //   FUNCTION TO GENERATE CHART DATA
  function generateChartData(backendData, userRiskIndex) {
    // Find the object in backendData with the matching risk index
    const selectedData = (
      backendData || convertPercentageStringsToNumbersArray(defaultData)
    )?.find((entry) => entry.index === userRiskIndex);

    if (!selectedData) {
      // Handle the case when there's no matching risk index
      console.error(`Data for risk index ${userRiskIndex} not found.`);
      return null;
    }
    //   END OF FUNCTION TO GENERATE CHART DATA

    // Extract allocations from the selected data
    const allocations = selectedData.stocks;

    // Filter out properties with a value of 0
    const filteredObject = Object.fromEntries(
      Object.entries(allocations).filter(([key, value]) => value !== 0)
    );
    const { _id, updatedAt, createdAt, ...others } = filteredObject;

    const data = {
      labels: Object.keys(others),
      datasets: [
        {
          label: "Allocation %",
          data: Object.values(others),
          backgroundColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(255, 0, 255, 1)",
            "rgba(0, 255, 255, 1)",
            "rgba(128, 0, 128, 1)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 186, 1)",
            "rgba(75, 19, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 9, 4, 1)",
            "rgba(55, 99, 132, 1)",
            "rgba(54, 122, 35, 1)",
            "rgba(255, 196, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(128, 128, 0, 1)",
            "rgba(0, 128, 0, 1)",
            "rgba(0, 0, 128, 1)",
            "rgba(255, 0, 255, 1)",
            "rgba(0, 255, 255, 1)",
            "rgba(128, 0, 128, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    return setData(data);
  }
  //   END OF FUNCTION TO GENERATE CHART DATA

  //   USEEFFECT TO GENERATE CHART DATA BASED ON RISK TOLERANCE VALUE
  useEffect(() => {
    generateChartData(backendResponse, riskToleranceValue);
  }, [riskToleranceValue]);
  //   END OF USEEFFECT TO GENERATE CHART DATA BASED ON RISK TOLERANCE VALUE

  //   USEEFFECT TO GENERATE CHART DATA BASED ON RISK TOLERANCE VALUE

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    const fetchRiskToRelevanceData = async () => {
      try {
        // Check if data is present in session storage
        const storedData = sessionStorage.getItem("riskToleranceData");

        if (storedData) {
          const convertedData = convertPercentageStringsToNumbersArray(
            JSON.parse(storedData)
          );
          // const convertedData = JSON.parse(storedData);
          setBackendResponse(convertedData);
        } else {
          // Fetch data from the API
          const response = await publicRequest.get("/tolerance", {
            cancelToken: cancelToken.token,
          });

          const convertedData = convertPercentageStringsToNumbersArray(
            response?.data
          );

          // Store data in session storage
          sessionStorage.setItem(
            "riskToleranceData",
            JSON.stringify(response?.data)
          );

          setBackendResponse(convertedData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchRiskToRelevanceData();

    return () => {
      cancelToken.cancel();
    };
  }, []);

  //   END OF USEEFFECT TO GENERATE CHART DATA BASED ON RISK TOLERANCE VALUE

  return (
    <div className="w-full h-screen flex pl-[64px] relative max-md:px-[12px] max-lg:px-[28px] max-lg:flex-col">
      <div className="flex flex-1 flex-col justify-center ">
        <div className="w-[420px] max-md:w-[90%] flex  flex-col items-center justify-center rounded-lg h-[100px] bg-white shadow-2xl absolute left-[30%] max-md:left-[5px] max-lg:-top-[100px] max-md:text-xs max-md:p-5 z-50 top-[30px] p-8">
          <div className="w-full flex justify-between px-5 max-md:px-0">
            <div className="font-bold text-blue-950">{`Risk score: ${riskToleranceValue}`}</div>
            <div className="">{`Example portfolio`}</div>
          </div>
          <DiscreteSliderMarks setRiskToleranceValue={setRiskToleranceValue} />
        </div>
        <h1 className="text-[60px]  max-md:text-[25px] max-lg:text-[35px]">
          Empower your future{" "}
          <span className="italic font-semibold "> with smart</span> investing
        </h1>
        <div className="text-[30px] text-[#9e9e9e] max-md:text-[15px] max-lg:text-[25px]">
          Effortless wealth-building with tailored portfolios and intelligent
          strategies.
        </div>
        <GetStarted />
      </div>
      <div className="flex flex-1 items-center justify-center ">
        <div className="w-[70%] max-lg:w-[100%] h-[70%] max-lg:h-[100%] p-[50px] max-lg:p-[0px] flex items-center justify-center  border-l max-lg:border-none border-[#c5c5c5]">
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
};

export default RiskTolerance;
