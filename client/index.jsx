import React from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Axios from 'axios';
import NavMenu from './components/NavMenu.jsx'
import SearchResults from './components/SearchResults.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    Axios.get(`/events?q=${this.state.value}`, {
      params: {
        limit: 10,
        offset: 0
      }
    })
    .then((node) => {
      this.setState({
        pageCount: Math.ceil(node.data.length / node.config.params.limit),
      })
    })
    Axios.get(`/events?q=${this.state.value}&_page=0`)
    .then(({data}) => {
      console.log(data);
      this.setState({
        data: data,
      })
    })
  }
  handleChange(e) {
    this.setState({value: e.target.value});
  }
  handlePageClick ({selected}) {
    Axios.get(`/events?q=${this.state.value}&_page=${selected + 1}`, {
      params: {
        limit: 10,
        offset: 0
      }
    })
    .then((node) => {
      this.setState({
        data: node.data,
      })
    }
    );
  };
  render () {
    if (this.state.data.length) {
      return (
        <div className="outer-container">
          <NavMenu handleSubmit={this.handleSubmit} value={this.state.value} handleChange={this.handleChange} />
          <SearchResults data={this.state.data} pageCount={this.state.pageCount} handlePageClick={this.handlePageClick.bind(this)} />
        </div>
      )
    } else {
      return (
        <div className="outer-container">
          <NavMenu handleSubmit={this.handleSubmit} value={this.state.value} handleChange={this.handleChange} />
        </div>
      )
    }
  }
}
ReactDOM.render(<App />, document.getElementById('app'));