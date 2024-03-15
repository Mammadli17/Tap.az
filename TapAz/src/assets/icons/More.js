import * as React from "react"
import Svg, { Path } from "react-native-svg"
const More = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={35}
    height={35}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="rgb(255, 98, 0)"
      strokeLinecap="round"
      strokeWidth={2}
      d="M5 6h14M5 12h14M5 18h14"
    />
  </Svg>
)
export default More
