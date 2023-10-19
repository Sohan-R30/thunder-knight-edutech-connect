import React, { useEffect, useState } from 'react';

const Instructors = () => {
    const [instructor,setInstructor]=useState();
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch('instructors.json')
    .then(res=>res.json())
    .then(data=>{
        setInstructor(data)
        console.log(data)
        setLoading(false)
    })
    },[])

    if(loading){
        return <div>
            <p>loading...</p>
        </div>
    }
    return (
        <div className="grid grid-cols-2 my-10 gap-4">
        {instructor.map(teacher=> 
        <div key={teacher._id} className="card card-side bg-base-100 shadow-xl w-full">
        <figure><img src={teacher.image} alt="Movie" /></figure>
        <div className="card-body">
            <h2 className="card-title">{teacher.instructorName}</h2>
            <p>Email:{teacher.instructorEmail}</p>
            <p>Course taken: {teacher.classNumber}</p>
            <p>Course Name: {teacher.className}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">See Classes</button>
            </div>
        </div>
    </div>
            )}
        </div>
//         <div className="overflow-x-auto">
//   <table className="table">
//     {/* head */}
//     <thead>
//       <tr>
//         <th>
//           <label>
//             <input type="checkbox" className="checkbox" />
//           </label>
//         </th>
//         <th>Name</th>
//         <th>Job</th>
//         <th>Favorite Color</th>
//         <th></th>
//       </tr>
//     </thead>
//     <tbody>
//       {/* row 1 */}
//       <tr>
//         <th>
//           <label>
//             <input type="checkbox" className="checkbox" />
//           </label>
//         </th>
//         <td>
//           <div className="flex items-center space-x-3">
//             <div className="avatar">
//               <div className="mask mask-squircle w-12 h-12">
//                 <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
//               </div>
//             </div>
//             <div>
//               <div className="font-bold">Hart Hagerty</div>
//               <div className="text-sm opacity-50">United States</div>
//             </div>
//           </div>
//         </td>
//         <td>
//           Zemlak, Daniel and Leannon
//           <br/>
//           <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
//         </td>
//         <td>Purple</td>
//         <th>
//           <button className="btn btn-ghost btn-xs">details</button>
//         </th>
//       </tr>

//     </tbody>
    
//   </table>
// </div>
    );
};

export default Instructors;