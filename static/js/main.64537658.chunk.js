(this.webpackJsonpportfolio2=this.webpackJsonpportfolio2||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){},,,,,,,function(e,t,a){e.exports=a(58)},,,,,function(e,t,a){},,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),i=a.n(o),c=(a(26),a(1)),s=(a(37),function(e){var t=e.to,a=e.offset,n=e.value;return r.a.createElement(c.Link,{to:t,spy:!0,smooth:!0,offset:a,duration:500,className:"item"},n)});s.defaultProps={offset:0};var l=s,m=(a(38),function(e){var t=e.link,a=e.children;return r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},a)}),u=function(e){var t=e.icon,a=e.link;return r.a.createElement(m,{link:a},r.a.createElement("i",{className:"media ".concat(t)}))},p=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement("ul",{className:"nav-links"},r.a.createElement(l,{value:"Home",to:"home"}),r.a.createElement(l,{value:"Projects",to:"projects",offset:-100}),r.a.createElement(l,{value:"About",to:"about",offset:-100})),r.a.createElement("div",{className:"social-media"},r.a.createElement(u,{link:"https://github.com/uxb6317",icon:"fab fa-github-square"}),r.a.createElement(u,{link:"https://www.linkedin.com/in/ulziiorshikh-batdorj/",icon:"fab fa-linkedin"})))},d=(a(14),function(e){var t=e.children;return r.a.createElement("div",{className:"button-group"},t)}),E=function(e){var t=e.children,a=e.to,n=e.offset;return r.a.createElement(r.a.Fragment,null,a?r.a.createElement(c.Link,{to:a,spy:!0,smooth:!0,offset:n,duration:500,className:"button"},t):r.a.createElement("button",{className:"button"},t))};E.defaultProps={offset:0};var f=E,h=(a(39),function(){return r.a.createElement(c.Element,{name:"home",className:"hero"},r.a.createElement("div",{className:"hero-text"},r.a.createElement("span",{className:"hi yellow"},"Hi"),r.a.createElement("span",{className:"intro-text"},"I'm a ",r.a.createElement("span",{className:"red"},"Fullstack Web Developer")," ","specializing in React & Node."),r.a.createElement(d,null,r.a.createElement(f,{to:"projects",offset:-100},"Projects"),r.a.createElement(f,{to:"about",offset:-100},"About"))),r.a.createElement("div",{className:"hero-img"},r.a.createElement("img",{src:"./images/hero.png",alt:"hero"})))}),g=(a(40),[{name:"Crownazon",tools:["react","redux"],image:"./images/ecommerce.PNG",url:"https://crwnazon.herokuapp.com/",description:"1Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur ipsa, praesentium quo sapiente adipisci eaque dolorum corporis in vero!"},{name:"Crownazon1",tools:["express","typescript","mongodb"],image:"./images/ecommerce.PNG",url:"https://crwnazon.herokuapp.com/",description:"2Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur ipsa, praesentium quo sapiente adipisci eaque dolorum corporis in vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur ipsa, praesentium quo sapiente adipisci eaque dolorum corporis in vero!"},{name:"Crownazon2",tools:["react","typescript","sass"],image:"./images/ecommerce.PNG",url:"https://crwnazon.herokuapp.com/",description:"3Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur ipsa, praesentium quo sapiente adipisci eaque dolorum corporis in vero!"}]),v=(a(41),a(42),function(e){var t=e.name;return r.a.createElement("img",{className:"project-tool",src:"./images/tools/".concat(t,".svg"),alt:"".concat(t," logo")})}),N=function(e){var t=e.image,a=e.description,n=e.url,o=e.tools;return r.a.createElement("div",{className:"project"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:t,alt:"project"})),r.a.createElement("div",{className:"content"},r.a.createElement("span",{className:"description"},a),r.a.createElement("div",{className:"tools-links"},r.a.createElement("div",{className:"tools"},o.map((function(e){return r.a.createElement(v,{id:e,name:e})}))),r.a.createElement("div",{className:"links"},r.a.createElement(m,{link:"https://github.com/uxb6317"},r.a.createElement("img",{src:"./images/tools/github.svg",alt:"github logo"})),r.a.createElement(m,{link:n},r.a.createElement(f,null,"Visit"))))))},b=(a(43),function(e){var t=e.children,a=e.currentSlideIndex,n=e.currentItemIndex;return r.a.createElement("div",{className:"carousel-item ".concat(a===n&&"highlight")},t)}),k=a(20),x=a(19),w=(a(49),a(50),function(e){var t=e.children,a=Object(n.useState)(Math.floor(t.length/2)),o=Object(k.a)(a,2),i=o[0],c=o[1],s=function(e){i!==e&&c(e)};return r.a.createElement("div",{className:"custom-carousel"},r.a.createElement(x.Carousel,{centerMode:!0,centerSlidePercentage:55,showIndicators:!1,showThumbs:!1,showStatus:!1,showArrows:!1,transitionTime:400,selectedItem:i,onClickItem:s,onChange:s},r.a.Children.map(t,(function(e){return r.a.cloneElement(e,{currentSlideIndex:i})}))))}),y=function(){return r.a.createElement(c.Element,{name:"projects",className:"projects"},r.a.createElement("div",{className:"header red"},"Projects"),r.a.createElement("div",{className:"projects-container"},r.a.createElement(w,{items:g},g.map((function(e,t){return r.a.createElement(b,{currentItemIndex:t},r.a.createElement(N,Object.assign({key:e.name},e)))})))))},j=(a(51),[{name:"Paychex",location:"Rochester, NY",position:"Automation Testing"},{name:"Publicis Sapient",location:"New York City, NY",position:"Software Engineer Intern"}]),I=function(){return r.a.createElement("div",{className:"experiences"},r.a.createElement("span",{className:"sub-header red"},"Industry Experience"),j.map((function(e){var t=e.name,a=e.location,n=e.position;return r.a.createElement("div",{className:"experience"},r.a.createElement("span",{className:"name"},t),r.a.createElement("span",{className:"city"},a),r.a.createElement("span",{className:"position"},n))})))},P=(a(52),["React","Node","MongoDB","Redux","Express","Python"]),z=function(){return r.a.createElement("div",{className:"toolbox"},r.a.createElement("span",{className:"sub-header red"},"Toolbox"),r.a.createElement("div",{className:"tools"},P.map((function(e){return r.a.createElement("span",{className:"tool",key:e},e)}))))},A=(a(53),function(){return r.a.createElement(c.Element,{name:"about",className:"about"},r.a.createElement("div",{className:"header red"},"About"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"description"},"My name is Ulzii, and I'm a Fullstack Web Developer with a passion for creating clean, intuitive, and dynamic user experiences. I've been developing websites and mobile applications for the past six years and received my Bachelor's degree in Web & Mobile Computing from Rochester Insitute of Technology."),r.a.createElement(I,null),r.a.createElement(z,null),r.a.createElement("img",{className:"selfie",src:"./images/about.png",alt:"selfie"})))}),C=(a(54),function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"contact"},r.a.createElement("span",null,"Copyright \xa9 2020 Ulziiorshikh Batdorj"),r.a.createElement("span",{className:"email"},"uxb6317@rit.edu")))}),q=(a(55),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(h,null),r.a.createElement(y,null),r.a.createElement(A,null),r.a.createElement(C,null))});a(56),a(57);i.a.render(r.a.createElement(q,null),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.64537658.chunk.js.map