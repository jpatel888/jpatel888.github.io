(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{785:function(t,n,e){"use strict";e.r(n);var r,o,d,c=e(1),l=(e(78),e(50),e(39)),m=e(69),f=e(35),h=e(2),v=e(230),x=e(65),C=e(147),w=e(9),_=e(31),y=Object(h.c)(v.default)(r||(r=Object(c.a)(["\n  border-radius: 20px;\n  padding: 0 8px;\n  margin-bottom: 10px;\n"]))),S=Object(h.c)(f.TextStyled,{emphasize:Boolean})(o||(o=Object(c.a)(["\n  font-weight: ",";\n  color: ",";\n  font-size: 14px;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n"])),(function(t){return t.emphasize?500:400}),(function(t){var n=t.theme;return t.emphasize?n.text1:n.text2})),T=Object(h.c)("span",{color:String})(d||(d=Object(c.a)(["\n  color: ",";\n"])),(function(t){return t.color})),j={data:function(){return{amountQH:"Amount and token to be transferred across chains",transferQH:"Source and destination chains for transfer",destinationQH:"Address funds will be sent to on destination chain"}},components:{SummaryCard:y,SummaryText:S,AutoColumn:m.AutoColumn,RowBetween:l.RowBetween,ChainText:T},computed:{sourceChainId:function(){return this.$store.state.wallet.chainId},destinationChainId:function(){return this.$store.state.transfer.destinationChainId},sourcePlatformName:function(){var t,n=this;return null===(t=C.a.find((function(t){return t.chainId===n.sourceChainId})))||void 0===t?void 0:t.name},destinationPlatformName:function(){var t,n=this;return null===(t=C.a.find((function(t){return t.chainId===n.destinationChainId})))||void 0===t?void 0:t.name},sourcePlatformColor:function(){var t;return null===(t=Object(x.a)(this.isDarkMode,this.sourceChainId))||void 0===t?void 0:t.primary1},destinationPlatformColor:function(){var t;return null===(t=Object(x.a)(this.isDarkMode,this.destinationChainId))||void 0===t?void 0:t.primary1},shortenedAddress:function(){return Object(w.h)(this.$store.state.transfer.destinationAddress)},amount:function(){return this.$store.state.transfer.amount},tokenSymbol:function(){var t;return null===(t=this.$store.getters[_.c.TOKEN](this.sourceChainId,this.$store.state.transfer.tokenAddress))||void 0===t?void 0:t.symbol}}},I=e(12),component=Object(I.a)(j,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("SummaryCard",[e("AutoColumn",{attrs:{gap:"1px"}},[e("RowBetween",{attrs:{align:"center"}},[e("SummaryText",[t._v("Amount"),e("QuestionHelper",{attrs:{text:t.amountQH}})],1),t._v(" "),e("SummaryText",{attrs:{emphasize:""}},[t._v(t._s(t.amount)+" "+t._s(t.tokenSymbol))])],1),t._v(" "),e("RowBetween",{attrs:{align:"center"}},[e("SummaryText",[t._v("Destination\n        "),e("QuestionHelper",{attrs:{text:t.destinationQH}})],1),t._v(" "),e("SummaryText",{staticStyle:{gap:"4px"},attrs:{emphasize:""}},[t._v("\n        "+t._s(t.shortenedAddress)+"\n      ")])],1),t._v(" "),e("RowBetween",{attrs:{align:"center"}},[e("SummaryText",[t._v("Transfer\n        "),e("QuestionHelper",{attrs:{text:t.transferQH}})],1),t._v(" "),e("SummaryText",{staticStyle:{gap:"4px","font-weight":"600"},attrs:{emphasize:""}},[e("ChainText",{attrs:{color:t.sourcePlatformColor}},[t._v(t._s(t.sourcePlatformName))]),t._v(" → "),e("ChainText",{attrs:{color:t.destinationPlatformColor}},[t._v(t._s(t.destinationPlatformName))])],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{QuestionHelper:e(232).default})}}]);