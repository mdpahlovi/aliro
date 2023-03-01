import { useRouter } from "next/router";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { Button, IconButton } from "@material-tailwind/react";
import Image from "next/image";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const { pathname } = useRouter();

    return (
        <div className="shadow-lg relative rounded-3xl border p-3 flex flex-col text-content">
            {pathname.includes("cart") && (
                <div className="rounded-full grid place-items-center absolute top-2 right-2 bg-indigo-500 text-white h-8 w-8 font-bold ">
                    <p> {product.quantity} </p>
                </div>
            )}
            <Image src={product.image} alt={product.model} className="mx-auto" width={200} height={200} />
            <h1 className="font-bold text-center">{product.model}</h1>
            <p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
            <div className=" flex-1">
                <ul className="space-y-2">
                    {product.keyFeature.map((feature) => {
                        return (
                            <li key={feature} className="text-sm ">
                                {feature}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="flex gap-2 mt-5">
                {!pathname.includes("cart") && (
                    <Button size="sm" fullWidth>
                        Add to cart
                    </Button>
                )}

                {!pathname.includes("cart") && (
                    <IconButton>
                        <BiListPlus className="text-white text-xl" />
                    </IconButton>
                )}
                {pathname.includes("cart") && (
                    <button title="Remove" onClick={() => dispatch()} className="flex justify-between px-3 bg-red-500 text-white p-1 rounded-full flex-1">
                        <p>Remove</p>
                        <MdDeleteForever size="25" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
