import React from "react"
import { createRoot } from 'react-dom/client'

import "./options.css"

const Options = () => (<p>Options Hello world</p>)

const rootElement = document.createElement("div")
document.body.appendChild(rootElement)
const root = createRoot(rootElement)
root.render(<Options />)
