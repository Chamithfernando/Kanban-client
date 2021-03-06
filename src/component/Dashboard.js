import React, { Component } from 'react';
import CreateProjectButton from './Project/CreateButton';
import ProjectIteam from './Project/ProjectIteam';
class Dashboard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="projects">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center">Projects</h1>
                        <br />
                        <CreateProjectButton/>
                        <br />
                        <hr />
    
                        <ProjectIteam/>
                        
                    </div>
                </div>
            </div>
        </div>

         );
    }
}
 
export default Dashboard;