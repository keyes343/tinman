// PARENT = ../body.tsx
import React from 'react';
import {s,c} from './incoming';
import { Button } from './index';

export interface HomeProps {
    
}
 
export interface HomeState {
    
}
 
class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
        this.state = {
            
        };
    }
    render() { 
        const grey = 'var(--greyColor)';
        const wd = '90%';
        return ( 
            <s.Flex ht='auto' jc='flex-start' pd='1rem 0' >
                <s.Box ht='auto' wd={wd} font='var(--pompiere)' size='2.8rem' cl={grey} >
                    TinMan is a Pre-Paid <br/> meal service
                </s.Box>
                <s.Box ht='auto'wd={wd} cl={grey} pd='2rem 0' >
                    We deliver prepaid Lunch and Dinner meals in round metal tiffin boxes. 
                    Log In to view your dashboard.
                </s.Box>

                {/* <s.Box pos='fixed' top='0'left='0' ht='100vh'wd='50%' bgcl='red' zindx='100' ></s.Box> */}

                <Button
                    buttonText='Log In'
                    cl = 'var(--yellowColor)'
                    description = 'Login to place an order and make payments for each meal via UPI or Cash On Delivery'
                />
                <Button
                    buttonText='Menu'
                    description = 'You can check the menu for yesterday, today and tomorrow. Keep submitting requests. We try to take ideas from our customers as well'
                />

                <s.Box ht='auto'wd={wd} cl={grey} pd='2rem 0' >
                    We recommend you go through our FAQ and LOCATION sections too if you are new to tinman.in
                </s.Box>

                <Button
                    buttonText='FAQ'
                    description = 'Check out few of the most relevant queries we thing you might have regarding tinman.in'
                />
                <Button
                    buttonText='Location'
                    description = 'See places where we deliver'
                />
            </s.Flex>
         );
    }
}
 
export default Home;

