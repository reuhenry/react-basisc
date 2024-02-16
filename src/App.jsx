import './App.css/'
import HelloWorld from './components/HelloWorld'
import Greetings from './components/Greetings'
const App=()=> {
  let name="Jane doe"
  console.log(name)
  let num1=40
  let num2=30
  
    let person={
      firstName:'Jane',
      lastName:'doe',
      age:27
      
    }
    let people=['John','Shane','Sam','Jane','Sally']
    let shoppingList=['sugar','bread','milk','butter']
    let years=[2019,2020,2021,2022,2023,2024]
    let ingredients=['water','sugar','salt','butter','flour','oil']
    let students=[{name:'jane',grade:6,marks:40},
                  {name:'Ashley',grade:7,marks:20},
                  {name:'sally',grade:8,marks:85}]
      return (
    <>
      <h1>react-basics</h1>
      <p>Hello {person.firstName+ ' ' +person.lastName}</p> 
      {
      students((student)=>{
            return (

       <p>My name is {students.name}.
         I am in {students.grade}and
          i got{students.marks}percentage</p>
      )
      })
    }
      <p>Hello {name}</p>
      {
        ingredients((item)=>{
          return (
            <p>{item}</p>
          )
        })
      }
      <p>{num1 + num2}</p>
      <h1>years</h1>
      {
        years.map((year)=>{
          return (
            <p>{year}</p>
          )
        })
      }
      <h3>shoppingList</h3>
      <ul>
        {
          shoppingList.map((item)=>{
            return (
              <li> {item} </li>
            )
          })
        }
      </ul>
      <p>My age is {person.age}</p>
      <HelloWorld/>
      <Greetings/>
      {
        people.map((name)=>{
          return (
            <p>Hey {name}</p>
          )
        })
      }
    </>
  )
}



export default App



