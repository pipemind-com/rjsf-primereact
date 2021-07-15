import React from "react"
import { withTheme } from '@rjsf/core'

import Theme from "./Theme"


const FG_NO_DEFAULT_BUTTON = false
const Form = withTheme(Theme(FG_NO_DEFAULT_BUTTON))


export default Form
