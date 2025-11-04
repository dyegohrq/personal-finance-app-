'use client'

import { useForm } from "react-hook-form";
import { Form, FormField } from "../form/form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
    email: z.string().email({ message: 'Enter a valid email address.' }),
    passoword: z.string().min(8, {message: 'The password must be at least 8 characters long'}),
})

type LoginFormValues = z.infer<typeof loginSchema>

export function LoginForm() {
    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            passoword: '',
        }
    })

    async function onSubmit(formData: LoginFormValues) {
        alert('ok')
    }

    return(
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField 
                    control={form.control}
                />
            </form>
        </Form>
    )
}