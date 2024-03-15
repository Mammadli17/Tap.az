import * as React from "react"
import Svg, { G, Path, Circle } from "react-native-svg"
const Filter = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    viewBox="0 0 24 24"
    {...props}
  >
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h24v24H0z" />
      <Path
        stroke="rgba(0, 0, 252, 0.5)"
        strokeLinecap="round"
        strokeWidth={2}
        d="M4 5h12M4 12h6M14 12h6M8 19h12"
      />
      <Circle
        cx={18}
        cy={5}
        r={2}
        stroke="rgba(0, 0, 252, 0.5)"
        strokeLinecap="round"
        strokeWidth={2}
      />
      <Circle
        cx={12}
        cy={12}
        r={2}
        stroke="rgba(0, 0, 252, 0.5)"
        strokeLinecap="round"
        strokeWidth={2}
      />
      <Circle
        cx={6}
        cy={19}
        r={2}
        stroke="rgba(0, 0, 252, 0.5)"
        strokeLinecap="round"
        strokeWidth={2}
      />
    </G>
  </Svg>
)
export default Filter
