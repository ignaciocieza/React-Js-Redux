import React from 'react';
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                <div>{this.renderError(meta)}</div>
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }

    render() {
        return (
            <div>
                <h3>Crear un Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}
export default connect(null, { createStream })(StreamCreate);