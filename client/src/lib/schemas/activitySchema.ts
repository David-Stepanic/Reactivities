import {z} from 'zod';
import { required } from '../util/util';

export const activitySchema = z.object({
    title: required('Title'),
    description: required('Description'),
    category: required('Category'),
    date: z.coerce.date<Date>({
        message: 'Date is required'
    }),  
    location: z.object({
        venue: required('Venue'),
        city: z.string().optional(),
        latitude: z.coerce.number(), 
        longitude: z.coerce.number()
    })
})

export type ActivitySchema = z.input<typeof activitySchema>;