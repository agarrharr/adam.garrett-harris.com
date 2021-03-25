import React from "react"
import cx from "classnames"

import "./saboteur-2-scorecard.css"

export default class Counter extends React.Component {
  state = {
    isGoldFound: false,
    isBlueDoorBlocking: false,
    isGreenDoorBlocking: false,
    didBluePlayTheLastCard: true,
    didGreenPlayTheLastCard: false,
  }

  handleIsGoldFound = event => {
    this.setState(
      {
        ...this.state,
        isGoldFound: event.target.checked,
      },
      this.checkWhoWon
    )
  }

  handleIsBlueDoorBlocking = event => {
    this.setState(
      {
        ...this.state,
        isBlueDoorBlocking: event.target.checked,
      },
      this.checkWhoWon
    )
  }

  handleIsGreenDoorBlocking = event => {
    this.setState(
      {
        ...this.state,
        isGreenDoorBlocking: event.target.checked,
      },
      this.checkWhoWon
    )
  }

  handleLastPlayer = event => {
    this.setState(
      {
        ...this.state,
        didBluePlayTheLastCard: event.target.value === "blue",
        didGreenPlayTheLastCard: event.target.value === "green",
      },
      this.checkWhoWon
    )
  }

  checkWhoWon = () => {
    const green = this.didTheGreenMinersWin()
    const blue = this.didTheBlueMinersWin()
    this.setState({
      didTheBlueMinersWin: this.didTheBlueMinersWin(),
      winnerMessage: !this.state.isGoldFound
        ? "The saboteurs win!"
        : green
        ? "The green dwarfs, the boss, and the profiteer win!"
        : blue
        ? "The blue dwarfs, the boss, and the profiteer win!"
        : "The boss, and the profiteer win!",
    })
  }

  didTheGreenMinersWin = () =>
    this.state.isGoldFound &&
    !this.state.isBlueDoorBlocking &&
    (!this.state.didBluePlayTheLastCard ||
      (this.state.didBluePlayTheLastCard && this.state.isGreenDoorBlocking))

  didTheBlueMinersWin = () =>
    this.state.isGoldFound &&
    !this.state.isGreenDoorBlocking &&
    (!this.state.didGreenPlayTheLastCard ||
      (this.state.didGreenPlayTheLastCard && this.state.isBlueDoorBlocking))

  render() {
    return (
      <div>
        <div>
          <input
            type="checkbox"
            checked={this.state.isGoldFound}
            onChange={this.handleIsGoldFound}
          />{" "}
          <label>The gold was found</label>
        </div>
        <div>
          <input
            disabled={!this.state.isGoldFound}
            type="radio"
            name="lastCard"
            value="blue"
            checked={this.state.didBluePlayTheLastCard}
            onChange={this.handleLastPlayer}
          />{" "}
          <label className={cx({ disabled: !this.state.isGoldFound })}>
            A blue dwarf placed the last card
          </label>
        </div>
        <div>
          <input
            disabled={!this.state.isGoldFound}
            type="radio"
            name="lastCard"
            value="green"
            checked={this.state.didGreenPlayTheLastCard}
            onChange={this.handleLastPlayer}
          />{" "}
          <label className={cx({ disabled: !this.state.isGoldFound })}>
            A green dwarf placed the last card
          </label>
        </div>
        <div>
          <input
            disabled={!this.state.isGoldFound}
            type="checkbox"
            checked={this.state.isBlueDoorBlocking}
            onChange={this.handleIsBlueDoorBlocking}
          />{" "}
          <label className={cx({ disabled: !this.state.isGoldFound })}>
            A blue door is blocking the path
          </label>
        </div>
        <div>
          <input
            disabled={!this.state.isGoldFound}
            type="checkbox"
            checked={this.state.isGreenDoorBlocking}
            onChange={this.handleIsGreenDoorBlocking}
          />{" "}
          <label className={cx({ disabled: !this.state.isGoldFound })}>
            A green door is blocking the path
          </label>
        </div>
        <p>
          <b>{this.state.winnerMessage}</b>
        </p>
      </div>
    )
  }
}
