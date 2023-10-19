import React from 'react';

const MySelectedclassNamees = () => {
    const [cart, refetch] = useCart();
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'This action cannot be undone.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel',
            reverseButtons: true
          }).then(result => {
            if (result.isConfirmed) {
             fetch(`https://summer-camp-server-lilac.vercel.app/carts/${item._id}`, {
                method:'DELETE'
             })
             .then(res => res.json())
             .then(data => {
                if(data.deletedCount > 0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted',
                        'success'
                    )
                }
             })
            }
          });
    }
    return (
        <div className="w-full">
            <div>
                <h3 className="text-3xl">Hi</h3>
                {/* <Link to="/dashboard/payment"><button className="btn btn-warning btn-sm">PAY</button></Link> */}
            </div>
            <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Class Image</th>
                  <th>Class Name</th>
                  <th>Instructor Name</th>
                  <th>Price</th>
                  <th>Delete</th>
                  <th>Payment</th>
                </tr>
              </thead>
              <tbody>
                {
                    cart.map((item, index)=> <tr key={item._id}>
                        <td>
                          {index + 1}
                        </td>
                        <td>
                        
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img src={item.imageurl} alt={index+1} />
                              </div>
                            </div>
                        
                        </td>
                        <td>
                         {item.classname}
                        </td>
                        <td>
                         {item.instructorName}
                        </td>
                        <td>${item.price}</td>
                        <td>
                          <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-sm bg-red-500 text-white">Delete</button>
                        </td>
                        <td>
                          <Link to="/dashboard/payment"><button className="btn btn-warning btn-sm">PAY</button></Link>
                          </td>
                      </tr>)
                }
              </tbody>          
            </table>
          </div>
        </div>
    );
};

export default MySelectedclassNamees;