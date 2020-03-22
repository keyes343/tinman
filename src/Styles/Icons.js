import styled, { css } from 'styled-components';
import { FaWikipediaW, FaYoutube, FaPlus, FaMinus, FaAngleRight, FaAngleDown,
FaChevronLeft,FaChevronRight, FaRocketchat } from 'react-icons/fa';
import {GoHome,GoSearch} from 'react-icons/go';
import {IoIosMenu} from 'react-icons/io';

export const Menu = styled(IoIosMenu)`
${({cl,size})=>css`
    color: ${cl || ''};
    font-size: ${size || ''};
`}
`;
export const Search = styled(GoSearch)`
${({cl,size})=>css`
    color: ${cl || ''};
    font-size: ${size || ''};
`}
`;
export const Home = styled(GoHome)`
${({cl,size})=>css`
    color: ${cl || ''};
    font-size: ${size || ''};
`}
`;

export const Chat = styled(FaRocketchat)`
${({cl,size})=>css`
    color: ${cl || ''};
    font-size: ${size || ''};
`}
`;

export const Back = styled(FaChevronLeft)`
${({cl,size})=>css`
    color: ${cl || ''};
    font-size: ${size || ''};
`}
`;
export const Next = styled(FaChevronRight)`
${({cl,size})=>css`
    color: ${cl || ''};
    font-size: ${size || ''};
`}
`;



export const Open = styled(FaAngleDown)`
${({cl,size})=>css`
    color: ${cl || ''};
    font-size: ${size || ''};
`}
`;

export const Close = styled(FaAngleRight)`
${({cl,size})=>css`
    color: ${cl || ''};
    font-size: ${size || ''};
`}
`;

export const Wiki = styled(FaWikipediaW)`
${({cl,size})=>css`
    color: ${cl || ''};
    font-size: ${size || ''};
`}
`;

export const PlayButton = styled(FaYoutube)`
${({cl,size})=>css`
    color: ${cl || ''};
    font-size: ${size || ''};
`}
`;

export const Shrink = styled(FaMinus)`
${({cl,size})=>css`
    color: ${cl || ''};
    font-size: ${size || ''};
`}
`;

export const Expand = styled(FaPlus)`
${({cl,size})=>css`
    color: ${cl || ''};
    font-size: ${size || ''};
`}
`;