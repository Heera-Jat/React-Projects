import react, { useEffect, useState } from 'react';

export default function Form(){
    const data={name: "",email:"",password:""};
    const [inputData, setInputData]= useState(data);
    const [flag, setFlag]= useState(false);
    useEffect(()=>{
        console.log("Registred")
    },[flag])

    function handleData(e){
        setInputData({...inputData, [e.target.name]: e.target.value})
        //console.log(inputData)
    }
    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email ||!inputData.password ){
            alert("All field are mandatory")
        } else {
            setFlag(true);
        }
    }
    return (
        <>
        <pre> {(flag)?<h2>Hello, {inputData.name} you're registred succesfully</h2>:""}</pre>

       <form className='container' onSubmit={handleSubmit}>
            <div className='header'><h1>Registration form</h1></div>

            <div>
                <input type='text' placeholder="Enter your name" name="name"
                value={inputData.name} onChange={handleData}></input>
            </div>
            <div>
                <input type='text' placeholder='Enter your email' name="email"
                value={inputData.email} onChange={handleData}></input>
            </div>
            <div>
                <input type='text' placeholder='Enter your password' name="password"
                value={inputData.password} onChange={handleData}></input>
            </div>
            <button type='submit'>Submit</button>
       </form>
       </>
    )
}