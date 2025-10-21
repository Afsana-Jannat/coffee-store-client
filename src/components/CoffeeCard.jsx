import { Link } from "react-router";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { photo, name, supplier, chef, taste, prices, _id } = coffee;

    const handleDelete = (_id) => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                // star deleting the coffees
                fetch(`http://localhost:3000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            // remove the coffee from state
                            const remainingCoffees = coffees.filter(coffee => coffee._id !== _id);
                            setCoffees(remainingCoffees)
                        }
                    })
            }
        });


    }


    return (
        <div>
            <div className="card card-side bg-base-100 justify-between gap-4 p-4 shadow-sm">
                <div>
                    <figure>
                        <img className="w-56 h-56"
                            src={photo}
                            alt="Movie" />
                    </figure>
                </div>
                <div className="flex justify-around w-full">
                    <div className="mt-6">
                        <h2 className="card-title">Name: {name}</h2>
                        <p>Chef: {chef}</p>
                        <p>Supplier: {supplier}</p>
                        <p>Taste: {taste}</p>
                        <p>Price: {prices}</p>
                    </div>
                    <div className="card-actions justify-end ">
                        <div className="join join-vertical mt-8 gap-2">
                            <Link to={`/coffee/${_id}`}>
                                <button className="btn bg-[#f6dfdf]">View</button>
                            </Link>
                            <Link to={`/updatedcoffee/${_id}`}>
                                <button className="btn bg-[#f6dfdf]">Edit</button>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="btn bg-[#f6dfdf]">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;