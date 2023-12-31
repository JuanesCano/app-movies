import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CastItem() {
  const uri = `https:image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path && <Image source={{ uri }} style={styles.image} />}

      <View style={styles.actorInfo}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{actor.name}</Text>

        <Text style={{ fontSize: 18, opacity: 0.7 }}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    height: 50,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 7,
    marginLeft: 10,
    paddingRight: 15,
  },

  actorInfo: {
    marginLeft: 10,
    marginTop: 10,
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
