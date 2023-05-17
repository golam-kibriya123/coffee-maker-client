import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { name, chef, supplier, category, test, details, photo } = coffee;
    console.log(coffee)





    const handelUpdateForm = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const test = form.test.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, chef, supplier, category, test, details, photo };
        console.log(updatedCoffee)
        // send data to server
        fetch(`http://localhost:5000/coffee/${coffee._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => json(res))
            .then(data => {
                console.log(data)
                if (data.status) {
                    Swal.fire('Any fool can use a computer')
                }
            });

    };


















    return (
        <div className='w-[100%] md:w-1/2 mx-auto bg-[#F4F3F0] p-20'>
            <Link className='btn' to={"/"}>Home</Link>
            <h1 className='text-2xl font-semibold text-center'>Update COffee</h1>
            <p className='text-sm font-light text-center my-3'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form className=' grid grid-cols-1 md:grid-cols-2 gap-3 ' onSubmit={handelUpdateForm}>
                <div className="form-control  ">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='name' placeholder="Enter coffee name" defaultValue={name} className="input input-bordered w-full " />
                    </label>
                </div>

                <div className="form-control  ">
                    <label className="label">
                        <span className="label-text">Chef</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='chef' placeholder="Enter coffee chef" defaultValue={chef} className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control  ">
                    <label className="label">
                        <span className="label-text">Supplier</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='supplier' placeholder="Enter coffee Supplier" defaultValue={supplier} className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control  ">
                    <label className="label">
                        <span className="label-text">Test</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='test' placeholder="Enter coffee test" defaultValue={test} className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control  ">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='category' placeholder="Enter coffee category" defaultValue={category} className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control  ">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='details' placeholder="Enter coffee details" defaultValue={details} className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control  col-span-full ">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <label className="input-group ">
                        <input type="text" name='photo' placeholder="Enter  photo URL" defaultValue={photo} className="input input-bordered w-full" />
                    </label>
                </div>

                <div className="form-control  col-span-full cursor-pointer ">

                    <input type="submit" placeholder="Add Coffee" className="input input-bordered cursor-pointer bg-[#D2B48C]" />

                </div>

            </form>

        </div>
    );
};





















export default UpdateCoffee;