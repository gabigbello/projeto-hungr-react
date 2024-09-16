<<<<<<< HEAD
import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({categoria}) => {

    const {food_list} = useContext(StoreContext)    

  return (
    <div className='food-display' id='food-display'>
      <h2>Os melhores pratos para você</h2>
      <div className='food-display-list'>
        {food_list.map((item,index)=>{
          {console.log(categoria,item.categoria);}
          if(categoria==="All" || categoria===item.categoria){
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          }

        })}
      </div>
    </div>
  )
}

export default FoodDisplay
=======
import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({categoria}) => {

    const {food_list} = useContext(StoreContext)    

  return (
    <div className='food-display' id='food-display'>
      <h2>Os melhores pratos para você</h2>
      <div className='food-display-list'>
        {food_list.map((item,index)=>{
          {console.log(categoria,item.categoria);}
          if(categoria==="All" || categoria===item.categoria){
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          }

        })}
      </div>
    </div>
  )
}

export default FoodDisplay
>>>>>>> c0bebb376d5934a6a5b21a718cdfdd6a8349cff0
