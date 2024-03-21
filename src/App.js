import './App.css';
import Style from "./components/Style.js"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Content from "./components/Content.js"
import Banner from "./components/Banner.js"
import Loader from "./components/Loader.js"
import { useEffect, useState } from 'react';

function App() {
  const [data,setData]=useState([])
  const [loading, setLoading]=useState(true);
 useEffect(
  function(){
      fetchMeCategories();
      console.table(data);
  },[] )
   //a function that makes ajax request to api endpoint 

  const fetchMeCategories = () =>{
  fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  .then(function(response){
      return response.json()
  })
  .then(function(apidata){
      setData([...apidata.categories]);
      setLoading(false)
  })
  .catch(function(err){
      console.log(err)
  })

 }
  return (
    <div>
     {/* <Style/> */}
        <Header/>
        <main>  
        <Banner/>
        {data.length > 0 ?<Content categories={data}/>: <Loader/>}
        </main>
        <Footer/>
    </div>
  );
}

export default App;
