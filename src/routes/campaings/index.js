import express from 'express'
import { Campaign} from '../../schema/Campaign.js'
import { CampaignDtoCollection } from '../../dto/campaign/CampaignDtoCollection.js'

const router = express()

router.get('/', async (req, res) => {
    const campaign = await Campaign.find({})
    res.json(CampaignDtoCollection(campaign))
})

router.put('/:id',async(req, res,) => {
    await Campaign.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
    })
    res.json({success:"Campaign successfully updated"})
})

router.delete('/:id',async(req, res,) => {
    await Campaign.findByIdAndDelete(req.params.id)
    res.json({success:"Campaign successfully deleted"})
})
  
export { router as campaignsRouter }