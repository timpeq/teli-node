export default interface UpdateResellerBrandingDto {
    old_domain: string;
    brand: string;
    domain: string;
    file_css?: string;
    file_logo?: string;
}