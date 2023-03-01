import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Main from "../layouts/Main";

export default function Home() {
    const state = useSelector((state) => state);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/products")
            .then((res) => setProducts(res.data))
            .catch((error) => console.log(error));
    }, []);

    if (products?.length === 0) {
        return <Main>Loading</Main>;
    } else {
        return (
            <Main className="container section-gap grid grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </Main>
        );
    }
}
