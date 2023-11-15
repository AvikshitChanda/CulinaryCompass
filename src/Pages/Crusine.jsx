import  { useEffect, useState } from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link,useParams} from 'react-router-dom';

function Crusine() {

    const [Crusine,setCrusine]=useState([]);

    let parameter=useParams();

    const getCrusine = async(name)=>{
        const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=7b47f663b4d3437d8173aeb5c9961a97&cuisine=${name}`);
        const recipes=await data.json();
        setCrusine(recipes.results);
    };

    useEffect(()=>{
       getCrusine(parameter.type);
      console.log(parameter.type);
    },[parameter.type]);
  return (
    <Grid>
        {Crusine.map((item)=>{
            return(
                <Card key={item.id}>
                    <Link to={'/recipe/'+item.id}>
                    <img src={item.image} alt=""/>
                    <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })}
    </Grid>
  )
}


const Grid=styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(20rem,1fr));
    grid-gap:3rem;

`;
const Card =styled.div`
    img{
        width:100%;
        border-radius:2rem;

    }

    a{
        text-decoration:none;
    }
    h4{
        text-align:center;
        padding:1rem;
    }
`

export default Crusine;