import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Chat = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={29}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#1C274C"
      d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12c0 1.76.413 3.423 1.148 4.898.195.392.26.84.147 1.263l-.655 2.448a1.43 1.43 0 0 0 1.75 1.751l2.45-.655a1.797 1.797 0 0 1 1.262.147A10.955 10.955 0 0 0 12 23Z"
      {...props}

    />
    <Path
      fill="white"
      d="M10.9 12a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 0 0-2.2 0ZM6.5 12a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 0 0-2.2 0ZM15.3 12a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 0 0-2.2 0Z"

    />
  </Svg>
)
export default Chat
