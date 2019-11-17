import React, { Component } from 'react'
import {
    View, StyleSheet,
    Dimensions, Image
} from 'react-native'
import { PropTypes } from 'prop-types'

var width = Dimensions.get('window').width

class Floor extends Component {
    render() {
        return (
            <View style={[
                styles.floorContainer,
                {
                    height: this.props.height
                }
            ]} />
            /* <Image
                source={require('../../assets/images/basketball-floor.png')}
                style={[
                    styles.floorContainer,
                    {
                        height: this.props.height,
                        resizeMode: 'stretch'
                    }
                ]}
            /> */
        )
    }
}

const styles = StyleSheet.create({
    floorContainer: {
        backgroundColor: 'white', // ground color - #927754
        position: 'absolute',
        width: width,
        bottom: 0,
        opacity: 0.5
    }
})

Floor.defaultProps = {
    height: 10
}

Floor.propTypes = {
    height: PropTypes.number
}

export default Floor