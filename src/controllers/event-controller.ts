import express, {Request, Response} from 'express'
/**
 * GET:    /event 
 * GET:    /event/?category=1&organizer=1
 * GET:    /event/:event_id
 * POST:   /event
 * PUT:    /event/:event_id
 * DELETE: /event/:event_id
 */

const EventRouter = express.Router()

EventRouter.get('/event', async function(req: Request, res: Response) {
    const category = req.query.category
    const organizer = req.query.organizer



})

export default EventRouter
