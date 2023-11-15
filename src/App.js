  import Pages from "./Pages/Pages";
  import Categories from "./Components/Categories";
  import { BrowserRouter } from "react-router-dom";
  import Search from "./Components/Search";
  import { Link } from "react-router-dom";
  import styled from "styled-components";
  function App() {
    return (
      <div className="App">
      <BrowserRouter>
        <Nav>
          <Logo to={'/'}>
            <img src={require('./Images/1.png')} alt="LOGO"/>
            </Logo>
         
        </Nav>
        <Search/>
        <Categories/>
        <Pages/>
        </BrowserRouter>

      </div>
    );
  }

  const Logo=styled(Link)`
    padding:0;
    img{
      width:250px;
      height:250px;
      margin-top:-6.5rem;
      margin-left:-15rem;
    }
  `
  const Nav=styled.div`
    padding:4rem 0rem;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    

  `
  export default App;
