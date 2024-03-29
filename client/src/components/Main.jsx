import React from 'react'
import plusSign from '../assets/plusSign.png';
import Plant1 from '../assets/Plant1.png';
import { useQuery } from '@apollo/client';
import { useMutation } from "@apollo/client";
import { GET_ME, GET_MY_PLANTS, GET_USERS } from '../utils/queries';

function User(props) {
  //version with cache policy
  const { loading, error, data } = useQuery(GET_ME, {
    fetchPolicy: 'network-only', //Tells this query not to check the cache
  });

  //version without cache policy
  //const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const listItems = data.me.plants.map(tilize);

  return (
    <div>
      <p>Honk {JSON.stringify(data.me.plants)}</p>
      <p>Birthdays: {tellPlants(data.me.plants)}</p>
      {listItems}
    </div>
  );
}

function tilize (tilly, i) {
  return (
  <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
    <div className="shadow-md shadow-[#ccc9c4] hover:scale-110 duration-500 rounded-2xl"> {tilly.nickname}
      <a href="/PlantSlideshow"><img className="w-20 mx-auto opacity-25 " src={Plant1} alt="" /></a>
    </div>
  </div>);
}

function tellPlants(plantArr) {
  let myReturn = "";
  plantArr.forEach(element => {
    let textDate = new Date(element.birthDate).toDateString();
    myReturn += textDate + ", ";
  });
  return myReturn;
}

const Main = () => {
  return (

    <div name="skills" className="w-full h-screen bg-white text-zinc-400">
      {/* Weather Container & Plants */}

      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <User />
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