import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as n,a as s}from"./withTheme-Bv35Tilq.js";import{w as a}from"./withMessageContent-DemE0rLv.js";import"./MessageRoot-BZU0sVzP.js";import"./iframe-WU43vzNK.js";import"./preload-helper-DaGTk-Kr.js";const u={title:"Message/MessageLabel",component:s,args:{children:"Default Label",color:"#3B86F6"},decorators:[a,n]},r={decorators:o=>e.jsxs(e.Fragment,{children:[e.jsx(o,{}),"Content 1"]})},t={decorators:o=>e.jsxs(e.Fragment,{children:[e.jsx(o,{}),e.jsx("p",{children:"Content 1"}),e.jsx("p",{children:"Content 2"})]}),args:{children:"Click Me",color:"#EF8751",onClick:()=>alert("Label clicked")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  decorators: Story => {
    return <>
        <Story />
        Content 1
      </>;
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  decorators: Story => {
    return <>
        <Story />
        <p>Content 1</p>
        <p>Content 2</p>
      </>;
  },
  args: {
    children: 'Click Me',
    color: '#EF8751',
    onClick: () => alert('Label clicked')
  }
}`,...t.parameters?.docs?.source}}};const C=["Default","Clickable"];export{t as Clickable,r as Default,C as __namedExportsOrder,u as default};
