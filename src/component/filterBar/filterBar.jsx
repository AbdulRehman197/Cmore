import React, { Component } from 'react'
import {Form,Card,Table }from'tabler-react';
import './filterBar.css';
export default class FilterBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            matches :[{
                teamA:'barasolona',
                teamAFlag:'barFlag',
                teamB:'renaldo',
                teamBFlag:'renFlag',
                matchTime: new Date().now
            }]
        }
    }
  render() {
    const flags = 'https://imageproxy.b17g.services/?shape=cut&quality=30&format=png&source=https%3A%2F%2Fimg-cdn-cmore.b17g.services%2F64b416ff-8802-4253-9cde-43e2867e23c9%2Faacb72ef-917d-4cde-a7bb-e070a61b60d7%2F21.img'
      const {Header,Body,Map} = Card
      const {Row,Col} = Table
    return (
      <div>
        {/* <Form.DatePicker /> */}
        {this.state.matches.map((team,index) =>{
            return (
                <Card key = {index}>
                <div className = "match_container">
                <div className = "falgs">
                    <img src  = {flags} width='120px' height = '70px' />

                </div>
                <div className = "time_div">{team.matchTime}</div>
                <div className = "teams_name">
                <div>{team.teamA}</div>
                <div>{team.teamB}</div>
                </div>
                <div className = "navigate_btn"></div>
                <div className = "navigate_icon"></div>
                </div>
            </Card>
            )
        })}
       
      </div>
      
    )
  }
}
