import {FaPizzaSlice,FaHamburger} from 'react-icons/fa';
import{GiNoodles,GiChopsticks} from 'react-icons/gi';
import { PiBowlFoodDuotone } from "react-icons/pi";
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';


function Categories(){
    return(
            <CategoryList>
                 <SLink to={'/crusine/Indian'}>
                 <PiBowlFoodDuotone />
                <h4>Indian</h4>
                </SLink>
                <SLink to={'/crusine/Italian'}>
                <FaPizzaSlice/>
                <h4>Italian</h4>
                </SLink>
                <SLink to={'/crusine/American'}>
                <FaHamburger/>
                <h4>American</h4>
                </SLink >
                <SLink to={'/crusine/Thai'}>
                 <GiChopsticks/>
                <h4>Thai</h4>
                </SLink>
                <SLink to={'/crusine/Chinese'}>
                <GiNoodles/>
                <h4>Chinese</h4>
                </SLink>
                

            </CategoryList>        
        );
}
const CategoryList =styled.div`
    display:flex;
    justify-content:center;
    margin:3rem 0rem;
    margin-left:1rem;

`;

const SLink =styled(NavLink)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    margin-right:2rem;
    text-decoration:none;
    background:linear-gradient(35deg,#3494E6,#EC6EAD);
    width:6rem;
    height:6rem;
    cursor:pointer;
    transform:scale(0.8);

    h4{
        color:white;
        font-size:0.8rem;
    }

    svg{
        color:white;
        font-size:1.5rem;

    }
    &.active{
        background:linear-gradient(to right,#a8ff78,#78ffd6);
        svg{
            color:white;
        }
        h4{
            color:white;    
        }
    }
`;
export default Categories;