import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter'
 import prisma from './lib/prisma';

export const  {
    handlers,
    auth,
    signIn,
    signOut,
} = 
NextAuth({
    adapter:PrismaAdapter(prisma),
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        })]
})