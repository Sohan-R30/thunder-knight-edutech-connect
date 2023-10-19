import React from 'react';

const InstructorHome = () => {
    const {user} = useContext(AuthContext);
    const handleAddAToy = event => {
        event.preventDefault();
        const form = event.target;
        const classname = form.classname.value;
        const imageurl = form.imageurl.value;
        const instructorName = form.instructorName.value;
        const email = form.email.value;
        const availableSeats = form.availableSeats.value;
        const price = form.price.value;
        const user = {classname, imageurl, instructorName, email, availableSeats, price};
        console.log(user);

        fetch('https://summer-camp-server-lilac.vercel.app/class', {
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.insertedId){
        Swal({
          title:'Order Confirmed Successfully',
          icon:'success',
          buttons:'OK'
      })
        form.reset();
      }
    })
  }
    return (
        <div className="m-10">
            <br />
            <br />
            <br />
            <br />
        <h2 className="text-3xl text-center font-bold">Please add a class:</h2>
        <form onSubmit={handleAddAToy}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
      <div className="form-control">
      <label className="label">
        <span className="label-text text-neutral font-semibold">Class Name</span>
      </label>
      <input type="text" name="classname" placeholder="class-name"  className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text text-neutral font-semibold">Class Image</span>
      </label>
      <input type="text" name="imageurl" placeholder="class-image" className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text text-neutral font-semibold">Instructor Name</span>
      </label>
      <input type="text" name="instructorName" defaultValue={user?.displayName} placeholder="instructor-name" className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text text-neutral font-semibold">Instructor Email</span>
      </label>
      <input type="text" name="email" placeholder="instructor-email" defaultValue={user?.email} className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text text-neutral font-semibold">Available Seats</span>
      </label>
      <input type="text" name="availableSeats" placeholder="available-seats" className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text text-neutral font-semibold">Price</span>
      </label>
      <input type="text" name="price" placeholder="$ price" className="input input-bordered" />
    </div>
    
      </div>
    <div className="form-control mt-6">
      <input className="btn btn-accent w-40 rounded-xl mx-auto" type="submit" value="Add Class" />
    </div>
        </form>

    </div>
    );
};

export default InstructorHome;