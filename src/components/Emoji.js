import React, { Component } from 'react'
import {
    StyleSheet, Animated,
    View, Text, Dimensions,
} from 'react-native'
import { PropTypes } from 'prop-types'

var width = Dimensions.get('window').width
var height = Dimensions.get('window').height

const happy = ['👋', '👌', '👍', '👏', '👐']
const sad = ['😢', '😓', '😒', '😳', '😭']
// const happy = ['hay', 'tốt', 'ghê nha', 'kinh', 'tuyệt vời']
// const sad = ['ngu', 'óc chó', 'kém quá', 'vậy cũng hụt', 'plêu plêu']
const INITIAL_Y = 5

export default class Emoji extends Component {
    constructor(props) {
        super(props)

        this.state = {
            relativeY: new Animated.Value(INITIAL_Y),
            fadeAnim: new Animated.Value(0),
            emoji: ''
        }
    }

    getEmoji = (isHappy = true) => {
        const min = 0
        const max = 4
        const random = Math.floor(Math.random() * (max - min + 1)) + min

        if (isHappy === true) {
            return happy[random]
        }

        return sad[random]
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.scored !== null && this.props.scored === null) {
            // state of the animation when you shoot the ball into the basket or you failed
            if (nextProps.scored === true) {
                this.setState({
                    emoji: this.getEmoji(true) // you win
                })

            } else {
                this.setState({
                    emoji: this.getEmoji(false) // you lose
                })
            }

            this.state.relativeY.setValue(INITIAL_Y)

            // showing animation
            Animated.timing(
                this.state.fadeAnim,
                {
                    toValue: 1
                }
            ).start()

            Animated.timing(
                this.state.relativeY,
                {
                    toValue: 15
                }
            ).start()

        } else if (nextProps.scored === null && this.props.scored !== null) {
            Animated.timing(
                this.state.fadeAnim,
                {
                    toValue: 0
                }
            ).start()

            Animated.timing(
                this.state.relativeY,
                {
                    toValue: 40
                }
            ).start()
        }
    }

    render() {
        return (
            <View style={[
                styles.emojiContainer,
                {
                    bottom: this.props.y,
                    width: 100,
                    height: 100,
                    left: width / 2 - 50
                }
            ]}>
                <Animated.Text style={{
                    fontSize: 35,
                    backgroundColor: 'transparent',
                    opacity: this.state.fadeAnim,
                    marginBottom: this.state.relativeY
                }}>
                    {this.state.emoji}
                </Animated.Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    emojiContainer: {
        position: 'absolute',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})

Emoji.defaultProps = {
    y: 0,
    scored: null
}

Emoji.propTypes = {
    y: PropTypes.number,
    scored: PropTypes.bool
}