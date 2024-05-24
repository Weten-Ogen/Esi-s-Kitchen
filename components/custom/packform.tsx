"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z  from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { Form, FormField,FormItem,FormLabel,FormMessage,FormControl } from '../ui/form'
import { Input } from '../ui/input'
import {Button} from '../ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Loader } from 'lucide-react'




const formSchema =  z.object({
    name:z.string().min(2).max(50),
    email:z.string().email().optional(),
    contact:z.string(),
    venue:z.string(),
    tel:z.string().optional(),
    date:z.string().date(),
    time:z.string(),
    package:z.string(),
    occassion:z.string(),
    population:z.coerce.number()
})



export default function PackForm() {
    const [loading,setLoading] = useState(false)
    const formRef = useRef<HTMLFormElement | null>(null)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            name:"",
            email:"",
            population:200,
        }
    })

    const handlesubmit =async (values:z.infer<typeof formSchema>) => {
        setLoading(prev => !prev)
        await fetch('/api/form', {
            method:'POST',
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify(values)
        })
        form.reset()
        setLoading(false)
    }

  return (
    <Form {...form} >

        <form ref={formRef} onSubmit={form.handleSubmit(handlesubmit)}
        >
        {
            loading ? 
            <div className="flex items-center justify-center p-24 ">
                <Loader className="text-2xl text-secondcolor animate-spin " size={100}/> 
            </div>
            
            : 
            
            <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">        
        <FormField  control={form.control} name="name" 
            render={({field}) => {
                return (
                    <FormItem>
                        <FormLabel className="text-lg text-white tracking-wider text-clip whitespace-normal" >
                            name
                        </FormLabel>
                        <FormControl>
                            <Input 

                            placeholder="name"
                            className=""
                            {...field}
                            />
                        </FormControl>

                            <FormMessage className="text-md text-clip px-3 tracking-wide whitespace-normal  font-bold text-secondcolor"/>
                    </FormItem>
                )
            }}
        />
        <FormField  control={form.control} name="email" 
            render={({field}) => {
                return (
                    <FormItem>
                        <FormLabel className="text-lg text-white tracking-wider text-clip whitespace-normal">email</FormLabel>
                        <FormControl>
                            <Input 
                            placeholder="email address"
                            type="email"
                            {...field}
                            />
                        </FormControl>
                    
                            <FormMessage className="text-md text-clip px-3 tracking-wide whitespace-normal  font-bold text-secondcolor"/>
                    </FormItem>
                )
            }}
        />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">

        <FormField  control={form.control} name="contact" 
            render={({field}) => {
                return (
                    <FormItem>
                        <FormLabel className="text-lg text-white tracking-wider text-clip whitespace-normal">contact</FormLabel>
                        <FormControl>
                            <Input 
                            placeholder="contact"
                            className=""
                            
                            {...field}
                            />
                        </FormControl>
                       
                            <FormMessage className="text-md text-clip px-3 tracking-wide whitespace-normal  font-bold text-secondcolor"/>
                    </FormItem>
                )
            }}
        />
        <FormField  control={form.control} name="tel" 
            render={({field}) => {
                return (
                    <FormItem>
                        <FormLabel className="text-lg text-white tracking-wider text-clip whitespace-normal">other contact (optional)</FormLabel>
                        <FormControl>
                            <Input 
                            placeholder="other tel"
                            className=""
                            type='number'
                            {...field}
                            />
                        </FormControl>
                        
                            <FormMessage className="text-md text-clip px-3 tracking-wide whitespace-normal  font-bold text-secondcolor"/>
                    </FormItem>
                )
            }}
        />
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-2'>

        <FormField  control={form.control} name="date" 
            render={({field}) => {
                return (
                    <FormItem>
                        <FormLabel className="text-lg text-white tracking-wider text-clip whitespace-normal">date</FormLabel>
                        <FormControl>
                            <Input 
                            placeholder="pick a date"
                            className=""
                            type="date"
                            {...field}
                            />
                        </FormControl>
                        
                            <FormMessage className="text-md text-clip px-3 tracking-wide whitespace-normal  font-bold text-secondcolor"/>
                    </FormItem>
                )
            }}
        />
        <FormField  control={form.control} name="time" 
            render={({field}) => {
                return (
                    <FormItem>
                        <FormLabel className="text-lg text-white tracking-wider text-clip whitespace-normal">time</FormLabel>
                        <FormControl>
                            <Input 
                            placeholder="time"
                            className=""
                             {...field}
                            type="time"
                            />
                        </FormControl>
                       
                            <FormMessage className="text-md text-clip px-3 tracking-wide whitespace-normal  font-bold text-secondcolor"/>
                    </FormItem>
                )
            }}
        />
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-2'>

                    <FormField  control={form.control} name="occassion" 
                render={({field}) => {
                    return (
                        <FormItem>
                            <FormLabel className="text-lg text-white tracking-wider text-clip whitespace-normal">occassion</FormLabel>
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
                          
                            <FormMessage className="text-md text-clip px-3 tracking-wide whitespace-normal  font-bold text-secondcolor"/>
                        </FormItem>
                    )
                }}
            />
                    <FormField  control={form.control} name="venue" 
                render={({field}) => {
                    return (
                        <FormItem>
                            <FormLabel className="text-lg text-white tracking-wider text-clip whitespace-normal">venue</FormLabel>
                            <FormControl>
                                <Input 
                                placeholder="venue or location"
                                type='text'
                                {...field}
                                />
                            </FormControl>  
 
                            <FormMessage className="text-md text-clip px-3 tracking-wide whitespace-normal  font-bold text-secondcolor"/>
                        </FormItem>
                    )
                }}
            />
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">

                    <FormField  control={form.control} name="package" 
                render={({field}) => {
                    return (
                        <FormItem>
                            <FormLabel className="text-lg text-white tracking-wider text-clip whitespace-normal">type of package</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="select the type of package"/>
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="naming ceremony">premium</SelectItem>
                                    <SelectItem value="wedding">standard</SelectItem>
                                    <SelectItem value="engagements">diamond</SelectItem>
                                    <SelectItem value="funeral">platinum</SelectItem>
                                    <SelectItem value="dinner">esi's special</SelectItem>
                                    <SelectItem value="others">heritage</SelectItem>
                                
                                </SelectContent>
                        </Select>

                            <FormMessage className="text-md text-clip px-3 tracking-wide whitespace-normal  font-bold text-secondcolor"/>
                        </FormItem>
                    )
                }}
            />
                    <FormField  control={form.control} name="population" 
                render={({field}) => {
                    return (
                        <FormItem>
                            <FormLabel className="text-lg text-white tracking-wider text-clip whitespace-normal">number per head</FormLabel>
                            <FormControl>
                                <Input 
                                placeholder='placeholder'
                                type='number'
                                min={200}
                                className=""
                                {...field}
                                />
                            </FormControl>  
                            <FormMessage className="text-md text-clip px-3 tracking-wide whitespace-normal  font-bold text-secondcolor"/>
                        </FormItem>
                    )
                }}
            />
    </div>

    <div className="w-full my-4">
        <Button  className="w-full bg-secondcolor text-xl uppercase whitespace-normal tracking-wider hover:bg-secondcolor opacity-80 hover:opacity-100 ease-out duration-500" type="submit">
            submit
        </Button>
    </div>


            </>
        }
    
        </form>

    </Form>
  )
}
