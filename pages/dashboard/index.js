import { Checkbox, IconButton, Radio } from "@material-tailwind/react";
import React from "react";
import { useSelector } from "react-redux";
import Dashboard from "../../layouts/Dashboard";
import { RiDeleteBin3Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";

const DashboardHome = () => {
    const { products } = useSelector((state) => state.product);

    return (
        <Dashboard class="flex flex-col justify-center items-center h-full w-full">
            <div class="w-full max-w-7xl mx-auto rounded-lg">
                <header class="px-5 py-4 border-b">
                    <div class="font-semibold">Products</div>
                </header>

                <div class="overflow-x-auto p-3">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-content/75">
                            <tr>
                                <th></th>
                                <th class="p-2">
                                    <div class="font-semibold text-left">Product Name</div>
                                </th>
                                <th class="p-2">
                                    <div class="font-semibold text-left">Brand</div>
                                </th>
                                <th class="p-2">
                                    <div class="font-semibold text-left">In Stock</div>
                                </th>
                                <th class="p-2">
                                    <div class="font-semibold text-left">Price</div>
                                </th>
                                <th class="p-2">
                                    <div class="font-semibold text-center">Edit</div>
                                </th>
                                <th class="p-2">
                                    <div class="font-semibold text-center">Delete</div>
                                </th>
                            </tr>
                        </thead>

                        <tbody class="text-sm divide-y">
                            {products?.data?.map(({ model, brand, price, status, _id }) => (
                                <tr key={_id}>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td class="p-2">
                                        <div class="font-medium text-content/80">{model}</div>
                                    </td>
                                    <td class="p-2">
                                        <div class="text-left capitalize">{brand}</div>
                                    </td>
                                    <td class="p-2">
                                        <div class="text-left">
                                            {status ? (
                                                <p className="text-green-500 font-medium">Available</p>
                                            ) : (
                                                <p className="text-red-500 font-medium">Stock out</p>
                                            )}
                                        </div>
                                    </td>
                                    <td class="p-2">
                                        <div class="text-left font-medium text-indigo-500">{price}</div>
                                    </td>
                                    <td class="p-2">
                                        <div className="flex justify-center">
                                            <IconButton variant="text">
                                                <CiEdit className="text-lg" />
                                            </IconButton>
                                        </div>
                                    </td>
                                    <td class="p-2">
                                        <div className="flex justify-center">
                                            <IconButton variant="text">
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
