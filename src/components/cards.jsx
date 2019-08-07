import React, { Component } from 'react';
import Card from '../components/cardUI';
import img7 from '../assets/team7.jpeg';
import img4 from '../assets/team4.jpeg';
import img1 from '../assets/team1.jpeg';
export default class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="The chosen one"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img7} title="Polytech family"/>
                    </div>
                    <div className="col-md-4 rot180">
                    <Card imgsrc={img4} title="The way of success"/>
                    </div>
                </div>
            </div>
        )
    }
}
