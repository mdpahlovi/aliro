import { useEffect } from "react";
import Main from "../layouts/Main";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { productsLoading } from "../redux/action/actionCreators";
import { loadProductsData } from "../redux/thunk/product/fetchProduct";

export default function Home() {
    const dispatch = useDispatch();
    const { filter, product } = useSelector((state) => state);
    const { card, products } = product;

    useEffect(() => {
        dispatch(productsLoading());
        dispatch(loadProductsData());
    }, [dispatch]);

    if (products?.data === 0 || products?.loading) {
        return <Main>Loading</Main>;
    } else {
        return (
            <Main className="container section-gap grid grid-cols-3 gap-6">
                {products?.data.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </Main>
        );
    }
}
