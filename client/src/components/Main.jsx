import React from 'react'
import plusSign from '../assets/plusSign.png';
import Plant1 from '../assets/Plant1.png';
import { useQuery } from '@apollo/client';
import { useMutation } from "@apollo/client";
import { GET_ME, GET_MY_PLANTS, GET_USERS } from '../utils/queries';
import TestCard from './TestCard';

const Main = () => {
  //retrieves all the plants of the current user
  const { loading, error, data } = useQuery(GET_MY_PLANTS);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  //creates a TestCard instance for each plant
  const plants = data.me.plants.map((item, i) => {return <TestCard key={i} data={item}/>});

  return (

    <div name="skills" className="w-full h-screen bg-white text-zinc-400">
      {/* Weather Container & Plants */}

      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {plants} {/* list of TestCards */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">

          <div className="shadow-md shadow-[#ccc9c4] hover:scale-110 duration-500 rounded-2xl">
            <a href="/PlantSlideshow"><img className="w-20 mx-auto opacity-25 " src={plusSign} alt="" /></a>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Main