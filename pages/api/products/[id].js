import { Product } from "../../../models/products";
import db from "../../../utilities/db";

const handler = async (req, res) => {
    await db.connect();
    const id = req.query.id;
    const { method } = req;
    switch (method) {
        case "PATCH":
            await Product.findByIdAndUpdate(id, { $set: req.body });
            res.send({ acknowledge: true, updatedId: id });
            break;
        case "DELETE":
            await Product.findByIdAndRemove(id);
            res.send({ acknowledge: true, removedId: id });
            break;
        default:
            res.status(400).send({ message: "Method not allowed" });
            break;
    }
};
export default handler;
