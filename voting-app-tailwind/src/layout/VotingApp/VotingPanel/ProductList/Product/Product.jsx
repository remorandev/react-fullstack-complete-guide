import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

export class Product extends Component {
  handlerUpVote = () => {
    this.props.onVote(this.props.id);
  };

  render() {
    return (
      <div>
        <div className="flex flex-nowrap">
          <div className="mr-2">
            <img
              src={"src/" + this.props.productImageUrl}
              alt=""
              className="w-32 m-2 sm:w-40 border-ra rounded-sm"
            />
          </div>
          <div className="h-full">
            <div className="flex flex-nowrap">
              <a onClick={this.handlerUpVote}>
                <FontAwesomeIcon
                  icon={faCaretUp}
                  className="h-7 w-7 text-base text-blue-500"
                />
              </a>
              <span className="text-base font-bold ml-1 sm:text-xl">
                {this.props.votes}
              </span>
            </div>
            <div className="text-xs text-left sm:text-base sm:my-2">
              <a href={this.props.url} className="text-blue-400">
                {this.props.title}
              </a>
              <p>{this.props.description}</p>
            </div>
            <div className="my-4 flex text-xs text-gray-400 h-full items-center sm:text-base sm:my-2">
              <span>Submitted by:</span>
              <img
                className="h-8 w-8 ml-2 rounded-full ring-2 ring-white"
                src={"src/" + this.props.submitterAvatarUrl}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
