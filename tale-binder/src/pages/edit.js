import React, { Component } from 'react';

export default class TodosList extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            story_title: '',
            story_text: '',
            story_last_edited: '8/01/21'
        }
        this.onChangeStoryTitle = this.onChangeStoryTitle.bind(this);
        this.onChangeStoryText = this.onChangeStoryText.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    
    onChangeStoryTitle(e) {
        this.setState({
            story_title: e.target.value
        });
    }

    onChangeStoryText(e) {
        this.setState({
            story_text: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Story Title: ${this.state.story_title}`);
        console.log(`Story Text: ${this.state.story_text}`);
        console.log(`Story Last Edited: ${this.state.story_last_edited}`);
        
        this.setState({
            story_title: '',
            story_text: '',
            story_last_edited: '8/01/21'
        })
    }


    
            render() {
                return (
                    <div style={{marginTop: 10}}>
                        <h3>Create New Story</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group"> 
                                <label>Title: </label>
                                <input  type="text"
                                        className="form-control"
                                        value={this.state.story_title}
                                        onChange={this.onChangeStoryTitle}
                                        />
                            </div>
                            <div className="form-group">
                                <label>Text: </label>
                                <input 
                                        type="text" 
                                        className="form-control"
                                        value={this.state.story_text}
                                        onChange={this.onChangeStoryText}
                                        />
                            </div>
        
                            <div className="form-group">
                                <input type="submit" value="Create Story" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                )
            }
}