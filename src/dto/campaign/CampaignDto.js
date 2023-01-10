export class CampaignDto {
    title
    id
  
    constructor(data) {
      this.title = data.title
      this.id = data._id
    }
}