export default interface UpdateVoicemailAccountDto {
    name: string;
    inbox_number: number;
    pin: number;
    transcribe: "yes" | "no";
}