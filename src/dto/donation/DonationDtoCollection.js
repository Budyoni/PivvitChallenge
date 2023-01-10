import { DonationDto } from "./DonationDto"

function DonationDtoCollection (donations) {
    return donations.map((donation => new DonationDto(donation))) 
}

export { DonationDtoCollection }