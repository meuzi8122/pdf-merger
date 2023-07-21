import { createStore } from "solid-js/store";

const [files, setFiles] = createStore<File[]>([]);

function updateFiles(files: File[]) {
    setFiles(() => files);
}

function reorderFiles(beforePos: number, afterPos: number) {
    setFiles(prevFiles => {
        let nextFiles = [...prevFiles];

        const tmp = nextFiles[beforePos];
        nextFiles[beforePos] = nextFiles[afterPos];
        nextFiles[afterPos] = tmp;

        return nextFiles;
    });
}

export {
    files, reorderFiles, updateFiles
};

