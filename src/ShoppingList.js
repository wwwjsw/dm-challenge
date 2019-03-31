import React, { Component } from 'react';
import styled from 'styled-components';

const ShoppingUl = styled.ul`
  background: #333;
  display:flex;
  flex-direction:column;
  margin:0;
  padding:0;
`;

const ShoppingLi = styled.li`
  list-style:none;
  width:100%;
  border-bottom: 5px #111 solid;
`;

const ShoppingName = styled.h3`
  flex-grow:1;
`;
const ShoppingButton = styled.button`
  border: none;
  flex-grow:3;
  height:30px;
  &:hover{
    background: #fff;
  }
`;

class ShoppingList extends Component {
  
    removeItem(item, i) {
      this.props.handleRemove(item, i);
    }
  
    openModal(item) {
      this.props.handleOpenModal(item);
    }
  
    render() {
      return (
        <ShoppingUl>
          {this.props.items.map((item, i) => (
            <ShoppingLi key={item.id}>
              <ShoppingName>
                {item.text}
              </ShoppingName>
              <ShoppingButton
              onClick={() => this.openModal(item)}>
                View
              </ShoppingButton>
              
              <ShoppingButton 
                onClick={() => this.removeItem(item, i)}
                key={item}>
                  Remove
              </ShoppingButton>
            </ShoppingLi>
          ))}   
        </ShoppingUl>
      );
    }
}

export default ShoppingList;