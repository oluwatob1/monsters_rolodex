import React from "react";
import './card.css';

export const Card = props =>{
     return(
         <div className="card-container">
             <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster" />
             <h2> { props.monster.name } </h2>
             <p> { props.monster.email } </p>
        </div>
     )
}

// import React from 'react';
// import './card.css';
// import FriedRice from '../../images/friedrice.jpg';
// import Burger from '../../images/friedrice.jpg';
// import Crab from '../../images/friedrice.jpg';
// import Jollof from '../../images/friedrice.jpg';
// import Salad from '../../images/friedrice.jpg';
// import Potato from '../../images/friedrice.jpg';

// const Card = () => {

//      const foods = [
//           {id: 1, foodName: 'FriedRice', image: FriedRice, price: '$5'},
//           {id: 1, foodName: 'Burger', image: Burger, price: '$5'},
//           {id: 1, foodName: 'Crab', image: Crab, price: '$5'},
//           {id: 1, foodName: 'Jollof', image: Jollof, price: '$5'},
//           {id: 1, foodName: 'Salad', image: Salad, price: '$5'},
//           {id: 1, foodName: 'Potato', image: Potato, price: '$5'}
//      ]

//   return (
//      <div className="card-container">
//           <img src={foods.image} alt="monster" />
//           <h2> { foods.name } </h2>
//           <p> { foods.email } </p>
//      </div>
//   )
// }

// export default Card;