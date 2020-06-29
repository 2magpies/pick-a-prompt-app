import React, { Component } from 'react';


import './modal.styles.css';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = { show: false };
        console.log(props);
    }
    

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        
        <Modal show={this.state.show} handleClose={this.hideModal}>
            <p>{this.props.prompt.id}</p>
                <h3>{this.props.prompt.title}</h3>
                <p><b>Upright:</b> {this.props.prompt.upright}</p>
                <p><b>Reversed:</b> {this.props.prompt.reversed}</p>
        </Modal>
        <button className="button" type="button" onClick={this.showModal} >
          Reveal Fortune
        </button>
      </main>
    );
  }
    
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

export default Dashboard;
