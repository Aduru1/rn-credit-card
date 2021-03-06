import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

type Props = React.ComponentProps<typeof TouchableOpacity> & {
  title: string
}

const Button: React.FC<Props> = (props) => {
  const { title, style, ...restOfProps } = props

  return (
    <TouchableOpacity style={[styles.container, style]} {...restOfProps}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e20ea',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  text: {
    flex: 1,
    color: 'white',
    fontFamily: 'Avenir-Black',
    fontSize: 16,
  },
})

export default Button
