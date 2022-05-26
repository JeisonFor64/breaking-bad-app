// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { getCharacterDetail } from '../../redux/actions';

// const CharacterDetail = () => {

//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const character = useSelector(state => state.characterDetail);
  
//   useEffect(() => {
//     dispatch(getCharacterDetail(id))
//   }, [dispatch, id])
  

//   return (
//     <div>
//       <h1>Details</h1>
//       <ul>
//        <li>{character[0]?.name}</li>
//            <li>{character[0]?.birthday}</li>
//           <li>{character[0]?.occupation}</li>
//            <li>{character[0]?.status}</li>
//            <li>{character[0]?.nickname}</li>
//            <li>{character[0]?.appearance}</li> 
//       </ul>
//     </div>
//   )
// }

// export default CharacterDetail;


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCharacterDetail } from '../../redux/actions';


class CharacterDetail extends Component {

  componentDidMount() {
    const CharacterID = this.props.match.params.id;
    this.props.getCharacterDetail(CharacterID);
  }

  render() {
    return (
      <div className='CharacterDetail'>
        <ul>
          <li><strong>Name: </strong>{this.props.character[0]?.name}</li>
          <li><strong>Birthday: </strong>{this.props.character[0]?.birthday}</li>
          <li><strong>Occupation: </strong>{this.props.character[0]?.occupation}</li>
          <li><strong>Status: </strong>{this.props.character[0]?.status}</li>
          <li><strong>Nickname: </strong>{this.props.character[0]?.nickname}</li>
          <li><strong>Appearance: </strong>{this.props.character[0]?.appearance}</li>
          <li><strong>Category: </strong>{this.props.character[0]?.category}</li>
        </ul>
      </div>
    )
  }
}

export const mapStateToProps = (state) => {
  return {
    character: state.characterDetail
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getCharacterDetail: CharacterID => dispatch(getCharacterDetail(CharacterID)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail);