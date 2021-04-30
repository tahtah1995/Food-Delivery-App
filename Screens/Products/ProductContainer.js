import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  ScrollView,
  Dimensions,
  ImageBackground,
} from "react-native";
import ProductList from "./ProductList";
import { Container, Header, Icon, Item, Input, Text } from "native-base";
import baseURL from "../../assets/common/baseUrl";
import axios from "axios";
import { SearchBar } from "react-native-elements";
import SearchedProducts from "./SearchedProducts";
import Banner from "../../shared/Banner";
import CategoryFilter from "./CategoryFilter";
const data = require("../../assets/Data/products.json");

var { height } = Dimensions.get("window");

const ProductContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState();
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState([]);
  const [productsCtg, setproductsCtg] = useState([]);
  const [initialState, setInitialState] = useState([]);
  const [loading, setLoading] = useState(true)

  useFocusEffect(
    useCallback(() => {
      setFocus(false);
      setActive(-1);
      axios
    .get(`${baseURL}categories`)
    .then((res) => {
      setCategories(res.data);
    })
    .catch((error) => {
      console.log("Api call error");
    });

  //categories

  axios
    .get(`${baseURL}products`)
    .then((res) => {
      setProducts(res.data);
      setProductsFiltered(res.data);
      setproductsCtg(res.data);
      setInitialState(res.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log("Api call error");
    });

  return () => {
    setProducts([]);
    setProductsFiltered([]);
    setFocus();
    setCategories([]);
    setActive();
    setInitialState();
  }
    }, [])
  );

  //products

  

  const searchProduct = (text) => {
    setProductsFiltered(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
    );
  };

  const openList = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };

  {
    /*Categories*/
  }
  const changeCtg = (ctg) => {
    {
      ctg === "all"
        ? [setproductsCtg(initialState), setActive(true)]
        : [
            setproductsCtg(
              products.filter((i) => i.category._id === ctg),

              setActive(true)
            ),
          ];
    }
  };

  return (
    <>
    {loading == false ? (

<Container>
      <SearchBar
        placeholder="Type Here..."
        onFocus={openList}
        onChangeText={(text) => searchProduct(text)}
        cancelButtonTitle="Cancel"
        platform="android"
        onCancel={onBlur}
      ></SearchBar>

      {focus == true ? (
        <SearchedProducts
          productsFiltered={productsFiltered}
          navigation={props.navigation}
        />
      ) : (
        <ScrollView>
          <View>
            <View>
              <Banner />
            </View>
            <View>
              <CategoryFilter
                categories={categories}
                categoryFilter={changeCtg}
                productsCtg={productsCtg}
                active={active}
                setActive={setActive}
              />
            </View>
            {productsCtg.length > 0 ? (
              <View style={styles.listContainer}>
                {productsCtg.map((item) => {
                  return (
                    <ProductList
                      key={item.name}
                      item={item}
                      navigation={props.navigation}
                    />
                  );
                })}
              </View>
            ) : (
              <View style={[styles.center, { height: height / 2 }]}>
                <Text>No products found</Text>
              </View>
            )}
          </View>
        </ScrollView>
      )}
    </Container>
    ):(

      <Container style={[styles.center, { backgroundColor: "#f2f2f2" }]}>
      <ActivityIndicator size="large" color="red" />
    </Container>
  )}
 </>
);
};
const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  listContainer: {
    height: 1800,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
export default ProductContainer;
