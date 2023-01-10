import { CampaignDto } from "./CampaignDto.js"

function CampaignDtoCollection (campaigns) {
    return campaigns.map((campaign => new CampaignDto(campaign))) 
}

export { CampaignDtoCollection }