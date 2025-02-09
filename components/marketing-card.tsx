import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'


export const MarketingCard = () => {
  return (
    <Card className=' lg:w-[500px] md:w-[350px] p-0 '>
        <CardHeader>
            <CardTitle className='text-xl lg:text-2xl font-semibold tracking-wide text-maroon'>
                Opec smart door 
            </CardTitle>
            <CardDescription>
            Get a unique combination of characters to input in your  door to gain access
            </CardDescription>
        </CardHeader>
        <div className=' w-full space-y-2 lg:p-4 p-2  my-3'>
          <a href="/auth">
          <Button className=' w-full font-semibold h-12'>
          Login
           </Button>
          </a>
          <a href="/auth">
          <Button  className=' w-full font-semibold h-12' variant={"secondary"}>
            Sign Up
           </Button>
          </a>
         
        </div>
    </Card>
  )
}
