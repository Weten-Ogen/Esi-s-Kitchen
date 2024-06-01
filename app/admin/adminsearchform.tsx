"use client"
import React, { FormEvent, useState } from 'react'
import { searchbyemail } from '../actions/actions'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField,FormItem, FormMessage } from '@/components/ui/form'

const formSchema  = z.object({
    email: z.string().email()
})

export default function AdminSearchForm() {
    const [query, setQuery] = useState('');
    const form = useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema)})

    const handlesearch = (values:z.infer<typeof formSchema>) => {}
    
  return (
    <Form {...form}>

    <form onSubmit={form.handleSubmit(handlesearch)} className='flex items-center gap-2 '>
        <div>
        <FormField 
            control={form.control}
            name='email'
            render={({field})=> {
                return (<FormItem>
                    <FormControl>
                        <Input 
                        name="email" 
                        placeholder="enter an email"
                        />
                    </FormControl>
                    <FormMessage/>
                </FormItem>)
            }}
            />
              <Button type='submit'>search</Button>
        </div>
    </form>
    </Form>
  )
}
