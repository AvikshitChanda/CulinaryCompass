import {useState,useEffect,react} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';


function Recipe(){

    let params=useParams();
    const [details,setDetails]=useState({});
    const [activeButton,setActiveButton]=useState("instructions");

    const fetchDetails=async()=>{
        const data=await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=7b47f663b4d3437d8173aeb5c9961a97`)
        const detailsData =await data.json();
        setDetails(detailsData);
        console.log(detailsData);
    }
    useEffect(()=>{
        fetchDetails();
    },[params.name]);

    return <DetailWrapper>
        <ImageHeader>
            <h2>{details.title}</h2>
            <img src={details.image} alt="" />
        </ImageHeader>
        <Info>
        <Button className={activeButton==='instructions'?'active':''}onClick={()=>setActiveButton("instructions")}>Instructions</Button>
        <Button className={activeButton==='ingredients'?'active':''}onClick={()=>setActiveButton("ingredients")}>Ingredients</Button>
        </Info>
        {activeButton === "instructions" && (
             <Summary>
             <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
             <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
         </Summary>
        )}
        {activeButton === "ingredients" && (
            <Ingredients>
                 <ul>
            {details.extendedIngredients.map((ingredient)=>
            <li key={ingredient.id}>{ingredient.original}</li>
            )}
        </ul>
            </Ingredients>
           
        )}
        
    </DetailWrapper>
}


const DetailWrapper=styled.div`
    margin-top:10rem;
    margin-bottom:5rem;
    display:flex;
    flex-direction: column;
    align-items: center;
    
    .active{
        background:linear-gradient(35deg,#20e3b2,#29ffc6);
        color:white;
    }
    h2{
        margin-bottom:2rem;
    
    }
    h3{
        font-size:20px;
        
    }
    li{
        font-size:1.2rem;
        line-height:2.5rem;
    }
    ul{
        margin-top:2rem;
    }
    img{
        border-radius:20px;
        width:550px;
        height:350px;
    }
  

`
const Button=styled.div`
  padding:1rem 2rem;
  color:white;
  background:linear-gradient(35deg,#3494E6,#EC6EAD);
  border:2px solid black;
  margin-right:6rem;
  font-weight:600; 
  align-self: center;
  cursor:pointer;  
  margin-top:4rem;
  margin-left:-4rem;

`

const Info=styled.div`
   margin-left:10rem;
   display: flex;
  flex-direction: row;
  margin-bottom:20rem;

`
const Summary = styled.div`
  margin-top: -19rem; 
`;

const ImageHeader=styled.div`
margin-top:-8rem;
`

const Ingredients=styled.div`
margin-top:-15rem;

`

export default Recipe;