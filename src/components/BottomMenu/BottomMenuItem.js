import React from "react";
import { View } from "react-native";
import { blue, grey } from "../../styles";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  iconName: string,
  isCurrent?: boolean,
};

export const BottomMenuItem = ({ iconName, isCurrent }: Props) => {
  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <AntDesign
        name={iconName}
        size={26}
        style={{ color: isCurrent ? "black" : "gray",opacity:0.7 }}
      />
    </View>
  );
};
