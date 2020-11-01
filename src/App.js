import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

const pages = [1, 2, 3, 4];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      page: 1,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.onClickNavItem = this.onClickNavItem.bind(this);
    this.onClickNextPage = this.onClickNextPage.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  onClickNavItem(event, id) {
    event.preventDefault();
    this.setState({ page: id });
    console.log("page", this.state.page);
  }

  onClickNextPage(event) {
    event.preventDefault();
    if (this.state.page < 4) {
      let i = this.state.page;
      i++;
      this.setState({ page: i });
    } else {
      this.handleClose();
      // this.setState({ page: 1 });
    }
    console.log("page", this.state.page);
  }

  render() {
    return (
      <div className="container">
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <button type="button" class="close">
              <span aria-hidden="true">×</span>
              <span class="sr-only">Close</span>
            </button>
            <nav role="navigation">
              <ul className="nav justify-content-center">
                {pages.map((item) => {
                  return (
                    <li className={ this.state.page === item ? "nav-item active" : "nav-item" } >
                      <a href="#" className="nav-link" onClick={(e) => this.onClickNavItem(e, item)} >
                        <span className="sr-only">{item}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </Modal.Header>
          <Modal.Body>
            {this.state.page === 1 && <div>Step 1</div>}
            {this.state.page === 2 && <div>Step 2</div>}
            {this.state.page === 3 && <div>Step 3</div>}
            {this.state.page === 4 && <div>Step 4</div>}
          </Modal.Body>
          <Modal.Footer className="justify-content-center">
            {this.state.page < 4 && (
              <Button variant="primary" onClick={this.onClickNextPage}>
                Next Page
              </Button>
            )}
            {this.state.page === 4 && (
              <Button variant="primary" onClick={this.onClickNextPage}>
                Done
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
