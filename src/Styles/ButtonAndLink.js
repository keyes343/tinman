import styled, { css } from 'styled-components';

// yellow button color ffde59

//LinkC = Link Custom
export const LinkC = styled.a`    
    ${({cl,size})=>css`
    cursor:url('/cursor/red cursor.cur'), auto;
    color: ${cl || ''}; display:inline-block;
    font-size: ${size || ''};
    text-decoration: none; border:2px solid blue;
`}
`;

//LinkD = Link Default
export const LinkD = styled.a`    
    ${({cl,size})=>css`
    cursor:url('/cursor/red cursor.cur'), auto;
    color: ${cl || ''};
    font-size: ${size || ''};
`}
`;

export const Button = styled.button`    
    ${({cl,size, ht, wd,pd,bd,mrgn,bgcl})=>css`
    cursor:url('/cursor/blue cursor.cur'), auto;    border: none;
    color: ${cl || ''};                     outline: none; 
    font-size: ${size || '1.1rem'};         text-align: center;
    width: ${wd || 'auto'};                 height: ${ht || 'auto'};
    margin: ${mrgn||'0'};  padding: ${pd || '0.7rem 0.5rem'}; border: ${bd || ''};
    background-color: ${bgcl||'#ffde59'} ;
    &:active{border-style: none;}
    &:hover{
        background-color: black; color: white;
    }
`}
`;
export const ButtonMenu = styled.button`    
    ${({cl,size, ht, wd,pd,mrgn, bgcl})=>css`
    cursor:pointer; border: none; outline: none; 
    font-size: ${size || '0.9rem'};
    text-align: left;
    width: ${wd || '100%'};             height: ${ht || 'auto'};
    margin: ${mrgn||'0'}; padding: ${pd || '0.7rem 0.5rem'}; 
    background-color: ${bgcl||''}; color: ${cl || ''};
    &:active{border-style: none;}
    /* &:hover{
        background-color: white; color: black;
    } */
`}
`;
export const ButtonThumbnail = styled.button`    
    ${({cl,size, ht, wd,pd,bd,mrgn,bgcl})=>css`
    cursor:url('/cursor/blue cursor.cur'), auto;    border: none;
    color: ${cl || ''};                     outline: none; 
    font-size: ${size || '1.1rem'};         
    width: ${wd || '100%'};                 height: ${ht || '100%'};
    margin: ${mrgn||'0'};  padding: ${pd || '0.7rem 0.5rem'}; border: ${bd || ''};
    background-color: ${bgcl||'transparent'} ;
    &:active{border-style: none;}
    }
`}
`;

export const Span = styled.span`    
    ${({size,lh,wght,td,bgcl,cl,font,cursor})=>css`
    font-size: ${size || ''}; color: ${ cl || ''};
    line-height: ${lh || ''};
    font-family: ${font||  ''};
    font-weight: ${wght || ''};
    text-decoration: ${td || ''};
    background-color: ${bgcl || ''};
    cursor: ${cursor || ''};
`}
`;
export const SpanHead = styled.span`    
    ${({size,lh,wght,td})=>css`
    font-size: ${size || '1rem'}; 
    line-height: ${lh || ''};
    font-weight: ${wght || '800'};
    text-decoration: ${td || ''};
`}
`;