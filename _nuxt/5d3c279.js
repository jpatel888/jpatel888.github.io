(window.webpackJsonp=window.webpackJsonp||[]).push([[21,5,6,14],{776:function(e,n,r){"use strict";r.r(n);r(21),r(20),r(22),r(25),r(26);var t,o,c,l,d,f,h,m=r(5),O=r(3),v=r(1),x=(r(30),r(87)),w=r.n(x),j=r(6),y=r(69),E=r(35),T=r(2),k=r(7),_=r(29);function A(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,r)}return n}var D=Object(T.c)("div")(t||(t=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  ","\n  position: relative;\n  border-radius: 16px;\n  z-index: 1;\n"])),(function(e){return e.theme.flexColumnNoWrap})),P=T.c.span(o||(o=Object(v.a)(["\n  mix-blend-mode: overlay;\n  width: 100%;\n  height: 100%;\n  opacity: 0.8;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  z-index: -1;\n  user-select: none;\n  background: url(https://shinobi.ubiq.ninja/static/media/noise.17ab2292.png) 0%\n    0% / cover;\n  border-radius: 16px;\n"]))),S=T.c.div(c||(c=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  color: ",";\n  z-index: 0;\n  p {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n  }\n"])),(function(e){return e.theme.red1})),I=Object(T.c)(y.AutoColumn)(l||(l=Object(v.a)(["\n  padding: 1rem;\n  background-color: ",";\n  width: 100%;\n  border-radius: 16px;\n"])),(function(e){var n=e.theme;return Object(k.d)(.9,n.red1)})),R=T.c.p(d||(d=Object(v.a)(["\n  font-size: 12px;\n  font-weight: 600;\n  margin-left: 0.25rem;\n  word-break: break-word;\n  line-height: 20px;\n  font-size: 14px;\n  font-weight: 500;\n"]))),N=Object(T.c)("a")(f||(f=Object(v.a)(["\n  text-decoration: underline;\n  color: inherit;\n"]))),C=Object(T.c)(_.d)(h||(h=Object(v.a)(["\n  color: ",";\n  cursor: pointer;\n"])),(function(e){return e.theme.text1})),L={TextStyled:E.TextStyled,AutoColumn:y.AutoColumn,WarningSection:D,Noise:P,ErrorInner:S,ErrorOuter:I,ErrorText:R,ModalTextLink:N,StyledArrowLeft:C},$={TRANSFER:"TRANSFER",DISCLAIMER:"DISCLAIMER"},M={components:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?A(Object(source),!0).forEach((function(n){Object(O.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):A(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}({},L),data:function(){return{isFetchingVoteThreshold:!1,Views:$,view:$.DISCLAIMER}},methods:{fetchVoteThreshold:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e.isFetchingVoteThreshold=!0,n.next=4,w.a.set(1e3);case 4:return n.next=6,e.$store.dispatch(j.c.FETCH_VOTE_THRESHOLD);case 6:n.next=10;break;case 8:n.prev=8,n.t0=n.catch(0);case 10:return n.prev=10,e.isFetchingVoteThreshold=!1,n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,8,10,13]])})))()},showDisclaimer:function(){this.view=$.DISCLAIMER},hideDisclaimer:function(){this.view=$.TRANSFER}},computed:{modalIsOpen:function(){return this.$store.state.modals.transfer},votesRequired:function(){var e;return null===(e=this.$store.state.transfer.session)||void 0===e?void 0:e.votesRequired},error:function(){return null===this.votesRequired&&"Error fetching votes required"}},watch:{modalIsOpen:function(e){var n=this.$store.state.transfer.status;e&&null===n&&this.fetchVoteThreshold()}}},W=r(12),component=Object(W.a)(M,(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("Modal",{attrs:{modalName:"disclaimer"}},[r("TopSection",[r("WarningSection",{attrs:{other:e.destinationPlatformColor}},[r("Noise"),e._v(" "),r("ErrorOuter",{attrs:{gap:"18px"}},[r("ErrorInner",[r("ErrorText",[e._v("\n            If you're using a hardware wallet, be aware that\n            "),r("ModalTextLink",{attrs:{target:"_blank",href:"https://medium.com/myetherwallet/hd-wallets-and-derivation-paths-explained-865a643c7bf2"}},[e._v("different chains use different HD Paths")]),e._v(".")],1)],1),e._v(" "),r("ErrorInner",[r("ErrorText",[e._v("\n            This means that hardware wallets may have a different set of\n            addresses for each chain.")])],1),e._v(" "),r("ErrorInner",[r("ErrorText",[e._v("When bridging funds to the same address they're sent from, always\n            confirm that you'll have access to them on the other\n            side.")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Modal:r(122).default})},779:function(e,n,r){"use strict";r.r(n);r(21),r(20),r(22),r(25),r(26);var t,o,c,l,d,f,h=r(3),m=r(1),O=r(2),v=r(39),x=r(29),w=r(7);function j(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,r)}return n}var y=O.c.div(t||(t=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  padding: 0.5rem;\n  padding-right: 0;\n  color: ",";\n  z-index: 1;\n  p {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n  }\n"])),(function(e){return e.theme.red1})),E=Object(O.c)(v.RowBetween)(o||(o=Object(m.a)(["\n  background-color: ",";\n  width: 100%;\n  border-radius: 8px;\n"])),(function(e){var n=e.theme;return Object(w.d)(.9,n.red1)})),T=O.c.p(c||(c=Object(m.a)(["\n  margin-left: 0.25rem;\n  word-break: break-word;\n  display: flex;\n"]))),k=O.c.div(l||(l=Object(m.a)(["\n  background-color: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  border-radius: 8px;\n  min-width: 28px;\n  height: 28px;\n"])),(function(e){var n=e.theme;return Object(w.d)(.9,n.red1)})),_={components:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(n){Object(h.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}({},{ErrorInner:y,ErrorOuter:E,ErrorText:T,ErrorTextLink:Object(O.c)(T)(d||(d=Object(m.a)(["\n  align-items: center;\n  text-decoration: underline;\n\n  :hover {\n    cursor: pointer;\n    color: ",";\n  }\n"])),(function(e){var n=e.theme;return Object(w.a)(.05,n.red1)})),DontShowAgain:Object(O.c)(x.t)(f||(f=Object(m.a)(["\n  display: flex;\n  margin-right: 0.75rem;\n  color: ",";\n  cursor: pointer;\n"])),(function(e){return e.theme.red1})),AlertTriangleIcon:x.b,ErrorInnerAlertTriangle:k})},A=r(12),component=Object(A.a)(_,(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ErrorOuter",[r("DisclaimerModal"),e._v(" "),r("ErrorInner",[r("ErrorInnerAlertTriangle",[r("AlertTriangleIcon",{attrs:{size:"18"}})],1),e._v(" "),r("ErrorTextLink",{on:{click:function(n){return e.openModal({modalName:"disclaimer"})}}},[e._v("Hardware Wallet Warning\n    ")])],1),e._v(" "),r("Tooltip",{attrs:{text:"Don't show this again"}},[r("DontShowAgain",{attrs:{size:"18"},on:{click:function(n){return e.$emit("dont-show-again")}}})],1)],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{DisclaimerModal:r(776).default,Tooltip:r(390).default})},791:function(e,n,r){"use strict";r.r(n);r(20),r(22),r(25),r(26);var t,o,c,l=r(3),d=r(1),f=(r(78),r(21),r(50),r(2)),h=r(147),m=r(69),O=r(31),v=r(13),x=r(103),w=r(7),j=r(65);function y(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,r)}return n}var E=Object(f.c)("a",{primary:String})(t||(t=Object(d.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n"])),(function(e){return e.theme.text1})),T=Object(f.c)(E,{primary:String})(o||(o=Object(d.a)(["\n  width: 100%;\n  border: 1px solid ",";\n  padding: 6px 6px;\n  border-radius: 8px;\n  text-align: center;\n  font-size: 12px;\n  color: ",';\n\n  &:hover {\n    span:nth-child(1) {\n      position: relative;\n      ::before {\n        content: "";\n        z-index: -1;\n        position: absolute;\n        top: 70%;\n        width: 100%;\n        left: 0;\n        height: 4px;\n        border-radius: 2px;\n        opacity: 1;\n        background: linear-gradient(\n          130deg,\n          ',",\n          "," 100%\n        );\n      }\n    }\n  }\n"])),(function(e){return e.theme.bg3}),(function(e){return e.theme.text1}),(function(e){var n=e.primary;return Object(w.d)(.4,n)}),(function(e){var n=e.primary;return Object(w.d)(.1,n)})),k={components:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(n){Object(l.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}({},{AdvancedDetailsFooter:Object(f.c)("div",{show:Boolean})(c||(c=Object(d.a)(["\n  padding-top: calc(16px + 2rem);\n  padding-bottom: 20px;\n  margin-top: -2rem;\n  width: 100%;\n  max-width: 400px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  color: ",";\n  background-color: ",";\n  transform: ",";\n  display: ",";\n  transition: transform 300ms ease-in-out;\n"])),(function(e){return e.theme.text2}),(function(e){return e.theme.advancedBG}),(function(e){return e.show?"translateY(0%)":"translateY(-100%)"}),(function(e){return e.show?"block":"none"})),InfoLink:T,AutoColumn:m.AutoColumn}),methods:{dontShowAgain:function(){this.$store.commit(x.a.SHOW_WALLET_WARNING,{showWalletWarning:!1})}},computed:{show:function(){return this.chainSupported&&this.sourceDex&&this.destinationDex&&this.sourceToken&&this.destinationToken},chainSupported:function(){return!this.$store.getters[v.c.UNSUPPORTED_CHAIN_ID]},sourceToken:function(){var e=this.$store.state.wallet.chainId,n=this.$store.state.transfer.tokenAddress;return n?this.$store.getters[O.c.TOKEN](e,n):null},destinationToken:function(){var e=this,n=this.$store.state.transfer.destinationChainId,r=h.a.find((function(e){return e.chainId===n})),t=Object.keys(r.tokens.erc20).find((function(n){var t;return r.tokens.erc20[n].resourceId===(null===(t=e.sourceToken)||void 0===t?void 0:t.resourceId)}));return t?this.$store.getters[O.c.TOKEN](n,t):null},sourceDex:function(){var e=this.$store.state.wallet.chainId;if(!e||!this.sourceToken)return null;var n=h.a.find((function(n){return n.chainId===e})),r=n.name,t=n.dexLink;return{name:r,primary:Object(j.a)(this.isDarkMode,e).primary1,link:"".concat(t,"/swap?inputCurrency=").concat(this.sourceToken.tokenAddress)}},destinationDex:function(){var e=this.$store.state.transfer.destinationChainId;if(!e||!this.destinationToken)return null;var n=h.a.find((function(n){return n.chainId===e})),r=n.name,t=n.dexLink;return{name:r,primary:Object(j.a)(this.isDarkMode,e).primary1,link:"".concat(t,"/swap?inputCurrency=").concat(this.destinationToken.tokenAddress)}}}},_=r(12),component=Object(_.a)(k,(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("AdvancedDetailsFooter",{attrs:{show:e.show}},[e.show?r("AutoColumn",{style:{padding:"0 24px"},attrs:{gap:"12px"}},[r("AutoColumn",[e.$store.state.settings.showWalletWarning?r("DisclaimerWarning",{on:{"dont-show-again":e.dontShowAgain}}):e._e()],1),e._v(" "),r("AutoColumn",[r("InfoLink",{attrs:{primary:e.sourceDex.primary,href:e.sourceDex.link,target:"_blank"}},[r("span",[e._v("Trade "+e._s(e.sourceToken.symbol)+" on "+e._s(e.sourceDex.name))]),e._v(" ↗\n      ")])],1),e._v(" "),r("AutoColumn",[r("InfoLink",{attrs:{primary:e.destinationDex.primary,href:e.destinationDex.link,target:"_blank"}},[r("span",[e._v("Trade "+e._s(e.destinationToken.symbol)+" on\n          "+e._s(e.destinationDex.name))]),e._v("\n        ↗\n      ")])],1)],1):e._e()],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{DisclaimerWarning:r(779).default})},794:function(e,n,r){"use strict";r.r(n);r(21),r(20),r(22),r(25),r(26);var t,o,c,l,d,f=r(3),h=r(1),m=(r(78),r(50),r(2)),O=r(69),v=r(783),x=r(9),w=r(13),j=r(6);function y(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,r)}return n}var E=r(23).a.chains,T=m.c.div(t||(t=Object(h.a)(["\n  position: relative;\n  max-width: 420px;\n  width: 100%;\n  background: ",";\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04),\n    0px 16px 24px rgba(0, 0, 0, 0.04), 0px 24px 32px rgba(0, 0, 0, 0.01);\n  border-radius: 30px;\n  padding: 1rem;\n"])),(function(e){return e.theme.bg1})),k=m.c.div(o||(o=Object(h.a)(["\n  position: relative;\n  max-width: 420px;\n  width: 100%;\n  align-items: center;\n  display: flex;\n  flex-direction: column-reverse;\n"]))),_=m.c.div(c||(c=Object(h.a)(["\n  ",";\n  position: relative;\n  border-radius: 20px;\n  background-color: ",";\n  z-index: 1;\n"])),(function(e){return e.theme.flexColumnNoWrap}),(function(e){return e.theme.bg2})),A=m.c.span(l||(l=Object(h.a)(["\n  color: ",";\n  font-size: 13px;\n  font-weight: 500;\n  padding: 1rem .5rem;\n  text-align: center;\n  line-height: 1.5rem;\n"])),(function(e){return e.theme.text1})),D=m.c.span(d||(d=Object(h.a)(["\n  text-decoration: underline;\n  cursor: pointer;\n"]))),P=Object(x.g)(["NO_WALLET","TRANSFER_IN_PROGRESS","PLATFORM_UNSUPPORTED","NO_TRANSFERABLE"]),S={layout:"redshift",components:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(n){Object(f.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}({},{CardWrapper:k,Wrapper:T,AutoColumn:O.AutoColumn,TransferCard:v.default,TransferError:_,ErrorMessage:A,ErrorLink:D}),data:function(){return{TransferErrorTypes:P}},methods:{getPlatformName:function(e){var n;return null===(n=E.find((function(n){return n.chainId==e})))||void 0===n?void 0:n.name}},computed:{transferableTokens:function(){return this.$store.getters[j.e.TRANSFERABLE_TOKENS]},transferError:function(){var e;return this.$store.getters[w.c.UNSUPPORTED_CHAIN_ID]?P.PLATFORM_UNSUPPORTED:this.account?null!==this.$store.state.transfer.sourceChainId&&this.$store.state.wallet.chainId!==this.$store.state.transfer.sourceChainId?P.TRANSFER_IN_PROGRESS:null!==(e=this.transferableTokens)&&void 0!==e&&e.length?void 0:P.NO_TRANSFERABLE:P.NO_WALLET}}},I=r(12),component=Object(I.a)(S,(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("CardWrapper",[r("TransferDropCard"),e._v(" "),r("Wrapper",[e.transferError?r("TransferError",[e.transferError===e.TransferErrorTypes.NO_WALLET?r("ErrorMessage",[r("ErrorLink",{on:{click:function(n){return e.openModal({modalName:"wallet"})}}},[e._v("Connect a wallet")]),e._v("\n        to bridge tokens\n      ")],1):e.transferError===e.TransferErrorTypes.TRANSFER_IN_PROGRESS?r("ErrorMessage",[e._v("A transfer is currently in progress for the\n        "),r("ErrorLink",{on:{click:function(n){return e.openModal({modalName:"platformBadge"})}}},[e._v(e._s(e.getPlatformName(e.$store.state.transfer.sourceChainId)))]),e._v("\n        network")],1):e.transferError===e.TransferErrorTypes.PLATFORM_UNSUPPORTED?r("ErrorMessage",[e._v("The connected wallet's platform is\n        "),r("ErrorLink",{on:{click:function(n){return e.openModal({modalName:"wallet"})}}},[e._v("unsupported")])],1):e.transferError===e.TransferErrorTypes.NO_TRANSFERABLE?r("ErrorMessage",[e._v("No transferable tokens found for the\n        "+e._s(e.connectedWalletPlatformName)+" Network")]):e._e()],1):r("AutoColumn",[r("TransferCard")],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{TransferDropCard:r(791).default,TransferCard:r(783).default})}}]);