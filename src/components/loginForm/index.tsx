"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../form/form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../input";
import { useState } from "react";
import { Button } from "../button/button";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const loginSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address." }),
  passoword: z
    .string()
    .min(8, { message: "The password must be at least 8 characters long" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      passoword: "",
    },
  });

  async function onSubmit(formData: LoginFormValues) {
    alert("ok");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} disabled={isLoading} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="passoword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    {...field}
                    disabled={isLoading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent cursor-pointer "
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                  >
                    {
                        showPassword ? (
                            <EyeOff className=" h-4 w-4 text-beige-500 " />
                        ) : (
                            <Eye className=" h4 w-4 text-beige-500  " />
                        )
                    }
                    <span className="sr-only" >
                        {showPassword ? 'Hide password' : 'Show password'}
                    </span>
                  </Button>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className=" w-full bg-grey-900 rounded-lg textPresent-4-bold text-white px-4 cursor-pointer " disabled={form.formState.isSubmitting} >
             {
                form.formState.isSubmitting ? (
                    <>
                        <Loader2/>
                        Loading...
                    </>
                ) : (
                    <>
                        Login
                    </>
                )
             }
        </Button>
        <div className="relative my-4 " >
             <div className="absolute inset-0 flex items-center " >
                <span className=" w-full border-t " ></span>
             </div>
             <div className="relative flex justify-center textPresent-4-bold text-beige-500 uppercase" >
                <span className="bg-background px-2 text-muted-foreground " >Ou continue com</span>
             </div>
        </div>

        <div className="flex gap-1  " >
            <Button 
                type="button"
                variant='outline'
                className="flex-1 border-beige-500 "
                onClick={async () => {}}
            >
                <FcGoogle />
            </Button>
            <Button 
                type="button"
                variant='outline'
                className=" flex-1 border-beige-500 "
                onClick={async () => {}}
            >
                <FaGithub />
            </Button>
        </div>
      </form>
    </Form>
  );
}
