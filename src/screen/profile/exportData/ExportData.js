import React, { useState } from "react";
import { StatusBar, Text, View } from "react-native";
import DropdownPicker from "../../../components/DropdownPicker";

const ExportData = () => {
   const [data, setData] = useState("All");
   const [date, setDate] = useState("Last 30 days");
   const [format, setFormat] = useState("CSV");

   return (
      <View className="h-full bg-white pt-10 px-4">
         <StatusBar backgroundColor="#fff" animated={true} barStyle="dark-content" />

         <View className="mb-6">
            <Text className="font-medium text-base text-dark-75 mb-3">What data do your want to export?</Text>
            <DropdownPicker
               label="All"
               items={[
                  { label: "All", value: "All" },
                  { label: "Expense", value: "Expense" },
                  { label: "Income", value: "Income" },
                  { label: "Transfer", value: "Transfer" },
               ]}
               selectedList={data}
               setSelectedList={(val) => {
                  setData(val);
               }}
            />
         </View>

         <View className="mb-6">
            <Text className="font-medium text-base text-dark-75 mb-3">When date range?</Text>
            <DropdownPicker
               label="All"
               items={[
                  { label: "Last 30 days", value: "Last 30 days" },
                  { label: "Last 3 months", value: "Last 3 months" },
                  { label: "Last 6 months", value: "Last 6 months" },
                  { label: "Last year", value: "Last year" },
               ]}
               selectedList={date}
               setSelectedList={(val) => {
                  setDate(val);
               }}
            />
         </View>

         <View className="mb-6">
            <Text className="font-medium text-base text-dark-75 mb-3">What format do you want to export?</Text>
            <DropdownPicker
               label="CSV"
               items={[
                  { label: "CSV", value: "CSV" },
                  { label: "JSON", value: "JSON" },
                  { label: "PDF", value: "PDF" },
                  { label: "Google Drive", value: "Google Drive", disabled: true}
               ]}
               selectedList={format}
               setSelectedList={(val) => {
                  setFormat(val);
               }}
            />
         </View>

      </View>
   );
};

export default ExportData;
