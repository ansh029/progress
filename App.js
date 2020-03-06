// import React, {useRef, useState, useEffect} from 'react';
// import { Text, View, StyleSheet, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// // setInterval custom hook by Dan Abramov
// function useInterval(callback, delay) {
//   const savedCallback = useRef();

//   // Remember the latest callback.
//   useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback]);

//   // Set up the interval.
//   useEffect(() => {
//     function tick() {
//       savedCallback.current();
//     }
//     if (delay !== null) {
//       let id = setInterval(tick, delay);
//       return () => clearInterval(id);
//     }
//   }, [delay]);
// }


// const App = () => {
//   let animation = useRef(new Animated.Value(0));
//   const [progress, setProgress] = useState(0);
//   useInterval(() => {
//     // update progress until 100
//     if(progress < 45) {
//       setProgress(45);
//     }
//   }, 1000);

//   useEffect(() => {
//     Animated.timing(animation.current, {
//       toValue: progress,
//       duration: 45
//     }).start();
//   },[progress])

//   const width = animation.current.interpolate({
//     inputRange: [0, 45],
//     outputRange: ["0%", "100%"],
//     extrapolate: "clamp"
//   })

//   return (
//     <View style={styles.container}>

          
//       <Text>
//         {`${progress}%`}
//       </Text>
//       <View style={styles.progressBar}>
      // <LinearGradient
      //       colors={['#ffb907', '#ffab14', '#ff7c44']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}
      
      //       style={{width: '100%', height: 25, borderRadius: 5 }}
      //     >
//         <Animated.View style={[StyleSheet.absoluteFill, {  width }]}/>
//         </LinearGradient>
//       </View>

  

//     </View>
//   );
// }

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     paddingTop: 20,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   progressBar: {
//     flexDirection: 'row',
//     height: 25,
//     width: '45%',
//     backgroundColor: 'white',
//     borderRadius: 5
//   }
// });

import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Button,
  Alert,
  Text,
} from 'react-native';
 
import ProgressBarAnimated from 'react-native-progress-bar-animated';
 
export default class App extends React.Component {
 
  state = {
    progress: 70,
    progressWithOnComplete: 0,
    progressCustomized: 0,
  }
 
  increase = (key, value) => {
    this.setState({
      [key]: this.state[key] + value,
    });
  }
 
  render() {
    const barWidth = Dimensions.get('screen').width - 30;
    const progressCustomStyles = {
      backgroundColor:'red', 
      borderRadius: 0,
      borderColor: '#FFF',
    };
 
    return (
      <View style={styles.container}>
        {/* <View>
          <Text style={styles.label}>Bar with backgroundColorOnComplete prop</Text>
          <ProgressBarAnimated
            width={barWidth}
            value={this.state.progress}
            backgroundColorOnComplete="#6CC644"
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonInner}>
              <Button
                title="Increase 20%"
                onPress={this.increase.bind(this, 'progress', 20)}
              />
            </View>
          </View>
        </View> */}
        {/* <View style={styles.separator} />
        <View>
          <Text style={styles.label}>Bar with onComplete event</Text>
          <ProgressBarAnimated
            width={barWidth}
            value={this.state.progressWithOnComplete}
            onComplete={() => {
              Alert.alert('Hey!', 'onComplete event fired!');
            }}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonInner}>
              <Button
                title="Increase 50%"
                onPress={this.increase.bind(this, 'progressWithOnComplete', 50)}
              />
            </View>
          </View>
        </View> */}
        <View style={styles.separator} />
        <View>
          <Text style={styles.label}>{this.state.progress}%</Text>
          {/* <LinearGradient
            colors={['#ffb907', '#ffab14', '#ff7c44']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}
      
            // style={{width: '70%' }}
          > */}
          <ProgressBarAnimated
            {...progressCustomStyles}
            width={barWidth}
            maxValue={30}
            value={this.state.progress}
          />
          {/* </LinearGradient> */}
          <View style={styles.buttonContainer}>
            <View style={styles.buttonInner}>
              {/* <Button
                title="Increase 10%"
                onPress={this.increase.bind(this, 'progressCustomized', 10)}
              /> */}
            </View>
          </View>
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    marginTop: 50,
    padding: 15,
  },
  buttonContainer: {
    marginTop: 15,
  },
  separator: {
    marginVertical: 30,
    borderWidth: 0.5,
    borderColor: '#FFF',
  },
  label: {
    color: '#999',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10,
  },
});




