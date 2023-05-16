import React from 'react';

const AddCoffee = () => {
    return (
        <div className=' w-1/2 mx-auto bg-[#F4F3F0] p-20'>
            <h1 className='text-2xl font-semibold text-center'>Add New COffee</h1>
            <p className='text-sm font-light text-center my-3'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form className=' grid grid-cols-2 gap-3 '>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='name' placeholder="Enter coffee name" className="input input-bordered" />
                    </label>
                </div>

                <div className="form-control w-1/2 ">
                    <label className="label">
                        <span className="label-text">Chef</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='chef' placeholder="Enter coffee chef" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control w-1/2 ">
                    <label className="label">
                        <span className="label-text">Supplier</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Enter coffee Supplier" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control w-1/2 ">
                    <label className="label">
                        <span className="label-text">Test</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='test' placeholder="Enter coffee test" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control w-1/2 ">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='category' placeholder="Enter coffee category" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control  ">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='details' placeholder="Enter coffee details" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control  col-span-full ">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <label className="input-group ">
                        <input type="text" name='photo' placeholder="Enter  photo URL" className="input input-bordered w-full" />
                    </label>
                </div>

                <div className="form-control  col-span-full cursor-pointer ">

                    <input type="submit" placeholder="Add Coffee" className="input input-bordered cursor-pointer bg-[#D2B48C]" />

                </div>



            </form>

        </div>
    );
};

export default AddCoffee;