export function convertToBase64(file: File): Promise<string | ArrayBuffer | null> {
    return new Promise((res, rej) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            res(fileReader.result);
        };
        fileReader.onerror = (error) => {
            rej(error);
        }
    })
}