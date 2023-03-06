import React from 'react';

const TestCard = (props) => {
    return (
        <p>{unwrapObject(props.data)}</p>
    );
}

function unwrapObject(obby) {
    let myReturn = '';
    //if obby is an array...
    if (Array.isArray(obby)) {
        myReturn += "[";
        //for each item in the array...
        for (let element of obby) {
            //recurse and return
            myReturn += unwrapObject(element);
        }
        myReturn += "]";
    }
    //if obby is an object which is not an array
    else if (typeof obby == "object" && obby != null) {
        myReturn += "{";
        //loop through the keys
        for (let key in obby) {
            //recurse and return
            myReturn += ` ${key}: ${unwrapObject(obby[key])},`;
        }
        myReturn = myReturn.slice(0, myReturn.length - 1);
        myReturn += "}";
    }
    //if obby is not an array or an object
    else {
        //concat to return (implicit casting handles null, toString() didn't)
        myReturn += obby;
    }
    return myReturn;
}

export default TestCard;

/*
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
*/