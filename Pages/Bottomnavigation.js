import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const CenteredText = ({ children }) => (
  <Text style={{
    textAlign: 'center',
    justifyContent: 'center',  
    alignItems: 'center',      
    fontWeight: 'bold',       
  }}>{children}</Text>
);

const MusicRoute = () => <CenteredText>Music</CenteredText>;

const AlbumsRoute = () => <CenteredText>Albums</CenteredText>;

const RecentsRoute = () => <CenteredText>Recents</CenteredText>;

const NotificationsRoute = () => <CenteredText>Notifications</CenteredText>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
    { key: 'albums', title: 'Albums', focusedIcon: 'album' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    {
      key: 'notifications',
      title: 'Notifications',
      focusedIcon: 'bell',
      unfocusedIcon: 'bell-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;

