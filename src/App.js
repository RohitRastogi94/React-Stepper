import React, { Component } from 'react'
import StepperComponent from './component/StepperComponent'


const pageData = [
	{
		page: 1,
		data: [{
			title: 'nausea',
			current: 0
		},
		{
			title: 'Diarrhea',
			current: 0
		},
		{
			title: 'Constipation',
			current: 0
		},]
	},
	{
		page: 2,
		data: [{
			title: 'headache',
			current: 0
		},
		{
			title: 'back pain',
			current: 0
		},
		{
			title: 'others',
			current: 0
		},]
	}
]
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			totalCount: 0,
			steps: [
				{
					title: 'Never or almost never',
				},
				{
					title: 'Occasionally, effect is not severe',
				},
				{
					title: 'Occasionally, effect is severe',
				},
				{
					title: 'Frequently, effect is not severe',
				},
				{
					title: 'Frequently, effect is severe',
				}
			],
			digestiveTract: [
				{
					title: 'nausea',
					current: 0
				},
				{
					title: 'Diarrhea',
					current: 0
				},
				{
					title: 'Constipation',
					current: 0
				},
			],
			otherTract: [
				{
					title: 'headache',
					current: 0
				},
				{
					title: 'back pain',
					current: 0
				},
				{
					title: 'others',
					current: 0
				},
			],

			currentPage: 2,
			stateData: []
		}

	}

	componentDidMount() {
		const { digestiveTract, otherTract, steps, currentPage } = this.state

		const filterData = pageData.filter((o) => {
			if(o.page == currentPage) {
				return o
			}
		})

	
		let newData = []
		this.setState({
			stateData: filterData.length > 0 ? filterData[0].data : []
		})

		let newSteps = JSON.parse(JSON.stringify(steps))
			newData = JSON.parse(JSON.stringify(filterData.length > 0 ? filterData[0].data : []))
			newData.map((data, index) => {
				
				let newArray = []
				newArray = newSteps.map((stepData, stepIndex) => {
					return {
						...stepData,
						onClick: () => this.onStepsClick(this.state.stateData, index, stepIndex)
					}
				})
	
				newData[index].stepData = newArray
			})
	
			console.log(newData);
		
		

		// otherTract.map((data, index) => {
		// 	let newArray = []
		// 	newArray = newSteps.map((stepData, stepIndex) => {
		// 		return {
		// 			...stepData,
		// 			onClick: () => this.onStepsClick(otherTract, index, stepIndex)
		// 		}
		// 	})

		// 	otherTract[index].stepData = newArray
		// })




		this.setState({
			stateData: newData,
			// otherTract
		})

	}

	onStepsClick = (data, index, number) => {
		data[index].current = number + 1
		let totalCount = 0
		data.forEach(o => {
			let count = o.current > 0 ? o.current -1 : 0
			totalCount +=count
		});
		
		this.setState({
			[data]: data,
			totalCount
		})
	}

	onBtnClick = ()  => {
		this.props.setData(this.state.digestiveTract)

	}

	render() {
		const { stateData, otherTract, totalCount, currentPage } = this.state
		
		return (
			<div className="App">
				<h1>{`Page - ${currentPage}`}</h1>
				{stateData.length > 0  && stateData.map((data, index) => {
					if (data.stepData) {
						return (
							<div>
								<StepperComponent
									key={index}
									steppperTitle={data.title}
									steps={data.stepData}
									current={data.current}
								/>
							</div>
						)
					}
				})}

				<button onClick={this.onBtnClick}> next</button>
				<h1>{totalCount}</h1>

				{/* <h1>Page -2</h1>
				{otherTract.map((data, index) => {
					if (data.stepData) {
						return (
							<div>
								<StepperComponent
									key={index}
									steppperTitle={data.title}
									steps={data.stepData}
									current={data.current}
								/>
							</div>
						)
					}
				})} */}
			</div>
		)
	}
}


export default App;
