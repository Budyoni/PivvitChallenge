class DonationDto {
    donorName
    campaignID
    amount
    id
  
    constructor(data) {
      this.donorName = data.donorName
      this.campaignID = data.campaignID
      this.id = data._id
      this.amount = data.amount
    }
}

export { DonationDto }