// PARENT = navBar.tsx
import React from 'react';
import {s} from './incoming';

export interface HamburgerMenuProps {
    
}
 
export interface HamburgerMenuState {
    hamburger:string;
}
 
class HamburgerMenu extends React.Component<HamburgerMenuProps, HamburgerMenuState> {
    constructor(props: HamburgerMenuProps) {
        super(props);
        this.state = {
            hamburger: 'off'
        };
    }
    public handleMenuClick = () => {
        if (this.state.hamburger === 'on') {
            this.setState({hamburger:'off'})
        } else if (this.state.hamburger === 'off') {
            this.setState({hamburger:'on'})
        }
    }
    render() { 
        return ( 
            <s.Flex pos='absolute' zindx='50' wd='auto' right='0.7rem'>
                <s.Flex ht='auto'wd='auto' zindx='20' onClick={this.handleMenuClick} cursor='pointer' >
                    <s.Menu size='2.1rem' cl='var(--greyColor)' />
                </s.Flex>
                <OverlayMenu todisplay={this.state.hamburger} toggleMenu={this.handleMenuClick} />
            </s.Flex>
         );
    }
}
 
export default HamburgerMenu;

export interface OverlayMenuProps {
    todisplay:string;
    toggleMenu:()=>void;
}

 
const OverlayMenu: React.FC<OverlayMenuProps> = (props:OverlayMenuProps) => {
    let maxwd:string='';
    let maxwd_black_filter ='';
    if(props.todisplay === 'on'){
        maxwd = '50%';
        maxwd_black_filter = '100%';
    }else if (props.todisplay === 'off'){
        maxwd = '0';
        maxwd_black_filter = '0';
    }
    const menuTexts:string[] = [
        'Home',
        'Log In',
        'My Page',
        "Today's Menu",
       ' FeedBack',
        'Locations',
        'Payments',
        'Logs',
        ]
    const menuButtons:JSX.Element[] = menuTexts.map((menuText,indx)=>{
        return(
            <s.Flex key={indx} ht='auto'wd='auto' font='var(--placeholder)' size='1rem' cl='var(--yellowColor)' pd='0.5rem 0' overflowX='hidden' >
                {menuText}
            </s.Flex>
        )
    })
    const renderMenuButtons = ():JSX.Element => {
        return(
            <s.Flex ai='flex-start' jc='flex-start' pd='4rem 1rem 1rem' minwd='150px' overflowX='hidden' >
                {menuButtons}
            </s.Flex>
        )
    }
    return ( 
        <s.Box pos='fixed' left='0'top='0' ht='100vh' bgcl='rgba(0,0,0,0.7)' maxwd={maxwd_black_filter} onClick={props.toggleMenu} >
            <s.Flex pos='absolute' maxwd={maxwd} left='0'top='0' bgcl='var(--maroonColor) ' zindx='50' transition='all 0.5s linear' 
                overflowX='hidden' >
                {renderMenuButtons()}
            </s.Flex>
        </s.Box>
     );
}