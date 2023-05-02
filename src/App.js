//import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props); // 使用this的权限
		this.state = {
			inputValue: '',
			items: [],
			editing: false,
		};
		//this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (e) => {
		this.setState({
			inputValue: e.target.value,
		});
	};

	handleAdd = () => {
		const { items, inputValue } = this.state;

		const newItems = [...items, inputValue];

		this.setState({
			items: newItems,
			inputValue: '',
		});
		console.log(this.state);
	};

	handleClearALL = () => {
		this.setState({
			items: [],
		});
	};

	handleOndeleteTask = (itemid) => {
		const { items } = this.state;
		const newItems = [...items];
		newItems.splice(itemid, 1);
		this.setState({
			items: newItems,
		});
	};

	render() {
		const { inputValue, items, black } = this.state;
		let btn_class = black ? 'blackButton' : 'whiteButton';
		console.log(items);

		return (
			<div className="App">
				<label>
					To Do Lists:
					<input
						type="text"
						value={inputValue}
						onChange={this.handleChange}
					/>
				</label>

				<button onClick={this.handleAdd}>ADD</button>
				<button onClick={this.handleClearALL}>Clear</button>

				<ul>
					{items.map((item, index) => {
						return (
							<li
								key={index}
								className={btn_class}
								//onClick={this.handleCross(index)}
							>
								{item}
								<h2
									onClick={
										() =>
											this.handleOndeleteTask(
												index
											) /* https://stackoverflow.com/a/62456740 */
									}
								>
									x
								</h2>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default App;
