import { use, useState } from "react";

// const Login=()=>{


//     const [username,setUsername]=useState("");
//     const usernameHandler=(e)=>{

//         setUsername(e.target.value);


//     }
//     const [password,setPassword]=useState("");
//     const passwordHandler=(e)=>{

//         setPassword(e.target.value);


//     }

//     const submitHandler=()=>{

//         console.log("Form Submmiting",username,password);

//     }
//     return (
//         <>
//         <div>
//             <div>Username</div>
//             <div><input type="text" value={username} onChange={usernameHandler}/></div>
//         </div>
//          <div>
//             <div>Password</div>
//             <div><input type="password" value={password} onChange={passwordHandler}/></div>
//         </div>
//         <div>
//             <button onClick={submitHandler}>Login</button>
//         </div>
//         </>
//     )


// }

const Login=()=>{


    const [formData,setFormData]=useState({});
    const [error,setError]=useState("");

    const changeHandler=(e)=>{
        //e.target.name->Key name
        //e.target.value->Value
        // let obj={name:"test",age:20,name:"code"};
        // let data="age";
        // obj[data]=30;

        setFormData({...formData,[e.target.name]:e.target.value});




    }
    const submitHandler=()=>{

        console.log(formData);
        fetch("http://localhost:5000/loginReact",{
            headers:{
                "content-type":"application/json"
            },
            method:"POST",
            body:JSON.stringify(formData)
        }).then((response)=>{
            return response.json();
        }).then((response)=>{
            console.log(response);
            if(response.success==false)
                setError(response.message);
            

        })
       // console.log("Form Submmiting",username,password);

    }
    return (
        <>
        {error}
        <div>
            <div>Username</div>
            <div><input type="text" name="username" onChange={changeHandler}/></div>
        </div>
         <div>
            <div>Password</div>
            <div><input type="password" name="password" onChange={changeHandler}/></div>
        </div>
        <div>
            <button onClick={submitHandler}>Login</button>
        </div>
        </>
    )


}

export default Login;
