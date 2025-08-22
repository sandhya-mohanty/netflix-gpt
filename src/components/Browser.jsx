import React from "react";
import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useUpcommingMovies } from "../hooks/useUpcommingMovies";
import { useTrendingMovies } from "../hooks/useTrendingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browser = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useUpcommingMovies();
  useTrendingMovies();
  return (
    <div className="  ">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browser;
