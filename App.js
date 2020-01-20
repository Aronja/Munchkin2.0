import React, {Component} from 'react';
import {View, Button} from 'react-native';
import {styles} from "./styles";
import Welcome from "./Welcome";
import Game from "./Game";

export default class App extends Component {

  toggleGame = () => {
    this.setState(prevState => ({isPlaying: !prevState.isPlaying}));
  };

  state = {isPlaying: true};

  render() {
    const isPlaying = this.state.isPlaying;
    return (
      <View style={styles.container}>
        {isPlaying ? <Welcome/> : <Game/>}
        {isPlaying ?
          <Button
            title="start playing"
            color="#841584"
            onPress={this.toggleGame}
          /> :
          <Button
            title="go back"
            color="#841584"
            onPress={this.toggleGame}
          />}
      </View>

    );
  }
}


