import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import React from "react";
import styles from "./components/styles";

const SecondPage = ({ navigation }) => {
    const [postText] = React.useState();
    return (
        <>
         <View style={styles.container}>
        <View style={{ flex:1, justifyContent:"center",alignItems: "center" }}>
          <Text style={styles.heading}>This is the First Page</Text>
              
              <Button
                title="GO TO FIRST  PAGE"
                onPress={() => {
                  navigation.navigate("First Page");
                }}
              />
              <Button
                title="GO TO THIRD PAGE"
                onPress={() => {
                  navigation.navigate("Third Page");
                }}
              />
            </View>
            <Text
          style={{
            color: "gray",
          }}
        >
         Tni-Nichi lnstitute of Technoclogy
        </Text>
          </View>
        </>
      );
};

export default SecondPage;

