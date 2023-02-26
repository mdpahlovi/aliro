import { useSelector } from "react-redux";
import Main from "../layouts/Main";

export default function Home() {
    const state = useSelector((state) => state);
    console.log(state);

    return <Main>Home</Main>;
}
