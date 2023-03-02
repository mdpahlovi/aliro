import { Button, Input, Option, Radio, Select } from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Dashboard from "../../layouts/Dashboard";
import { addProduct } from "../../redux/action/actionCreators";
import { addProductData } from "../../redux/thunk/product/addProduct";

const AddProduct = () => {
    const [brand, setBrand] = useState("");
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        const product = {
            model: data.model,
            brand: brand,
            status: data.status === "true" ? true : false,
            price: data.price,
            keyFeature: [data.keyFeature1, data.keyFeature2, data.keyFeature3, data.keyFeature4],
            spec: [],
        };
        dispatch(addProductData(product));
    };
    return (
        <Dashboard className="flex items-center">
            <form className="w-full max-w-2xl mx-auto shadow-lg p-6 border rounded-lg grid grid-cols-2 gap-4" onSubmit={handleSubmit(submit)}>
                <Input type="text" size="lg" {...register("model")} label="Model" className="w-full" />
                <Input type="text" size="lg" {...register("image")} label="Image" className="w-full" />
                <Select size="lg" onChange={(value) => setBrand(value)} label="Brand" className="w-full">
                    <Option value="amd">AMD</Option>
                    <Option value="intel">Intel</Option>
                </Select>
                <Input type="text" size="lg" {...register("price")} label="Price" className="w-full" />
                <div className="col-span-full">
                    <h1>Availability</h1>
                    <Radio id="available" {...register("status")} label="Available" value="true" />
                    <Radio id="stockOut" {...register("status")} label="Stock out" value="false" />
                </div>
                <Input type="text" size="lg" {...register("keyFeature1")} label="Key Feature 1" className="w-full" />
                <Input type="text" size="lg" {...register("keyFeature2")} label="Key Feature 2" className="w-full" />
                <Input type="text" size="lg" {...register("keyFeature3")} label="Key Feature 3" className="w-full" />
                <Input type="text" size="lg" {...register("keyFeature4")} label="Key Feature 4" className="w-full" />
                <Button type="submit" className="col-span-full">
                    Submit
                </Button>
            </form>
        </Dashboard>
    );
};

export default AddProduct;
