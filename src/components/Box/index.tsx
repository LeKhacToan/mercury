import React, { ReactChildren } from 'react'
import { View } from 'react-native'

interface Props {
  ml?: number
  mr?: number
  mt?: number
  mb?: number
  pl?: number
  pr?: number
  pb?: number
  pt?: number
  children: ReactChildren
}

const Box: React.FC<Props> = ({
  children,
  ml,
  mr,
  mb,
  mt,
  pl,
  pr,
  pt,
  pb,
}: Props) => {
  return (
    <View
      style={{
        marginLeft: ml,
        marginBottom: mb,
        marginRight: mr,
        marginTop: mt,
        paddingBottom: pb,
        paddingLeft: pl,
        paddingRight: pr,
        paddingTop: pt,
      }}
    >
      {children}
    </View>
  )
}

Box.defaultProps = {
  mt: 0,
  mb: 0,
  mr: 0,
  ml: 0,
  pt: 0,
  pr: 0,
  pl: 0,
  pb: 0,
}

export default Box
