import styled from 'styled-components';
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
function Search() {

    const [InputValue,setInputValue]=useState("");
    const navigate=useNavigate();

    const submitHandler =(e)=>{
        e.preventDefault();
        navigate("/searched/"+InputValue);
    }
  return (
    <StyleForm onSubmit={submitHandler}>
        <div>
       <input  onChange={(e)=>setInputValue(e.target.value )}type='text' value={InputValue} ></input>
        <FaSearch></FaSearch>
       
        </div>
        
    </StyleForm>
  )
}

const StyleForm=styled.form`
    margin:0rem 15rem;
    div{
        position:relative;
        width:100%;
        margin-top:-5rem;
    }
  
    input{
        border:none;
        background:linear-gradient(35deg,#3494E6,#EC6EAD);
        font-size:1.5rem;
        color:white;
        padding:1rem 3rem;
        border-radius:1.5rem;
        outline:none;
        width:100%
    }

    svg{
        position:absolute;
        top:50%;
        left:0%;
        transform:translate(100%,-50%);
        color:black;
    }

`

export default Search