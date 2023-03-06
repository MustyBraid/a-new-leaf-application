import React from 'react';
import { GET_MY_PLANTS } from '../utils/queries';

const TestCard = (props) => {
    return (
        <p>{props.data}</p>
    );
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
*/