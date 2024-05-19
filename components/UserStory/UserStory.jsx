import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { style } from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

const UserStory = (props) => {
    return (
        <View style={style.userStoryContainer}>
            <UserProfileImage
                profileImage={props.profileImage}
                imageDimensions={65}
            />
            <Text style={style.firstName}>{props.firstName}</Text>
        </View>
    )
}

UserStory.propTypes = {
    firstName: PropTypes.string.isRequired,
    profileImage: PropTypes.any.isRequired
}

export default UserStory;