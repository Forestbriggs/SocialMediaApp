import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { style } from './style';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';

export default function UserProfileImage(props) {
    return (
        <View style={[style.userImageContainer, { borderRadius: props.imageDimensions }]}>
            <Image
                source={props.profileImage}
                style={{ width: props.imageDimensions, height: props.imageDimensions }}
            />
        </View>
    )
}

UserProfileImage.propTypes = {
    profileImage: PropTypes.any.isRequired,
    imageDimensions: PropTypes.number.isRequired
}