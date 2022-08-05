import React,{useState,useEffect} from 'react'
import {useNavigate } from 'react-router-dom';
const Profile = () => {
    const navigate = useNavigate();
  const [data,setdata] = useState([]);

    useEffect(() => {
        getroom();
    }, [])

    const getroom = async () => {
        let response = await fetch('http://localhost:8080/api/room');
        let res = await response.json();
        setdata(res.message);
        console.log(res)
    }

    const booknow = (id)=>{
        navigate('/payment', {state:{id:id}})
    }
  return (
      <div className='container'>
        {data && data.map((value,index)=>{
            let obj = JSON.parse(value.facility);
            const description = value.description.split(' ').slice(0, 15).join(' ');
            return (
                <div className="card2 mb-3 mt-5" style={{ maxWidth: "740px" }}>
                    <div className="row no-gutters">
                        <div className="col-md-5">
                            <img src={value.image} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h5 className="card-title">{value.title}</h5>
                                <p className="card-text">{description}... <a href="" onClick={()=>booknow(value._id)} >Read More</a></p>
                                
                                <p className="card-text" style={{fontWeight:"bold"}}> &nbsp; &nbsp; &nbsp; &nbsp; Price: {value.price} Per Night</p>
                                <button className="btn btn-info float-right" onClick={()=>booknow(value._id)}>Book Now</button><br /><br />
                                <p className="card-text" style={{fontWeight:"bold"}}>Room Facilities</p>
                                <ul className='wrap_list'>
                                    {obj.map((fact) => {
                                        return <li className='facility'>{fact.label}</li>
                                    })}
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
            )
          })}
      </div>
  )
}

export default Profile