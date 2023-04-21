import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import MaterialButton from "../../../components/MaterialButton";
import { SvgXml } from "react-native-svg";
import strings from "../../../utils/Localization";
import Dropdown from "../../../components/Dropdown";
import { useToast } from "react-native-toast-notifications";

const ExportData = () => {
   const [data, setData] = useState("All");
   const [date, setDate] = useState("Last 30 days");
   const [format, setFormat] = useState("CSV");

   const toast = useToast()

   useEffect(() => {
      toast.show(strings.availablesoon)
   }, [])

   return (
      <View className="h-full bg-white pt-10 px-4">
         <View className="mb-6 relative z-20">
            <Text className="font-medium text-base text-dark-75 mb-3">
               What data do your want to export?
            </Text>
            <Dropdown
               placeholder="All"
               data={[
                  { label: "All", value: "All" },
                  { label: "Expense", value: "Expense" },
                  { label: "Income", value: "Income" },
                  { label: "Transfer", value: "Transfer" },
               ]}
               value={data}
               onChange={(val) => {
                  setData(val.value);
               }}
            />
         </View>

         <View className="mb-6 relative z-10">
            <Text className="font-medium text-base text-dark-75 mb-3">
               When date range?
            </Text>
            <Dropdown
               placeholder="All"
               data={[
                  { label: "Last 30 days", value: "Last 30 days" },
                  { label: "Last 3 months", value: "Last 3 months" },
                  { label: "Last 6 months", value: "Last 6 months" },
                  { label: "Last year", value: "Last year" },
               ]}
               value={date}
               onChange={(val) => {
                  setDate(val);
               }}
            />
         </View>

         <View className="mb-6 relative z-0">
            <Text className="font-medium text-base text-dark-75 mb-3">
               What format do you want to export?
            </Text>
            <Dropdown
               placeholder="CSV"
               data={[
                  { label: "CSV", value: "CSV" },
                  { label: "JSON", value: "JSON" },
                  { label: "PDF", value: "PDF" },
                  { label: "Google Drive", value: "Google Drive", disabled: true },
               ]}
               value={format}
               onChange={(val) => {
                  setFormat(val);
               }}
            />
         </View>

         <View className="flex-1 justify-end mb-5">
            <MaterialButton
               title="Export Data"
               titleColor="#FCFCFC"
               color="#ccc"
               leading={
                  <SvgXml
                     className="mr-2.5"
                     xml={`<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M27.5 20C27.2348 20 26.9804 20.1054 26.7929 20.2929C26.6054 20.4804 26.5 20.7348 26.5 21V25C26.5 25.2652 26.3946 25.5196 26.2071 25.7071C26.0196 25.8946 25.7652 26 25.5 26H7.5C7.23478 26 6.98043 25.8946 6.79289 25.7071C6.60536 25.5196 6.5 25.2652 6.5 25V21C6.5 20.7348 6.39464 20.4804 6.20711 20.2929C6.01957 20.1054 5.76522 20 5.5 20C5.23478 20 4.98043 20.1054 4.79289 20.2929C4.60536 20.4804 4.5 20.7348 4.5 21V25C4.5 25.7956 4.81607 26.5587 5.37868 27.1213C5.94129 27.6839 6.70435 28 7.5 28H25.5C26.2956 28 27.0587 27.6839 27.6213 27.1213C28.1839 26.5587 28.5 25.7956 28.5 25V21C28.5 20.7348 28.3946 20.4804 28.2071 20.2929C28.0196 20.1054 27.7652 20 27.5 20Z" fill="white"/>
                              <path d="M14.38 21.12C14.9425 21.6818 15.705 21.9974 16.5 21.9974C17.295 21.9974 18.0575 21.6818 18.62 21.12L24.28 15.46C24.4662 15.2726 24.5708 15.0192 24.5708 14.755C24.5708 14.4908 24.4662 14.2374 24.28 14.05C24.187 13.9563 24.0764 13.8819 23.9546 13.8311C23.8327 13.7803 23.702 13.7542 23.57 13.7542C23.438 13.7542 23.3073 13.7803 23.1854 13.8311C23.0636 13.8819 22.953 13.9563 22.86 14.05L17.5 19.41V5C17.5 4.73478 17.3946 4.48043 17.2071 4.29289C17.0196 4.10536 16.7652 4 16.5 4C16.2348 4 15.9804 4.10536 15.7929 4.29289C15.6053 4.48043 15.5 4.73478 15.5 5V19.41L10.14 14.05C10.047 13.9563 9.93643 13.8819 9.81457 13.8311C9.69271 13.7803 9.562 13.7542 9.42999 13.7542C9.29798 13.7542 9.16727 13.7803 9.04542 13.8311C8.92356 13.8819 8.81296 13.9563 8.71999 14.05C8.53374 14.2374 8.4292 14.4908 8.4292 14.755C8.4292 15.0192 8.53374 15.2726 8.71999 15.46L14.38 21.12Z" fill="white"/>
                              </svg>
                           `}
                  />
               }
            />
         </View>
      </View>
   );
};

export default ExportData;
