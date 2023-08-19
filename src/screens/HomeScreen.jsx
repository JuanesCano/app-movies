import {
  ActivityIndicator,
  Button,
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { Component, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-snap-carousel";
import Movie from "../components/Movie";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HorizontalSlider from "../components/HorizontalSlider";
import { useMovies } from "../hooks/useMovies";

const { width: windowWidth } = Dimensions.get("window");

export default function HomeScreen() {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();
  const [isLoading, peliculas] = useMovies();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="blue" size={80} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 15 }}>
        <View style={{ height: 440 }}>
          <Carousel
            data={peliculas.nowPlaying}
            renderItem={({ item }) => <Movie movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>

        <HorizontalSlider movies={peliculas.popular} title="Popular" />

        <HorizontalSlider movies={peliculas.topRated} title="Top Rated" />

        <HorizontalSlider movies={peliculas.upComing} title="Up Coming" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
