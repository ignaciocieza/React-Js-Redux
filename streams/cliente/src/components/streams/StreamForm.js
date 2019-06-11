import React from 'react';
import { Field, reduxForm } from "redux-form";


class StreamForm extends React.Component {

    renderError({error, touched}){
        if(touched && error){
            return(
                <div className='ui error message'>
                    <div className='header'>
                        {error}
                    </div>
                </div>
            );
        }        
    }
   
    renderInput=({ input , label, meta })=> {                     
        const className=`field ${meta.error && meta.touched ? 'error':''}`;
        
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                <div>{this.renderError(meta)}</div>
            </div>
        );
    }
    
    onSubmit= (formValues) =>{
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form 
                className='ui form error'
                onSubmit={this.props.handleSubmit(this.onSubmit)}
            >
                <Field name='title' component={this.renderInput} label='Ingrese el titulo' />
                <Field name='description' component={this.renderInput} label='Ingrese la descripcion' />
                <button className='ui button primary'>Subir</button>
            </form>            
        );
    }
}

const validate=(formValues)=>{
    const errors={};

    if(!formValues.title){
        errors.title='Ingrese un titulo!';
    }
    if(!formValues.description){
        errors.description='Ingrese una descripcion!';
    }

    return errors;
};

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);

