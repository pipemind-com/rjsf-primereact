import { USE_LOGS } from "./util"

export default function GridLayout (props) {
  if (USE_LOGS) {
    console.log('GridLayout props', props)
  }

  return props.properties.map(prop => prop.content)
}
