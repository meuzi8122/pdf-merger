import { Route, Routes } from "@solidjs/router";
import Order from "./pages/Order";
import Top from "./pages/Top";

export default () => {
    return (
        <Routes>
            <Route path="/" component={Top}></Route>
            <Route path="/order" component={Order}></Route>
        </Routes>
    )
}