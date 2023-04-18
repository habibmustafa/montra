import React, { memo, useState } from "react";
import { Dimensions, StatusBar, Text, TouchableWithoutFeedback, View } from "react-native";
import ActionSheet from "react-native-actions-sheet";
import MaterialButton from "../../components/MaterialButton";
import strings from "../../utils/Localization";

const Button = ({ data = { id: 0, label: strings.reset, value: strings.reset }, isActive = [0], onPress }) => (
   <TouchableWithoutFeedback onPress={onPress}>
      <View
         className={`py-3 w-[30%] px-4 mr-2 mb-2 items-center border border-light-40 rounded-3xl ${isActive.includes(data.id) && "bg-violet-20"} ${data.value === "Reset" && "py-2 px-4 w-[75px]"}`}>
         <Text
            className={`text-dark-100 text-sm font-medium ${isActive.includes(data.id) && "text-violet-100"}`}>{data.label}</Text>
      </View>
   </TouchableWithoutFeedback>
);

const FilterDialog = React.forwardRef(({ getFilter, getSort }, ref) => {
   const [filter, setFilter] = useState({
      data: [
         { id: 1, label: strings.income, value: 'Income' },
         { id: 2, label: strings.expense, value: 'Expense' },
         { id: 3, label: strings.transfer, value: 'Transfer' },
      ],
      isActive: [],
   });
   const [sort, setSort] = useState({
      data: [
         { id: 1, label: strings.highest, value: "Highest" },
         { id: 2, label: strings.lowest, value: "Lowest" },
         { id: 3, label: strings.newest, value: "Newest" },
         { id: 4, label: strings.oldest, value: "Oldest" },
      ],
      isActive: [],
   });

   const handleFilter = (id) => {
      const newIsActive = [...filter.isActive];
      const index = newIsActive.indexOf(id);

      if (index === -1) {
         // id değeri isActive array'inde yoksa, yeni id değerini ekleyin
         newIsActive.push(id);
      } else {
         // id değeri isActive array'inde varsa, id değerini çıkarın
         newIsActive.splice(index, 1);
      }

      setFilter({
         ...filter,
         isActive: newIsActive,
      });

   };

   const handleApply = () => {
      getFilter(filter.isActive.length ? filter.isActive.map(item => filter.data[item - 1].value.toLowerCase()) : ["expense", "income", "transfer"]);
      getSort(sort.isActive.length ? sort.data[sort.isActive[0]-1].value : "Newest");
      ref.current?.hide();
   };

   return (
      <ActionSheet ref={ref} containerStyle={{
         borderTopLeftRadius: 24,
         borderTopRightRadius: 24,
         paddingHorizontal: 16,
         paddingTop: 12,
         paddingBottom: Dimensions.get("screen").height - Dimensions.get("window").height - StatusBar.currentHeight,
      }} closeOnTouchBackdrop closeOnPressBack gestureEnabled headerAlwaysVisible
                   indicatorStyle={{ backgroundColor: "#D3BDFF" }}>
         <View className="w-full">
            <View className="header mt-2 mb-5 flex-row justify-between items-center">
               <Text className="text-black font-semibold text-base">{strings.filtertransaction}</Text>
               <Button onPress={() => {
                  setSort({ ...sort, isActive: [] });
                  setFilter({ ...filter, isActive: [] });
               }} />
            </View>

            <View className="filter-by mb-2">
               <Text className="text-black font-semibold text-base mb-4">{strings.filterby}</Text>
               <View className="buttons flex-row flex-wrap">
                  {filter.data.map(data =>
                     <Button key={data.id} data={data} isActive={filter.isActive} onPress={() => {
                        handleFilter(data.id);
                     }} />)
                  }

               </View>
            </View>

            <View className="sort-by mb-2">
               <Text className="text-black font-semibold text-base mb-4">{strings.sortby}</Text>
               <View className="buttons flex-row flex-wrap">
                  {sort.data.map(data =>
                     <Button key={data.id} data={data} isActive={sort.isActive} onPress={() => {
                        setSort({ ...sort, isActive: [data.id] });
                     }} />)
                  }

               </View>
            </View>

            <View className="category">
               <Text className="text-black font-semibold text-base">{strings.category}</Text>
               <View className="flex-row justify-between my-6">
                  <Text className="text-dark-25 font-medium text-base">{strings.choosecategory}</Text>
                  <Text className="text-light-20 font-medium text-sm">0 {strings.selected} {">"}  </Text>
               </View>
            </View>


            <MaterialButton title={strings.apply} titleColor="#fff" onPress={handleApply} />
         </View>
      </ActionSheet>
   );
});

export default memo(FilterDialog);
