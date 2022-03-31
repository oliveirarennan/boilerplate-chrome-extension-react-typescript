import React from 'react'
import ReactDOM from 'react-dom'
import './popup.css'

const PopupApp: React.FC = () => {
  return (
    <>
      <h1>Popup File</h1>
      <img src="icon.png" alt="React Icon" />
    </>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)

ReactDOM.render(<PopupApp />, root)
