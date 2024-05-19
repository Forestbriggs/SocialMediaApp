import PropTypes from 'prop-types';
import { style } from "./style";
import { Text, View, Image } from 'react-native';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faCommenting, faHeart } from '@fortawesome/free-regular-svg-icons';

export default function UserPost(props) {
    return (
        <View style={style.userPostContainer}>
            <View style={style.postContainer}>
                <View style={style.postHeaderContainer}>
                    <UserProfileImage profileImage={props.profileImage} imageDimensions={48} />
                    <View style={style.headerTextContainer}>
                        <Text style={style.name}>{props.firstName} {props.lastName}</Text>
                        {props.location && <Text style={style.location}>{props.location}</Text>}
                    </View>
                </View>
                <FontAwesomeIcon style={style.ellipsis} icon={faEllipsisH} size={19} />
            </View>
            <View style={style.postImage}>
                <Image source={props.image} />
            </View>
            <View style={style.postIcons}>
                <View style={style.iconContainer}>
                    <FontAwesomeIcon style={style.icon} icon={faHeart} size={16} />
                    <Text style={style.iconText} >{props.likes}</Text>
                </View>
                <View style={style.iconContainer}>
                    <FontAwesomeIcon style={style.icon} icon={faCommenting} size={16.5} />
                    <Text style={style.iconText} >{props.comments}</Text>
                </View>
                <View style={style.iconContainer}>
                    <FontAwesomeIcon style={style.icon} icon={faBookmark} />
                    <Text style={style.iconText} >{props.bookmarks}</Text>
                </View>
            </View>
        </View>
    )
}

UserPost.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    location: PropTypes.string,
    image: PropTypes.any.isRequired,
    likes: PropTypes.number.isRequired,
    profileImage: PropTypes.any.isRequired,
    comments: PropTypes.number.isRequired,
    bookmarks: PropTypes.number.isRequired
}