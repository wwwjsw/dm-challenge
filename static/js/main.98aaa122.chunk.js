(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,n,t){e.exports=t.p+"static/media/logo.d002512a.svg"},23:function(e,n,t){e.exports=t(42)},29:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(4),i=t.n(r),c=(t(29),t(5)),l=t(6),u=t(9),s=t(7),d=t(8),h=t(3),m=t(1),f=t(18),b=t.n(f),p=t(2);function v(){var e=Object(m.a)(["\n  border: none;\n  flex-grow:3;\n  height:30px;\n  &:hover{\n    background: #fff;\n  }\n"]);return v=function(){return e},e}function O(){var e=Object(m.a)(["\n  flex-grow:1;\n"]);return O=function(){return e},e}function g(){var e=Object(m.a)(["\n  list-style:none;\n  width:100%;\n  border-bottom: 5px #111 solid;\n"]);return g=function(){return e},e}function j(){var e=Object(m.a)(["\n  background: #333;\n  display:flex;\n  flex-direction:column;\n  margin:0;\n  padding:0;\n"]);return j=function(){return e},e}var x=p.a.ul(j()),w=p.a.li(g()),k=p.a.h3(O()),E=p.a.button(v()),y=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"removeItem",value:function(e,n){this.props.handleRemove(e,n)}},{key:"openModal",value:function(e){this.props.handleOpenModal(e)}},{key:"render",value:function(){var e=this;return o.a.createElement(x,null,this.props.items.map(function(n,t){return o.a.createElement(w,{key:n.id},o.a.createElement(k,null,n.text),o.a.createElement(E,{onClick:function(){return e.openModal(n)}},"View"),o.a.createElement(E,{onClick:function(){return e.removeItem(n,t)},key:n},"Remove"))}))}}]),n}(a.Component),M=t(21),C=t.n(M);function S(){var e=Object(m.a)(["\n  \n"]);return S=function(){return e},e}function I(){var e=Object(m.a)(["\n  font-size:1.3em;\n"]);return I=function(){return e},e}function R(){var e=Object(m.a)(["\n  border: none;\n  padding: 5%;\n  &:hover {\n    background:#fff;\n  }  \n"]);return R=function(){return e},e}function A(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  color: #666;\n  text-align:center;\n  width:100%;\n"]);return A=function(){return e},e}function B(){var e=Object(m.a)(["\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n"]);return B=function(){return e},e}function N(){var e=Object(m.a)(["\n  margin-top:5%;\n  border: none;\n  padding: 5%;\n  &:hover {\n    background:#fff;\n  }\n"]);return N=function(){return e},e}function W(){var e=Object(m.a)(["\n  border:none;\n  margin-top:5%;\n  padding:5%;\n"]);return W=function(){return e},e}function z(){var e=Object(m.a)(["\n  background: #3F51B5;\n  padding:2em;\n  display: flex;\n  flex-direction:column;\n"]);return z=function(){return e},e}function D(){var e=Object(m.a)(["\n  animation: "," infinite 4s linear;\n  height: 40vmin;\n  pointer-events: none;\n  position:relative;\n"]);return D=function(){return e},e}function F(){var e=Object(m.a)(["\n  0% {\n    top:0px;\n  }\n  25% {\n    top: 15px;\n  }\n  50% {\n    top:30px;\n  }\n  100% {\n    top:0px;\n  }\n"]);return F=function(){return e},e}function J(){var e=Object(m.a)(["\n  text-align: center;\n"]);return J=function(){return e},e}var q=p.a.div(J()),H=Object(p.b)(F()),V=p.a.img(D(),H),$=p.a.form(z()),G=p.a.input(W()),K=p.a.button(N()),L=p.a.header(B()),P=p.a.div(A()),Q=p.a.button(R()),T=p.a.h1(I()),U=p.a.h2(S()),X=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(u.a)(this,Object(s.a)(n).call(this,e))).state={items:[],text:"",showModal:!1,actualItem:[]},t.handleChange=t.handleChange.bind(Object(h.a)(Object(h.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(h.a)(Object(h.a)(t))),t.handleRemove=t.handleRemove.bind(Object(h.a)(Object(h.a)(t))),t.handleOpenModal=t.handleOpenModal.bind(Object(h.a)(Object(h.a)(t))),t.handleCloseModal=t.handleCloseModal.bind(Object(h.a)(Object(h.a)(t))),t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"handleRemove",value:function(e,n){this.setState({items:this.state.items.filter(function(n){return n!==e})})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){return o.a.createElement(q,{className:"App"},o.a.createElement(L,{className:"App-header"},o.a.createElement(V,{src:C.a,className:"App-logo",alt:"logo"}),o.a.createElement("h3",null,"Shopping list"),o.a.createElement($,{onSubmit:this.handleSubmit},o.a.createElement("label",{htmlFor:"new-item"},"What needs to be bought?"),o.a.createElement(G,{id:"new-item",onChange:this.handleChange,value:this.state.text}),o.a.createElement(K,null,"Add item #",this.state.items.length+1)),o.a.createElement(y,{items:this.state.items,handleRemove:this.handleRemove,handleOpenModal:this.handleOpenModal})),o.a.createElement(b.a,{isOpen:this.state.showModal,item:this.state.actualItem,onRequestClose:this.closeModal,ariaHideApp:!0},o.a.createElement(P,null,o.a.createElement(Q,{onClick:this.handleCloseModal},"Close details"),o.a.createElement(T,null,this.state.actualItem.text),o.a.createElement(U,null,"Id: ",this.state.actualItem.id))))}},{key:"handleChange",value:function(e){this.setState({text:e.target.value})}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),this.state.text.length){var n={text:this.state.text,id:Date.now()};this.setState(function(e){return{items:e.items.concat(n),text:""}})}}},{key:"handleOpenModal",value:function(e){this.setState({showModal:!0,actualItem:e})}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.98aaa122.chunk.js.map