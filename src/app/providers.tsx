'use client';import {Amplify} from 'aws-amplify';
import { PropsWithChildren } from 'react';Amplify.configure({
    
})export default function Providers({children}: PropsWithChildren) {
    return <>{children}</>
}
