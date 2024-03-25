import React, {useEffect} from 'react';
import {getBeers} from "../state/reducers/slices";

import {
    FlatList,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { useDispatch, useSelector } from 'react-redux';

const RealApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBeers())
  },[]);

  const beers = useSelector((state)=>state.beers);

  console.log(beers)

  return (
    <View>
        <FlatList 
        data={beers}
        />
    </View>
  );
}

export default RealApp;
