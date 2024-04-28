"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z  from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { Form, FormField,FormItem,FormLabel,FormDescription,FormMessage,FormControl } from '../ui/form'
import { Input } from '../ui/input'
import {Button} from '../ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

const formSchema =  z.object({
    name:z.string().min(2).max(50),
    email:z.string().email().optional(),
    contact:z.number(),
    venue:z.string(),
    tel:z.number().optional(),
    date:z.string().date(),
    time:z.string().time(),
    occassion:z.string(),

})


export default function PackForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            name:"",
            email:"",
        }
    })

    const handlesubmit = () => {}

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(handlesubmit)}
        >
        <FormField  control={form.control} name="name" 
            render={({field}) => {
                return (
                    <FormItem>
                        <FormLabel>name</FormLabel>
                        <FormControl>
                            <Input 
                            placeholder="name"
                            className=""
                            {...field}
                            />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )
            }}
        />
        <FormField  control={form.control} name="email" 
            render={({field}) => {
                return (
                    <FormItem>
                        <FormLabel>email</FormLabel>
                        <FormControl>
                            <Input 
                            placeholder="email address"
                            className=""
                            type="email"
                            {...field}
                            />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )
            }}
        />
        <FormField  control={form.control} name="contact" 
            render={({field}) => {
                return (
                    <FormItem>
                        <FormLabel>contact</FormLabel>
                        <FormControl>
                            <Input 
                            placeholder="contact"
                            className=""
                            type="tel"
                            {...field}
                            />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )
            }}
        />
        <FormField  control={form.control} name="tel" 
            render={({field}) => {
                return (
                    <FormItem>
                        <FormLabel>other contact (optional)</FormLabel>
                        <FormControl>
                            <Input 
                            placeholder="other tel"
                            className=""
                            type="tel"
                            {...field}
                            />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )
            }}
        />
        <FormField  control={form.control} name="date" 
            render={({field}) => {
                return (
                    <FormItem>
                        <FormLabel>date</FormLabel>
                        <FormControl>
                            <Input 
                            placeholder="pick a date"
                            className=""
                            type="date"
                            {...field}
                            />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )
            }}
        />
        <FormField  control={form.control} name="time" 
            render={({field}) => {
                return (
                    <FormItem>
                        <FormLabel>time</FormLabel>
                        <FormControl>
                            <Input 
                            placeholder="time"
                            className=""
                            {...field}
                            type="time"
                            />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )
            }}
        />
                <FormField  control={form.control} name="occassion" 
            render={({field}) => {
                return (
                    <FormItem>
                        <FormLabel>occassion</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="select the occassion type"/>
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="naming ceremony">naming ceremony</SelectItem>
                                <SelectItem value="wedding">wedding</SelectItem>
                                <SelectItem value="engagements">engagements</SelectItem>
                                <SelectItem value="funeral">funeral</SelectItem>
                                <SelectItem value="dinner">dinner</SelectItem>
                                <SelectItem value="others">others</SelectItem>
                            
                            </SelectContent>
                       </Select>
                        <FormMessage/>
                    </FormItem>
                )
            }}
        />
                <FormField  control={form.control} name="venue" 
            render={({field}) => {
                return (
                    <FormItem>
                        <FormLabel>venue</FormLabel>
                        <FormControl>
                            <Input 
                            placeholder="venue or location"
                            className=""
                            {...field}
                            />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )
            }}
        />


        <Button type="submit">
            submit
        </Button>
        </form>

    </Form>
  )
}
