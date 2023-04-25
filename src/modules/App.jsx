import React, { Component } from 'react';

import '@contentstack/venus-components/build/main.css';
import { Button } from '@contentstack/venus-components';

class App extends Component {
	render() {
		return (
			<div>
				Boilerplate for venus components
				<Button>Venus Button</Button>
			</div>
		)
	}
}

export default App;