import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  FormGroup,
} from "reactstrap";
//import axios from "axios";
import axiosConfig from "../../../axiosConfig";
// import { useParams } from "react-router-dom";
//import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Route } from "react-router-dom";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";

import { data } from "jquery";
export class EditGallary extends Component {
  state = {
    activeTab: "1",
  };

  toggle = (tab) => {
    this.setState({
      activeTab: tab,
    });
  };

  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  componentDidMount() {
    console.log(this.props.match.params);
    let { id } = this.props.match.params;
    axiosConfig.get(`/getonecustomer/${id}`).then((response) => {
      console.log(response);
      this.setState({
        first_name: "",
        last_name: "",
        customer_email: "",
        mobile_no: "",
        sortorder: "",
        selectedFile: null,
        status: response.data.data.status,
      });
    });
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.props.match.params, this.state);
    // const data = new FormData();
    // data.append("sellerId", this.state.sellerId);
    // data.append("seller_name", this.state.seller_name);
    // data.append("selleremail", this.state.selleremail);
    // data.append("mobile_no", this.state.mobile_no);
    // data.append("password", this.state.password);
    // data.append("business_type", this.state.business_type);
    // data.append("store_name", this.state.store_name);
    // data.append("store_address", this.state.store_address);
    // data.append("gstin_no", this.state.gstin_no);
    // data.append("city", this.state.city);
    // data.append("sortorder", this.state.sortorder);
    // data.append("state", this.state.state);
    // data.append("status", this.state.status);
    // if (this.state.selectedFile !== null) {
    //   data.append(
    //     "seller_img",
    //     this.state.selectedFile,
    //     this.state.selectedName
    //   );
    // }

    let { id } = this.props.match.params;
    axiosConfig
      .post(`/view_onecust/${id}`, data)
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/customer/customerList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle="Edit Gallary"
          breadCrumbParent="Home"
          breadCrumbActive="Edit Gallary "
        />
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Gallary
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/gallaryList")}
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Thumnail image1</Label>
                  <Input
                    required
                    type="file"
                    name="last_name"
                    className="form-control"
                    placeholder="Enter Last Name"
                    value={this.state.last_name}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
              </Row>

              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Submit
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default EditGallary;
