'use client'

import { auth } from '@/auth';
import { Avatar, Button, Input, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import * as actions from '@/app/actions';
import { useSession } from 'next-auth/react';

export default function HeaderAuth() {

    const session = useSession();


    let authContent: React.ReactNode;
    

    if(session.status === 'loading'){
        authContent = null;
    }
    else if (session.data?.user) {
        authContent = (
            <Popover placement='bottom'>
                <PopoverTrigger>
                <Avatar src={session.data?.user.image || ''} />
                </PopoverTrigger>
                <PopoverContent>
                    <div>
                        <form action={actions.signOut}>
                            <button type='submit'>Sign Out</button>
                        </form>
                    </div>
                </PopoverContent>
            </Popover>

        );

    } else {
        authContent = <>


            <NavbarItem>
                <form action={actions.signIn}>
                    <Button type='submit' color="success" variant='bordered' className='text-white'>Sign In</Button>
                </form>
            </NavbarItem>

            <NavbarItem>
                <form action={actions.signIn}>
                    <Button type='submit' color="default" variant='flat' className='text-white'>Sign Up</Button>
                </form>
            </NavbarItem>


        </>
    }

  return authContent;
}
