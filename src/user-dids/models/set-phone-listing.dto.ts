export default interface SetPhoneListingDto {
    listing_type: string;
    business_name?: string;
    first_name?: string;
    last_name?: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zip: string;
    email: string;
    contact_number: string;
}
