import React from 'react';
import {View, StyleSheet, Dimensions, Text, Button, TouchableOpacity} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import {VictoryLabel, VictoryPie} from 'victory-native';
import {Svg, Text as SvgText} from 'react-native-svg';
import {scale} from '../utils/scale';
import LinearGradient from 'react-native-linear-gradient';

const screenSize = Dimensions.get('window');

const chartData = [
    { x: 1, y: 33, title: '33%', color: '#ff6b5c' },
    { x: 2, y: 25, title: '25%', color: '#3bd555' },
    { x: 3, y: 42, title: '42%', color: '#8a98ff' },
];

class DoughnutChartBasic extends React.Component{
    state = {
        selected: 0,
        data: [
            { x: 1, y: 22, color: '#ff6b5c', name: 'First' },
            { x: 2, y: 47, color: '#ffd146', name: 'Second' },
            { x: 3, y: 11, color: '#3bd555', name: 'Third' },
            { x: 4, y: 20, color: '#41abe1', name: 'Fourth' },
        ],
    };
    size = 300;

    _populateColors = () => this.state.data.map(i => i.color);

    _onChartPressed = (event, props) => {
        this.setState({
            selected: props.index,
        });
    };

    _renderItemsInfo = () => this.state.data.map(this._renderItemInfo);

    _renderItemInfo = (item) => (
        <View key={item.x} style={styles.basicItem}>
            <View style={[styles.itemBadge, { backgroundColor: item.color }]} />
            <Text style={styles.itemText}>{item.name}</Text>
        </View>
    );

    render(): React.ReactNode {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.label}>Doughnut chart basic</Text>
                    <View
                        pointerEvents="none"
                        style={styles.svgContainer}>
                        <VictoryPie
                            labels={(item) => `${item.y}%`}
                            width={scale(this.size)}
                            height={scale(this.size)}
                            padAngle={4}
                            innerRadius={scale(60)}
                            colorScale={this._populateColors()}
                            data={this.state.data}
                            padding={scale(45)}
                            events={[{
                                target: 'data',
                                eventHandlers: {
                                    onPressIn: this._onChartPressed,
                                },
                            }]}
                        />
                    </View>
                    <View style={styles.basicItemContainer}>
                        {this._renderItemsInfo()}
                    </View>
                </View>
            </View>
        );
    }
}

class DoughnutChartInnerLabel extends React.Component{
    state = {
        selected: 0,
        data: [
            { x: 1, y: 22, color: '#ff6b5c', name: 'First' },
            { x: 2, y: 47, color: '#ffd146', name: 'Second' },
            { x: 3, y: 11, color: '#3bd555', name: 'Third' },
            { x: 4, y: 20, color: '#41abe1', name: 'Fourth' },
        ],
    };
    size = 300;

    _populateColors = () => this.state.data.map(i => i.color);

    _onChartPressed = (event, props) => {
        this.setState({
            selected: props.index,
        });
    };

    _renderItemsInfo = () => this.state.data.map(this._renderItemInfo);

    _renderItemInfo = (item) => (
        <View key={item.x} style={styles.basicItem}>
            <View style={[styles.itemBadge, { backgroundColor: item.color }]} />
            <Text style={styles.itemText}>{item.name}</Text>
        </View>
    );

    render(): React.ReactNode {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.label}>Doughnut chart inner label</Text>
                    <View
                        pointerEvents="none"
                        style={styles.svgContainer}>
                        <VictoryPie
                            labels={(item) => `${item.y}%`}
                            labelRadius={74}
                            style={{ labels: { fill: "white", fontSize: 16, fontWeight: "bold" } }}
                            width={scale(this.size)}
                            height={scale(this.size)}
                            colorScale={this._populateColors()}
                            data={this.state.data}
                            padding={scale(25)}
                            events={[{
                                target: 'data',
                                eventHandlers: {
                                    onPressIn: this._onChartPressed,
                                },
                            }]}
                        />
                    </View>
                    <View style={styles.basicItemContainer}>
                        {this._renderItemsInfo()}
                    </View>
                </View>
            </View>
        );
    }
}

class DoughnutChartTransform extends React.Component{
    state = {
        selected: 0,
        data: [
            { x: 1, y: 22, color: '#ff6b5c', name: 'First' },
            { x: 2, y: 47, color: '#ffd146', name: 'Second' },
            { x: 3, y: 11, color: '#3bd555', name: 'Third' },
            { x: 4, y: 20, color: '#41abe1', name: 'Fourth' },
        ],
        startAngle: 90,
        endAngle: -90,
    };
    size = 300;

    _populateColors = () => this.state.data.map(i => i.color);

    _onChartPressed = (event, props) => {
        this.setState({
            selected: props.index,
        });
    };

    _onRedButtonPress = () => {
        this.setState({
            startAngle: 90,
            endAngle: -90,
        })
    };

    _onYellowButtonPress = () => {
        this.setState({
            startAngle: -90,
            endAngle: -270,
        })
    };

    _onGreenButtonPress = () => {
        this.setState({
            startAngle: 0,
            endAngle: -180,
        })
    };

    _onBlueButtonPress = () => {
        this.setState({
            startAngle: 0,
            endAngle: 180,
        })
    };


    _onRandomButtonPress = () => {
        this.setState({
            startAngle: Math.floor(Math.random() * 1000),
            endAngle: Math.floor(Math.random() * 1000),
        })
    };

    _renderItemsInfo = () => this.state.data.map(this._renderItemInfo);

    _renderItemInfo = (item) => (
        <View key={item.x} style={styles.basicItem}>
            <View style={[styles.itemBadge, { backgroundColor: item.color }]} />
            <Text style={styles.itemText}>{item.name}</Text>
        </View>
    );

    render(): React.ReactNode {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.label}>Doughnut chart transform</Text>
                    <View
                        pointerEvents="none"
                        style={styles.svgContainer}>
                        <VictoryPie
                            labels={[]}
                            startAngle={this.state.startAngle}
                            endAngle={this.state.endAngle}
                            width={scale(this.size)}
                            height={scale(this.size)}
                            colorScale={this._populateColors()}
                            data={this.state.data}
                            padding={scale(25)}
                            events={[{
                                target: 'data',
                                eventHandlers: {
                                    onPressIn: this._onChartPressed,
                                },
                            }]}
                            animate={{
                                duration: 1000
                            }}
                        />
                    </View>
                    <View style={styles.basicItemContainer}>
                        {this._renderItemsInfo()}
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={[styles.buttonContainer, {marginTop: 10}]}>
                            <TouchableRipple
                                rippleColor="white"
                                borderless={true}
                                onPress={this._onRedButtonPress}
                                style={[styles.button, {borderRadius: 28, backgroundColor: '#ff6b5c'}]}>
                                <Text style={styles.buttonText}>Up</Text>
                            </TouchableRipple>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={[styles.buttonContainer, {marginTop: 10}]}>
                            <TouchableRipple
                                rippleColor="white"
                                borderless={true}
                                onPress={this._onYellowButtonPress}
                                style={[styles.button, {borderRadius: 28, backgroundColor: '#ffd146'}]}>
                                <Text style={styles.buttonText}>Down</Text>
                            </TouchableRipple>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={[styles.buttonContainer, {marginTop: 10}]}>
                            <TouchableRipple
                                rippleColor="white"
                                borderless={true}
                                onPress={this._onGreenButtonPress}
                                style={[styles.button, {borderRadius: 28, backgroundColor: '#3bd555'}]}>
                                <Text style={styles.buttonText}>Left</Text>
                            </TouchableRipple>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={[styles.buttonContainer, {marginTop: 10}]}>
                            <TouchableRipple
                                rippleColor="white"
                                borderless={true}
                                onPress={this._onBlueButtonPress}
                                style={[styles.button, {borderRadius: 28, backgroundColor: '#41abe1'}]}>
                                <Text style={styles.buttonText}>Right</Text>
                            </TouchableRipple>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={[styles.buttonContainer, {marginVertical: 10}]}>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={this._onRandomButtonPress}
                                style={[styles.button, {borderRadius: 28}]}>
                                <LinearGradient
                                    start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                                    colors={['#ff6b5c', '#ffd146', '#3bd555', '#41abe1']}
                                    style={styles.linearGradient}>
                                    <Text style={[styles.buttonText, {textAlign: 'center', margin: 10}]}>
                                        Transform
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

class DoughnutChartHollow extends React.Component {
    state = {
        selected: 0,
        data: [
            { x: 1, y: 100, title: '0%', color: '#ffffff' },
        ],
    };
    size = 300;
    fontSize = 40;

    componentDidMount(): void {
        this.setState({
            data: chartData,
        })
    }

    _populateColors = () => this.state.data.map(i => i.color);

    _onChartPressed = (event, props) => {
        this.setState({
            selected: props.index,
        });
    };

    _onRedButtonPress = () => {
        this.setState({
            selected: 0
        })
    };

    _onBlueButtonPress = () => {
        this.setState({
            selected: 2
        })
    };

    _onGreenButtonPress = () => {
        this.setState({
            selected: 1
        })
    };

    render(): React.ReactNode {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.label}>Doughnut chart with content</Text>
                    <View
                        pointerEvents="none"
                        style={styles.svgContainer}>
                        <Svg width={scale(this.size)} height={scale(this.size)} >
                            <VictoryPie
                                labels={[]}
                                width={scale(this.size)}
                                height={scale(this.size)}
                                colorScale={this._populateColors()}
                                data={this.state.data}
                                standalone={false}
                                padding={scale(20)}
                                innerRadius={scale(70)}
                                events={[{
                                    target: 'data',
                                    eventHandlers: {
                                        onPressIn: this._onChartPressed,
                                    },
                                }]}
                                animate={{
                                    duration: 2000
                                }}
                            />
                            <SvgText
                                textAnchor="middle"
                                verticalAnchor="middle"
                                // x={scale(this.size/2)}
                                x={scale(this.size/2+8)}
                                y={scale(this.size/2+14)}
                                height={scale(this.fontSize)}
                                fontSize={scale(this.fontSize)}
                                fontFamily='Gill Sans'
                                stroke='black'
                                fill='black'>
                                {this.state.data[this.state.selected].title}
                            </SvgText>
                        </Svg>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.buttonContainer}>
                            <TouchableRipple
                                rippleColor="white"
                                borderless={true}
                                onPress={this._onRedButtonPress}
                                style={[styles.button, {borderRadius: 8, backgroundColor: '#ff6b5c'}]}>
                                <Text style={styles.buttonText}>{this.state.selected===0 ? 'Selected' : 'Select'}</Text>
                            </TouchableRipple>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableRipple
                                rippleColor="white"
                                onPress={this._onGreenButtonPress}
                                style={[styles.button, {borderRadius: 8, backgroundColor: '#3bd555'}]}>
                                <Text style={styles.buttonText}>{this.state.selected===1 ? 'Selected' : 'Select'}</Text>
                            </TouchableRipple>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableRipple
                                rippleColor='white'
                                borderless={true}
                                onPress={this._onBlueButtonPress}
                                style={[styles.button, {borderRadius: 8, backgroundColor: '#8a98ff'}]}>
                                <Text style={styles.buttonText}>{this.state.selected===2 ? 'Selected' : 'Select'}</Text>
                            </TouchableRipple>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#f2f2f2',
    },
    content: {
        backgroundColor: '#ffffff',
        paddingVertical: 6,
        paddingHorizontal: 6,
    },
    label: {
        fontSize: scale(20),
        fontWeight: 'bold',
        color: '#2b2b2b',
    },
    svgContainer: {
        alignSelf: 'center',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'stretch',
        paddingHorizontal: 5,
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    buttonText: {
        fontSize: scale(16),
        color: 'white',
        fontWeight: '600',
    },
    basicItemContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    basicItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemBadge: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 5,
    },
    itemText: {
        fontSize: scale(16),
    },
    linearGradient: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 28,
    }
});

export {DoughnutChartBasic, DoughnutChartInnerLabel, DoughnutChartHollow, DoughnutChartTransform};
