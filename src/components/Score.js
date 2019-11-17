import React, { Component } from 'react'
import {
    View, Text,
    StyleSheet,
    Dimensions
} from 'react-native'
import { PropTypes } from 'prop-types'

var width = Dimensions.get('window').width

class Score extends Component {
    render() {
        return (
            <View style={[
                styles.scoreContainer,
                {
                    bottom: this.props.y,
                    width: width
                }
            ]}>
                <Text style={styles.textStyle}>
                    {this.props.score}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    scoreContainer: {
        position: 'absolute',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 100,
        fontWeight: '100',
        color: 'black', // #707070
        fontFamily: 'FB',
        textShadowColor: '#222222',
        textShadowRadius: 10,
        textShadowOffset: {
            width: 2,
            height: 2
        }
    }
})

Score.defaultProps = {
    y: 0,
    scored: null,
    score: 0
}

Score.propTypes = {
    y: PropTypes.number,
    scored: PropTypes.bool,
    score: PropTypes.number
}

export default Score