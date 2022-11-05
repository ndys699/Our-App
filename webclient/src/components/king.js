// import React, {useRef} from 'react'

// function king() {

//   let firstNameInput = useRef();
//   let lastNameInput = useRef();
//   let genderInput = useRef();
//   let emailInput = useRef();
//   let passwordInput = useRef();

// let onSignUp = async ()=>{

//   let myHeaders = new Headers();
//   myHeaders.append("Content-Type","application/json")

//   let dataToSend = {

//     fn:firstNameInput.current.value,
//     ln:lastNameInput.current.value,
//     gender:genderNameInput.current.value,
//     email:emailInput.current.value,
//     password:passwordInput.current.value,
//   }

// let reqOptions ={
//   method:"POST",
//   headers:myHeaders,
//   body:JSON.stringify(dataToSend),
// }

// let rawData = await fetch("mongodb://localhost:27017",reqOptions)

// let convertedData = await rawData.json();

// console.log(convertedData);

// }

//   return (

//     <div>
//       <form>
//         <div>
//           <input>First Name</input>
//           <label ref={firstNameInput}></label>
//         </div>
//         <div>
//           <input>Last Name</input>
//           <label ref={lastNameInput}></label>
//         </div>
//         <div>
//           <input>Gender Name</input>
//           <label ref={genderInput}></label>
//         </div>
//         <div>
//           <input>Email</input>
//           <label ref={emailInput}></label>
//         </div>
//         <div>
//           <input>Password</input>
//           <label ref={passwordInput}></label>
//         </div>
//         <div>
//           <button onClick={()=>{

//           }}>Sign Up</button>
//         </div>
//       </form>
//       <h1>This is james bond</h1>
//       <h1>This is Mahiraavana</h1>
//       <h1>This is E-commerce website</h1>
//       <h1>Satish anna laptop got some problem</h1>
//       <h1>We are going to have a party in the evening with sandeep and satish</h1>
//       </div>
      
    

    
//   )
// }

// export default king