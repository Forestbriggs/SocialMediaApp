import { Text } from "react-native";
import { style } from './style.js';
import PropTypes from 'prop-types';

export default function Title(props) {
    return <Text style={style.title}>{props.title}</Text>
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
}