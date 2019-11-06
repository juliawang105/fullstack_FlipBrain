import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    

    renderErrors() {
        const errors = this.props.errors
        return (
            <ul>
                {errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    };

    componentDidMount() {
        this.props.clearErrors();
    };

    handleDemo(e) {
        // e.preventDefault();
        this.setState({ email: 'demo', password: 'password' })
        this.handleSubmit; 
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user);
    }

    update(input) {
        return (e) => {
            this.setState({ [input]: e.target.value })
        };

    };

    render() {
        let title = this.props.formType;
        return (
            <div className="study">
                
                <form onSubmit={this.handleSubmit}>
                    <div className="errors">
                        <span>{this.renderErrors()}</span>
                    </div>

                    <div classForm="masterform">
                        <div className='form'>
                            <label>EMAIL:
                            <input onChange={this.update('email')}
                                    type="text"
                                    value={this.state.email} />
                            </label>
                        </div>
                        <div className='form'>
                            <label>PASSWORD:
                            <input onChange={this.update('password')}
                                    type="password"
                                    value={this.state.password} />
                            </label>
                        </div>
                    </div>
                    <button className="button">{title.toUpperCase()}</button>
                    <button onClick={this.handleDemo} className="button">DEMO USER</button>
                    <div className="slogan">
                        <h2>Work Smart and Learn It</h2>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginForm;