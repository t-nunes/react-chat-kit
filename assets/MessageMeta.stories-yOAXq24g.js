import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b as t,w as i}from"./withTheme-Bv35Tilq.js";import{w as c}from"./withMessageContent-DemE0rLv.js";import"./MessageRoot-BZU0sVzP.js";import"./iframe-WU43vzNK.js";import"./preload-helper-DaGTk-Kr.js";const h={title:"Message/MessageMeta",component:t,args:{children:"12:45"},argTypes:{variant:{control:{disable:!0},table:{disable:!0}}}},r={decorators:[c,i],args:{variant:"default",status:"none"}},l={decorators:[i],args:{variant:"bubble"},render:({status:a,colorStatus:s,children:d})=>e.jsxs("div",{children:[e.jsx("h3",{children:"Message In"}),e.jsx("div",{style:{display:"flex"},className:"message-in",children:e.jsx(t,{variant:"bubble",status:a,colorStatus:s,children:d})}),e.jsx("h3",{children:"Message Out"}),e.jsx("div",{style:{display:"flex"},className:"message-out",children:e.jsx(t,{variant:"bubble",status:a,colorStatus:s,children:d})})]})},n={args:{variant:"overlay"},render:({status:a,children:s})=>e.jsx("div",{children:e.jsxs("div",{style:{width:400,display:"flex",position:"relative"},className:"message-in",children:[e.jsx("img",{src:"https://placehold.co/600x400/EEE/31343C",alt:"",style:{display:"block",width:"100%"}}),e.jsx("div",{style:{position:"absolute",bottom:0,left:0,width:"100%"},children:e.jsx(t,{variant:"overlay",status:a,colorStatus:"rgba(233, 237, 239, 0.9)",children:s})})]})})},o={decorators:[c,i],args:{variant:"default"},render:()=>{const a=[{label:"none",status:"none"},{label:"pending",status:"pending"},{label:"sended",status:"sended"},{label:"delivered",status:"delivered"},{label:"received",status:"received",colorStatus:"#3B86F6"},{label:"error",status:"error",colorStatus:"#EF4444"}];return e.jsx("div",{style:{display:"grid",gap:12},children:a.map(s=>e.jsxs(t,{status:s.status,colorStatus:s.colorStatus,children:[s.label," • 12:45"]},s.label))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  decorators: [withMessageContent, withTheme],
  args: {
    variant: 'default',
    status: 'none'
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  decorators: [withTheme],
  args: {
    variant: 'bubble'
  },
  render: ({
    status,
    colorStatus,
    children
  }) => {
    return <div>
        <h3>Message In</h3>
        <div style={{
        display: 'flex'
      }} className="message-in">
          <MessageMeta variant="bubble" status={status} colorStatus={colorStatus}>
            {children}
          </MessageMeta>
        </div>
        <h3>Message Out</h3>
        <div style={{
        display: 'flex'
      }} className="message-out">
          <MessageMeta variant="bubble" status={status} colorStatus={colorStatus}>
            {children}
          </MessageMeta>
        </div>
      </div>;
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'overlay'
  },
  render: ({
    status,
    children
  }) => {
    return <div>
        <div style={{
        width: 400,
        display: 'flex',
        position: 'relative'
      }} className="message-in">
          <img src="https://placehold.co/600x400/EEE/31343C" alt="" style={{
          display: 'block',
          width: '100%'
        }} />
          <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%'
        }}>
            <MessageMeta variant="overlay" status={status} colorStatus="rgba(233, 237, 239, 0.9)">
              {children}
            </MessageMeta>
          </div>
        </div>
      </div>;
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  decorators: [withMessageContent, withTheme],
  args: {
    variant: 'default'
  },
  render: () => {
    const items: Array<{
      label: string;
      status: TMessageStatus;
      colorStatus?: string;
    }> = [{
      label: 'none',
      status: 'none'
    }, {
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
      status: 'received',
      colorStatus: '#3B86F6'
    }, {
      label: 'error',
      status: 'error',
      colorStatus: '#EF4444'
    }];
    return <div style={{
      display: 'grid',
      gap: 12
    }}>
        {items.map(item => <MessageMeta key={item.label} status={item.status} colorStatus={item.colorStatus}>
            {item.label} • 12:45
          </MessageMeta>)}
      </div>;
  }
}`,...o.parameters?.docs?.source}}};const y=["WithThemes","Bubble","Overlay","All"];export{o as All,l as Bubble,n as Overlay,r as WithThemes,y as __namedExportsOrder,h as default};
