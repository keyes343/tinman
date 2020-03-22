import React from 'react';
import {HomePage} from './homePage';
// import { s } from './incoming';

interface i_createContext{
    state:MyProviderState;
}

export const {Provider,Consumer} = React.createContext<MyProviderState | null>(null);

export interface MyProviderProps {
    
}
 
export interface MyProviderState {

}
 
export class MyProvider extends React.Component<MyProviderProps, MyProviderState> {
    constructor(props: MyProviderProps) {
        super(props);
        this.state = {
            name:'kk',
            menu_button:'minimized', // "minimized"|"maximized"
            nav_height: '8rem',
            nav_upper_height:'4.5rem',
            nav_lower_height:'2.5rem',
            google_pic_link_prefix: 'https://drive.google.com/uc?export=view&id=',
            homePage_bg_pic: '1KgRbjR1QCvaIAllSQFxeMyUsjLbWB-rV',
            rootSettings : (key:string,value:any) => {
                this.setState({
                    [key]:value
                })
            },
            user_location_on_site : ['Home'],

        };
    }
    public rootSettings = (key:string,value:any) => {
        this.setState({
            [key]:value
        })
    }

    render() { 
        return ( 
            <Provider value={this.state} >
                <HomePage/>
            </Provider>
         );
    }
}