import PDFMerger from "pdf-merger-js/browser";

export class PDFUtil {

    static async mergeFiles(files: File[]): Promise<Blob> {
        const merger = new PDFMerger();

        for (const file of files) {
            await merger.add(file);
        }

        return await merger.saveAsBlob();
    }

}