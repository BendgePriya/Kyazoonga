import React, {Component} from 'react'
import '../css/site.css';
import JsonData from '../config/JsonData.json'
export default class CategorySection extends Component{
  render(){
      return (
        <section className="home-cat-sec text-center">
          <div className="container">
            <h2 className="site-title">Browse by top categories</h2>
            <div className="row">
            {Object.keys(JsonData.category).map((data) =>{
              return(
              <div className="col-sm-4 cat-box">
                <a href="#" className="block-link">
                  <div className="cat-txt">
                    <h3>{data}</h3>
                  </div>
                  <img src={JsonData.category[data]} alt className="img-full-width" />
                </a>
              </div>
            );  
            })}
            </div>
          </div>
        </section>
      );
    }
  }