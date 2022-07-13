import React from 'react'
import {View, Text, SafeAreaView, ScrollView, Touchable, TouchableOpacity, TouchableWithoutFeedback} from 'react-native'
import style from './style';

class Home extends React.Component{
    render(){
        return(
            <SafeAreaView style={style.Container}>
                <ScrollView style={style.Categories} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={style.Category}>
                        <Text style={style.CategoryName}>Sort By</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.Category}>
                        <Text style={style.CategoryName}>Shoes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.Category}>
                        <Text style={style.CategoryName}>PW 2021</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.Category}>
                        <Text style={style.CategoryName}>New</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Home;