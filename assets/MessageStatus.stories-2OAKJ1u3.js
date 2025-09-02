import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as l,c as r}from"./withTheme-Bv35Tilq.js";import{w as o}from"./withMessageContent-DemE0rLv.js";import"./MessageRoot-BZU0sVzP.js";import"./iframe-WU43vzNK.js";import"./preload-helper-DaGTk-Kr.js";const g={title:"Message/MessageStatus",component:r,decorators:[o,l],argTypes:{color:{control:"color"}}},s={args:{color:""},render:t=>{const a=[{label:"pending",status:"pending"},{label:"sended",status:"sended"},{label:"delivered",status:"delivered"},{label:"received",status:"received"},{label:"error",status:"error"},{label:"none",status:"none"}];return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, minmax(90px, 1fr))",gap:16},children:a.map(n=>e.jsxs("div",{style:{display:"grid",gap:5,placeItems:"center",padding:10,border:"1px solid #e5e7eb",borderRadius:4},children:[e.jsx(r,{status:n.status,color:t.color}),e.jsx("div",{style:{fontSize:12},children:n.label})]},n.label))})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    color: ''
  },
  render: args => {
    const items: Array<{
      label: string;
      status: TMessageStatus;
    }> = [{
      label: 'pending',
      status: 'pending'
    }, {
      label: 'sended',
      status: 'sended'
    }, {
      label: 'delivered',
      status: 'delivered'
    }, {
      label: 'received',
      status: 'received'
    }, {
      label: 'error',
      status: 'error'
    }, {
      label: 'none',
      status: 'none'
    }];
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(6, minmax(90px, 1fr))',
      gap: 16
    }}>
        {items.map(it => <div key={it.label} style={{
        display: 'grid',
        gap: 5,
        placeItems: 'center',
        padding: 10,
        border: '1px solid #e5e7eb',
        borderRadius: 4
      }}>
            <MessageStatus status={it.status} color={args.color} />
            <div style={{
          fontSize: 12
        }}>{it.label}</div>
          </div>)}
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const b=["AllWithColor"];export{s as AllWithColor,b as __namedExportsOrder,g as default};
