import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
// --3-- const nayoks = ['Jasim', 'Deepjol', 'Bapparaz', 'Omarsani','Alamgir']

const [nayoks,setNayoks] = useState([])

useEffect(()=> {
fetch('https://jsonplaceholder.typicode.com/users')
.then (res => res.json())
.then (data => setNayoks(data))

},[])

// --4-- const nayoks = [{name: 'Jasim', age: 56}, {name: 'Deepjol', age: 23}, {name: 'Bapparaz', age: 33}, {name: 'Omarsani', age: 29},{name: 'Alamgir', age: 66}]

  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {

          nayoks.map(nk => <Nayok name = {nk.name}  age= {nk.age} key = {nk.id}></Nayok> )
      }
      {/* --2--npm
      <Nayok name= {nayoks[1]} age="20"></Nayok>
      <Nayok name= "sakib Khan"></Nayok>
      <Nayok name= "manna"></Nayok>
      <Nayok name= {nayoks[0]} ></Nayok> */}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function MovieCounter (){

let [count,setCount] = useState(0);
// --1-- 
//function handleClick(){
//  setCount( count+ 1)

// }
const handleClick = () => setCount( count+ 1);
 

  return(

      <div >
        <button onClick={handleClick}>Add movie</button>
        <h3>Number of movies: {count} </h3>
        <MovieDisplay movies= {count}></MovieDisplay>
      </div>
  )
}

function MovieDisplay(props){

  return <h4>Movies I have acted: {props.movies} </h4>
}

function Nayok(props){
const style= {
border : "2px solid purple",
margin: "10px",
padding: "10px",
boxShadow: "10px 10px 10px grey",
borderRadius:"10px"


 }

  return(
    <div style={style}>
    <h1>ami  nayok {props.name}</h1>
    <h5>i have done 5 movies in {props.age || 10} years </h5>
    </div>

  )
}


export default App;
