(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{14:function(t,e,n){"use strict";n.r(e);var c=n(8),i=n.n(c),o=n(2),a=n(3),r=n(5),s=n(4),l=n(1),u=n.n(l),h=(n(7),function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={date:new Date},t.timerId=void 0,t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){t.setState({date:new Date}),console.log(t.state.date.toLocaleTimeString())}),1e3)}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){return this.state.date.toLocaleTimeString()}}]),n}(u.a.Component)),b=h,d=n(0),j=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={isClockVisible:!0},t.showClock=function(){t.setState({isClockVisible:!0})},t.hideClock=function(){t.setState({isClockVisible:!1})},t}return Object(a.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),Object(d.jsxs)("p",{children:["Current time:"," ",this.state.isClockVisible&&Object(d.jsx)(b,{})]}),Object(d.jsx)("button",{type:"button",onClick:this.showClock,children:"Show Clock"}),Object(d.jsx)("button",{type:"button",onClick:this.hideClock,children:"Hide Clock"})]})}}]),n}(u.a.Component),k=j;i.a.render(Object(d.jsx)(k,{}),document.getElementById("root"))},7:function(t,e,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.aebe6e81.chunk.js.map