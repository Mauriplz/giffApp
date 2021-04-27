import React from 'react'
import ReactDom from 'react-dom'
import { GifApp } from './GifApp'

const divRoot = document.querySelector('#root')

ReactDom.render(<GifApp />, divRoot)