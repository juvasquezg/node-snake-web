import React, { Component } from 'react'
import Parser from 'html-react-parser'
import fetch from 'isomorphic-unfetch'

const scoreboard = `|                                              |
|                  SCORE: 0                    |
|                                              |
 ---------------------------------------------- `

export default class extends Component {
  constructor (props) {
    super(props)
    this.snake = []
    this.direction = ''
    this.scoreboard = scoreboard
    this.score = 0
    this.state = { board: undefined, start: false }
    this.putOnTheBoard = this.putOnTheBoard.bind(this)
    this.setupGame = this.setupGame.bind(this)
  }

  componentWillMount () {
    this.setupGame().then(() => this.setState({ start: true }))
  }

  async setupGame () {
    const response = await fetch('/static/board.txt')
    const board = await response.text()
    this.setState({ board: board.toString().split('\n').map(rb => rb.split('')) })
    this.score = 0
    this.scoreboard = scoreboard
    this.snake = [[3, 12], [3, 11], [2, 11]]
    this.putOnTheBoard()
    return Promise.resolve(true)
  }

  putOnTheBoard () {
    const board = this.state.board.slice()
    let rowRandom = Math.floor(Math.random() * ((board.length - 1) - 1)) + 1
    let colRandom = Math.floor(Math.random() * ((board[0].length - 1) - 1)) + 1
    while (board[rowRandom][colRandom] === '.') {
      rowRandom = Math.floor(Math.random() * ((board.length - 1) - 1)) + 1
      colRandom = Math.floor(Math.random() * ((board[0].length) - 1)) + 1
    }
    board[rowRandom][colRandom] = '.'
    this.setState({ board })
  }

  render () {
    if (this.state.board && this.state.start) {
      console.log('Entro a pintar el board')
      this.scoreboard = this.scoreboard.replace(/([\n])/g, '<br>')
      this.scoreboard = this.scoreboard.replace(/([ ])/g, '&nbsp;')
      let row, col
      // print the snake on the board
      console.log(this.state)
      for (let i = 0; i < this.snake.length; i++) {
        let currentPosition = this.snake[i]
        row = currentPosition[0]
        col = currentPosition[1]
        this.state.board[row][col] = '.'
      }
      let boardString = this.state.board.map(row => row.join('')).join('\n')
      console.log(boardString)
      // update score
      this.scoreboard = this.scoreboard.replace(this.scoreboard.match(/([0-9])/g).join(''), `${this.score}`)
      // print board
      this.scoreboard = this.scoreboard.replace(/([\n])/g, '<br>')
      this.scoreboard = this.scoreboard.replace(/([ ])/g, '&nbsp;')
      boardString = boardString.replace(/([\n])/g, '<br>')
      boardString = boardString.replace(/([ ])/g, '&nbsp;')
      return (
        <div className='terminal'>
          {Parser(boardString)}
          <br />
          {Parser(this.scoreboard)}
          <style jsx>{`
            .terminal {
              font-family: monospace
            }
          `}</style>
        </div>
      )
    } else {
      return null
    }
  }
}
