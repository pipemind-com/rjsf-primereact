export default function GridLayout (props) {
  console.log('GridLayout props', props)

  return props.properties.map(prop => prop.content)
}