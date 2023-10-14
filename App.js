import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/navigation/Navigation";
import { AppRegistry } from 'react-native';
import { axios } from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/movie/550?api_key=";
axios.defaults.params = {
  api_key: "4181841e8c0244da81a8a78e25dc749e",
  lenguage: "es-ES"
}


export default function App() {
  return (
    <NavigationContainer>
      <Navigation></Navigation>
    </NavigationContainer>
  );
}

