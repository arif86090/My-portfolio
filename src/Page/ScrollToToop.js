import { ChevronUpIcon } from "@heroicons/react/solid";
import React, { Component } from "react";

class GoTop extends Component {
  state = {
    intervalId: 0,
    thePosition: false,
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 270) {
        this.setState({ thePosition: true });
      } else {
        this.setState({ thePosition: false });
      }
    });
    window.scrollTo(0, 0);
  }

  onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  };

  scrollToTop = () => {
    let intervalId = setInterval(this.onScrollStep, this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  };

  renderGoTopIcon = () => {
    if (this.state.thePosition) {
      return (
        <>
          <div className="move-up">
                <div className="topIcon bg-primary" onClick={this.scrollToTop}>
                  <ChevronUpIcon className="w-8 text-white"></ChevronUpIcon>
                </div>
               
           
          </div>
        </>
      );
    }
  };

  render() {
    return <>{this.renderGoTopIcon()}</>;
  }
}

export default GoTop;