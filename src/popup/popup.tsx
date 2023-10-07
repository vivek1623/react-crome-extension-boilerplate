import React from "react"
import { createRoot } from 'react-dom/client'

import "./popup.css"

const Popup = () => (<p>Hello world</p>)


const rootElement = document.createElement("div")
document.body.appendChild(rootElement)
const root = createRoot(rootElement)
root.render(<Popup />)
