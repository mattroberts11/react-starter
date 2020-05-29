import React from 'react';

// const MovieSearch = (props) => {
class MovieSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }
  // handleSubmit(event) {
  //   alert('Search Term was: ' + this.state.value);
  // }
  // console.log('MovieSearch.props = ', props);
  render() {
    return (
    <div>
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.props.handleChange}  />
        <input type="submit" value="Go!" />
      </form>
    </div>
  );
}
}

export default MovieSearch;