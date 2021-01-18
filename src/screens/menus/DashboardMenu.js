import React from "react";
import {View, FlatList} from "react-native";
import {createStackNavigator, createAppContainer, NavigationActions} from 'react-navigation';
import {ListItem, Header} from '../../components';
import {PieChart} from '../dashboards/PieChart';

const DashboardRoutes = [
    {
        id: 'doughnutChart',
        label: 'Doughnut chart',
    },
];

class DashboardMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: DashboardRoutes
        }
    }

    _renderItem = ({item}) => (
        <ListItem
            type='normal'
            label={item.label}
            onPress={() => this.props.navigation.navigate(item.id)}
        />
    );

    _keyExtractor = (item) => item.id;

    render(): React.ReactNode {
        return (
            <View style={{flex: 1}}>
                <FlatList
                    renderItem={this._renderItem}
                    data={this.state.data}
                    keyExtractor={this._keyExtractor}/>
            </View>
        );
    }
}

class DashboardMenuWithHeader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: DashboardRoutes
        }
    }

    _renderItem = ({item}) => (
        <ListItem
            type='normal'
            label={item.label}
            onPress={() => this.props.navigation.navigate(item.id)}
        />
    );

    _keyExtractor = (item) => item.id;

    render(): React.ReactNode {
        return (
            <View style={{flex: 1}}>
                <Header
                    type='normal'
                    label='DASHBOARD'
                    onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
                />
                <View style={{flex: 1}}>
                    <FlatList
                        renderItem={this._renderItem}
                        data={this.state.data}
                        keyExtractor={this._keyExtractor}/>
                </View>
            </View>
        );
    }
}

const DashboardNavigator = createStackNavigator({
    dashBoardMenu: DashboardMenuWithHeader,
    doughnutChart: PieChart,
},{
    headerMode: 'none'
});

const DashboardContainer = createAppContainer(DashboardNavigator);

export {DashboardContainer, DashboardNavigator, DashboardMenu, DashboardMenuWithHeader};
