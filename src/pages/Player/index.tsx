import React, { createRef } from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';

import { Header, AboutAlbum, AudioPlayer } from '../../components';

const Player: React.FC = () => {
  const actionSheetRef = createRef<{ setModalVisible: () => void }>();

  const handleToggleList = () => {
    actionSheetRef.current?.setModalVisible();
  };

  return (
    <SafeAreaView>
      <Header handleToggleList={handleToggleList} />
      <ScrollView>
        <AboutAlbum />
        <AudioPlayer />
      </ScrollView>
      <ActionSheet
        ref={actionSheetRef}
        containerStyle={{
          height: Dimensions.get('screen').height - 150,
          padding: 20,
        }}
      >
        <Text>Oi</Text>
      </ActionSheet>
    </SafeAreaView>
  );
};

export default Player;
