// PARENT = home.tsx
import React from 'react';
import {s,c} from './incoming';

export interface ButtonProps {
    buttonText:string;
    description:string;
    cl?:string;
}
 
export interface ButtonState {
    
}
 
class Button extends React.Component<ButtonProps, ButtonState> {
    constructor(props: ButtonProps) {
        super(props);
        this.state = {
            
        };
    }
    render() { 
        let button_txt_cl ='var(--greyColor)';
        if(this.props.cl){
            button_txt_cl = this.props.cl;
        }
        return ( 
            <s.Flex ht='auto' flexdir='row' jc='flex-start'ai='flex-start' pd='0.6rem 1rem' >
                <s.Box txt='center' ht='auto'wd='8rem' font='var(--placeholder)' size='1.3rem' br='0.4rem'  cl={button_txt_cl} 
                    bd='2px solid var(--greyColor)' pd='0.5rem 0.7rem'>
                    {this.props.buttonText}
                </s.Box>

                <s.Box ht='auto'  cl='var(--lightBlueColor)' pd='0 0 0 1rem' mrgn='-0.2rem 0 0'  >
                    {this.props.description}
                </s.Box>
            </s.Flex>
         );
    }
}
 
export default Button;