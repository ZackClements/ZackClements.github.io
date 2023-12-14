import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LeagueResponse } from './src/types';
import { getLeague } from './src/api/league';


export default function App() {
  const [leagueData, setLeagueData] = useState({})
  const redraftLeagueId = "979075123544186880"

  useEffect(() => {
    const data = getLeague(redraftLeagueId)
    setLeagueData(data)
  }, [])


  return (
    <View style={styles.container}>
      { leagueData ? (      <Text>{leagueData}</Text>) : <Text>No league data provided</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
