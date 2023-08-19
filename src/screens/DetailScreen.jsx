import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import MovieDetails from "../components/MovieDetails";
import { useMoviesDetails } from "../hooks/useMovieDetails";

const screenHeight = Dimensions.get("screen").height;

export default function DetailScreen({ route }) {
  const movie = route.params;
  const navigation = useNavigation();

  const uri = `https:image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {isLoading, cast, movieFull} = useMoviesDetails(movie);
  
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{ uri }} style={styles.image} />
        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>

        <Text style={styles.title}>{movie.title}</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator color="blue" size={80} />
      ) : (
        <MovieDetails movieFull={movieFull} cast={cast} />
      )}

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack}
      >
        <Ionicons name="arrow-back-outline" color="black" size={55} />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: screenHeight * 0.7,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 7,
    borderBottomEndRadius: 25,
    borderBottomStarRadius: 25,
  },

  imageBorder: {
    flex: 1,
    borderBottomEndRadius: 25,
    borderBottomStarRadius: 25,
    overflow: "hidden",
  },

  image: {
    flex: 1,
  },

  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },

  subtitle: {
    fontSize: 16,
    opacity: 0.8,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
  },

  backButton: {
    position: "absolute",
    top: 30,
    left: 5,
  },
});
