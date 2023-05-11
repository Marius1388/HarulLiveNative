import { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Video } from "expo-av";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  return (
    <View style={styles.container}>
      {
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "https://58f9d53e45ea8.streamlock.net:443/wildliferomania2/live.stream_aac/manifest.mpd",
          }}
          resizeMode="contain"
          shouldPlay={true}
          onPlaybackStatusUpdate={setStatus}
          volume={1.0}
        />
      }
      <StatusBar style={"auto"} hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f2d41",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    flex: 1,
    alignSelf: "stretch",
  },
});
