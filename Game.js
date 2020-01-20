import {Button, Text, TextInput, View} from "react-native";
import {styles} from "./styles";
import React, {Component} from 'react';

export default class Game extends Component {

  showPlayer = () => {
    this.setState(prevState => ({}));
  };

  changeName = (name) => {
    const playerName = this.state.players.name;
    const playerPoints = this.state.players.points;
    this.setState(prevState => ({playerName: name, playerPoints: 0}))
  }

  state = {players: []};

  render() {
    const arePlayers = this.state.players;
    const playersNames = this.state.players.name;
    const playersPoints = this.state.players.points;
    return (
      <View style={{alignItems: "center"}}>
        <Text style={styles.header}>Game</Text>
        {arePlayers ?
          <View>
            <TextInput
              style={{
                height: 40,
                borderColor: "grey",
                borderWidth: 2,
                width: 150,
                color: "white"
              }}
              placeholder="enter the player's name"
              onSubmitEditing={this.changeName}
              value={this.state.name}
            />
            <Text style={styles.header}>{this.state.players["name"]} {this.state.players["points"]}</Text>
            <Button
              title="add another player"
              color="#841584"
              onPress={this.showPlayer}
            />
          </View>
          : <Button
            title="add your first player"
            color="#841584"
            onPress={this.showPlayer}
          />
        }
      </View>
    );
  }
}