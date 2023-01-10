import mongoose, { Schema } from 'mongoose'

const CampaignSchema = new mongoose.Schema({
    title: { type: Schema.Types.String, required: true },
})

const Campaign = mongoose.model("Campaign", CampaignSchema)

export { Campaign }