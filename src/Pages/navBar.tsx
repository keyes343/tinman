// PARENT = homePage.tsx
import React from 'react';
import { s,c } from './incoming';
import { NavContent, HamburgerMenu } from './NavBar/';

export interface NavBarProps {
    
}
 
export interface NavBarState {
    
}
class NavBar extends React.Component<NavBarProps, NavBarState> {
    constructor(props: NavBarProps) {
        super(props);
        this.state = {

        };
    }
    private renderNavBar = (context:any):JSX.Element  => {
        const ht:string = context.nav_height;
        return(
            <s.Flex ht={ht} bgcl ='var(--nav-bgcl)' bdbottom='1px solid var(--greyColor) ' zindx='20 '  >
                <NavContent/>
                <HamburgerMenu/>
                <Decorations/>
            </s.Flex>
        )
    }
    render() { 
        return ( 
            <c.Consumer>
                {(context:any)=>this.renderNavBar(context)}
            </c.Consumer>
         );
    }
}
export interface DecorationsProps {
    
}
 
const Decorations: React.FC<DecorationsProps> = (props:DecorationsProps) => {
    return ( 
        <s.Box maxht='7rem' pos='absolute' zindx='10' overflowY='hidden'  >
            <s.Box pos='absolute' ht='15rem'wd='15rem' br='50%' bgcl='rgba(40, 62, 80, 0.45) '
            top='-12rem' right='2rem'  />

            <s.Box pos='absolute' ht='15rem'wd='15rem' br='50%' bgcl='rgba(15, 55, 91, 0.57) '
            top='-9rem' right='-7rem'  />
        </s.Box>
     );
}
export default NavBar;