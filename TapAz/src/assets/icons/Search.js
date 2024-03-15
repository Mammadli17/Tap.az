import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Search = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="rgb(180, 180, 180)"
      fillRule="evenodd"
      d="M15 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-.82 4.74a6 6 0 1 1 1.06-1.06l4.79 4.79-1.06 1.06-4.79-4.79Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Search
