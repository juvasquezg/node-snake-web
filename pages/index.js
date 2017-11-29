import React, { Component } from 'react'
import Parser from 'html-react-parser'
import fetch from 'isomorphic-unfetch'
import { clearInterval, setInterval } from 'timers';

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

  componentDidMount () {
    this.setupGame().then(() => {
      this.putOnTheBoard()
      this.start()
      this.setState({ start: true })
    })
  }

  async setupGame () {
    try {
      const response = await fetch('/static/board.txt')
      const board = await response.text()
      this.setState({ board: board.toString().split('\n').map(rb => rb.split('')) })
      this.score = 0
      this.scoreboard = scoreboard
      this.snake = [[3, 12], [3, 11], [2, 11]]
      return Promise.resolve(true)
    } catch (err) {
      return Promise.reject(new Error(err))
    }
  }

  start () {
    this.direction = ''
    clearInterval(this.interval)
    const cbStart = (event) => {
      if (event && event.key === 'ArrowRight') {
        if (this.direction !== 'ArrowLeft') {
          clearInterval(this.interval)
          this.interval = setInterval(() => {
            this.moveRight()
          }, 100)
        }
      }
      if (event && event.key === 'ArrowLeft') {
        if (this.direction !== 'ArrowRight') {
          clearInterval(this.interval)
          this.interval = setInterval(() => {
            this.moveLeft()
          }, 100)
        }
      }
      if (event && event.key === 'ArrowUp') {
        if (this.direction !== 'ArrowDown') {
          clearInterval(this.interval)
          this.interval = setInterval(() => {
            this.moveUp()
          }, 150)
        }
      }
      if (event && event.key === 'ArrowDown') {
        if (this.direction !== 'ArrowUp') {
          clearInterval(this.interval)
          this.interval = setInterval(() => {
            this.moveDown()
          }, 150)
        }
      }
    }
    document.removeEventListener('keydown', cbStart)
    document.addEventListener('keydown', cbStart)
  }

  moveRight = () => {
    if (this.direction !== 'left') {
      this.direction = 'right'
      let row, col
      // remueve la cola
      let lastPosition = this.snake[this.snake.length - 1]
      const board = this.state.board.map((row) => {
        return row.slice(0)
      })
      board[lastPosition[0]][lastPosition[1]] = ' '
      this.setState({ board })
      let currentPosition = this.snake[0]
      // mueve la cabeza
      row = currentPosition[0]
      col = currentPosition[1]
      this.snake[0] = [row, col + 1]
      this.checkCollision()
      // mueve el cuerpo
      for (let i = 1; i < this.snake.length; i++) {
        row = currentPosition[0]
        col = currentPosition[1]
        currentPosition = this.snake[i]
        this.snake[i] = [row, col]
      }
      if (this.checkApple()) {
        this.snake.push([lastPosition[0], lastPosition[1]])
        ++this.score
        this.putOnTheBoard()
      }
    } else {
      this.moveLeft()
    }
  }

  moveLeft = () => {
    if (this.direction !== 'right') {
      this.direction = 'left'
      let row, col
      // remueve la cola
      let lastPosition = this.snake[this.snake.length - 1]
      const board = this.state.board.map((row) => {
        return row.slice(0)
      })
      board[lastPosition[0]][lastPosition[1]] = ' '
      this.setState({ board })
      let currentPosition = this.snake[0]
      // mueve la cabeza
      row = currentPosition[0]
      col = currentPosition[1]
      this.snake[0] = [row, col - 1]
      this.checkCollision()
      // mueve el cuerpo
      for (let i = 1; i < this.snake.length; i++) {
        row = currentPosition[0]
        col = currentPosition[1]
        currentPosition = this.snake[i]
        this.snake[i] = [row, col]
      }
      if (this.checkApple()) {
        this.snake.push([lastPosition[0], lastPosition[1]])
        ++this.score
        this.putOnTheBoard()
      }
    } else {
      this.moveRight()
    }
  }

  moveUp = () => {
    if (this.direction !== 'down') {
      this.direction = 'up'
      let row, col
      // remueve la cola
      let lastPosition = this.snake[this.snake.length - 1]
      const board = this.state.board.map((row) => {
        return row.slice(0)
      })
      board[lastPosition[0]][lastPosition[1]] = ' '
      this.setState({ board })
      let currentPosition = this.snake[0]
      // mueve la cabeza
      row = currentPosition[0]
      col = currentPosition[1]
      this.snake[0] = [row - 1, col]
      this.checkCollision()
      // mueve el cuerpo
      for (let i = 1; i < this.snake.length; i++) {
        row = currentPosition[0]
        col = currentPosition[1]
        currentPosition = this.snake[i]
        this.snake[i] = [row, col]
      }
      if (this.checkApple()) {
        this.snake.push([lastPosition[0], lastPosition[1]])
        ++this.score
        this.putOnTheBoard()
      }
    } else {
      this.moveDown()
    }
  }

  moveDown = () => {
    if (this.direction !== 'up') {
      this.direction = 'down'
      let row, col
      // remueve la cola
      let lastPosition = this.snake[this.snake.length - 1]
      const board = this.state.board.map((row) => {
        return row.slice(0)
      })
      board[lastPosition[0]][lastPosition[1]] = ' '
      this.setState({ board })
      let currentPosition = this.snake[0]
      // mueve la cabeza
      row = currentPosition[0]
      col = currentPosition[1]
      this.snake[0] = [row + 1, col]
      this.checkCollision()
      // mueve el cuerpo
      for (let i = 1; i < this.snake.length; i++) {
        row = currentPosition[0]
        col = currentPosition[1]
        currentPosition = this.snake[i]
        this.snake[i] = [row, col]
      }
      if (this.checkApple()) {
        this.snake.push([lastPosition[0], lastPosition[1]])
        ++this.score
        this.putOnTheBoard()
      }
    } else {
      this.moveUp()
    }
  }

  checkCollision = () => {
    let row, col
    let currentPosition = this.snake[0]
    row = currentPosition[0]
    col = currentPosition[1]
    if (this.state.board[row][col] === '-' || this.state.board[row][col] === '|') {
      this.setupGame().then(() => {
        this.putOnTheBoard()
        this.start()
      })
    }
  }

  checkApple () {
    let row, col
    let currentPosition = this.snake[0]
    row = currentPosition[0]
    col = currentPosition[1]
    if (this.state.board[row][col] === '.') {
      return true
    }
    return false
  }

  putOnTheBoard () {
    const board = this.state.board.map((row) => {
      return row.slice(0)
    })
    let rowRandom = Math.floor((Math.random() * (board.length - 2)) + 1)
    let colRandom = Math.floor((Math.random() * (board[0].length - 2)) + 1)
    while (board[rowRandom][colRandom] === '.') {
      rowRandom = Math.floor((Math.random() * (board.length - 2)) + 1)
      colRandom = Math.floor((Math.random() * (board[0].length - 2)) + 1)
    }
    board[rowRandom][colRandom] = '.'
    this.setState({ board })
  }

  clearBoard () {
    process.stdout.write('\x1B[2J\x1B[0f\u001b[0;0H')
  }

  render () {
    const Header = () => (
      <div className="header"> {'PRESS -> OR <- TO PLAY THE GAME'} </div>
    )

    const TerminalBar = () => (
      <div className="bar">
        <div className="red">
        </div>
        <div className="yellow"></div>
        <div className="green"></div>
        <style jsx global>{`
          .header {
            font-family: monospace;
            color: #292A2A;
            margin: auto;
            padding: 15px;
            font-size: 30px;
            text-align: center;
          }
          .bar {
            text-align: center;
            width: 752px;
            height: 25px;
            background-color: #DAD9D9;
            margin: 0 auto;
            font-family: monospace;
            padding: auto;
            float: none;
            border-radius: 5px 5px 0 0;
          }
          .red {
            background-color: #E94B35;
            border-radius: 100%;
            width: 15px;
            height: 15px;
            margin: 0 auto;
            left: -47%;
            bottom: -20%;
            position:relative;
          }
          .yellow {
            background-color: #f0f000;
            border-radius: 100%;
            width: 15px;
            height: 15px;
            margin: 0 auto;
            left: -44%;
            bottom: 40%;
            position:relative;
            display: block;
          }
          .green {
              background-color: #1AAF5C;
              border-radius: 100%;
              width: 15px;
              height: 15px;
              margin: 0 auto;
              left: -41%;
              bottom: 99%;
              position:relative;
              display: block;
          }`}
        </style>
      </div>
    )

    if (this.state.board && this.state.start) {
      this.scoreboard = this.scoreboard.replace(/([\n])/g, '<br>')
      this.scoreboard = this.scoreboard.replace(/([ ])/g, '&nbsp;')
      // print the snake on the board for first time
      let row, col
      const board = this.state.board.map((row) => {
        return row.slice(0)
      })
      for (let i = 0; i < this.snake.length; i++) {
        let currentPosition = this.snake[i]
        row = currentPosition[0]
        col = currentPosition[1]
        board[row][col] = '.'
      }
      let boardString = board.map(row => row.join('')).join('\n')
      // update score
      this.scoreboard = this.scoreboard.replace(this.scoreboard.match(/([0-9])/g).join(''), `${this.score}`)
      // print board
      this.scoreboard = this.scoreboard.replace(/([\n])/g, '<br>')
      this.scoreboard = this.scoreboard.replace(/([ ])/g, '&nbsp;')
      boardString = boardString.replace(/([\n])/g, '<br>')
      boardString = boardString.replace(/([ ])/g, '&nbsp;')
      return (
        <div>
          <Header />
          <TerminalBar />
          <div className='terminal'>
            {Parser(boardString)}
            <br />
            {Parser(this.scoreboard)}
            <style jsx>{`
              .terminal {
                background-color: #33485E;
                width: 750px;
                height: 350px;
                border-radius: 0 0 5px 5px;
                margin: 0 auto;
                padding: 1px;
                color: #fff;
                font-family: monospace;
                text-align: center;
              }
            `}</style>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}
