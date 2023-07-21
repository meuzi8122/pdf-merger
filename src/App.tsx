import { Route, Routes } from "@solidjs/router"
import Top from "./pages/Top"

export default () => {
    return (
        <Routes>
            <Route path="/" component={Top}></Route>
        </Routes>
    )
}