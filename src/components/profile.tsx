'use client'

import { useSession } from "next-auth/react"

export default function Profile(){


        // const session = useSession();

        // if(session.data?.user){
        //     return <div className="text-white bold"> User Logged In</div>
        // }


        return (
            <div className="text-white">User Not Logged IN</div>
        )

}