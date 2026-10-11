import './App.css'
import Todo from './Todo.jsx'
import Actors from './Actors.jsx'
import Singers from './Singers.jsx'
import Developers from './Developers.jsx'
import Doctors from './Doctors.jsx'
import Library from './Library.jsx'


function App() {

  const books = [
    { id: 1, name: "Atomic Habits", price: 350 },
    { id: 2, name: "The Alchemist", price: 280 },
    { id: 3, name: "Rich Dad Poor Dad", price: 400 },
    { id: 4, name: "Deep Work", price: 320 },
  ];

  const actors = [
    "Shah Rukh Khan",
    "Salman Khan",
    "Ranbir Kapoor",
    "Yash",
    "Prabhas",
    "Mahesh Babu"
  ];

  const singers = [
    { id: 1, name: "Arijit Singh", age: 39 },
    { id: 2, name: "Tahsan Khan", age: 47 },
    { id: 3, name: "Shreya Ghoshal", age: 42 },
    { id: 4, name: "Balam", age: 58 },
  ];


  const developers = [
    "Bayjid Alom",
    "Jihad Hasan",
    "Rahim Ahmed",
    "Sakib Hossain",
    "Nayeem Islam"
  ];

  const doctors = [
    { id: 1, name: "Dr. Rahim", age: 35, specialization: "Cardiology" },
    { id: 2, name: "Dr. Karim", age: 45, specialization: "Neurology" },
    { id: 3, name: "Dr. Sakib", age: 50, specialization: "Dermatology" },
  ];

  const time = 50;



  // Call into return

  return (
    <>
      <h2>React Core Concepts (i)</h2>
      <p>Learn the fundamentals of React, including components, JSX, props, and props destructuring to build reusable and dynamic user interfaces.</p>

      {/* Send books(props) as an array of object [{}] */}
      <Library books={books}></Library>

      {
        doctors.map(doctor => <Doctors
          key={doctor.id} doctor={doctor}></Doctors>)
      }

      {
        developers.map(developer => <Developers
          key={developer.id} developer={developer}></Developers>)
      }

      {
        singers.map(singer => <Singers
          key={singer.id} singer={singer}></Singers>)
      }

      {
        actors.map(actor => <Actors actor={actor}> </Actors>)
      }



      <Todo
        task="Learn React"
        isDone={true}
        time={time}></Todo>

      <Todo task="Revise Javascipt" isDone={true}></Todo>
      <Todo task="Learn Angular" isDone={false}></Todo>



      {/* <Salami event="Eid-Ul-Fitr" amount='2000'></Salami>
      <Salami event="Eid-Ul-Adha"></Salami>

      <Player name="Tamim" runs='5000'></Player>
      <Player name="Mushfiqur" runs='7000'></Player>


      <Developer name="Jihad" tech="Python & Django"></Developer>
      <Developer name="Bayjid" tech="JavaScript & React"></Developer>
      <Developer name="Jubaeid" tech="C++ & Data Structures"></Developer>

      <Student></Student>
      <Student></Student> */}

    </>
  )
}




function Salami({ event, amount = 0 }) {
  return (
    <div className='salami'>
      <p>Salami For : {event} </p>
      <p>Amount : {amount}</p>
    </div>
  )
}



// const { name, runs } = { name: "Tamim", runs: 5000 }
// Destructuring
function Player({ name, runs }) {
  return (
    <div className='student'>
      <h3>Names : {name}</h3>
      <p>Runs : {runs} </p>

    </div>
  )
}





// const { name, age } = { name: "Bayjid", age: 19 }

function Developer(props) {
  // console.log(props);  //Return an Object
  return (
    <div style={{
      border: "1px solid #12fa7a",
      borderRadius: "12px",
      margin: "16px",
      padding: "20px",
      backgroundColor: "#260052",
      color: "#f1f5f9",
    }}>

      <h3 style={{
        fontSize: '20px',
        color: 'aqua'

      }}>Developer : {props.name}</h3>
      <p>Technology : {props.tech}</p>
    </div >
  )
}





function Student() {
  const age = 19;
  const name = "Md Bayjid Alom"

  const studentStyle = {
    color: 'bisque',
    fontSize: '13px'
  }

  return (
    <>
      <div className='student'>
        <p>My name is {name}.I am {age} years old.</p>
        <p style={studentStyle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <button>Explore</button>
      </div>
    </>
  )
}




export default App
