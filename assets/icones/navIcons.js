import React from 'react';
import Svg, { Path, Rect, Line } from 'react-native-svg';

const NavHome = ({ width = 29, height = 29, color = "#000C36", ...props }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 29 29" fill="none" {...props}>
      <Path d="M20.5417 25.375H8.45833C5.78896 25.375 3.625 23.211 3.625 20.5417V12.9383C3.625 11.2482 4.50782 9.68086 5.9532 8.80487L11.9949 5.14325C13.5347 4.21008 15.4653 4.21008 17.0051 5.14325L23.0468 8.80487C24.4922 9.68086 25.375 11.2482 25.375 12.9383V20.5417C25.375 23.211 23.211 25.375 20.5417 25.375Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Line x1="10.875" y1="20.5417" x2="18.125" y2="20.5417" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  );
};

const NavHomeActive = () => {
  return (
    <Svg width="59" height="60" viewBox="0 0 59 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Rect width="58.9091" height="60" rx="15" fill="#195EFC" />
      <Path
        d="M35.5417 40.375H23.4583C20.789 40.375 18.625 38.211 18.625 35.5417V27.9383C18.625 26.2482 19.5078 24.6809 20.9532 23.8049L26.9949 20.1433C28.5347 19.2101 30.4653 19.2101 32.0051 20.1433L38.0468 23.8049C39.4922 24.6809 40.375 26.2482 40.375 27.9383V35.5417C40.375 38.211 38.211 40.375 35.5417 40.375Z"
        stroke="#F6F9FE"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M25.875 35.5417H33.125"
        stroke="#F6F9FE"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};


const NavCategoria = ({ width = 29, height = 29, color = "black", ...props }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 29 29" fill="none" {...props}>
      <Line x1="16.9072" y1="20.5417" x2="20.5322" y2="20.5417" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <Line x1="20.5322" y1="20.5417" x2="24.1572" y2="20.5417" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <Line x1="20.5322" y1="20.5417" x2="20.5322" y2="16.9167" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <Line x1="20.5322" y1="20.5417" x2="20.5322" y2="24.1667" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M4.83301 11.3583V5.55833C4.83301 5.15792 5.1576 4.83333 5.55801 4.83333H11.358C11.7584 4.83333 12.083 5.15792 12.083 5.55833V11.3583C12.083 11.7587 11.7584 12.0833 11.358 12.0833H5.55801C5.1576 12.0833 4.83301 11.7587 4.83301 11.3583Z" stroke={color} strokeWidth="1.5"/>
      <Path d="M4.83301 23.4417V17.6417C4.83301 17.2412 5.1576 16.9167 5.55801 16.9167H11.358C11.7584 16.9167 12.083 17.2412 12.083 17.6417V23.4417C12.083 23.8421 11.7584 24.1667 11.358 24.1667H5.55801C5.1576 24.1667 4.83301 23.8421 4.83301 23.4417Z" stroke={color} strokeWidth="1.5"/>
      <Path d="M16.917 11.3583V5.55833C16.917 5.15792 17.2416 4.83333 17.642 4.83333H23.442C23.8424 4.83333 24.167 5.15792 24.167 5.55833V11.3583C24.167 11.7587 23.8424 12.0833 23.442 12.0833H17.642C17.2416 12.0833 16.917 11.7587 16.917 11.3583Z" stroke={color} strokeWidth="1.5"/>
    </Svg>
  );
};

const NavCategoriaActive = () => {
  return (
    <Svg width={59} height={60} viewBox="0 0 59 60" fill="none">
      <Rect width={58.9091} height={60} rx={15} fill="#195EFC" />
      <Path
        d="M30.9072 35.5417H34.5322M34.5322 35.5417H38.1572M34.5322 35.5417V31.9167M34.5322 35.5417V39.1667"
        stroke="#F6F9FE"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.833 26.3583V20.5583C18.833 20.1579 19.1576 19.8333 19.558 19.8333H25.358C25.7584 19.8333 26.083 20.1579 26.083 20.5583V26.3583C26.083 26.7587 25.7584 27.0833 25.358 27.0833H19.558C19.1576 27.0833 18.833 26.7587 18.833 26.3583Z"
        stroke="#F6F9FE"
        strokeWidth={1.5}
      />
      <Path
        d="M18.833 38.4417V32.6417C18.833 32.2412 19.1576 31.9167 19.558 31.9167H25.358C25.7584 31.9167 26.083 32.2412 26.083 32.6417V38.4417C26.083 38.8421 25.7584 39.1667 25.358 39.1667H19.558C19.1576 39.1667 18.833 38.8421 18.833 38.4417Z"
        stroke="#F6F9FE"
        strokeWidth={1.5}
      />
      <Path
        d="M30.917 26.3583V20.5583C30.917 20.1579 31.2416 19.8333 31.642 19.8333H37.442C37.8424 19.8333 38.167 20.1579 38.167 20.5583V26.3583C38.167 26.7587 37.8424 27.0833 37.442 27.0833H31.642C31.2416 27.0833 30.917 26.7587 30.917 26.3583Z"
        stroke="#F6F9FE"
        strokeWidth={1.5}
      />
    </Svg>
  );
};



const NavTarefa = ({ width = 29, height = 28, color = "#F6F9FE", ...props }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 29 28" fill="none" {...props}>
      <Path d="M10.875 6.94792L24.1667 6.94792" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M4.5918 6.7163L5.55846 7.64268L7.97512 5.32672" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M4.5918 13.6642L5.55846 14.5906L7.97512 12.2747" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M4.5918 20.6121L5.55846 21.5385L7.97512 19.2226" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Line x1="10.875" y1="13.8958" x2="24.1667" y2="13.8958" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Line x1="10.875" y1="20.8438" x2="24.1667" y2="20.8438" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  );
};

const NavTarefaActive = () => {
  return (
    <Svg width="59" height="60" viewBox="0 0 59 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Rect width="58.9091" height="60" rx="15" fill="#195EFC" />

      {/* Horizontal line */}
      <Path
        d="M24.875 22.9479H38.1667"
        stroke="#F6F9FE"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      {/* Upward arrow */}
      <Path
        d="M18.5918 22.7163L19.5585 23.6427L21.9751 21.3267"
        stroke="#F6F9FE"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      {/* Middle arrow */}
      <Path
        d="M18.5918 29.6642L19.5585 30.5906L21.9751 28.2747"
        stroke="#F6F9FE"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      {/* Downward arrow */}
      <Path
        d="M18.5918 36.6121L19.5585 37.5385L21.9751 35.2226"
        stroke="#F6F9FE"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      {/* Second horizontal line */}
      <Path
        d="M24.875 29.8958H38.1667"
        stroke="#F6F9FE"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      {/* Third horizontal line */}
      <Path
        d="M24.875 36.8438H38.1667"
        stroke="#F6F9FE"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};


export {NavHome, NavHomeActive, NavCategoria, NavCategoriaActive, NavTarefa, NavTarefaActive};

