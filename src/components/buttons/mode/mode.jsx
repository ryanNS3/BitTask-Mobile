import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
// icones
import { DarkMode } from '../../../../assets/icons/darkMode'

// estilos
import { styles } from './style'


export const Mode = () => {
    const [dark, setDark] = React.useState(true)
  return (
    <TouchableOpacity style={styles.buttonMode} >
       {dark ? <DarkMode/> : null}
    </TouchableOpacity>
  )
}
