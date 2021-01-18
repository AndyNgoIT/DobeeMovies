import React from "react";
import {ScrollView, View} from 'react-native';
import {DoughnutChartBasic, DoughnutChartInnerLabel, DoughnutChartHollow, DoughnutChartTransform} from '../../components';
import {Header} from '../../components';
import {NavigationActions} from "react-navigation";

class PieChart extends React.Component{
    render(): React.ReactNode {
        return (
            <View>
                <ScrollView>
                    <Header
                        type='normal'
                        label='DASHBOARD'
                        onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
                    />
                    <DoughnutChartBasic/>
                    <DoughnutChartInnerLabel/>
                    <DoughnutChartHollow/>
                    <DoughnutChartTransform/>
                </ScrollView>
            </View>
        );
    }
}

export {PieChart};
