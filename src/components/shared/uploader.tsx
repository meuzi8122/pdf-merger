type Props = {
    multiple: boolean;
    handleFilesChange: any;
}

export default (props: Props) => {
    return (
        <div class="form-control">
            <label class="label">
                <span class="label-text">PDFファイルを選択</span>
            </label>
            <input type="file" name="files" accept=".pdf" multiple={props.multiple} class="file-input file-input-bordered w-full max-w-xs" onchange={props.handleFilesChange} />
        </div>
    )
}