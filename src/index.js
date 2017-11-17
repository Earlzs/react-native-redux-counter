import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { increase, decrease, reset } from './actions/index';

class Home extends Component {
	_onPressReset() {
		this.props.dispatch(reset());
	}

	_onPressInc() {
		this.props.dispatch(increase());
	}

	_onPressDec() {
		this.props.dispatch(decrease());
	}

	render() {
		return (
			<View style={styles.container}>

				<View style={{ flexDirection: 'row', height: 60, marginTop: 60 }}>
					<TouchableOpacity style={[styles.reset, styles.content]} onPress={() => this._onPressReset()}>
						<Text>归零</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.start, styles.content]} onPress={() => this._onPressInc()}>
						<Text>加1</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.stop, styles.content]} onPress={() => this._onPressDec()}>
						<Text>减1</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.counter}>
					<Text style={{fontSize:66}}>{this.props.counter.count}</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	content: {
		justifyContent: 'center',
		alignItems: 'center',

	},
	counter: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	reset: {
		flex: 1,
		backgroundColor: '#666'
	},
	start: {
		flex: 1,
		backgroundColor: '#ccc'
	},
	stop: {
		flex: 1,
		backgroundColor: '#999'
	}
})


const mapStateToProps = state => ({
	counter: state.counter
})
// 连接操作不会改变原来的组件类，反而返回一个新的已与 Redux store 连接的组件类。
//组件将会监听 Redux store 的变化。任何时候，只要 Redux store 发生改变，mapStateToProps 函数就会被调用
//如果你省略了这个参数，你的组件将不会监听 Redux store。
export default connect(mapStateToProps)(Home);