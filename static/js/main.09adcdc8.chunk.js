(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,o){},14:function(t,e,o){"use strict";o.r(e);var s=o(0),n=o.n(s),i=o(3),r=o.n(i),a=o(1),c=o(4),l=o(5),u=o(7),d=o(6),m=(o(13),function(t){var e=t.goods;return n.a.createElement("ul",{className:"goodsList"},e.map((function(t){return n.a.createElement("li",{key:t},t)})))}),g=function(t){var e=t.title,o=t.onClick;return n.a.createElement("button",{type:"button",onClick:o},e)},f=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(t){Object(u.a)(o,t);var e=Object(d.a)(o);function o(){var t;Object(c.a)(this,o);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).state={goods:f,isListVisible:!1},t.showGoodsList=function(){t.setState({isListVisible:!0})},t.reverseGoodsList=function(){t.setState((function(t){return{goods:Object(a.a)(t.goods).reverse()}}))},t.sortByName=function(){t.setState((function(t){return{goods:Object(a.a)(t.goods).sort((function(t,e){return t.localeCompare(e)}))}}))},t.sortByLength=function(){t.setState((function(t){return{goods:Object(a.a)(t.goods).sort((function(t,e){return t.length-e.length}))}}))},t.resetGoodsList=function(){t.setState({goods:f})},t}return Object(l.a)(o,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},!this.state.isListVisible&&n.a.createElement(g,{title:"Start",onClick:this.showGoodsList}),n.a.createElement("div",{className:!this.state.isListVisible&&"invisibleList"},n.a.createElement(m,{goods:this.state.goods}),n.a.createElement(g,{title:"Reverse",onClick:this.reverseGoodsList}),n.a.createElement(g,{title:"Sort by Name",onClick:this.sortByName}),n.a.createElement(g,{title:"Sort by length",onClick:this.sortByLength}),n.a.createElement(g,{title:"Reset",onClick:this.resetGoodsList})))}}]),o}(n.a.Component);r.a.render(n.a.createElement(h,null),document.getElementById("root"))},8:function(t,e,o){t.exports=o(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.09adcdc8.chunk.js.map