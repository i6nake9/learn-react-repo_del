const App = () => {
	const [buttonText, setButtonText] = React.useState('Click me');
	const [buttonColor, setButtonColor] = React.useState('');
	console.log('Called');

	const onButtonClick = () => {
		setButtonText(' Hello from React');
		setButtonColor('green-btn');
		console.log(buttonText);
	};
	return (
		<div className="app">
			<button className={buttonColor} onClick={onButtonClick}>
				{buttonText}
			</button>
		</div>
	);
};

const container = document.getElementById('app');

const root = ReactDOM.createRoot(container);
root.render(<App />);
