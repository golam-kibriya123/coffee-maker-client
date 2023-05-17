import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import { FaEye } from 'react-icons/fa';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

const Coffee = ({ coffee }) => {
    const deleteCoffee = id => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (deletedCount > 1) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }

    return (
        <div>

            <div className=" flex flex-row justify-between items-center bg-[#F5F4F1] pe-2">
                <div> <img src={coffee.photo} alt="" className='h-56 w-44' /></div>
                <div>
                    <h1><span className='font-bold'>Name</span> : {coffee.name}</h1>
                    <h1><span className='font-bold'>Chef</span> :  {coffee.chef}</h1>
                    <h1> <span className='font-bold'>Price</span> :  890 Taka</h1>
                </div>
                <div className='grid grid-cols-1 gap-2'>
                    <FaEye className='bg-[#D2B48C] p-1 text-xl text-white rounded-sm cursor-pointer' />
                    <Link to={"/updateCoffee"}><MdModeEditOutline className='bg-[#3C393B] p-1 text-xl text-white rounded-sm cursor-pointer' /></Link>
                    <AiFillDelete className='bg-[#EA4744] p-1 text-xl text-white rounded-sm cursor-pointer' onClick={() => { deleteCoffee(coffee._id) }} />

                </div>
            </div>
        </div>
    );
};

export default Coffee;