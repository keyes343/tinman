import styled, { css } from 'styled-components';


export const Input = styled.input`    
    ${({size,lh,wght,td,bgcl,bgcl2,cl,ht,wd,pd,mrgn, bdbottom,minwd,minht,maxwd,maxht,bd,br,
    phfont,phsize,phbd})=>css`
    
    font-size: ${size || ''}; font-family: 'Alegreya Sans', sans-serif;
    color: ${ cl || ''}; 
    font-weight: ${wght || ''}; 
    
    line-height: ${lh || ''}; border-bottom: ${bdbottom ||'1px solid'}; border-top:none; border-left:none; border-right:none;
    border:${bd||''}; border-radius: ${br ||''}; outline:none; 
    text-decoration: ${td || ''}; 
    background-color: #c7d0d8;
    
    width: ${wd||'100%'}; height: ${ht||'auto'};
    min-width: ${minwd ||''}; min-height: ${minht ||''};
    max-width: ${maxwd ||''}; max-height: ${maxht ||''};
    padding: ${pd||''}; 
    margin: ${mrgn||'0'};
    
    &:placeholder-shown{
        background-color: ${bgcl||''};
        border: ${phbd||'#d18864'};
        font-family: 'Alegreya Sans SC', sans-serif;
        &::placeholder{
            color: #ffde59;        
            font-style: italic;
            font-size: ${phsize || ''};
        }
    }
    &:focus{
        /* border: 2px solid #d18864; */
        color: black;  
        background-color: ${bgcl2||''};
        &::placeholder{
            color: black;        
    }
`}
`;

export const Textarea = styled.textarea`    
    ${({size,lh,wght,td,bgcl,cl,ht,wd,pd,mrgn, bd, br })=>css`
    font-size: ${size || ''}; color: ${ cl || ''}; 
    line-height: ${lh || ''}; border: ${bd||''};  border-radius: ${br ||''};
    font-weight: ${wght || ''};
    text-decoration: ${td || ''};
    background-color: transparent;
    width: ${wd||'auto'}; height: ${ht||'auto'};
    padding: ${pd||''}; 
    margin: ${mrgn||'0'};
    outline: none; resize:none;
    &:placeholder-shown{
        background-color: ${bgcl||''};
        border: #d18864;
        &::placeholder{
            color: #d9d9d9;        
        }
    }
    &:focus{
        border: 2px solid #d18864;
    }
`}
`;

