import { Product } from "../../../models/products";
import db from "../../../utilities/db";

const handler = async (req, res) => {
    await db.connect();
    const products = await Product.find({});
    res.send(products);
};
export default handler;
