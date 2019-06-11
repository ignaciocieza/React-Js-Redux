import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from "../../actions/index";

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions() {
        const { id } = this.props.match.params;

        return (
            <React.Fragment>
                <button
                    onClick={() => this.props.deleteStream(id)}
                    className='ui button negative'
                >
                    Aceptar
                </button>
                <Link to='/' className='ui button'>Cancelar</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        if (!this.props.stream) {
            return "Borrar stream:";
        }
        return `Borrar stream: ${this.props.stream.title} `;
    }

    render() {
        return (
            <Modal
                title="Borrar Stream?"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    };
}

const mapStateToProps = (state, ownProps) => {
    return ({ stream: state.streams[ownProps.match.params.id] });
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);