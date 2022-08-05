import React,{useState,useEffect} from 'react'

const Home = () => {
  const [data,setdata] = useState([]);
  
  useEffect(()=>{
      getroom();
  },[])

  const getroom = async () => {
    let response = await fetch('http://localhost:8080/api/room');
    let res = await response.json();
    setdata(res.message);
    console.log(res)
  }

  return (
    <div className='container-fluid'>
    
      <table className='table table-bordered mt-5'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Price</th>
            <th>Facility</th>
            <th>Image</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
      {data && data.map((value,index)=>{
        return(
          <tr key={index}>
            <td>{value.title}</td>
            <td>{value.type}</td>
            <td>RS {value.price}</td>
            <td>none</td>
            <td><img src={value.image} width="150"/></td>
            <td>{value.status}</td>


          </tr>
          
        )
      })}
      </tbody>
      </table>
    </div>
  )
}

export default Home
