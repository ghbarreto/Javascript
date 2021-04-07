import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    // after connecting the returning function
    // the values can be accessed in this component
    // console.log(this.props.songs);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// mapStateToProps is named by convention, so use it.
const mapStateToProps = state => {
  return { songs: state.songs };
};

// connect()() gets the data from SongList and gives it to mapStateToProps
export default connect(mapStateToProps, {
  selectSong,
})(SongList);
