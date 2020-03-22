import styled, { css } from 'styled-components';

export const Div = styled.div`
width: 100%; height: 100%;
position: relative;
margin: auto;
border: 2px solid red;
`;

//-------------------------------------- Box
export const Box = styled.div`
${({lh,wd,maxwd,minwd,ht,pos,mrgn,bgcl,zindx,pd,top,left,right,bottom,br,size,cursor, shadow, wght, ls,va, libgcl,
    minht,maxht,cl,bd, overflowX, overflowY, dsply,accht,pdli, transform, transition, flex, td, font,
    bdtop,bdbottom,bdright,bdleft, txt})=>css`
    
    width: ${wd || '100%'};             height: ${ht || '100%'}; flex:${flex|| '0 1 auto'};
    min-height: ${minht || ''};         max-height: ${maxht || ''}; 
    min-width: ${minwd || ''};          max-width: ${maxwd || ''};          
    position: ${pos || 'relative'};     margin: ${mrgn||'0'}; padding: ${pd || '0'}; 
    border: ${bd || ''};  box-shadow: ${shadow || 'none'}; 
    border-top: ${bdtop || ''}; border-bottom: ${bdbottom || ''}; border-left: ${bdleft || ''}; border-right: ${bdright || ''};
    background-color: ${bgcl || ''};    z-index: ${zindx || '0'};
    top: ${top || ''};  left: ${left || ''}; right: ${right || ''}; bottom: ${bottom || ''}; 
    cursor: ${cursor || ''};            border-radius: ${br || 'inherit'};
    overflow-y: ${overflowY || 'hidden'}; overflow-x: ${overflowX || 'hidden'};
    color: ${cl || ''};                 font-size: ${size || '0.7rem'};   letter-spacing: ${ls||''};
    line-height: ${lh || ''};           display: ${dsply || ''};    vertical-align: ${va||''};
    transition:  ${transition||'all .1s linear'}; text-align: ${txt || ''}; font-weight: ${wght || ''}; 
    font-family: ${font|| 'var(--default) '};
    text-decoration: ${td || ''};
    transform: ${transform||''};
    white-space: normal;
    background-image: ${props=>{
        if(props.bgimg){   
            return props.bgimg;
        }
    }};

    /* MOBILE */
    @media screen and (min-width: 100px) and (max-width: 500px) {
        display: ${props=>{if(props.onlyDesktop) return 'none';else if(props.onlyMobile) return 'block';
        else if(props.dsply) return props.dsply; else return ''}};
        width: ${props=>{if(props.wdmob) return props.wdmob; else if(wd) return wd; else return '100%'}};
        min-width: ${()=>{if(minwd) return minwd; else return ''}};
        height: ${props=>{if(props.htmob) return props.htmob; else if(ht) return ht; else return '100%'}};
        top: ${props=>{if(props.topmob) return props.topmob; else if(top) return top; else return ''}};
        bottom: ${props=>{if(props.bottommob) return props.bottommob; else if(bottom) return bottom; else return ''}};
        left: ${props=>{if(props.leftmob) return props.leftmob; else if(left) return left; else return ''}};
        right: ${props=>{if(props.rightmob) return props.rightmob; else if(right) return right; else return ''}};
        position: ${props=>{if(props.posmob) return props.posmob; else if(pos) return pos; else return 'relative'}};
        background-color : ${props=>{if(props.bgclmob) return props.bgclmob; else if(bgcl) return bgcl; else return ''}};
        padding : ${props=>{if(props.pdmob) return props.pdmob; else if(pd) return pd; else return ''}};
        margin : ${props=>{if(props.mrgnmob) return props.mrgnmob; else if(mrgn) return mrgn; else return ''}};
        font-size : ${props=>{if(props.sizemob) return props.sizemob; else if(size) return size; else return '0.9rem'}};
        color : ${props=>{if(props.clmob) return props.clmob; else if(cl) return cl; else return ''}};
    }
    /* DESKTOP */
    @media screen and (min-width: 501px) and (max-width: 8400px) {
        display: ${props=>{if(props.onlyDesktop) return 'block';else if(props.onlyMobile) return 'none';
        else if(props.dsply) return props.dsply; else return ''}}
        max-width: ${(props)=>{if(props.maxwd) return props.maxwd; else return ''}};
    }


&.close{ max-height: '0rem'; }
&.open{ max-height: ${accht || ''}; }
ul>li { padding: ${pdli || ''};font-family: ${font|| ''}; display: list-item; list-style-position: inside; }
ol>li { padding: ${pdli || ''};font-family: ${font|| ''}; display: list-item; list-style-position: inside;}
    
&::-webkit-scrollbar-track { -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); background-color: #F5F5F5; }
&::-webkit-scrollbar { width: 0.2rem; background-color: #F5F5F5; }
&::-webkit-scrollbar-thumb { background-color: #809fff; }
&::-webkit-scrollbar:hover { width: 1rem; background-color: red; }

`}
`;
// -------------------------------------- Flex Box
export const Flex = styled(Box)`
${({mrgn,jc,ai,ht,wd,bd,flexdir,flex,wrap,overflowX,overflowY,bgcl,
    cursor,minwd,maxwd,maxht,dsply })=>css`
display: ${dsply || 'flex'}; flex-wrap: ${wrap|| 'nowrap'}; flex:${flex|| '0 1 auto'};
width: ${wd || '100%'}; height: ${ht || '100%'}; max-height: ${maxht || ''};
min-width: ${minwd || ''};           max-width: ${maxwd || ''};      
border: ${bd || ''}; margin: ${mrgn||'0'}; cursor: ${cursor || ''};
flex-direction: ${flexdir || 'column'}; justify-content: ${jc || 'center'}; align-items: ${ai || 'center'};

overflow-y: ${overflowY || 'auto'}; overflow-x: ${overflowX || 'auto'};

    /* MOBILE */
    @media screen and (min-width: 100px) and (max-width: 500px) {
        display: ${props=>{if(props.onlyDesktop) return 'none';else if(props.onlyMobile) return 'flex';
        else if(props.dsply) return props.dsply; else return 'flex'}}
        width: ${props=>{if(props.wdmob) return props.wdmob; else if(wd) return wd; else return '100%'}};
        min-width: ${()=>{if(minwd) return minwd; else return ''}};
    }
    /* DESKTOP */
    @media screen and (min-width: 501px) and (max-width: 8400px) {
        display: ${props=>{if(props.onlyDesktop) return 'flex';else if(props.onlyMobile) return 'none';
        else if(props.dsply) return props.dsply; else return 'flex'}}
    }
`}
`;

//--------------------------------------- Hoverable Div  ( ClipDiv )
// purpose - adds an overlay div on top of a parent div that expands on hover
export const ClipDiv = styled(Box)`
${({dsply,pos,pd,overflowY,bgcl})=>css`
width: 100%; height: 100%; padding: ${pd || ''};
position: ${pos || 'absolute'}; top: 0; left: 0;
display: ${dsply || ''};
background-color: ${bgcl || 'white'};
border-radius: inherit;
line-height: 1.4rem;
clip-path: circle(0% at 50% 50%); transition: clip-path 250ms ease-out;
overflow-y: ${overflowY || ''};
    & ol li {
    margin-bottom: 0.8rem;
    }
`}
`;

export const Image = styled(Box)`
${({bgimg,bgpos,bgsize,cursor,bd,ht,wd}) => css`
    background: url("https://drive.google.com/uc?export=view&id=${bgimg}");
    background-size: ${bgsize || 'cover'}; background-position: ${bgpos || 'center'};
    cursor: ${cursor||''};
    height: ${ht || '100%'} ; width: ${wd || '100%'};
    border: ${bd || ''}; background-repeat: no-repeat;
`}
`;

export const Img = styled.img`
${({bgimg,bgpos,bgsize,cursor,bd,ht,wd,pos,top,bottom,left,right,zindx}) => css`
    content:url("https://drive.google.com/uc?export=view&id=${bgimg}");
    object-fit :  ${bgsize || 'cover'};
    object-position : ${bgpos || '50% 50%'};
    display:block; position: ${pos||'absolute'};
    cursor: ${cursor||''}; z-index : ${zindx || ''};
    top: ${top || ''};  left: ${left || ''}; right: ${right || ''}; bottom: ${bottom || ''}; 
    height: ${ht || '100%'} ; width: ${wd || '100%'};
    border: ${bd || ''}; background-repeat: no-repeat;
`}
`;

// ------------------------------------- Image Box ( IMGDIV )
export const ImgBox = styled.div`
${({pos,lg,bgimg,zindx,bgsize,bgpos,cursor})=>css`
    width: 100%; height: 100%; top: 0; left: 0; margin: 0; padding: 0px;
    position: ${pos || 'absolute'}; color: white;
    background: linear-gradient${lg || '(to bottom, rgba(255,0,0,0.1) 60%, rgba(0,0,0,0.9))'},url("https://drive.google.com/uc?export=view&id=${bgimg}");
    background-size: ${bgsize || 'cover'}; background-position: ${bgpos || 'center'};
    border-radius: 5px;
    cursor: ${cursor || ''};
    transition: all .2s ease-in;
    
    &:hover {
        background-image: url("https://drive.google.com/uc?export=view&id=${bgimg}");
        z-index: ${zindx || '1'};
        
        ${ClipDiv} {
            clip-path: circle(75%);
        }
        ${Flex} {
            transform: scale(0.7);
            color:${props => {
                if(props.hoverChangesFlexFontTo==='black') return 'black';
                else if(props.hoverChangesFlexFontTo==='red') return 'red';
                else return 'white';
            }};
        }
    }
`}
`;

// ------------------------------------- GRID
export const Grid = styled.div`
${({dsply,grdgp,mrgn,col,ht,wd,bgcl,grdar,bgimg,cl,pos, jc,ac,ji,ai, br, minwd,ws,to, maxht,maxwd,
    row,pd,minht,gar,pi,bd,pdl,gac,overflowY,size})=>css`
display: ${dsply || 'grid'};
background-color: ${bgcl || ''};
grid-gap: ${grdgp || ''};
margin: ${mrgn||'0'};
padding: ${pd || '0'};
padding-left: ${pdl || ''};
overflow-y: ${overflowY || ''};

white-space: ${ws || 'nowrap'};
text-overflow: ${to || 'string'};

grid-template-columns: ${col || 'auto'};
grid-template-rows: ${row || ''};
grid-auto-columns: ${gac || 'auto'};
grid-auto-rows: ${gar || 'auto'};

height: ${ht||'100%'}; min-height: ${minht || ''}; max-height: ${maxht || ''};
width: ${wd||'100%'}; min-width: ${minwd || ''}; max-width: ${maxwd || ''};
grid-area: ${grdar||''};
background-image: ${bgimg || 'none'};
color: ${cl || 'black'};
font-size: ${size || ''};
position: ${pos || 'relative'};
border-radius: ${br || '10px'};
border: ${bd || ''};

justify-content: ${jc || ''};
justify-items: ${ji || ''};
align-content: ${ac || ''};
align-items: ${ai || ''};
place-items: ${pi || ''};

`}
`;


export const Table = styled.table`
${({mrgn,jc,ai,ht,wd,bd,flexdir,flex,wrap,overflowX,overflowY,bgcl,
    cursor,minwd,maxwd,maxht,dsply })=>css`
border-collapse: collapse;
border: 1px solid black;
`}
`;
export const row = styled.table`
${({mrgn,jc,ai,ht,wd,bd,flexdir,flex,wrap,overflowX,overflowY,bgcl,
    cursor,minwd,maxwd,maxht,dsply })=>css`
border-collapse: collapse;
border: 1px solid black;
`}
`;