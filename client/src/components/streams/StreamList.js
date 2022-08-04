import React from 'react';
import { useEffect } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import { fetchStreams } from '../../actions';

const StreamList = (props) => {
  useEffect( () => { 
    props.fetchStreams(); 
  },[]);

  return (
  <div>
    <h2>Streams</h2>
    <div className="ui celled list">{renderList(props)}</div>
    {renderCreate(props)}
  </div>
  );
};

const renderAdmin = (stream, props) => {
  if(stream.userId === props.currentUserId)
    return (
      <div className="right floated content">
        <button className="ui button primary">
          Edit
        </button>
        <button className="ui button negative">
          Delete
        </button>
      </div>
    )
}

const renderCreate = (props) => {
  if(props.isSignedIn) {
    return (
      <div style={{textAlign: 'right'}}>
        <Link to="/streams/new" className="ui button primary">
          Create Stream
        </Link>
      </div>
    );
  }
}

const renderList =  (props) => {
  return props.streams.map(stream=> {
    return (
      <div className='item' key={stream.id}>
        <div className='left floated content'>
          <i className="large middle aligned icon camera" />
        </div>
        <div className='left floated content'>
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
        {renderAdmin(stream, props)}
      </div>
    );
  });
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
}


export default connect(mapStateToProps, {fetchStreams})(StreamList);
