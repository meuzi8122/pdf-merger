import { children } from "solid-js";

export default (props: any) => {
    const c = children(() => props.children);

    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">PDFMerger</h1>
                    <p class="py-6">PDFを1ファイルに結合します</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">{c()}</div>
            </div>
        </div>
    );
}