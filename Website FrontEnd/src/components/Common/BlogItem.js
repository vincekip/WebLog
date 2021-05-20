import React, {Component} from 'react';
import API from '../../utils/api';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as SiteActions from '../../store/actions/siteActions';

class BlogItem extends Component {
    render(){
        return (
          <div className="col-md-4 col-sm-6 portfolio-item">
            <Link 
            className="portfolio-link" 
            to={`/blog/${this.props.post.slug}`}
            onClick ={(e) => this.props.setPostData(this.props.post)}
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              {this.props.post.PostImages ?
                this.props.post.PostImages.length > 0 ?
                <img style={{width: '100%'}} className="img-fluid" src={API.makeFileURL(this.props.post.PostImages[0].thumbnail, null)} alt="" />
                :null
              :null}
            </Link>
            <div className="portfolio-caption">
              <h4> {this.props.post.title}</h4>
              <p>{this.props.post.slug}</p>
            </div>
          </div>
        );
    }
}
const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch =>({
  setPostData: (post) => {
    dispatch(SiteActions.setPostData(post));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogItem);