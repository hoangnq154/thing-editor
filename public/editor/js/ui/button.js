class Button extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {};
		this.onClick = this.onClick.bind(this);
		this.onKeyPress = this.onKeyPress.bind(this);
		this.onMouseDown = this.onMouseDown.bind(this);
	}
	
	componentDidMount() {
		if (this.props.hotkey) {
			window.addEventListener("keypress", this.onKeyPress);
		}
	}
	
	componentWillUnmount() {
		if (this.props.hotkey) {
			window.removeEventListener("keypress", this.onKeyPress);
		}
	}
	
	onKeyPress(e) {
		if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;
		
		if (e.keyCode == this.props.hotkey) {
			this.onClick(e);
		}
	}
	
	onMouseDown(ev) {
		if (ev.button === 2) {
			EDITOR.ui.modal.showModal(this.props.onClick.name, 'Button Handler:');
		}
	}
	
	onClick(ev) {
		this.props.onClick();
		ev.target.blur();
	}
	
	render() {
		return R.button({
			className: 'clickable ' + this.props.className,
			onMouseDown: this.onMouseDown,
			title: this.props.title,
			onClick: this.onClick
		}, this.props.label);
	}
}

export default Button;