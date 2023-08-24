import {Component} from 'react'

import './App.css'

class App extends Component {
  state = {firstInput: false, secondInput: false, thirdInput: false}

  changeInput1 = () => {
    this.setState({firstInput: true})
  }

  changeInput2 = () => {
    this.setState({secondInput: true})
  }

  changeInput3 = () => {
    this.setState({thirdInput: true})
  }

  render() {
    const {firstInput, secondInput, thirdInput} = this.state

    return (
      <div className="bg-container">
        <div className="content-container">
          <p className="tag">
            ---------<span className="bundle">Bundle & Save</span>--------
          </p>
          <form className="input-form">
            <div
              className={`label-1-conatiner  ${
                firstInput ? 'selected-pair' : ''
              }`}
            >
              <div>
                <input onChange={this.changeInput1} type="radio" id="label-1" />
                <label htmlFor="label-1">
                  1 Pair <br />
                  <span className="dkk-tag">DKK 195.00</span>
                </label>
              </div>
              <p>50% OFF</p>
            </div>
            <div
              className={`label-2-conatiner  ${
                secondInput ? 'selected-pair' : ''
              }`}
            >
              <div className="pair-2-selector">
                <div>
                  <input
                    onChange={this.changeInput2}
                    type="radio"
                    id="label-2"
                  />
                  <label className="pair-2-label" htmlFor="label-2">
                    2 Pair <br /> <span className="dkk-tag">DKK 345.00</span>
                  </label>
                </div>
                <div>
                  <p className="most-popular">Most Popular</p>
                  <p>40% OFF</p>
                </div>
              </div>
              <div className="size-colour">
                <p className="size">Size</p>
                <p className="colour">Colour</p>
              </div>
              <div className="size-selector">
                <p>#1</p>
                <select className="selector">
                  <option value="L">L</option>
                  <option value="L">M</option>
                  <option value="L">S</option>
                </select>
                <select className="selector">
                  <option value="Red">Red</option>
                  <option value="Magenta">Magenta</option>
                  <option value="Green">Green</option>
                </select>
              </div>
              <div className="size-selector">
                <p>#2</p>
                <select className="selector">
                  <option value="L">L</option>
                  <option value="L">M</option>
                  <option value="L">S</option>
                </select>
                <select className="selector">
                  <option value="Red">Red</option>
                  <option value="Magenta">Magenta</option>
                  <option value="Green">Green</option>
                </select>
              </div>
            </div>
            <div
              className={`label-1-conatiner  ${
                thirdInput ? 'selected-pair' : ''
              }`}
            >
              <div>
                <input onChange={this.changeInput3} type="radio" id="label-3" />
                <label htmlFor="label-3">
                  3 Pair <br /> <span className="dkk-tag">DKK 528.00</span>
                </label>
              </div>
              <p>60% OFF</p>
            </div>
          </form>
          <div className="shipping-container">
            <p className="shipping">Free 2 Day Shipping</p>
            <p className="total">Total: DKK 360.00</p>
          </div>
          <button className="add-to-cart-btn" type="button">
            + Add to Cart
          </button>
        </div>
      </div>
    )
  }
}

export default App
