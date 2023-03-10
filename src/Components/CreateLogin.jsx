import React from 'react'
import { useState } from 'react'
function CreateLogin() {
    const [bool,setBool]=useState(true)
    const [fn,setFn]=useState('')
    const [ln,setLn]=useState('')
    const [un,setUn]=useState('')
    const created=()=>{
        setBool(!bool)
        setUn("")
        setFn("")
        setLn("")
        console.log(fn,ln,un)
    }
    
    const formStyle={
        backgroundColor:'#b4d5fc',
        borderRadius:'3vw',
        textAlign:'center',
        width:'25%',
        margin:'30dp',  
        padding:'10dp',
        color:'white'
    }
    const rey={
        margin:'5vw'
    }
    const inp={height:'2vw',width:'20vw'}
    const button1={backgroundColor:'white',width:'7vw',height:'3vw',borderRadius:'3vw'}

    if(bool){
        return (
        <div style={{align:'center'}}>
            <center> 
        <h1>Musketeers Login</h1>
        <div style={formStyle}>
            <h1 style={{margin:'10dp',color:'#b4d5fc'}}> Login </h1>
            <label>Username</label>
            <br/>
            <input type="text" value={un||""} style={inp} onChange={(e)=>setUn(e.target.value)}required></input>
            <br />
            <br></br>
            <label>Password </label>
            <br />
            <input type="password" style={inp} required></input>
            <br />
            <br></br>
            <button style={button1} onClick={()=>{alert(`${un} logged in successfully`)}}>Login</button>
            <br/>
            <a href="#" style={{color:'#00bfff'}}>Forgot password?</a>
            <hr></hr>
            <br></br>
            <label>New Musketeer?</label>
            <br></br>
            <button onClick={created} style={button1}>Sign up</button>
            <br></br>
            <br></br>
        </div>
        </center>
        </div>
)
        
    }
    else{
        return (
            <div>
                <center> 
            <div style={formStyle}>
                <h1>Create Account</h1>
                <label>Firstname </label>
                <br />
                <input type="text" placeholder='Firstname' value={fn||""} style={inp} onChange={(e)=>{setFn(e.target.value)}} required></input>
                <br></br>
                <br></br>
                <label>Lastname </label>
                <br />
                <input type="text" placeholder='Lastname' value={ln||""} style={inp} onChange={(e)=>{setLn(e.target.value)}} required></input>
                <br /><br></br>
                <label>Phone No. </label>
                <br />
                <input type="number" style={inp}></input>
                <br />
                <br></br>
                <label>Username</label>
                <br/>
                <input type="text" value={un||""} style={inp} onChange={(e)=>setUn(e.target.value)}></input>
                <br />
                <br></br>
                <label>Password </label>
                <br />
                <input type="password" style={inp}></input>
                <br />
                <br></br>
                <button onClick={()=>{alert(`${fn} ${ln} Account Created Successfully`);created()}} style={{...button1,width:'10vw'}}>Create Account</button>
                <br></br>
                <br></br>
            </div>
            </center>
            </div>
          )
        
    }
 
}

export default CreateLogin