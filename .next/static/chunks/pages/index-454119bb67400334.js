(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{74253:function(t,e,r){"use strict";var i=r(75263).default,n=r(64836).default;e.Z=void 0;var o=n(r(94184)),l=i(r(67294));n(r(13594));var a=r(31929),d=n(r(56120)),s=function(t,e){var r={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&0>e.indexOf(i)&&(r[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,i=Object.getOwnPropertySymbols(t);n<i.length;n++)0>e.indexOf(i[n])&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(r[i[n]]=t[i[n]]);return r};e.Z=t=>{let{getPrefixCls:e,direction:r,divider:i}=l.useContext(a.ConfigContext),{prefixCls:n,type:c="horizontal",orientation:u="center",orientationMargin:h,className:f,rootClassName:g,children:p,dashed:x,plain:m,style:v}=t,b=s(t,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),j=e("divider",n),[y,w]=(0,d.default)(j),$=u.length>0?`-${u}`:u,S=!!p,k="left"===u&&null!=h,z="right"===u&&null!=h,O=(0,o.default)(j,null==i?void 0:i.className,w,`${j}-${c}`,{[`${j}-with-text`]:S,[`${j}-with-text${$}`]:S,[`${j}-dashed`]:!!x,[`${j}-plain`]:!!m,[`${j}-rtl`]:"rtl"===r,[`${j}-no-default-orientation-margin-left`]:k,[`${j}-no-default-orientation-margin-right`]:z},f,g),C=l.useMemo(()=>"number"==typeof h?h:/^\d+$/.test(h)?Number(h):h,[h]),_=Object.assign(Object.assign({},k&&{marginLeft:C}),z&&{marginRight:C});return y(l.createElement("div",Object.assign({className:O,style:Object.assign(Object.assign({},null==i?void 0:i.style),v)},b,{role:"separator"}),p&&"vertical"!==c&&l.createElement("span",{className:`${j}-inner-text`,style:_},p)))}},56120:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(98078),n=r(3184);let o=t=>{let{componentCls:e,sizePaddingEdgeHorizontal:r,colorSplit:n,lineWidth:o}=t;return{[e]:Object.assign(Object.assign({},(0,i.resetComponent)(t)),{borderBlockStart:`${o}px solid ${n}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${t.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${o}px solid ${n}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${t.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${e}-with-text`]:{display:"flex",alignItems:"center",margin:`${t.dividerHorizontalWithTextGutterMargin}px 0`,color:t.colorTextHeading,fontWeight:500,fontSize:t.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${n}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${o}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${e}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${e}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${e}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:n,borderStyle:"dashed",borderWidth:`${o}px 0 0`},[`&-horizontal${e}-with-text${e}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${e}-dashed`]:{borderInlineStartWidth:o,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${e}-with-text`]:{color:t.colorText,fontWeight:"normal",fontSize:t.fontSize},[`&-horizontal${e}-with-text-left${e}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${e}-inner-text`]:{paddingInlineStart:r}},[`&-horizontal${e}-with-text-right${e}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${e}-inner-text`]:{paddingInlineEnd:r}}})}};var l=(0,n.genComponentStyleHook)("Divider",t=>{let e=(0,n.mergeToken)(t,{dividerVerticalGutterMargin:t.marginXS,dividerHorizontalWithTextGutterMargin:t.margin,dividerHorizontalGutterMargin:t.marginLG});return[o(e)]},{sizePaddingEdgeHorizontal:0});e.default=l},75557:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(85901)}])},20906:function(t,e,r){"use strict";var i=r(85893);r(67294);var n=r(60713);let o=["https://media.istockphoto.com/id/1190641416/photo/streaming-live-esport-event-on-computer-at-home.jpg?s=612x612&w=0&k=20&c=llsUBVdhL9uJHlDCrxbqWu1DD22sUWMSvab88NtXuN8=","https://media.istockphoto.com/id/1314343964/photo/top-end-system-unit-for-gaming-computer-close-up.jpg?s=612x612&w=0&k=20&c=d_xKRis8Ccy90gbqCjScpuAEVOvpQN0kdnBxA_H9zRs="];e.Z=()=>(0,i.jsx)(n.Z,{autoplay:!0,children:o.map((t,e)=>(0,i.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",background:"#364d79"},children:(0,i.jsx)("img",{src:t,alt:"Image ".concat(e+1),style:{maxWidth:"100%",maxHeight:"100%",width:"100%",height:"440px",marginTop:"20px"}})},e))})},89287:function(t,e,r){"use strict";r.r(e);var i=r(85893),n=r(16373);let{Footer:o}=n.default;e.default=()=>(0,i.jsx)(o,{style:{textAlign:"center",backgroundColor:"black",color:"white",height:"250px"},children:(0,i.jsx)("h1",{children:"This is Hero Tech"})})},85901:function(t,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return m}});var i=r(85893);r(67294);var n=r(88206),o=r(20906),l=r(5789),a=r(74253),d=r(91633),s=r(55673),c=r(41764),u=r(70302),h=r(41664),f=r.n(h),g=r(89287);let{Meta:p}=u.default,x=t=>{let{posts:e}=t;return console.log(e),(0,i.jsxs)("div",{children:[(0,i.jsx)(o.Z,{}),(0,i.jsx)(a.Z,{style:{fontSize:"45px",display:"flex",justifyItems:"center",justifyContent:"center"},orientation:"center",children:"Featured Products"}),(0,i.jsx)("div",{children:(0,i.jsx)(s.Z,{gutter:6,style:{marginTop:"20px"},children:null==e?void 0:e.map(t=>(0,i.jsx)(l.Z,{xs:24,sm:24,md:12,lg:8,style:{marginBottom:"20px"},children:(0,i.jsx)(f(),{href:"/featureProductDetailsPage/".concat(null==t?void 0:t.featureProduct),children:(0,i.jsxs)(u.default,{title:"",hoverable:!0,cover:"",children:[(0,i.jsx)(d.Z,{alt:"example",src:null==t?void 0:t.featureimage,width:"100%",height:300}),(0,i.jsx)(p,{title:null==t?void 0:t.category,description:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{children:["Category:",null==t?void 0:t.featureProduct]}),(0,i.jsxs)("p",{children:["Price:",null==t?void 0:t.price]}),(0,i.jsxs)("p",{children:["Status:",null==t?void 0:t.status]})]})}),(0,i.jsx)(c.Z,{allowHalf:!0,defaultValue:null==t?void 0:t.rating})]})})},null==t?void 0:t.d))})}),(0,i.jsx)(g.default,{})]})};x.getLayout=function(t){return(0,i.jsx)(n.Z,{children:t})};var m=!0;e.default=x}},function(t){t.O(0,[661,373,258,302,952,296,206,774,888,179],function(){return t(t.s=75557)}),_N_E=t.O()}]);