// PARENT = homePage.tsx
import React from 'react';
import {s,c} from './incoming';
import { Home } from './Body/'

export interface BodyProps {
    
}
 
export interface BodyState {
    
}
 
class Body extends React.Component<BodyProps, BodyState> {
    constructor(props: BodyProps) {
        super(props);
        this.state = {
            
        };
    }
    private renderBody = (context:any):JSX.Element  => {
        const a = context.nav_height;
        const minht:string = 'calc(100vh - '+a+')';
        return(
            <s.Box overflowY='auto' zindx='10' >
                <s.Flex ht='auto' minht={minht} jc='flex-start' ai='flex-start' >
                    <Home/>
                </s.Flex>
            </s.Box>
        )
    }
    render() { 
        return ( 
            <c.Consumer>
                {(context:any)=>this.renderBody(context)}
            </c.Consumer>
         );
    }
}
 
export default Body;