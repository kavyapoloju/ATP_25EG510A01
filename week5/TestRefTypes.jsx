import {useState} from 'react';
function TestRefTypes(){
    //state
    const[user,setUser]=useState({username:"ravi",age:18,city:"hyd"})
    const[marks,serMarks]=useState([10,20,30])
    //update user state
    const userUpdate=()=>{
        setUser({...user,username:"bhanu"})

    }
    //change the marks
    const marksUpdate=()

    

    return <div className='text-center mt-9' >
        <p className='text-3xl'>user:{user.username}</p>
        <p className='text-3xl'>age:{user.age}</p>
        <p className='text-3xl'>city:{user.city}</p>

    </div>
    
    
}





export default TestRefTypes