import React, {useRef} from "react"

function king() {

  let firstNameInput = useRef();
  let lastNameInput = useRef();
  let genderInput = useRef();
  let emailInput = useRef();
  let passwordInput = useRef();

let onSignUp = async ()=>{

  let myHeaders = new Headers();
  myHeaders.append("Content-Type","application/json")

  let dataToSend = {

    fn:firstNameInput.current.value,
    ln:lastNameInput.current.value,
    gender:genderInput.current.value,
    email:emailInput.current.value,
    password:passwordInput.current.value,
  }

let reqOptions = {

  method:"POST",
  headers:myHeaders,
  body:JSON.stringify(dataToSend),

}

let rawData = await fetch("mongodb://localhost:27017",reqOptions)

let convertedData = await rawData.json();

console.log(convertedData);

}

  return (

    <div>
      <form>
        <div>
          <input>First Name</input>
          <label ref={firstNameInput}></label>
        </div>
        <div>
          <input>Last Name</input>
          <label ref={lastNameInput}></label>
        </div>
        <div>
          <input>Gender Name</input>
          <label ref={genderInput}></label>
        </div>
        <div>
          <input>Email</input>
          <label ref={emailInput}></label>
        </div>
        <div>
          <input>Password</input>
          <label ref={passwordInput}></label>
        </div>
        <div>
          <button onClick={()=>{
            onSignUp();
          }}>Sign Up</button>
        </div>
      </form>
      
      </div>
      
    

    
  )
}

export default king