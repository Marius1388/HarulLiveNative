import { useRef, useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Video } from 'expo-av';

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
						uri: 'https://58f9d53e45ea8.streamlock.net:443/wildliferomania2/live.stream_aac/manifest.mpd',
					}}
					useNativeControls
					resizeMode="contain"
					// isLooping
					onPlaybackStatusUpdate={setStatus}
				/>
			}
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
	video: {
		flex: 1,
		alignSelf: 'stretch',
	},
});
