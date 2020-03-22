// PARENT = navBar.tsx
import React from 'react';
import { s,c } from './incoming';

export interface NavContentProps {
    
}
 
export interface NavContentState {
    
}
 
class NavContent extends React.Component<NavContentProps, NavContentState> {
    constructor(props: NavContentProps) {
        super(props);
        this.state = {
            
        };
    }
    private renderHistory = (context:any) => {
        const user_location = context.user_location_on_site;
        return(
            <s.Flex flexdir='row' jc='flex-start' ht='auto'wd='auto' cl='var(--yellowColor)' pd='1.5rem 0 0' >
                <s.Flex ht='auto'wd='auto' >
                    {user_location}
                </s.Flex>

                <s.Flex ht='auto'wd='auto' pd='0 0.5rem 0' mrgn='0 0 -0.2rem 0' >
                    <s.Next size='0.7rem' cl='var(--yellowColor) ' />
                </s.Flex>
            </s.Flex>
        )
    }
    render() { 
        return ( 
            <s.Flex pos='absolute' zindx='10' jc='flex-start'ai='flex-start' pd='1rem 1rem 0' >
                <s.Box cl='#abc8ff'  ht='auto'wd='auto' >
                    TinMan.in
                </s.Box>
                <s.Box cl='var(--greyColor) '  ht='auto'wd='auto'>
                    Pre-Paid Bengali Meals
                </s.Box>
                <c.Consumer>
                    {(context:any)=>this.renderHistory(context) }
                </c.Consumer>
            </s.Flex>
         );
    }
}
 
export default NavContent;