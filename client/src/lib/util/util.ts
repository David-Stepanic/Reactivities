import { format } from 'date-fns';

export function formatDate(date: string | number | Date) {
    const parsedDate = new Date(date);

    if (isNaN(parsedDate.getTime())) {
    return "Invalid date";
    }

    return format(parsedDate, 'dd MMM yyyy h:mm a');
}