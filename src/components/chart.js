import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

export default class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ['Boston','Worcester','SpringField','Lowell','Cambridge','New Bedford'],
                datasets: [{
                    label: 'Population',
                    data: [
                        617594,
                        181045,
                        153060,
                        106519,
                        105162,
                        95072
                    ],
                    backgroundColor: [
                        'rgb(255,0,255,0.5)',
                        'rgb(0,0,255)',
                        'rgb(0,128,0)',
                        'rgb(128,0,0)',
                        'rgb(0,255,0)',
                        'rgb(255,0,0)',
                        'rgb(0,0,0)',
                        
                    ]
                }]
            }
        }
    }
    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
        location: 'Massachusetts'
    }
    render() {
        return (
            <div className="chart">
                <Line
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Les plus grandes villes de '+this.props.location,
                            fontFamily:25
                        },
                        legend:{
                            display: this.props.legendPosition,
                            position:this.props.legendPosition
                        }
                    }}
                    />
                 <Pie
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Les plus grandes villes de '+this.props.location,
                            fontFamily:25
                        },
                        legend:{
                            display: this.props.legendPosition,
                            position:this.props.legendPosition
                          }
                        }}
                      />
                <Bar
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Les plus grandes villes de '+this.props.location,
                            fontFamily:25
                        },
                        legend:{
                            display: this.props.legendPosition,
                            position:this.props.legendPosition
                        }
                        }}
                    />
                 </div>
        )
    }
}
