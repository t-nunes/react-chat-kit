import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{M as o}from"./MessageRoot-BZU0sVzP.js";const m={title:"Message/MessageRoot",component:o,args:{isFromMe:!1,children:r.jsx("div",{children:"Sample message content"})}},e={args:{isFromMe:!1,children:r.jsx("div",{children:"Hello from someone else"})}},s={args:{isFromMe:!0,children:r.jsx("div",{children:"My own message"})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    isFromMe: false,
    children: <div>Hello from someone else</div>
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isFromMe: true,
    children: <div>My own message</div>
  }
}`,...s.parameters?.docs?.source}}};const t=["FromOthers","FromMe"];export{s as FromMe,e as FromOthers,t as __namedExportsOrder,m as default};
