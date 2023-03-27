import { SafeAreaView, ScrollView, Text, View } from "react-native"
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn"
import Welcome from "../components/home/welcome/Welcome"
import {images, icons, COLORS, FONT, SIZES, SHADOWS } from '../constants'
import {Stack} from 'expo-router'
import Popularjobs from "../components/home/popular/Popularjobs"
import Nearbyjobs from "../components/home/nearby/Nearbyjobs"


const Home=()=>{
    return (
        <SafeAreaView style={{flex: 1,backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: ()=>
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
                    ,
                    headerRight: ()=>
                        <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%"/>
                    ,
                    headerTitle: ""
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 1, padding: SIZES.medium}}>
                    <Welcome/>
                    <Popularjobs/>
                    <Nearbyjobs/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home;