import { format } from 'date-fns';
import z from 'zod/v3';

export function formatDate(date: string | number | Date) {
    const parsedDate = new Date(date);

    if (isNaN(parsedDate.getTime())) {
    return "Invalid date";
    }

    return format(parsedDate, 'dd MMM yyyy h:mm a');
}

export const required = (name: string) => z
    .string().trim()
    .min(1, { message: `${name} is required`  })