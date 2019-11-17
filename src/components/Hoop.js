import React, { Component } from 'react'
import {
    View, StyleSheet,
    Dimensions
} from 'react-native'
import { PropTypes } from 'prop-types'

var width = Dimensions.get('window').width

class Hoop extends Component {
    render() {
        return (
            <View style={[
                styles.bigHoopContainer,
                {
                    bottom: this.props.y
                }
            ]}>
                <View style={styles.smallHoopContainer} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bigHoopContainer: {
        position: 'absolute',
        left: (width / 2) - (180 / 2),
        width: 180,
        height: 112,
        alignItems: 'center',
        borderWidth: 7,
        borderColor: 'gray', // #b7b7b7 - big frame
        borderRadius: 5,
        backgroundColor: '#B8B8B8',
        opacity: 0.8
    },
    smallHoopContainer: {
        width: 70,
        height: 54,
        marginTop: 38,
        borderWidth: 5,
        borderColor: 'gray', // #b7b7b7 - small frame inside big frame
        borderRadius: 5
    }
})

Hoop.defaultProps = {
    y: 0
}

Hoop.propTypes = {
    y: PropTypes.number
}

export default Hoop