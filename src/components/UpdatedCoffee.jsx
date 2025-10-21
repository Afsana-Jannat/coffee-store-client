import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdatedCoffee = () => {
    const { photo, name, supplier, chef, taste, prices, _id, details } = useLoaderData()

    const handleUpdateCoffee = e => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const updatedcoffee = Object.fromEntries(formData.entries())
        console.log(updatedcoffee);

        // send updated
        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedcoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className='p-24'>
            <div className='p-12 text-center'>
                <h2 className='text-4xl font-bold mb-6'>
                    Update Coffee
                </h2>
            </div>
            <form onSubmit={handleUpdateCoffee}>
                <div className="bg-[#fbfbf9] p-4 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <fieldset className="fieldset border-base-300 rounded-box border p-4">
                            <label className="label text-black font-semibold text-sm">Name</label>
                            <input type="text" name="name" defaultValue={name} className="input w-full" placeholder="Coffee Name" />
                        </fieldset>
                        <fieldset className="fieldset  border-base-300 rounded-box border p-4">
                            <label className="label text-black font-semibold text-sm">Chef</label>
                            <input type="text" name="chef" defaultValue={chef} className="input w-full" placeholder="Chef name" />
                        </fieldset>
                        <fieldset className="fieldset  border-base-300 rounded-box border p-4">
                            <label className="label text-black font-semibold text-sm">Supplier</label>
                            <input type="text" name="supplier" defaultValue={supplier} className="input w-full" placeholder="Supplier" />
                        </fieldset>
                        <fieldset className="fieldset  border-base-300 rounded-box border p-4">
                            <label className="label text-black font-semibold text-sm">Taste</label>
                            <input type="text" name="taste" defaultValue={taste} className="input w-full" placeholder="Taste Name" />
                        </fieldset>
                        <fieldset className="fieldset  border-base-300 rounded-box border p-4">
                            <label className="label text-black font-semibold text-sm">Prices</label>
                            <input type="text" name="prices" defaultValue={prices} className="input w-full" placeholder="Category Name" />
                        </fieldset>
                        <fieldset className="fieldset  border-base-300 rounded-box border p-4">
                            <label className="label text-black font-semibold text-sm">Details</label>
                            <input type="text" name="details" defaultValue={details} className="input w-full" placeholder="Coffee Details" />
                        </fieldset>
                    </div>
                    <fieldset className="fieldset border-base-300 my-4 rounded-box border p-4">
                        <label className="label text-black font-semibold text-sm">Photo</label>
                        <input type="text" name="photo" defaultValue={photo} className="input w-full" placeholder="Coffee Photo" />
                    </fieldset>
                    <input type="submit" className="btn w-full font-bold" value="Add Coffee" />
                </div>
            </form>
        </div>
    );
};

export default UpdatedCoffee;