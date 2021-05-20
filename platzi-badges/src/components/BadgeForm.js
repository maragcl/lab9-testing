import React from 'react';

class BadgeForm extends React.Component{  

  render(){
    return (
      <div>        
        <form onSubmit={this.props.onSubmit} data-test-id="badge-form-container">
          <div className="form-group">
            <label>First name</label>
            <input 
            onChange={this.props.onChange}
            className="form-control"
            type="text"
            name="firstName"
            value={this.props.formValues.firstName}/>
          </div>
          <div className="form-group">
            <label>Last name</label>
            <input 
            onChange={this.props.onChange} 
            className="form-control" 
            type="text" 
            name="lastName"
            value={this.props.formValues.lastName}/>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
            onChange={this.props.onChange} 
            className="form-control" 
            type="email" 
            name="email"
            value={this.props.formValues.email}/>
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input 
            onChange={this.props.onChange} 
            className="form-control" 
            type="text" 
            name="jobTitle"
            value={this.props.formValues.jobTitle}/>
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input 
            onChange={this.props.onChange} 
            className="form-control" 
            type="text" 
            name="twitter"
            value={this.props.formValues.twitter}/>
            <input type="text"/>
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
          
          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    )
  }
}

export default BadgeForm