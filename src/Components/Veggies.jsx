import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/sea-green';
import {Link} from 'react-router-dom';

function Veggies(){
    const [Veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    try {
        const check =localStorage.getItem('Veggie');//for checking if item is already in local storage to save number of api requests
        if(check){
            setVeggie(JSON.parse(check));
        }
        else{
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=7b47f663b4d3437d8173aeb5c9961a97&number=9`
              );
              const data = await api.json();

              localStorage.setItem("Veggie",JSON.stringify(data.recipes));
              setVeggie(data.recipes); 
              console.log(data.recipes);
        }
    
      
    
    } catch (error) {
      console.error('Error fetching popular recipes:', error);
    }
  };
    return(
    <div>
        <Wrapper>
        <h3>Green Cuisine Galore: Explore the World of Vegetarian Dishes</h3>
        <Splide options={{
            perPage:3,
            arrows:false,
            pagination:false,
            drag:'free',
            gap:'5rem'
        }}>
            {Veggie.map((recipe)=>{
                return(
                    <SplideSlide key={recipe.id}>
                    <Card>
                        <Link to={'/recipe/'+recipe.id}>
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.title}></img>
                        <Gradient/>
                        </Link>
                    </Card>
                    </SplideSlide>
                );
            })}
        </Splide>
    </Wrapper>
</div>
    );
 }


 const Wrapper=styled.div`
margin:2rem 0rem;
`;

const Card=styled.div `
min-height:25rem;
border-radius:3rem;
overflow:hidden;
position:relative;


p{
    padding:10px;
    position:absolute;
    z-index:10;
    left:50%;
    bottom:0%;
    transform:translate(-50%,0%);
    color:white;
    width:100%
    text-align:center;
    font-weight:600;
    font-size:1rem;
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center;


}



img{
    border-radius:3rem;
    width:400px;
    height:400px;
    position:absolute;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
}
`;
const Gradient =styled.div`
z-index:3;
position:absolute;
width:100%;
height:100%;
background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0,0.5));
`
;
 export default Veggies;
 