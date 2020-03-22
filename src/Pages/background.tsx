// PARENT = homePage.tsx
import React from 'react';
import {s,c} from './incoming';

export interface BackgroundProps {
    
}
 
export interface BackgroundState {
    
}
 
class Background extends React.Component<BackgroundProps, BackgroundState> {
    constructor(props: BackgroundProps) {
        super(props);
        this.state = {
            
        };
    }
    private blankSpace = (context:any):JSX.Element  => {
        return(
            <s.Flex ht={context.nav_height} >

            </s.Flex>
        )
    }
    private background = (context:any):JSX.Element  => {
        const img_0 = context.google_pic_link_prefix;
        //const img_1 = '1KgRbjR1QCvaIAllSQFxeMyUsjLbWB-rV' // close up photo of a kitchen
        const img_2 = '1jphUpO_tza2W9iV9ik5qRkxJz0zpcTj-' // 22kb sized pic
        return(
            <s.Flex pos='absolute' zindx='-10' >
                <s.Flex pos='absolute' zindx='10' >
                    <c.Consumer>
                        {(context:any)=>this.blankSpace(context)}
                    </c.Consumer>
                    <s.Flex>
                        <img src = {img_0+img_2} alt='kitchen' />
                    </s.Flex>
                </s.Flex>
                <s.Flex pos='absolute' zindx='20' bgcl='rgba(25,43,59,0.85)' > </s.Flex>
            </s.Flex>
        )
    }
    render() { 
        return ( 
            <c.Consumer>
                {(context:any) => this.background(context) }
            </c.Consumer>
         );
    }
}
 
export default Background;