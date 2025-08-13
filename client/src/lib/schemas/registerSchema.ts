import z from "zod/v3";
import { required } from "../util/util";

export const registerSchema = z.object({
    email: z.string().email(),
    displayName: required('displayName'),
    password: required('password')
})

export type RegisterSchema = z.input<typeof registerSchema>;