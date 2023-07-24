import { A } from "@solidjs/router";
import { For } from "solid-js";
import Hero from "../components/hero/hero-2";
import ArrowDown from "../components/icon/arrow-down";
import ArrowUp from "../components/icon/arrow-up";
import { files, reorderFiles } from "../states/file";

export default () => {
    return (
        <Hero>
            <div class="mb-6">
                <table class="table table-zebra">
                    <thead>
                        <tr>
                            <th>No. </th>
                            <th>ファイル名</th>
                            <th>1ページ前と入れ替え</th>
                            <th>1ページ後と入れ替え</th>
                        </tr>
                    </thead>
                    <tbody>
                        <For each={files}>{
                            ((file, i) => <tr class="hover">
                                <th>{i() + 1}</th>
                                <td>{file.name}</td>
                                <td>
                                    <button class="btn btn-square btn-xs btn-outline" onClick={() => reorderFiles(i(), i() - 1)} disabled={i() === 0}>
                                        <ArrowUp />
                                    </button>
                                </td>
                                <td>
                                    <button class="btn btn-square btn-xs btn-outline" onClick={() => reorderFiles(i(), i() + 1)} disabled={i() === files.length - 1}>
                                        <ArrowDown />
                                    </button>
                                </td>
                            </tr>)
                        }</For>
                    </tbody>
                </table>
            </div>
            <A href="/">ファイル選択に戻る</A>
        </Hero>
    )
}