import React, {Component} from 'react';

class Client extends Component {
    render(){
        return (
          <div class="py-5">
            <div class="container">
              <div class="text-center">
                <h2 class="section-heading text-uppercase"> Our Clients</h2>
              </div>
              <div class="row">
                <div class="col-md-3 col-sm-6 my-3">
                  <a href="#!">
                    <img
                      class="img-fluid d-block mx-auto"
                      src="assets/img/logos/envato.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div class="col-md-3 col-sm-6 my-3">
                  <a href="#!">
                    <img
                      class="img-fluid d-block mx-auto"
                      src="assets/img/logos/designmodo.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div class="col-md-3 col-sm-6 my-3">
                  <a href="#!">
                    <img
                      class="img-fluid d-block mx-auto"
                      src="assets/img/logos/themeforest.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div class="col-md-3 col-sm-6 my-3">
                  <a href="#!">
                    <img
                      class="img-fluid d-block mx-auto"
                      src="assets/img/logos/creative-market.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Client;