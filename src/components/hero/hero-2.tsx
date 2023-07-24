import { children } from "solid-js";


export default (props: any) => {
    const c = children(() => props.children);

    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content text-center">
                <div class="max-w-md">{c()}</div>
            </div>
        </div>
    )
}