
const AddCoffee = () => {
    return (
        <div className='p-24'>
            <div className='p-12 text-center'>
                <h2 className='text-6xl mb-6'>
                    Add Coffee
                </h2>
                <p>
                    A simple yet effective, ``Sippin' coffee, anyone?'' 6. For a playful touch, try ``Double shot'' to highlight your drink choice! 7. On a busy Monday, how about posting with ``Monday coffee run''? 8. You can also share, ``On my way to a/an (drink of choice)'' to create a personal connection with your audience
                </p>
            </div>
            <form className="">
                <div className="bg-[#fbfbf9] p-4 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <fieldset className="fieldset border-base-300 rounded-box border p-4">
                            <label className="label text-black font-semibold text-sm">Name</label>
                            <input type="text" name="name" className="input w-full" placeholder="Coffee Name" />
                        </fieldset>
                        <fieldset className="fieldset  border-base-300 rounded-box border p-4">
                            <label className="label text-black font-semibold text-sm">Chef</label>
                            <input type="text" name="chef" className="input w-full" placeholder="Chef name" />
                        </fieldset>
                        <fieldset className="fieldset  border-base-300 rounded-box border p-4">
                            <label className="label text-black font-semibold text-sm">Supplier</label>
                            <input type="text" name="supplier" className="input w-full" placeholder="Supplier" />
                        </fieldset>
                        <fieldset className="fieldset  border-base-300 rounded-box border p-4">
                            <label className="label text-black font-semibold text-sm">Taste</label>
                            <input type="text" name="taste" className="input w-full" placeholder="Taste Name" />
                        </fieldset>
                        <fieldset className="fieldset  border-base-300 rounded-box border p-4">
                            <label className="label text-black font-semibold text-sm">Category</label>
                            <input type="text" name="category" className="input w-full" placeholder="Category Name" />
                        </fieldset>
                        <fieldset className="fieldset  border-base-300 rounded-box border p-4">
                            <label className="label text-black font-semibold text-sm">Details</label>
                            <input type="text" name="details" className="input w-full" placeholder="Coffee Details" />
                        </fieldset>
                    </div>
                    <fieldset className="fieldset border-base-300 my-4 rounded-box border p-4">
                        <label className="label text-black font-semibold text-sm">Photo</label>
                        <input type="text" name="photo" className="input w-full" placeholder="Coffee Photo" />
                    </fieldset>
                    <input type="submit" className="btn w-full font-bold" value="Add Coffee" />
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;