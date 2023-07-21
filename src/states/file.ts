import { createStore } from "solid-js/store";

const [files, setFiles] = createStore<File[]>([]);

function updateFiles(files: File[]) {
    setFiles(() => files);
}

export {
    files,
    updateFiles
};

