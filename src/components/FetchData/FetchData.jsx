import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

class FetchData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: {}
    }
  }

  componentDidMount() {
    this.setState({
      loading: true
    }, this._fetchData)
  }

  _fetchData = async () => {
    const response = await fetch(this.props.url);
    const json = await response.json();

    this.setState({
      loading: false,
      data: json
    })
  }

  render() {
    return this.props.render(this.state)
  }
}

FetchData.propTypes = {
  url: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired
};

export default FetchData;
