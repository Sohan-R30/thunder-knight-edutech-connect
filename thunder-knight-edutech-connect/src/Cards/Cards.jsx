import React from 'react';

const Cards = () => {
    return (
        <div>
            <div className='w-3/4 mx-auto text-center py-8'>
                <h1 className='w-3/4 text-center font-bold text-lg text-[#590C2B] lg:text-3xl'>Explore Our Expert Instructors and Their Classes</h1>
            </div>
            <div className='w-11/12 mx-auto py-6 gap-4 grid grid-cols-2 lg:grid-cols-4'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Cards;