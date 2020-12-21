import React, { Component } from 'react'
import Stepper from 'react-stepper-horizontal'


class StepperComponent extends Component {

	render() {
		const { steppperTitle, steps, current } = this.props
		return (
			<div>
				<h1>{steppperTitle}</h1>
				<Stepper
					steps={steps}
					activeStep={current - 1}
					activeColor="white"
					completeColor="white"
					defaultColor="white"
					defaultBarColor="#eb8d34"
					completeBarColor="#8cb544"
					barStyle="solid"
					size={15}
					circleFontSize={0}
					defaultBorderStyle='solid'
					completeBorderStyle='solid'
					activeBorderStyle='solid'
					defaultBorderColor={'grey'}
					completeBorderColor={'green'}
					activeBorderColor={'orange'}
					defaultBorderWidth={3}
					lineMarginOffset={5}
				/>
			</div>
		)
	}
}

export default StepperComponent