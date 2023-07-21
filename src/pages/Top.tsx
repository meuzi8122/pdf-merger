import Hero from "../components/hero";
import Uploader from "../components/shared/uploader";
import { files, updateFiles } from "../states/file";
import { name, updateName } from "../states/name";
import { JSXInputElementEvent } from "../types/event";
import { PDFUtil } from "../utils/pdf";

export default () => {
    const handleNameInput: JSXInputElementEvent = (event) => {
        updateName(event.currentTarget.value);
    }

    /* TODO: 型が合っているか確認(ChangeEvent) */

    const handleFilesChange: JSXInputElementEvent = (event) => {
        if (event.currentTarget.files) {
            updateFiles(Array.from(event.currentTarget.files));
        }
    }

    const handleSubmit = async () => {
        const url = URL.createObjectURL(await PDFUtil.mergeFiles(files));

        const link = document.createElement("a");
        link.href = url
        link.download = `${name()}.pdf`

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(url);
    }

    return (
        <Hero>
            <div class="card-body">
                <Uploader multiple={true} handleFilesChange={handleFilesChange} />
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">結合後のファイル名を入力</span>
                    </label>
                    <label class="input-group">
                        <input type="text" class="input input-bordered w-full max-w-xs" value={name()} oninput={handleNameInput} />
                        <span>.pdf</span>
                    </label>
                </div>
                {/* <div class="form-control">
                    <label class="label">
                        <span class="label-text">結合する順番に半角スペース区切りでファイル名を入力(任意・拡張子省略可)</span>
                    </label>
                    <input type="text" class="input input-bordered w-full max-w-xs" />
                </div> */}
                <div class="form-control mt-6">
                    <button type="button" class="btn btn-primary" onClick={handleSubmit} disabled={files.length === 0 || name() === ""}>PDFを結合</button>
                </div>
            </div>
        </Hero>
    )
};