import React, { Component } from 'react';
import ReactModal from 'react-modal';
import ShoppingList from './ShoppingList';
import logo from './logo.svg';
import styled, {keyframes} from 'styled-components';

const App = styled.div`
  text-align: center;
`;

const LogoSpin = keyframes`
  0% {
    top:0px;
  }
  25% {
    top: 15px;
  }
  50% {
    top:30px;
  }
  100% {
    top:0px;
  }
`;

const Logo = styled.img`
  animation: ${LogoSpin} infinite 4s linear;
  height: 40vmin;
  pointer-events: none;
  position:relative;
`;

const FormItem = styled.form`
  background: #3F51B5;
  padding:2em;
  display: flex;
  flex-direction:column;
`;

const FormInput = styled.input`
  border:none;
  margin-top:5%;
  padding:5%;
`;
const FormSubmit = styled.button`
  margin-top:5%;
  border: none;
  padding: 5%;
  &:hover {
    background:#fff;
  }
`;
const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  color: #666;
  text-align:center;
  width:100%;
`;

const ModalButton = styled.button`
  border: none;
  padding: 5%;
  &:hover {
    background:#fff;
  }  
`;
const ModalTitle = styled.h1`
  font-size:1.3em;
`;

const ModalId = styled.h2`
  
`;

class MarketList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [], 
      text: '',
      showModal: false,
      actualItem:[]};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleRemove(item, i) {
    this.setState({
      items: this.state.items.filter(el => el !== item)
    })
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <App className="App">
        <AppHeader className="App-header">
          <Logo src={logo} className="App-logo" alt="logo" />
          <h3>Shopping list</h3>
          <FormItem onSubmit={this.handleSubmit}>
            <label htmlFor="new-item">
              What needs to be bought? 
            </label>
            <FormInput
              id="new-item"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <FormSubmit>
              Add item #{this.state.items.length + 1}
            </FormSubmit>
          </FormItem>
          <ShoppingList 
            items={this.state.items}
            handleRemove={this.handleRemove}
            handleOpenModal={this.handleOpenModal}/>
        </AppHeader>
        <ReactModal
          isOpen={this.state.showModal}
          item={this.state.actualItem}
          onRequestClose={this.closeModal}
          ariaHideApp={true}>
            <Modal>
              <ModalButton onClick={this.handleCloseModal}>Close details</ModalButton>
              <ModalTitle>{this.state.actualItem.text}</ModalTitle>
              <ModalId>Id: {this.state.actualItem.id}</ModalId>  
            </Modal>
        </ReactModal>
      </App>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }

  handleOpenModal (item) {
    this.setState({ 
      showModal: true,
      actualItem: item});
  }
}
export default MarketList;
