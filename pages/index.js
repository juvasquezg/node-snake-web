import React, { Component } from 'react'

let scoreboard = `|                                              |
|                  SCORE: 0                    |
|                                              |
 ----------------------------------------------`

export default class extends Component {
  constructor (props) {
    super(props)
    this.board = undefined
    this.snake = []
    this.direction = ''
    this.scoreboard = scoreboard
    this.score = 0
  }

  render () {
    scoreboard = scoreboard.replace('\n', '<br>')
    scoreboard = scoreboard.replace(/([ ])/g, '&nbsp;')
    console.log(scoreboard)
    return (<div dangerouslySetInnerHTML={{ __html: scoreboard }} />)
  }
}
