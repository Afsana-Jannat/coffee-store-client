import { useLoaderData } from "react-router";


const CoffeeDetails = () => {

    const coffee = useLoaderData();

    const { photo, name, supplier, chef, taste, prices, _id, details } = coffee;
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={photo}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl text-gray-600 font-bold mb-4">{name}</h1>
                        <p className="my-2"><strong>Chef:</strong> {chef}</p>
                        <p className="my-2"><strong>Supplier:</strong> {supplier}</p>
                        <p className="my-2"><strong>Taste:</strong> {taste}</p>
                        <p className="my-2"><strong>Price:</strong> {prices}</p>
                        <p className="my-2"><strong>Details:</strong> {details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;