(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),s=a(8),c=a(1),l=a(2),u=a(4),d=a(3),m=a(5),h=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),p=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],b=function(e){var t=e.todoList;return r.a.createElement("ul",{className:"list"},t.map((function(e){return r.a.createElement("li",{key:e.id},"".concat(e.id,". ").concat(e.user),"".concat(e.title,": ").concat(e.completed?" completed":" not completed"))})))},y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={valueSelector:"Choose user",valueText:"",errorSelector:"none",errorText:"none"},e.handleChangeSelector=function(t){var a=t.target.value;e.setState({valueSelector:a,errorSelector:"none"})},e.handleChangeText=function(t){var a=t.target.value;e.setState({valueText:a,errorText:"none"})},e.addTodo=function(t){var a=e.state,n=a.valueText,r=a.valueSelector,o=e.props,i=o.users,s=o.addInList;(t.preventDefault(),"Choose user"===r&&e.setState({errorSelector:"flex"}),""===n&&e.setState({errorText:"flex"}),"Choose user"!==r&&""!==n)&&(s({user:i.find((function(e){return e.name===r})).name,title:n,completed:!1}),e.setState({valueSelector:"Choose user",valueText:""}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.valueSelector,a=e.valueText,n=e.errorText,o=e.errorSelector,i=this.props.users;return r.a.createElement("form",{onSubmit:this.addTodo,className:"form"},r.a.createElement("div",{className:"inputLine"},r.a.createElement("select",{value:t,onChange:this.handleChangeSelector,className:"input"},r.a.createElement("option",{value:"Choose user",disabled:!0},"Choose user"),i.map((function(e){return r.a.createElement("option",{value:e.name,key:e.id},e.name)}))),r.a.createElement("div",{className:"error",style:{display:o}},"Please choose a user")),r.a.createElement("div",{className:"inputLine"},r.a.createElement("input",{className:"input",value:a,onChange:this.handleChangeText,type:"text"}),r.a.createElement("div",{className:"error",style:{display:n}},"Please enter the title")),r.a.createElement("button",{type:"submit",className:"submit"},"Add"))}}]),a}(r.a.PureComponent),g=p.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{user:h.find((function(t){return t.id===e.userId})).name})})),v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={todoList:g},e.addInList=function(t){var a=e.state.todoList,n=Object(s.a)(a),r=t;r.id=a[a.length-1].id+1,n.push(r),e.setState({todoList:n})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.todoList;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Add todo form"),r.a.createElement(y,{todoList:e,users:h,addInList:this.addInList}),r.a.createElement(b,{todoList:e}))}}]),a}(r.a.Component);i.a.render(r.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.ef3deb5e.chunk.js.map