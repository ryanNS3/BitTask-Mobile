import React from 'react';
import { View, Svg, Rect, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const Academico = ({size=42}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 42 41" fill="none">
      <Rect y={3} width={39} height={38} rx={5} fill="#000C36"/>
      <Rect x={3} width={39} height={38} rx={5} fill="url(#paint0_linear)"/>
      <Path d="M12.5729 15.4633L21.2313 11.1341C21.4002 11.0497 21.599 11.0497 21.7679 11.1341L30.4263 15.4633C30.8685 15.6844 30.8685 16.3155 30.4263 16.5366L21.7679 20.8658C21.599 20.9503 21.4002 20.9503 21.2313 20.8658L12.5729 16.5366C12.1307 16.3155 12.1307 15.6844 12.5729 15.4633Z" stroke="#F6F9FE" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M32.5 20V16.5L30.5 15.5" stroke="#F6F9FE" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M14.5 17.5V22.9121C14.5 23.6843 14.9446 24.3876 15.6422 24.7188L20.6422 27.0928C21.185 27.3505 21.815 27.3505 22.3578 27.0928L27.3578 24.7188C28.0554 24.3876 28.5 23.6843 28.5 22.9121V17.5" stroke="#F6F9FE" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      <Defs>
        <LinearGradient id="paint0_linear" x1="22.5" y1={0} x2="22.5" y2={38} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#195EFC"/>
          <Stop offset={1} stopColor="#0D23ED"/>
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

const Pessoal = ({size=42}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 43 41" fill="none">
      <Rect y={3} width={39} height={37.2273} rx={5} fill="#000C36"/>
      <Rect x={3} width={40} height={37.8182} rx={5} fill="url(#paint0_linear)"/>
      <Path d="M15 24V16C15 13.2386 17.2386 11 20 11H28C30.7614 11 33 13.2386 33 16V24C33 26.7614 30.7614 29 28 29H20C17.2386 29 15 26.7614 15 24Z" stroke="#F6F9FE" strokeWidth={2}/>
      <Path d="M28.5 22.5C28.5 22.5 27 24.5 24 24.5C21 24.5 19.5 22.5 19.5 22.5" stroke="#F6F9FE" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M20.5 18C20.2239 18 20 17.7761 20 17.5C20 17.2239 20.2239 17 20.5 17C20.7761 17 21 17.2239 21 17.5C21 17.7761 20.7761 18 20.5 18Z" fill="#F6F9FE" stroke="#F6F9FE" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M27.5 18C27.2239 18 27 17.7761 27 17.5C27 17.2239 27.2239 17 27.5 17C27.7761 17 28 17.2239 28 17.5C28 17.7761 27.7761 18 27.5 18Z" fill="#F6F9FE" stroke="#F6F9FE" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
      <Defs>
        <LinearGradient id="paint0_linear" x1={23} y1={0} x2={23} y2={37.8182} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#195EFC"/>
          <Stop offset={1} stopColor="#0D23ED"/>
        </LinearGradient>
      </Defs>
    </Svg>
  );
};


const Profissional = ({size=42}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 43 42" fill="none">
      <Rect y={3} width={40} height={38.1818} rx={5} fill="#000C36"/>
      <Rect x={3} width={40} height={38.1818} rx={5} fill="url(#paint0_linear)"/>
      <Path d="M18 13H14C12.8954 13 12 13.8954 12 15V25C12 26.1046 12.8954 27 14 27H30C31.1046 27 32 26.1046 32 25V15C32 13.8954 31.1046 13 30 13H26M18 13V9.6C18 9.26863 18.2686 9 18.6 9H25.4C25.7314 9 26 9.26863 26 9.6V13M18 13H26" stroke="#F6F9FE" strokeWidth={2}/>
      <Defs>
        <LinearGradient id="paint0_linear" x1={23} y1={0} x2={23} y2={38.1818} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#195EFC"/>
          <Stop offset={1} stopColor="#0D23ED"/>
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

const Outros = () => {
  return (
    <Svg width={43} height={42} viewBox="0 0 43 42" fill="none">
      <Rect y={3} width={40} height={38.1818} rx={5} fill="#000C36"/>
      <Rect x={3} width={40} height={38.1818} rx={5} fill="url(#paint0_linear)"/>
      <Path d="M24.9922 24H27.9922M27.9922 24H30.9922M27.9922 24V21M27.9922 24V27" stroke="#F6F9FE" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M15 16.4V11.6C15 11.2686 15.2686 11 15.6 11H20.4C20.7314 11 21 11.2686 21 11.6V16.4C21 16.7314 20.7314 17 20.4 17H15.6C15.2686 17 15 16.7314 15 16.4Z" stroke="#F6F9FE" strokeWidth={1.5}/>
      <Path d="M15 26.4V21.6C15 21.2686 15.2686 21 15.6 21H20.4C20.7314 21 21 21.2686 21 21.6V26.4C21 26.7314 20.7314 27 20.4 27H15.6C15.2686 27 15 26.7314 15 26.4Z" stroke="#F6F9FE" strokeWidth={1.5}/>
      <Path d="M25 16.4V11.6C25 11.2686 25.2686 11 25.6 11H30.4C30.7314 11 31 11.2686 31 11.6V16.4C31 16.7314 30.7314 17 30.4 17H25.6C25.2686 17 25 16.7314 25 16.4Z" stroke="#F6F9FE" strokeWidth={1.5}/>
      <Defs>
        <LinearGradient id="paint0_linear" x1={23} y1={0} x2={23} y2={38.1818} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#195EFC"/>
          <Stop offset={1} stopColor="#0D23ED"/>
        </LinearGradient>
      </Defs>
    </Svg>
  );
};



export {Academico, Pessoal, Profissional, Outros};
