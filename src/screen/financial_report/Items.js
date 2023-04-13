import { Text, View } from "react-native";
import { Badge, ProgressBar } from "react-native-paper";
import Slider from "@react-native-community/slider";

const Items = () => {
   return (
      <View>
         <View>
            <View className="flex-row justify-between">
               <View className="flex-row">
                  <Badge />
                  <Text>Shopping</Text>
               </View>

               <Text>- $120</Text>
            </View>

            <ProgressBar
               progress={0.4} color="#FCAC12"
               style={{ height: 12, borderRadius: 8, backgroundColor: "#F1F1FA" }} />

            {/*<Slider*/}
            {/*   style={{width: '100%', height: 40}}*/}

            {/*   minimumValue={0}*/}
            {/*   maximumValue={1}*/}
            {/*   value={0.3}*/}

            {/*   minimumTrackTintColor="#ddd"*/}
            {/*   maximumTrackTintColor="#000000"*/}
            {/*/>*/}

         </View>
      </View>
   );
};

export default Items;
