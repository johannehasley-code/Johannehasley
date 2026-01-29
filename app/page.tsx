'use client';
// import Greetings from "../components/Greetings";
// import Add from "../components/Add";

// const App = () => {
//   return (
//     <>
//      <Greetings/>
//      <Add/>
//     </>
//   );
// };
// export default App;


//Example 1
// const App = () => {
//   const n=100000000
//   const numbers = [1, 2, 3, 4, 5,6,7,8,9,10,n];

//   return (
//     <main>
//       {numbers.map((n) => (
//         <ul key={Math.random()}>
//           <li>{n+15986}</li>
//         </ul>
//       ))}
//     </main>
//   );
// };
// export default App;


// Example 2
// const App = () => {
//   const usersInfo = [
//     {
//       username: "HuXn",
//       email: "test@gmail.com",
//       location: "USA",
//       age:69,    
//     },
//     {
//       username: "John",
//       email: "jd@gmail.com",
//       location: "Arab",
//       age:59,
//     },
//     {
//       username: "Alex",
//       email: "alexmersion@gmail.com",
//       location: "India",
//       age:86,
//     },
//   ];

//   return (
//     <section>
//       {usersInfo.map((user) => (
//         <ul key={Math.random()}>
//           <li>{user.username}</li>
//           <li>{user.email}</li>
//           <li>{user.location}</li>
//           <li>{user.age}</li>
//         </ul>
//       ))}
//     </section>
//   );
// };

// export default App;


// Example 3
// const App = () => {
//   const myName = "JOJO";
//   const multiply = (a, b) => a + b;
//   const specialClass = "simple-class";

//   return (
//     <section>
//       {/* Rendering Variable Value */}
//       <h1>{myName}</h1>
//       {/* Rendering Expression */}
//       <p>2 + 2 = {2 + 2}</p>
//       {/* Rendering Array */}
//       <p>My Friends List: {["Kabore-", "Zongo-", "Ky-", "Ouedraogo"]}</p>
//       {/* Rendering Function Value */}
//       <p>2 * 2 = {multiply(2, 2)}</p>
//       {/* Rendering Class */}
//       <p className={specialClass}>This is special class</p>
//     </section>
//   );
// };

//export default App;


// import Greetings from "../component/Greetings";
// import Add from "../component/add"


// const App = () => {
//   return (
//     <>
//      <Greetings />
//       <Add />
//     </>
//   );
// };

// export default App;
  



// import Greetings from "../component/Greetings";
// import Add from "../component/add"
// ;

// const App = () => {
//   return (
//     <>
//      <div>Greetings</div>
//      <div>Add</div>
//     </>
//   );
// };

// export default App;
  



// const App = () => {
  
//   return (
//     <section>
//       <form>
//         <label >Name</label>
//             <input type="text" 
//             placeholder="Enter Your Name" 
//             id="name" />
//       </form>
//     </section>
//   );
// };

// export default App;




// const App = () => {
//   let nom = "GANSBEOGO"
//   const x =2
//   let z = x + 10
  
//   return (
//     <section id="section">
//       <h1>Mon nom est {nom} </h1>
//       <article>
//         <h2>Welcome To React</h2>
//         <h2>Valeur x {z} </h2>
//         <p className="text">Paragraph Content</p>
//       </article>
//     </section> 
//   );
// };

// export default App;
// const App=()=>{
//   const myName="Johanne"

// const multiply(2,2) =>a+b

//   return(
//     <section>
//       <h1>{myName}</h1>
//       <p>2+2={2+2}</p>
//       <p>My Friends List: {["Kabore-","Zongo-","Ky-","Ouedraogo"]}</p>
//       <p>2*2={multiply(2,2)}</p>
//       <p className="special-class">This is special class</p>
//     </section>
//   )
// }

// const data = [
//   {
//     id : 1,
//     Nom: 'Ganseogo'
    
//     },
//     {
//       id:2,
//       Nom: 'Zongo'
//     }

// ]
// import Shopping from "../components/shopping";



// const App = () => {
//   return (
//     <section>
//       <Shopping
//         items={["Robe", "Chemise", "Pantalon", "Chaussure"]}
//       />
//     </section>
//   );
// };

// export default App;

// const User = (props) => {
//   return (
//     <section>
//       <img src={props.img} alt={props.name} width={200} />
//       <h1>Name: {props.name}</h1>
//       <h2>Age: {props.age +2}</h2>
//       <h3>Is married: {props.isMarried ? "Marie" : "Celibataire "}</h3>
//       <h4>Hobbies: {props.hobbies} </h4>
//       <h4>Nationalité:{props.nationalité}</h4>
//     </section>
//   );
// };   

// const App = () => {
//   return (
//     <User
//       img="https://avatars.githubusercontent.com/u/85052811?v=4"
//       name="HuXn WebDev"
//       age={18}
//       isMarried={true}
//       hobbies={["Coding", "Reading", "Sleeping"]}
//       nationalité="Burkinabé"
//     />
//   );
// };

// export default App;

// const App = () => {
//   return (
//     <User
//       img="https://avatars.githubusercontent.com/u/85052811?v=4"
//       name="HuXn WebDev"
//       age={18}
//       isMarried={true}
//       hobbies={["Coding", "Reading", "Sleeping"]}
//       nationalite={"Burkinabé"}
//     />
//   );
// };

// const User = ({ img, name, age, isMarried, hobbies,nationalite }) => {
//   return (
//     <section>
//       <img src={img} alt={name} width={200} />
//       <h1>Name: {name}</h1>
//       <h2>Age: {age}</h2>
//       <h3>Is married: {isMarried}</h3>
//       <h4>Hobbies: {hobbies} </h4>
//       <h4>Nationalité: {nationalite}</h4>
//     </section>
//   );
// };
// export default App;


// const App = () => {
//   return (
//     <User
//       img="https://avatars.githubusercontent.com/u/85052811?v=4"
//       name="HuXn WebDev"
//       age={10}
//       isMarried={false}
//       hobbies={["Coding", "Reading", "Sleeping"]}
//     >
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iste
//         molestias numquam, ratione adipisci atque quia et. Voluptas, soluta?
//         Quibusdam accusantium quis saepe. Aliquam facilis quia obcaecati odio
//         quo quos.
//       </p>
//     </User>
//   );
// };

// const User = () => {
//   const { img, name, age, isMarried, hobbies, children } = this.props;

//   return (
//     <section>
//       <img src={img} alt={name} width={200} />
//       <h1>Name: {name}</h1>
//       <h2>Age: {age}</h2>
//       <h3>Is married: {isMarried}</h3>
//       <h4>Hobbies: {hobbies} </h4>
//       <div>{children}</div>
//     </section>
//   );
// };

// export default App;


// const ValidPassword = () => <h1>Valid Password</h1>;
// const InvalidPassword = () => <h1>Invalid Password</h1>;

// const Password = ({ isValid }) =>
//   isValid ? <ValidPassword /> : <InvalidPassword />;

// const App = () => {
//   return (
//     <section>
//       <Password isValid={true} />
//     </section>
//   );
// };
// export default App;

// const App = () => {
//   return (
//     <section>
//       <h1 style={{ color: "white", backgroundColor: "teal", padding: "2rem" }}>
//         Inline Style
//       </h1>
//     </section>
//   );
// };

//  export default App;


// import "./index.css";

// const App = () => { 
//   return (
//     <section>
//       <h1 >Seperate File For Styling</h1>
//     </section>
//   );
// };

// export default App;   

// const App = () => {
//   return (
//     <section>
//       <h1 style={{ color: "white", backgroundColor: "teal", padding: "2rem" }}>
//         Inline Style
//       </h1>
//     </section>
//   );
// };
// export default App;

// // 2. Seperate Styles and then interpolate it.
// const App = () => {
//   const styles = { color: "white", backgroundColor: "teal", padding: "2rem" };

//   return (
//     <section>
//       <h1 style={styles}>Inline Style</h1>
//     </section>
//   );
// };

// export default App;


// const App = () => {
//   // const handleClick = () => console.log("You Clicked Me");
//   const handleClick = () => console.log(Math.round(Math.random() * 10));
//   return <button onClick={handleClick}>Click</button>;
// };

// export default App;
// const App = () => {
//   // const handleClick = () => console.log("You Clicked Me");
//   const handleClick = () => alert("Bonjour 2ie")
//   return <button onClick={handleClick}>Click</button>;
// };

// export default App;

​

// const Move = () => {
//   function moveHandler() {
//     alert("Mouse Move Event Fired");
//     console.log("Mouse Move Event Fired");
//   }

//   return (
//     <p onMouseOver={moveHandler}>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
//       voluptatibus libero, eius odit modi doloremque quos magni tempora. Debitis
//       laborum exercitationem perferendis. Veritatis fuga, quod quasi accusamus
//       eveniet voluptates suscipit.
//     </p>
//   );
// };

// const App = () => {
 
//   return <Move />;
// };

// export default App;

//click sur ok ça affiche l'email ; la fiche étudiant est un composant(nom;prénom;genre;filière);
// newsletter est un composant; si on entre le mail si on appuie sur le ok l'email saisi apparaît en alert) );2ie@gansbeogo.com
import FicheEtudiant from "../components/FicheEtudiant";
import Newsletter from "../components/Newsletter";
const App = () => {
  const cours = ['C++','Next.js','React', 'Python'];

  return(
    <div>
<img
className='flex justify-center items-center m-auto mt-20'

width={400}
height={40}
 src="https://tse1.mm.bing.net/th/id/OIP.-NZbXdVsZoG8sBc3qw6GEgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"></img>

<FicheEtudiant/>
 
<h1 className='flex justify-center items-center m-auto mt-20'>Cours</h1>
<main>
      {cours.map((course) => (
        <ul key={Math.random()}>
          <li>{course}</li>
        </ul>
      ))}
    </main>



 <Newsletter/>


    </div>
  )
};

export default App;