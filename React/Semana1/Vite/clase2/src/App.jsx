import './App.css';
import Card from "./components/Card"
import PersonalInformation from './components/PersonalInformation';

function App() {

  const persona = {
    name: "Edward",
    age:21,
    favoriteMovie: "Rey Arturo y El Mecanico",  
    favoriteMusic: "Pop"
};

const hobbies = ['Musica','Ir a la playa','Videojuegos','Peliculas','Futbol'];
const titles = ['Hobbies', 'Mi Comida Favorita', 'Miembros Familiares', "Personal Information"];
const favoriteFood = ['Arroz Chino','Spaguetis','Arroz con Huevo','Paeya','Arroz con Pollo'];
const membersMyFamily = ['Eduar','Sandra','Jhon Edward','Keidy', 'Juan Jose'];


  return (
    <div className="App">
      <PersonalInformation 
      me={persona} 
      title= {titles[3]}
    />
    <Card 
    array={hobbies}
    title={titles[0]}
    color='rgb(112, 255, 148)'
    />

    <Card 
    array={membersMyFamily} 
    title={titles[2]}
    color='rgb(255, 108, 108)'
    />

    <Card 
    array={favoriteFood} 
    title={titles[1]}
    color='rgb(253, 216, 94)'
    />
    </div>
  );
}

export default App;

