(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[664],{8275:(e,t,r)=>{var a,n=Object.create,l=Object.defineProperty,i=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,s=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,p=(e,t,r,a)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let n of o(t))c.call(e,n)||n===r||l(e,n,{get:()=>t[n],enumerable:!(a=i(t,n))||a.enumerable});return e},d=(e,t,r)=>(((e,t,r)=>{t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!==typeof t?t+"":t,r),r),u={};((e,t)=>{for(var r in t)l(e,r,{get:t[r],enumerable:!0})})(u,{default:()=>g}),e.exports=(a=u,p(l({},"__esModule",{value:!0}),a));var h=((e,t,r)=>(r=null!=e?n(s(e)):{},p(!t&&e&&e.__esModule?r:l(r,"default",{value:e,enumerable:!0}),e)))(r(2791));const m="64px",f={};class g extends h.Component{constructor(){super(...arguments),d(this,"mounted",!1),d(this,"state",{image:null}),d(this,"handleKeyPress",(e=>{"Enter"!==e.key&&" "!==e.key||this.props.onClick()}))}componentDidMount(){this.mounted=!0,this.fetchImage(this.props)}componentDidUpdate(e){const{url:t,light:r}=this.props;e.url===t&&e.light===r||this.fetchImage(this.props)}componentWillUnmount(){this.mounted=!1}fetchImage(e){let{url:t,light:r,oEmbedUrl:a}=e;if(!h.default.isValidElement(r))if("string"!==typeof r){if(!f[t])return this.setState({image:null}),window.fetch(a.replace("{url}",t)).then((e=>e.json())).then((e=>{if(e.thumbnail_url&&this.mounted){const r=e.thumbnail_url.replace("height=100","height=480").replace("-d_295x166","-d_640");this.setState({image:r}),f[t]=r}}));this.setState({image:f[t]})}else this.setState({image:r})}render(){const{light:e,onClick:t,playIcon:r,previewTabIndex:a}=this.props,{image:n}=this.state,l=h.default.isValidElement(e),i={display:"flex",alignItems:"center",justifyContent:"center"},o={preview:{width:"100%",height:"100%",backgroundImage:n&&!l?"url(".concat(n,")"):void 0,backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer",...i},shadow:{background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:m,width:m,height:m,position:l?"absolute":void 0,...i},playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},s=h.default.createElement("div",{style:o.shadow,className:"react-player__shadow"},h.default.createElement("div",{style:o.playIcon,className:"react-player__play-icon"}));return h.default.createElement("div",{style:o.preview,className:"react-player__preview",onClick:t,tabIndex:a,onKeyPress:this.handleKeyPress},l?e:null,r||s)}}}}]);
//# sourceMappingURL=reactPlayerPreview.bf60afb5.chunk.js.map