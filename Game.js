import {Button, Text, TextInput, View} from "react-native";
import {styles} from "./styles";
import React, {Component} from 'react';

export default class Game extends Component {

  changeName = (name) => {
    const players = {...this.state.players};
    const newPlayer = {playerName: name, playerPoints: 0};
    this.setState({ ...players, newPlayer });
  }

  state = {players: []};

  render() {
    const arePlayers = this.state.players;
    const playersNames = this.state.players.name;
    const playersPoints = this.state.players.points;
    console.log(this.state.players);
    return (
      <View style={{alignItems: "center"}}>
        <Text style={styles.header}>Game</Text>
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
              value={this.state.players.name}
            />
        {this.state.players.map((player, index) =>
         <View key={index}>
          <Text>
            { player.name } : { player.points}
          </Text>
         </View>
        )}
            <Button
              title="add another player"
              color="#841584"
              onPress={this.addPlayer}
            />
      </View>
    );
  }
}