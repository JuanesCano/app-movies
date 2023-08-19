import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [peliculas, setPeliculas] = useState({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upComing: [],
  });

  const getMovies = useCallback( async () =>{ 
    try {
        setIsLoading(true);
        // const { data: nowPlaying } = await axios.get("/now_playing");
  
        // const { data: popular } = await axios.get("/popular");
  
        // const { data: topRated } = await axios.get("/top_rated");
  
        // const { data: upComing } = await axios.get("/upcoming");
  
        const { data: nowPlaying } = axios.get("/now_playing");
  
        const { data: popular } = axiosos.get("/popular");
  
        const { data: topRated } = axios.get("/top_rated");
  
        const { data: upComing } = axios.get("/upcoming");
  
        const response = await Promise.all([
          nowPlaying,
          popular,
          topRated,
          upComing,
        ]);
  
        setPeliculas({
          nowPlaying: response[0].data.results,
          topRated: response[1].data.results,
          popular: response[2].data.results,
          upComing: response[3].data.results,
        });
  
        // setIsLoading(false);
  
        console.log(
          {
            nowPlaying: nowPlaying.results,
            topRated: topRated.results,
            popular: popular.results,
            upComing: upComing.results,
          },
          "carga"
        );
      } catch (error) {
        console.log("Error en getMovies", error.message);
        // setIsLoading(false);
      }
  }, []);


  useEffect(() => {
    getMovies();
  }, []);

  return {
    peliculas,
    isLoading,
  };
};
