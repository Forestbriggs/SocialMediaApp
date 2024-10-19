import React, { useEffect, useState } from 'react';
import {
    FlatList,
    SafeAreaView, Text,
    TouchableOpacity, View
} from 'react-native';
import Title from './components/Title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import globalStyle from './assets/styles/globalStyle';
import UserStory from './components/UserStory/UserStory';
import UserPost from './components/UserPost/UserPost';


const App = () => {
    const userStories = [
        {
            firstName: 'Joseph',
            profileImage: require('./assets/images/default_profile.png'),
            id: 1,
        },
        {
            firstName: 'Angel',
            id: 2,
            profileImage: require('./assets/images/default_profile.png'),
        },
        {
            firstName: 'White',
            id: 3,
            profileImage: require('./assets/images/default_profile.png'),
        },
        {
            firstName: 'Olivier',
            id: 4,
            profileImage: require('./assets/images/default_profile.png'),
        },
        {
            firstName: 'Forest',
            id: 5,
            profileImage: require('./assets/images/default_profile.png'),
        },
        {
            firstName: 'David',
            id: 6,
            profileImage: require('./assets/images/default_profile.png'),
        },
        {
            firstName: 'Adam',
            id: 7,
            profileImage: require('./assets/images/default_profile.png'),
        },
        {
            firstName: 'Samson',
            id: 8,
            profileImage: require('./assets/images/default_profile.png'),
        },
        {
            firstName: 'Solomon',
            id: 9,
            profileImage: require('./assets/images/default_profile.png'),
        },
    ]

    const userPosts = [
        {
            firstName: 'Allison',
            lastName: 'Becker',
            location: 'Boston, MA',
            likes: 1201,
            comments: 24,
            bookmarks: 55,
            image: require('./assets/images/default_post.png'),
            profileImage: require('./assets/images/default_profile.png'),
            id: 1
        },
        {
            firstName: 'Jennifer',
            lastName: 'Wilkson',
            location: 'Worcester, MA',
            likes: 1301,
            comments: 25,
            bookmarks: 70,
            image: require('./assets/images/default_post.png'),
            profileImage: require('./assets/images/default_profile.png'),
            id: 2
        },
        {
            firstName: 'Adam',
            lastName: 'Spera',
            location: 'Boston, MA',
            likes: 100,
            comments: 8,
            bookmarks: 3,
            image: require('./assets/images/default_post.png'),
            profileImage: require('./assets/images/default_profile.png'),
            id: 3
        },
        {
            firstName: 'Forest',
            lastName: 'Briggs',
            location: 'Eugene, OR',
            likes: 200,
            comments: 16,
            bookmarks: 6,
            image: require('./assets/images/default_post.png'),
            profileImage: require('./assets/images/default_profile.png'),
            id: 4
        },
        {
            firstName: 'Oliver',
            lastName: 'Perez',
            location: 'Seattle, WA',
            likes: 500,
            comments: 48,
            bookmarks: 80,
            image: require('./assets/images/default_post.png'),
            profileImage: require('./assets/images/default_profile.png'),
            id: 5
        },
    ]

    const userStoriesPageSize = 4;
    const [userStoryCurrentPage, setUserStoriesCurrentPage] = useState(1);
    const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
    const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

    const userPostsPageSize = 2;
    const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
    const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
    const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

    const pagination = (database, currentPage, pageSize) => {
        const startIndex = (currentPage - 1) * pageSize; //* grabs index 0 firstRender, then 4, then 8, etc
        const endIndex = startIndex + pageSize;
        if (startIndex >= database.length) {
            return [];
        }
        return database.slice(startIndex, endIndex)
    }

    useEffect(() => {
        setIsLoadingUserStories(true);
        const getInitialData = pagination(userStories, 1, userStoriesPageSize);
        setUserStoriesRenderedData(getInitialData);
        setIsLoadingUserStories(false);

        setIsLoadingUserPosts(true);
        const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
        setUserPostsRenderedData(getInitialDataPosts);
        setIsLoadingUserPosts(false);
    }, [])

    return (
        <SafeAreaView>

            <View style={globalStyle.userPostsContainer}>
                <FlatList
                    ListHeaderComponent={<>
                        <View style={globalStyle.header}>
                            <Title title={"Let's Explore"} />
                            <TouchableOpacity style={globalStyle.messageIcon}>
                                <FontAwesomeIcon icon={faEnvelope} size={20} color='#898DAE' />
                                <View style={globalStyle.messageNumberContainer}>
                                    <Text style={globalStyle.messageNumber}>2</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={globalStyle.userStoryContainer}>
                            <FlatList
                                onEndReachedThreshold={0.5}
                                onEndReached={() => {
                                    if (isLoadingUserStories) return;
                                    setIsLoadingUserStories(true);
                                    const contentToAppend = pagination(userStories, userStoryCurrentPage + 1, userStoriesPageSize);
                                    if (contentToAppend.length > 0) {
                                        setUserStoriesCurrentPage(userStoryCurrentPage + 1)
                                        setUserStoriesRenderedData(prev => [...prev, ...contentToAppend])
                                    }
                                    setIsLoadingUserStories(false);
                                }}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                data={userStoriesRenderedData}
                                renderItem={({ item }) => (
                                    <UserStory
                                        key={item.id}
                                        firstName={item.firstName}
                                        profileImage={item.profileImage}
                                    />
                                )}
                            />
                        </View></>}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        if (isLoadingUserPosts) return;
                        setIsLoadingUserPosts(true);
                        const contentToAppend = pagination(userPosts, userPostsCurrentPage + 1, userPostsPageSize);
                        if (contentToAppend.length > 0) {
                            setUserPostsCurrentPage(userPostsCurrentPage + 1)
                            setUserPostsRenderedData(prev => [...prev, ...contentToAppend])
                        }
                        setIsLoadingUserPosts(false);
                    }}
                    data={userPostsRenderedData}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <UserPost
                            firstName={item.firstName}
                            lastName={item.lastName}
                            location={item.location}
                            image={item.image}
                            profileImage={item.profileImage}
                            likes={item.likes}
                            comments={item.comments}
                            bookmarks={item.bookmarks}
                        />
                    )} />
            </View>
        </SafeAreaView>
    );
}

export default App;
