import React from "react"
import { withTheme } from '@rjsf/core'

import Theme from "./Theme"

export const FormMaker = (themeOpts) => withTheme(Theme(themeOpts))
const Form = FormMaker({})

export default Form