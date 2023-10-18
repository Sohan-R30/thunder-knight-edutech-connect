import React from 'react';
import Swal from "sweetalert2";
import useClass from "../../../hooks/useClass";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageClasses = () => {
    const [classes, , refetch] = useClass();
    const [axiosSecure] = useAxiosSecure();

    const handleDelete = item =>{
      Swal.fire({
        title: 'Are you sure?',
        text:'You wont be able to revert this!',
        icon:'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor:'#d33',
        confirmButtonText:'Yes, delete it!'
      }).then((result)=>{
        if(result.isConfirmed){
          axiosSecure.delete(`/class/${item._id}`)
          .then(res=>{
            console.log('deleted res', res.data);
            if(res.data.deletedCount > 0){
              refetch();
               Swal.fire(
            'Deleted!',
            'Your file has been deleted',
            'success'
          )
            }
          })
        }
      })

    }
    return (
        <div>
        <div className="w-full">
<table className="table">
{/* head */}
<thead>
  <tr>
    <th>#</th>
    <th>Class Image</th>
    <th>Class Name</th>
    <th>Instructor Name</th>
    <th>Instructor Email</th>
    <th>Seats</th>
    <th>Price</th>
    <th>Status</th>
    <th>Approve</th>
    <th>Deny</th>
    <th>Feedback</th>
  </tr>
</thead>
<tbody>
  {
    classes.map((item, index)=><tr key={item._id}>
        <th>
          {index + 1}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.imageurl} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td className="font-bold">
          {item.classname}
        </td>
        <td>{item.instructorName}</td>
        <td>{item.email}</td>
        <td>{item.availableSeats}</td>
        <td>${item.price}</td>
        <td>
          <button className="btn btn-ghost btn-xs">status</button>
          <button onClick={()=>handleDelete(item)}className="btn btn-warning btn-xs">delete</button>
        </td>
      </tr>
)
  }
</tbody>
</table>
</div>
    </div>
    );
};

export default ManageClasses;