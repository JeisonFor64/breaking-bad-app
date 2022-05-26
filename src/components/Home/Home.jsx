import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCharacters } from '../../redux/actions';
import CharacterCard from "../CharacterCard/CharacterCard";
import '../../styles/Home.css';

class Home extends Component {

  componentDidMount() {
    this.props.getAllCharacters();
  }

  render() {
    return (
      <div className='Home'>
        {
        this.props.characters && this.props.characters.map((character) => {
          return(
            <CharacterCard
              key={character.char_id}
              id={character.char_id}
              name={character.name}
              img={character.img}
            />
          )
        })
        }
      </div>
    )
  }
}

export const mapStateToProps = (state) => {
  return { characters: state.characters };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getAllCharacters: () => dispatch(getAllCharacters()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);


// import React from 'react';
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { getAllCharacters } from '../../redux/actions';
// import CharacterCard from "../CharacterCard/CharacterCard";



// const Home = (props) => {


//   const dispatch = useDispatch();


//   useEffect(() => {
//     dispatch(getAllCharacters())
//   }, [dispatch])

//   const character = useSelector(state => state.character)
  

//   return (
//     <div>
//       {
//         props.characters && props.characters.map((character) => {
//           return(
//             <CharacterCard
//               key={character.char_id}
//               name={character.name}
//               img={character.img}
//             />
//           )
//         })
//       }
//     </div>
//   )
// }

// export default Home;


