import { View, Text, Image, Button } from "react-native";
import React from "react";

export default function ItemPage({ url, title, price, desc }) {
  return (
    <>
      <View>
        <Image
          source={{
            uri: "https://fsd.ch/wp-content/uploads/2022/08/Social-Media.png",
          }}
          style={{ width: "100%", height: 400, position: "absolute" }}
        />
      </View>
      <View
        style={{
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
          backgroundColor: "white",
          marginTop: "80%",
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 40,
          }}
        >
          Item Name
        </Text>
        <Text
          style={{
            textAlign: "center",
            width: "85%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 50,
            fontSize: 20,
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          possimus fugit non dolorum qui magnam quo quidem. Expedita facilis
          quia earum voluptate molestias, in, omnis repudiandae libero ex
          numquam temporibus.
        </Text>
        <Text style={{ textAlign: "center", marginTop: 50, fontSize: 35 }}>
          950 ₪
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 80,
          }}
        >
          <View
            style={{
              backgroundColor: "#40aee7",
              borderRadius: 6,
              width: "40%",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Button title="Add To Cart" color='black'></Button>
          </View>
          <View
            style={{
                backgroundColor: "#40aee7",
                borderRadius: 6,
              width: "40%",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Button title="Buy It Now" color="black"></Button>
          </View>
        </View>
      </View>
    </>
  );
}
