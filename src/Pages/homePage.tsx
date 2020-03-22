import React from 'react';
import { s,c } from './incoming';
import {NavBar, Background, Body} from './index';

export interface HomePageProps {
    
}
 
export interface HomePageState {
    
}
export class HomePage extends React.Component<HomePageProps, HomePageState> {
    constructor(props: HomePageProps) {
        super(props);
        this.state = {};
    }
    

    render() { 
        return ( 
            <s.Flex ht='100vh' jc='flex-start'>
                <NavBar/>
                <Background/>
                <Body/>
            </s.Flex>
         );
    }
}