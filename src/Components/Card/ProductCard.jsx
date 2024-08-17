/* eslint-disable react/prop-types */

const ProductCard = ({ product, handleAddToCard }) => {
    const { productImage, productName, description, price, category, ratings, brand } = product
    return (
        <div className="justify-between card bg-base-100 shadow-xl hover:scale-105 transition">
            <figure className="px-10 pt-10">
                <img
                    src={productImage}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="flex flex-col gap-2 p-4">
                <div className="flex flex-col gap-2 p-2 xl:p-4">
                    <h2 className="text-2xl font-bold text-center">{productName}</h2>
                    <h4 className="font-medium text-lg"><span className="mr-2">Brand:</span>{brand}</h4>
                    <h4 className="font-medium text-lg"><span className="mr-2">Category:</span>{category}</h4>
                    <div className="flex items-center gap-3">
                        <p className="flex-grow-0 font-medium text-lg">Rating: {ratings}</p>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <p>{description}</p>
                </div>

                <div className="w-full flex flex-col gap-2">
                    <h4 className="font-bold text-xl text-[#F27A56] text-center">{price} $</h4>
                    <button onClick={handleAddToCard} className="btn btn-primary w-full">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;