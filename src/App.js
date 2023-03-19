import {useState, useEffect} from "react"
import './App.css';
import SearchBox from "./Components/search-box/search-box.component";
import CardList from "./Components/card-list/card-list.component";

function App() {
  const [monsters, setMonsters] = useState([])
  const [searchField, setSearchField] = useState("")

  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((users) => setMonsters(users))
  },[])

  const onSearchChange= (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  const filteredMonster = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField)
  })

  

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox 
      className="monster-search-box" 
      placeholder="Search Monsters" 
      onChangeHandler={onSearchChange}
      />

      <CardList monsters={filteredMonster}/>
    </div>
  );
  
}

export default App;
