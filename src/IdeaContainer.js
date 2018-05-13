import React, {Component} from 'react'
import axios from 'axios'
import './App.css';
import Idea from './Idea'

class IdeaContainer extends Component {
    constructor(props){
        super(props)
        this.state = {ideas: []}
    }

    componentDidMount(){
        axios.get('http://localhost:8000/idea').then(response => {
            this.setState({ideas: response.data})
        }).catch(error => {
            console.log(error)
        })
    }
    handleClick = (e) =>{
        axios.post('http://localhost:8000/idea', {
            title: 'Coba',
            content: 'coba coba 2'
        }).then(response => {
            const ideas = this.state.ideas
            ideas.unshift(response.data)
            this.setState({ideas: ideas})
        }).catch(error => {
            console.log(error)
        })
    }
    render(){
        return(
            <div>
                <div>
                    <button onClick={this.handleClick} className='idea-button'>New Idea</button>
                </div>
                {this.state.ideas.map((idea) =>{
                    return(
                        <Idea key={idea.id} idea={idea} />
                    )
                })}
            </div>
        )
    }
}

export default IdeaContainer