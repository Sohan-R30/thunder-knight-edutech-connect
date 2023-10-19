import React from 'react';

const Instructors = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('https://summer-camp-server-lilac.vercel.app/class')
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(error=>console.log(error))
    }, []);
    return (
        <div className="grid grid-cols-3 gap-6">
        {
            data.map(item=><div key={item._id} className="card w-96 glass">
            <figure><img src={item.imageurl} alt=""/></figure>
            <div className="card-body">
              <h2 className="card-title">Instructor Name : </h2>
              <p>Instructor Email : </p>
            </div>
          </div>)
        }
    </div>
    );
};

export default Instructors;