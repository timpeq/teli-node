export default interface SendFaxDto {
    destination: number;
    recipient: string;
    files: string;
}