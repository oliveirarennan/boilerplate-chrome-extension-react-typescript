import React from 'react'
import ReactDOM from 'react-dom'
import './options.css'

const OptionsApp: React.FC = () => {
  return (
    <>
      <h1>Options File</h1>

    </>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)

ReactDOM.render(<OptionsApp />, root)
