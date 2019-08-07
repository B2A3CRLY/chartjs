import React, { Component } from 'react';
import Card from '../components/cardUI';
import img1 from '../assets/team2.jpeg';
export default class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4 rot">
                        <Card imgsrc={img1} title="The chosen one"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Babacar Ly"/>
                    </div>
                    <div className="col-md-4 rot180">
                    <Card imgsrc={img1} title="The way of success"/>
                    </div>
                </div>
            </div>
        )
    }
}
