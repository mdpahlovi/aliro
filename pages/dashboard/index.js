import { Checkbox, IconButton } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "../../layouts/Dashboard";
import { RiDeleteBin3Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { productsLoading } from "../../redux/action/actionCreators";
import { loadProductsData } from "../../redux/thunk/product/fetchProduct";
import { deleteProductData } from "../../redux/thunk/product/deleteProduct";

const DashboardHome = () => {
    const { products } = useSelector((state) => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productsLoading());
        dispatch(loadProductsData());
    }, [dispatch]);

    return (
        <Dashboard className="flex flex-col justify-center items-center h-full w-full">
            <div className="w-full max-w-7xl mx-auto rounded-lg">
                <header className="px-5 py-4 border-b">
                    <div className="font-semibold">Products</div>
                </header>

                <div className="overflow-x-auto p-3">
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-content/75">
                            <tr>
                                <th></th>
                                <th className="p-2">
                                    <div className="font-semibold text-left">Product Name</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-left">Brand</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-left">In Stock</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-left">Price</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Edit</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Delete</div>
                                </th>
                            </tr>
                        </thead>

                        <tbody className="text-sm divide-y">
                            {products?.data?.map(({ model, brand, price, status, _id }) => (
                                <tr key={_id}>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td className="p-2">
                                        <div className="font-medium text-content/80">{model}</div>
                                    </td>
                                    <td className="p-2">
                                        <div className="text-left capitalize">{brand}</div>
                                    </td>
                                    <td className="p-2">
                                        <div className="text-left">
                                            {status ? (
                                                <p className="text-green-500 font-medium">Available</p>
                                            ) : (
                                                <p className="text-red-500 font-medium">Stock out</p>
                                            )}
                                        </div>
                                    </td>
                                    <td className="p-2">
                                        <div className="text-left font-medium text-indigo-500">{price}</div>
                                    </td>
                                    <td className="p-2">
                                        <div className="flex justify-center">
                                            <IconButton variant="text">
                                                <CiEdit className="text-lg" />
                                            </IconButton>
                                        </div>
                                    </td>
                                    <td className="p-2">
                                        <div className="flex justify-center">
                                            <IconButton variant="text" onClick={() => dispatch(deleteProductData(_id))}>
                                                <RiDeleteBin3Line className="text-lg" />
                                            </IconButton>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Dashboard>
    );
};

export default DashboardHome;
