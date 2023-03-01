import { Product } from "../../models/products";
import { data } from "../../public/products";
import db from "../../utilities/db";

const handler = async (req, res) => {
    await db.connect();
    await Product.insertMany(data);
    res.send({ message: "Seeded Successfully" });
};
export default handler;
