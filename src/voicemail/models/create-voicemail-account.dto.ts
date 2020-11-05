export default interface CreateVoicemailAccountDto {
    name: string;
    inbox_number: number;
    pin: number;
    transcribe: "yes" | "no";
}