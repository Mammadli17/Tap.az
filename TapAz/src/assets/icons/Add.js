import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Add = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={65}
    height={65}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#292D32"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      {...props}

    />
    <Path
      fill="white"
      d="M16 11.25h-3.25V8c0-.41-.34-.75-.75-.75s-.75.34-.75.75v3.25H8c-.41 0-.75.34-.75.75s.34.75.75.75h3.25V16c0 .41.34.75.75.75s.75-.34.75-.75v-3.25H16c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z"

    />
  </Svg>
)
export default Add
