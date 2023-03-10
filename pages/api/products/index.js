import { Product } from "../../../models/products";
import db from "../../../utilities/db";

const handler = async (req, res) => {
    await db.connect();
    const { method } = req;
    switch (method) {
        case "GET":
            const products = await Product.find({});
            res.send(products);
            break;
        case "POST":
            const product = req.body;
            const newProduct = new Product(product);
            const result = await newProduct.save();
            res.send({ acknowledge: true, insertedId: result._id });
            break;
        default:
            res.status(400).send({ message: "Method not allowed" });
            break;
    }
};
export default handler;
