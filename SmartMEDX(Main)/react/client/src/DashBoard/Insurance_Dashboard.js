// import './DashBoardStyles.css';
// import { IoIosPerson } from "react-icons/io";
// import { ImProfile } from "react-icons/im";
// import { CgToday } from "react-icons/cg";
// import 'bootstrap/dist/css/bootstrap.css';

import React, { Component } from "react";

import RecordDetails from "../Records/RecordDetails";
import RecordList from "../Records/RecordList";
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import Patient_Search from "../Search/Patient_Search";


class Insurance_Dashboard extends Component {
  render() {
    const { insuranceMembers, auth } = this.props;
    if (!auth.uid) return <Redirect to="/Insurance_signIn" />;

    return (
      <>
        {insuranceMembers && insuranceMembers.map(insurance => {
          if (auth.uid == insurance.id) {
            return (
              <div class="center">
                <div class="card-panel hoverable">
                  <img class="rounded-circle z-depth-2" alt="100x100" src="https://i.pravatar.cc/300?img=5"
                    data-holder-rendered="true"></img>
                  <div class="card-panel blue darken-2">
                    <div class="card-panel-content white-text">
                      <span class="card-panel-title" ><h3> Welcome Mr.{insurance.firstName}</h3></span>
                      <h5>Name :{insurance.firstName} {insurance.lastName}</h5>
                      <h5>Address : {insurance.Address}</h5>
                      <h5>NIC : {insurance.NIC}</h5>
                      <h5> Profession : {insurance.profession}</h5>
                    </div>

                  </div>

                </div>
                <div class="center">
                  <div class="row">
                    <div class="col s12 m8">
                      <div class="card-panel deep-orange accent-2" >
                        <div class="card-image">
                          <i class="large material-icons">
                            person_search
                          </i>

                        </div>
                        <span class="card-title">Search Patient</span>
                        <div class="card-content">
                          <h5>Access to Relevant Patient</h5>
                          <Patient_Search />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="center">
                  <div class="row">
                    <div class="col s12 m8">
                      <div class="card-panel deep-yellow accent-2" >
                        <div class="card-image">
                          <i class="large material-icons">
                          attach_money
                          </i>

                        </div>
                        <span class="card-title">ADD CLAIM</span>
                        <div class="card-content">
                          <Link to={"/ADDCLAIM"}><h5>Access Relevant Patient to add Claim</h5></Link>
                          
                          
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )
          }
        })}

      </>
    )


  };
}
const mapStateToProps = state => {
  console.log(state);
  return {
    insuranceMembers: state.firestore.ordered.Insurance,
    auth: state.firebase.auth,
    Insurance: state.Insurance.isInsurance
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "Insurance" }])
)(Insurance_Dashboard);