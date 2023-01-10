import express from 'express'
import { body,validationResult } from 'express-validator'
import { Donation } from '../../schema/Donation.js'
import { DonationDto } from '../../dto/donation/DonationDto.js'

const router = express()

router.get('/', async (req, res) => {
    const donations = await Donation.find({})
    res.json( DonationDtoCollection(donations) )
})

router.post('/',
  body("donorName").exists().isString().notEmpty(),
  body("campaignID").exists().isString(),
  body("amount").exists().isNumeric(),
  async (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const donation = await Donation.create(req.body)

  res.status(200).json(new DonationDto(donation))
})

router.put('/:id',async (req, res,) => {

  await Donation.findByIdAndUpdate(req.params.id, req.body)
  res.json({success:"Donation successfully updated"})

})

router.delete('/:id',async(req, res,) => {

  await Donation.findByIdAndDelete(req.params.id)

  res.json({success:"Donation successfully deleted"})
})

export { router as donationsRouter }