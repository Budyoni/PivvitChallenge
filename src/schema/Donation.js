import mongoose, { Schema } from 'mongoose'

const DonationSchema = new mongoose.Schema({
    donorName: { type: Schema.Types.String, required: true },
    campaignID: { type: Schema.Types.ObjectId, ref: 'Campaign' },
    amount: { type: Schema.Types.Number, required: true },
})

const Donation = mongoose.model("Donation", DonationSchema)

export { Donation }