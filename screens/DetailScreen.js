import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

const DetailScreen = ({navigation,route}) => {
    const{id,title}=route.params;
    const [detail, setDatail] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    React.useLayoutEffect(()=>{
        navigation.setOptions({
            //title:'รายระเอียดสินค้า'
            title:title
        },[navigation,title])
    });

    const getData = async (id) => {
        try {
          setLoading(true);
          const res = await axios.get('https://api.codingthailand.com/api/course/'+id);
          console.log(res.data.data);
          //devicePixelRatio(JSON.stringify(res.data.data))
          setDatail(res.data.data);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setError(error); //set error ไปที่ stateของ error ว่าเกิดจาก axios หรือ server
        }
      };


      useEffect(() => {
        getData(id);
       },[id])

       if (loading === true) {
        return (
          <View>
            <ActivityIndicator color="#4654" size="large" />
          </View>
        );
      };
      const ItemSeparatorView = () => {
        return (
          // Flat List Item Separator
          <View
            style={{
              height: 0.5,
              width: "100%",
              backgroundColor: "#C8C8C8",
            }}
          />
        );
      };
    const _renderItem = ({ item }) => {
        return (
          
              <View stylele={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: "row", margin: 5 }}>
                  <Text style={style.thumbnail}>{index+1}</Text>
                  <View style={styles.dataContainer}>
                    <View style={styles.dataContent}>
                      <Text style={styles.title}>{item.ch_title}</Text>
                      <Text note numberOfLines={1}>{item.ch_dateadd}</Text>
                    </View>
                  </View>
                </View>
              </View>
            
        );
      };
      const _onRefresh = (id) => {
  return (
    <View>
      <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={detail}
        keyExtractor={(item, index) => item.ch_id.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={_renderItem}
        refreshing={loading}
        onRefresh={_onRefresh}
      />
    </View>
    </View>
  );
};
};
export default DetailScreen;


const styles = StyleSheet.create({
    container: {
      height: 80,
      elevation: 3,
      borderColor: "gray",
      borderRadius: 5,
      flexDirection: "row",
      marginHorizontal: 20,
    },
    dataContainer: {
      flex: 1,
    },
    thumbnail: {
      width: 70,
      height: 70,
    },
    dataContent: {
      marginTop: 5,
      marginLeft: 15,
    },
    title: {
      color: "#444",
      fontSize: 18,
      fontWeight: "bold",
    },
    detail: {
      fontSize: 16,
      color: "#888",
      fontWeight: "700",
    },
    addButtonStyle: {
      width: '100%',         
      marginBottom: 15,
  },
  });