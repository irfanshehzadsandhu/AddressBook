import React from "react";

export default class User extends React.Component {
  render() {
    return (
      <tr>
        <th>
          <img src={this.props.user.picture.large} />
        </th>
        <th>{this.props.user.name.first}</th>
        <th>{this.props.user.name.last}</th>
        <th>{this.props.user.email}</th>
        <th>
          <a
            href="##"
            data-street-number={this.props.user.location.street.number}
            data-street-name={this.props.user.location.street.name}
            data-city={this.props.user.location.city}
            data-state={this.props.user.location.state}
            data-country={this.props.user.location.country}
            data-postcode={this.props.user.location.postcode}
            onClick={this.props.openModel}
          >
            <svg
              className="bi bi-eye-fill"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.5 8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              <path
                fillRule="evenodd"
                d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </th>
      </tr>
    );
  }
}
