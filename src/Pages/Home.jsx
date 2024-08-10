import React, { useEffect, useState } from 'react'
import SideNavGenreList from '../Componets/SideNavGenreList'
import GlobalApi from '../Servies/GlobalApi'
import Slider from '../Componets/Slider'
import PopularGameList from '../Componets/PopularGameList'
import TrendingGameList from '../Componets/TrendingGameList'

function Home() {
  
  const [gameList, setGameList] = useState([]);
  const [gameListByGenre, setGameListByGenre] = useState([]);
  
  useEffect(() => {
      const fetchData = async () => {
       
          try {
              
              const popularGamesResponse = await GlobalApi.getPopularGames();
              setGameList(popularGamesResponse.data.results);

              // Fetch game list by genre 
              await getGameList(7);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      fetchData();
  }, []);

  const getGameList = async (genreId) => {
      if (genreId !== 0) {
          try {
              const gameListByGenreResponse = await GlobalApi.getGameListByGenreId(genreId);
              setGameListByGenre(gameListByGenreResponse.data.results);
          } catch (error) {
              console.error('Error fetching game list by genre:', error);
          }
      }
  };

  return (
      <div className='grid grid-cols-4 p-8'>
          <div className='hidden md:flex'>
              <SideNavGenreList 
                  selectedGenreId={(genreId) => getGameList(genreId)} 
              />
          </div>
          {gameList.length > 0 && gameListByGenre.length > 0 ? (
              <div className='md:col-span-3 col-span-4 px-3'>
                  <Slider game={gameListByGenre[0]} />
                  <TrendingGameList gameList={gameList} />
                  <PopularGameList gameList={gameListByGenre} />
              </div>
          ) : null}
      </div>
  );
}

export default Home