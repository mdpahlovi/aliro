import { Button, Dialog, IconButton, Input, Option, Radio, Select } from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CgClose } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { updateProductData } from "../redux/thunk/product/updateProduct";

const EditProductModal = ({ product, handler }) => {
    const [brand, setBrand] = useState("");
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const { _id, model, image, status, price, keyFeature } = product;
    console.log(product);

    const submit = (data) => {
        const updated_product = {
            model: data.model,
            brand: brand ? brand : product.brand,
            status: data.status === "available" ? true : false,
            price: data.price,
            keyFeature: [data.keyFeature1, data.keyFeature2, data.keyFeature3, data.keyFeature4],
            spec: [],
        };
        dispatch(updateProductData(_id, updated_product));
        handler();
    };
    return (
        <Dialog open={_id ? true : false} handler={handler} className="bg-background rounded-lg p-6 text-content">
            <div className="-mt-1 mb-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Edit Product</h1>
                <IconButton variant="text" onClick={handler}>
                    <CgClose size={24} />
                </IconButton>
            </div>
            <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit(submit)}>
                <Input type="text" size="lg" {...register("model")} label="Model" className="w-full" defaultValue={model} />
                <Input type="text" size="lg" {...register("image")} label="Image" className="w-full" defaultValue={image} />
                <Select size="lg" onChange={(value) => setBrand(value)} label="Brand" className="w-full" value={product.brand}>
                    <Option value="amd">AMD</Option>
                    <Option value="intel">Intel</Option>
                </Select>
                <Input type="text" size="lg" {...register("price")} label="Price" className="w-full" defaultValue={price} />
                <div className="col-span-full">
                    <h1>Availability</h1>
                    <Radio {...register("status")} label="Available" value="available" defaultChecked={status} />
                    <Radio {...register("status")} label="Stock out" value="stockOut" />
                </div>
                <Input
                    type="text"
                    size="lg"
                    {...register("keyFeature1")}
                    label="Key Feature 1"
                    className="w-full"
                    defaultValue={keyFeature ? keyFeature[0] : ""}
                />
                <Input
                    type="text"
                    size="lg"
                    {...register("keyFeature2")}
                    label="Key Feature 2"
                    className="w-full"
                    defaultValue={keyFeature ? keyFeature[1] : ""}
                />
                <Input
                    type="text"
                    size="lg"
                    {...register("keyFeature3")}
                    label="Key Feature 3"
                    className="w-full"
                    defaultValue={keyFeature ? keyFeature[2] : ""}
                />
                <Input
                    type="text"
                    size="lg"
                    {...register("keyFeature4")}
                    label="Key Feature 4"
                    className="w-full"
                    defaultValue={keyFeature ? keyFeature[3] : ""}
                />
                <Button type="submit" className="col-span-full">
                    Submit
                </Button>
            </form>
        </Dialog>
    );
};

export default EditProductModal;
