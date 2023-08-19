import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import currencyFormatter from "currency-formatter";
import CastItem from "./CastItem";

export default function MovieDetails({ movieFull, cast }) {
  return (
    <>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name="star-outline"
            size={32}
            color="green"
            style={{ marginRight: 5 }}
          />

          <Text>{movieFull.vote_average}</Text>

          <Text style={{ marginLeft: 5 }}>
            -{movieFull.genres.map((g) => g.name).join(" ")}
          </Text>
        </View>

        <Text style={{ marginTop: 10, fontSize: 23, fontWeight: "bold" }}>
          {movieFull.overview}
        </Text>

        <Text style={{ fontSize: 16 }}>{movieFull.overview}</Text>

        <Text style={{ marginTop: 10, fontSize: 23, fontWeight: "bold" }}>
          Presupuesto
        </Text>

        <Text>
          {currencyFormatter.format(movieFull.budget, {
            code: "USD",
          })}
        </Text>

        <View style={{ marginBottom: 100, marginTop: 10 }}>
          <Text>Actores</Text>

          <FlatList
            data={cast}
            renderItem={({ item }) => <CastItem actor={item} />}
            keyExtractor={(item) => item.id.toString()}
            style={{ marginTop: 10, height: 70 }}
             horizontal={true}
             showsHorizontalScrollIndicator={false}/>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
