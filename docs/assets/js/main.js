webpackJsonp([0],{134:function(t,e,a){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,a,s){return a&&t(e.prototype,a),s&&t(e,s),e}}(),n=function(){function t(e,a,i){s(this,t),this.data=e,this.media=a,this.process=i,this.dataLength=0,this.result=null,this.setup()}return i(t,[{key:"setup",value:function(){var t=this;this.data.forEach(function(e){t.result+=Math.pow(e.number-t.media,2)*e.cont,t.dataLength+=e.cont}),"amostra"===this.process?this.result=this.result/(this.dataLength-1):"censo"===this.process&&(this.result=this.result/this.dataLength),this.result=Math.sqrt(this.result).toFixed(2)}},{key:"getResult",value:function(){return this.result}}]),t}();e.default={create:function(t,e,a){return new n(t,e,a)}},e.Class=n},135:function(t,e,a){t.exports=a(136)},136:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var i=a(137),n=s(i),r=a(138),l=s(r),u=a(139),c=s(u),o=a(141),d=s(o);n.default.create("[data-form]"),n.default.create("[data-dropdown]"),l.default.create("[data-button-home]",".s-section--form"),d.default.create(),c.default.create("[data-accessibillity-bar]")},137:function(t,e,a){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,a,s){return a&&t(e.prototype,a),s&&t(e,s),e}}(),n=function(){function t(e){s(this,t),this.elm=document.querySelector(e),this.tabs=this.elm.querySelector("[data-list-tab]"),this.boxes=this.elm.querySelector("[data-list-box]"),this.tabsList=this.tabs.querySelectorAll("[data-tab]"),this.boxesList=this.boxes.querySelectorAll("[data-box]"),this.currentIndex=0,this.setup()}return i(t,[{key:"setup",value:function(){this.setupListeners()}},{key:"setupListeners",value:function(){for(var t=0;t<this.tabsList.length;t+=1){var e=t;this.tabsList[t].addEventListener("click",this.toggleClass.bind(this,e))}}},{key:"toggleClass",value:function(t){this.tabsList[this.currentIndex].classList.remove("is-active"),this.tabsList[t].classList.add("is-active"),this.boxesList[this.currentIndex].classList.remove("is-active"),this.boxesList[t].classList.add("is-active"),this.currentIndex=t}}]),t}();e.default={create:function(t){return new n(t)}},e.Class=n},138:function(t,e,a){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Class=void 0;var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,a,s){return a&&t(e.prototype,a),s&&t(e,s),e}}(),n=a(6),r=function(t){return t&&t.__esModule?t:{default:t}}(n),l=function(){function t(e,a){s(this,t),this.elm=document.querySelector(e),this.target=document.querySelector(a),this.setup()}return i(t,[{key:"setup",value:function(){this.setupListener()}},{key:"setupListener",value:function(){var e=this;this.elm.addEventListener("click",function(){t.jumpToTarget(e.target)})}}],[{key:"jumpToTarget",value:function(t){(0,r.default)(t)}}]),t}();e.default={create:function(t,e){return new l(t,e)}},e.Class=l},139:function(t,e,a){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Class=void 0;var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,a,s){return a&&t(e.prototype,a),s&&t(e,s),e}}(),n=a(140),r=function(t){return t&&t.__esModule?t:{default:t}}(n),l=function(){function t(e){s(this,t),this.elm=document.querySelector(e),this.container=document.documentElement,this.contrastButton=this.elm.querySelector("[data-contrast-button]"),this.hasContrast=!1,this.setupListeners(),this.applyInitialState()}return i(t,[{key:"applyInitialState",value:function(){r.default.get("isContrast")&&(this.container.classList.add("accessibility-mode"),this.contrastButton.classList.add("is-active"),this.hasContrast=!0)}},{key:"setupListeners",value:function(){var t=this;this.contrastButton.addEventListener("click",function(){t.container.classList.toggle("accessibility-mode"),t.contrastButton.classList.toggle("is-active"),t.hasContrast?(r.default.remove("isContrast"),t.hasContrast=!1):(r.default.set("isContrast","isContrast"),t.hasContrast=!0)})}}]),t}();e.default={create:function(t){return new l(t)}},e.Class=l},141:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Class=void 0;var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,a,s){return a&&t(e.prototype,a),s&&t(e,s),e}}(),r=a(6),l=s(r),u=a(142),c=s(u),o=a(143),d=s(o),h=a(146),v=s(h),f=a(147),m=s(f),p=a(148),y=s(p),b=function(){function t(){i(this,t),this.button=document.querySelector("[data-button-descriptive]"),this.buttonFile=document.querySelector("[data-button-file]"),this.holderResult=document.querySelector("[data-result-holder]"),this.modalMessage=document.querySelector("[data-modal]").querySelector("[data-modal-message]"),this.elm=null,this.radioHolder=null,this.separatrisHolder=null,this.separatrisItems=null,this.listRadio=null,this.processList=null,this.processChecked=null,this.data=null,this.dataName=null,this.orderOrdinal=null,this.result=null,this.dataConverted=[],this.setup()}return n(t,[{key:"setup",value:function(){t.disableLabel(),t.changeRange(),this.setupListener()}},{key:"setupListener",value:function(){var t=this;this.buttonFile.addEventListener("change",function(){t.readFile()}),this.button.addEventListener("click",function(e){e.preventDefault(),t.recoverData(),t.validateData()})}},{key:"readFile",value:function(){if(window.File&&window.FileReader&&window.FileList&&window.Blob){var t=this.buttonFile.files[0],e=document.querySelector("[data-dados]"),a=[/.txt$/,/.csv$/];if(a[0].test(t.name)||a[1].test(t.name)){var s=new FileReader;s.onload=function(){e.value=s.result},s.readAsText(t)}else this.modalMessage.innerHTML="Escolha um arquivo no formato .txt ou .csv",c.default.show("modal-1")}else this.modalMessage.innerHTML="Seu navegador nao suporta essa funcionalidade",c.default.show("modal-1")}},{key:"recoverData",value:function(){var t=this;this.elm=document.querySelector("[data-descriptive]"),this.radioHolder=this.elm.querySelector("[data-radios]"),this.listRadio=this.radioHolder.querySelectorAll("input"),this.separatrisHolder=this.elm.querySelector("[data-separatriz]"),this.processList=Array.from(this.elm.querySelector("[data-process]").querySelectorAll("input[type=radio]")),this.processList.forEach(function(e){!0===e.checked&&(t.processChecked=e.id)}),this.separatrisItems={radios:Array.from(this.separatrisHolder.querySelectorAll("input[type=radio]")),range:this.separatrisHolder.querySelector("input[type=range]").value,isChecked:null},this.separatrisItems.isChecked=this.wichyChecked(),this.data=this.elm.querySelector("[data-dados]").value,this.dataName=this.elm.querySelector("[data-name]").value,this.orderOrdinal=this.elm.querySelector("[data-order]").value}},{key:"wichyChecked",value:function(){var t=null;return this.separatrisItems.radios.forEach(function(e){!0===e.checked&&(t=e.id)}),t}},{key:"convertArray",value:function(){var t=/;$/,e=/^;/;t.test(this.data)&&(this.data=this.data.replace(/;$/,"")),e.test(this.data)&&(this.data=this.data.replace(/^;/,"")),t.test(this.orderOrdinal)&&(this.orderOrdinal=this.orderOrdinal.replace(/;$/,"")),e.test(this.orderOrdinal)&&(this.orderOrdinal=this.orderOrdinal.replace(/^;/,"")),this.data=this.data.split(/;/),this.orderOrdinal=this.orderOrdinal.split(/;/),this.dataConverted=this.data.map(function(t){return parseFloat(t,10)})}},{key:"validateData",value:function(){!0===this.listRadio[1].checked?""===this.data||""===this.dataName||""===this.orderOrdinal?(this.modalMessage.innerHTML="Preencha todos os campos!",c.default.show("modal-1")):/;;/.test(this.data)?(this.modalMessage.innerHTML="Parece que seus dados estão com um probemas, verifique a separação dos dados!",c.default.show("modal-1")):(this.convertArray(),this.choiceTypeVariable(),this.appendResult()):""===this.data||""===this.dataName?(this.modalMessage.innerHTML="Preencha todos os campos!",c.default.show("modal-1")):/;;/.test(this.data)?(this.modalMessage.innerHTML="Parece que seus dados estão com um probemas, verifique a separação dos dados!",c.default.show("modal-1")):(this.convertArray(),this.choiceTypeVariable(),this.appendResult())}},{key:"choiceTypeVariable",value:function(){!0===this.listRadio[0].checked?this.result=d.default.create(this.data,this.dataName,this.separatrisItems).getResult():!0===this.listRadio[1].checked?this.result=v.default.create(this.data,this.dataName,this.orderOrdinal,this.separatrisItems).getResult():!0===this.listRadio[2].checked?this.result=m.default.create(this.dataConverted,this.dataName,this.separatrisItems,this.processChecked).getResult():!0===this.listRadio[3].checked&&(this.result=y.default.create(this.dataConverted,this.dataName,this.separatrisItems,this.processChecked).getResult())}},{key:"appendResult",value:function(){void 0!==this.result&&(-1===this.holderResult.className.indexOf("is-active")&&this.holderResult.classList.add("is-active"),this.holderResult.firstElementChild.firstElementChild.innerHTML="",this.holderResult.firstElementChild.firstElementChild.innerHTML=this.result,setTimeout(function(){(0,l.default)(".s-section--result")},500))}}],[{key:"changeRange",value:function(){var t=document.querySelector("[data-separatriz]"),e=Array.from(t.querySelectorAll("[type=radio]")),a=document.querySelector("[data-range]"),s=document.querySelector("[data-range-value]");e.forEach(function(t){t.addEventListener("click",function(){a.setAttribute("step",t.getAttribute("data-value")),s.innerHTML=a.value+"%"})}),a.addEventListener("input",function(){s.innerHTML=a.value+"%"})}},{key:"disableLabel",value:function(){for(var t=document.querySelector("[data-radios]"),e=t.querySelectorAll("input"),a=document.querySelector("[data-order]"),s=0;s<e.length;s+=1)!function(t){e[t].addEventListener("click",function(){"ordinal"===e[t].getAttribute("id")?a.removeAttribute("disabled"):(a.setAttribute("disabled",!0),a.value="")})}(s)}}]),t}();e.default={create:function(){return new b}},e.Class=b},143:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Class=void 0;var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,a,s){return a&&t(e.prototype,a),s&&t(e,s),e}}(),r=a(1),l=s(r),u=a(2),c=s(u),o=a(3),d=s(o),h=a(4),v=s(h),f=function(){function t(e,a,s){i(this,t),this.data=e,this.separatrizItems=s,this.separatrizResult=null,this.dataModa=[],this.name=a,this.simpleFrequencyPercentage=[],this.accumulatedFrequncy=[],this.accumulatedFrequncyPercentage=[],this.dynamicTable=[],this.canvasHolder=document.querySelector("[data-canvas]"),this.moda=null,this.mediana=null,this.nominalTemplate=l.default.template('<table style="text-align:center"><tr class="table__header"><th class="table__item">Classe</th><th class="table__item">{{=it.name}}</th><th class="table__item">Frequenca Simples</th><th class="table__item">Frequenca Relativa</th><th class="table__item">Frequenca Acumulada</th><th class="table__item">Frequenca Acumulada %</th></tr>{{~it.dynamicTable :value:index}}<tr class="table__lines"><td class="table__item">{{=value.index}}</td><td class="table__item">{{=value.number}}</td><td class="table__item">{{=value.cont}}</td><td class="table__item">{{=value.fr}}</td><td class="table__item">{{=value.fa}}</td><td class="table__item">{{=value.fac}}</td></tr>{{~}}</table><div class="table__informations"><div class="cell__information" ><p class="cell__title">Mediana</p><p> {{=it.mediana}}</p></div><div class="cell__information" ><p class="cell__title">Moda</p><p> {{=it.moda}}</p></div><div class="cell__information" ><p class="cell__title">Medida separatriz</p><p> {{=it.separatriz}}</p></div></div>'),this.nominalResult="",this.setup()}return n(t,[{key:"setup",value:function(){this.organizerData(),this.generateFrequency(),this.createModaMediana(),this.createSeparatriz(),this.createTable(),this.createChart()}},{key:"organizerData",value:function(){this.dataModa=d.default.create(this.data).getResult()}},{key:"createModaMediana",value:function(){this.mediana=v.default.create(this.data,"word").getResult(),this.moda=d.default.create(this.data).getModa()}},{key:"generateFrequency",value:function(){for(var t=0,e=0;e<this.dataModa.length;e+=1)this.simpleFrequencyPercentage[e]=(this.dataModa[e].cont/this.data.length*100).toFixed(2),this.accumulatedFrequncy[e]=this.dataModa[e].cont+t,this.accumulatedFrequncyPercentage[e]=(this.accumulatedFrequncy[e]/this.data.length*100).toFixed(2),t=this.dataModa[e].cont+t}},{key:"createSeparatriz",value:function(){this.separatrizResult=this.data[Math.round(this.data.length*(this.separatrizItems.range/100))-1],this.separatrizResult=this.separatrizItems.isChecked+": "+this.separatrizResult}},{key:"createTable",value:function(){for(var t=0;t<this.dataModa.length;t+=1){var e={index:t+1,number:this.dataModa[t].number,cont:this.dataModa[t].cont,fr:this.simpleFrequencyPercentage[t],fa:this.accumulatedFrequncy[t],fac:this.accumulatedFrequncyPercentage[t]};this.dynamicTable.push(e)}this.nominalResult=this.nominalTemplate({name:this.name,mediana:this.mediana,moda:this.moda,separatriz:this.separatrizResult,dynamicTable:this.dynamicTable})}},{key:"createChart",value:function(){var t=[],e=document.createElement("canvas");this.canvasHolder.innerHTML="",this.dataModa.forEach(function(e,a){t[a]=e.number}),new c.default(e,{type:"pie",data:{labels:t,datasets:[{data:this.simpleFrequencyPercentage}]}}),this.canvasHolder.appendChild(e)}},{key:"getResult",value:function(){return this.nominalResult}}]),t}();e.default={create:function(t,e,a){return new f(t,e,a)}},e.Class=f},145:function(t,e,a){function s(t){return a(i(t))}function i(t){var e=n[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var n={"./af":7,"./af.js":7,"./ar":8,"./ar-dz":9,"./ar-dz.js":9,"./ar-kw":10,"./ar-kw.js":10,"./ar-ly":11,"./ar-ly.js":11,"./ar-ma":12,"./ar-ma.js":12,"./ar-sa":13,"./ar-sa.js":13,"./ar-tn":14,"./ar-tn.js":14,"./ar.js":8,"./az":15,"./az.js":15,"./be":16,"./be.js":16,"./bg":17,"./bg.js":17,"./bm":18,"./bm.js":18,"./bn":19,"./bn.js":19,"./bo":20,"./bo.js":20,"./br":21,"./br.js":21,"./bs":22,"./bs.js":22,"./ca":23,"./ca.js":23,"./cs":24,"./cs.js":24,"./cv":25,"./cv.js":25,"./cy":26,"./cy.js":26,"./da":27,"./da.js":27,"./de":28,"./de-at":29,"./de-at.js":29,"./de-ch":30,"./de-ch.js":30,"./de.js":28,"./dv":31,"./dv.js":31,"./el":32,"./el.js":32,"./en-SG":33,"./en-SG.js":33,"./en-au":34,"./en-au.js":34,"./en-ca":35,"./en-ca.js":35,"./en-gb":36,"./en-gb.js":36,"./en-ie":37,"./en-ie.js":37,"./en-il":38,"./en-il.js":38,"./en-nz":39,"./en-nz.js":39,"./eo":40,"./eo.js":40,"./es":41,"./es-do":42,"./es-do.js":42,"./es-us":43,"./es-us.js":43,"./es.js":41,"./et":44,"./et.js":44,"./eu":45,"./eu.js":45,"./fa":46,"./fa.js":46,"./fi":47,"./fi.js":47,"./fo":48,"./fo.js":48,"./fr":49,"./fr-ca":50,"./fr-ca.js":50,"./fr-ch":51,"./fr-ch.js":51,"./fr.js":49,"./fy":52,"./fy.js":52,"./ga":53,"./ga.js":53,"./gd":54,"./gd.js":54,"./gl":55,"./gl.js":55,"./gom-latn":56,"./gom-latn.js":56,"./gu":57,"./gu.js":57,"./he":58,"./he.js":58,"./hi":59,"./hi.js":59,"./hr":60,"./hr.js":60,"./hu":61,"./hu.js":61,"./hy-am":62,"./hy-am.js":62,"./id":63,"./id.js":63,"./is":64,"./is.js":64,"./it":65,"./it-ch":66,"./it-ch.js":66,"./it.js":65,"./ja":67,"./ja.js":67,"./jv":68,"./jv.js":68,"./ka":69,"./ka.js":69,"./kk":70,"./kk.js":70,"./km":71,"./km.js":71,"./kn":72,"./kn.js":72,"./ko":73,"./ko.js":73,"./ku":74,"./ku.js":74,"./ky":75,"./ky.js":75,"./lb":76,"./lb.js":76,"./lo":77,"./lo.js":77,"./lt":78,"./lt.js":78,"./lv":79,"./lv.js":79,"./me":80,"./me.js":80,"./mi":81,"./mi.js":81,"./mk":82,"./mk.js":82,"./ml":83,"./ml.js":83,"./mn":84,"./mn.js":84,"./mr":85,"./mr.js":85,"./ms":86,"./ms-my":87,"./ms-my.js":87,"./ms.js":86,"./mt":88,"./mt.js":88,"./my":89,"./my.js":89,"./nb":90,"./nb.js":90,"./ne":91,"./ne.js":91,"./nl":92,"./nl-be":93,"./nl-be.js":93,"./nl.js":92,"./nn":94,"./nn.js":94,"./pa-in":95,"./pa-in.js":95,"./pl":96,"./pl.js":96,"./pt":97,"./pt-br":98,"./pt-br.js":98,"./pt.js":97,"./ro":99,"./ro.js":99,"./ru":100,"./ru.js":100,"./sd":101,"./sd.js":101,"./se":102,"./se.js":102,"./si":103,"./si.js":103,"./sk":104,"./sk.js":104,"./sl":105,"./sl.js":105,"./sq":106,"./sq.js":106,"./sr":107,"./sr-cyrl":108,"./sr-cyrl.js":108,"./sr.js":107,"./ss":109,"./ss.js":109,"./sv":110,"./sv.js":110,"./sw":111,"./sw.js":111,"./ta":112,"./ta.js":112,"./te":113,"./te.js":113,"./tet":114,"./tet.js":114,"./tg":115,"./tg.js":115,"./th":116,"./th.js":116,"./tl-ph":117,"./tl-ph.js":117,"./tlh":118,"./tlh.js":118,"./tr":119,"./tr.js":119,"./tzl":120,"./tzl.js":120,"./tzm":121,"./tzm-latn":122,"./tzm-latn.js":122,"./tzm.js":121,"./ug-cn":123,"./ug-cn.js":123,"./uk":124,"./uk.js":124,"./ur":125,"./ur.js":125,"./uz":126,"./uz-latn":127,"./uz-latn.js":127,"./uz.js":126,"./vi":128,"./vi.js":128,"./x-pseudo":129,"./x-pseudo.js":129,"./yo":130,"./yo.js":130,"./zh-cn":131,"./zh-cn.js":131,"./zh-hk":132,"./zh-hk.js":132,"./zh-tw":133,"./zh-tw.js":133};s.keys=function(){return Object.keys(n)},s.resolve=i,t.exports=s,s.id=145},146:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Class=void 0;var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,a,s){return a&&t(e.prototype,a),s&&t(e,s),e}}(),r=a(1),l=s(r),u=a(2),c=s(u),o=a(5),d=s(o),h=a(3),v=s(h),f=a(4),m=s(f),p=function(){function t(e,a,s,n){i(this,t),this.data=e,this.name=a,this.order=s,this.separatrizItems=n,this.separatrizResult=null,this.dataModa=[],this.simpleFrequencyPercentage=[],this.accumulatedFrequncy=[],this.accumulatedFrequncyPercentage=[],this.dynamicTable=[],this.canvasHolder=document.querySelector("[data-canvas]"),this.moda=null,this.mediana=null,this.ordinalTemplate=l.default.template('<table style="text-align:center"><tr class="table__header"><th class="table__item">Classe</th><th class="table__item">{{=it.name}}</th><th class="table__item">Frequenca Simples</th><th class="table__item">Frequenca Relativa</th><th class="table__item">Frequenca Acumulada</th><th class="table__item">Frequenca Acumulada %</th></tr>{{~it.dynamicTable :value:index}}<tr class="table__lines"><td class="table__item">{{=value.index}}</td><td class="table__item">{{=value.number}}</td><td class="table__item">{{=value.cont}}</td><td class="table__item">{{=value.fr}}</td><td class="table__item">{{=value.fa}}</td><td class="table__item">{{=value.fac}}</td></tr>{{~}}</table><div class="table__informations"><div class="cell__information" ><p class="cell__title">Mediana</p><p> {{=it.mediana}}</p></div><div class="cell__information" ><p class="cell__title">Moda</p><p> {{=it.moda}}</p></div><div class="cell__information" ><p class="cell__title">Medida separatriz</p><p> {{=it.separatriz}}</p></div></div>'),this.ordinalResult=null,this.setup()}return n(t,[{key:"setup",value:function(){this.organizerData(),this.generateFrequency(),this.createModaMediana(),this.createSeparatriz(),this.createTable(),this.createChart()}},{key:"organizerData",value:function(){this.data=d.default.create(this.data,"crescent",this.order).getResult(),this.dataModa=v.default.create(this.data).getResult()}},{key:"generateFrequency",value:function(){for(var t=0,e=0;e<this.dataModa.length;e+=1)this.simpleFrequencyPercentage[e]=(this.dataModa[e].cont/this.data.length*100).toFixed(2),this.accumulatedFrequncy[e]=this.dataModa[e].cont+t,this.accumulatedFrequncyPercentage[e]=(this.accumulatedFrequncy[e]/this.data.length*100).toFixed(2),t=this.dataModa[e].cont+t}},{key:"createModaMediana",value:function(){this.mediana=m.default.create(this.data,"word").getResult(),this.moda=v.default.create(this.data).getModa()}},{key:"createSeparatriz",value:function(){this.separatrizResult=this.data[Math.round(this.data.length*(this.separatrizItems.range/100))-1],this.separatrizResult=this.separatrizItems.isChecked+": "+this.separatrizResult}},{key:"createTable",value:function(){for(var t=0;t<this.dataModa.length;t+=1){var e={index:t+1,number:this.dataModa[t].number,cont:this.dataModa[t].cont,fr:this.simpleFrequencyPercentage[t],fa:this.accumulatedFrequncy[t],fac:this.accumulatedFrequncyPercentage[t]};this.dynamicTable.push(e)}this.ordinalResult=this.ordinalTemplate({name:this.name,mediana:this.mediana,moda:this.moda,separatriz:this.separatrizResult,dynamicTable:this.dynamicTable})}},{key:"createChart",value:function(){var t=[],e=document.createElement("canvas");this.canvasHolder.innerHTML="",this.dataModa.forEach(function(e,a){t[a]=e.number}),new c.default(e,{type:"pie",data:{labels:t,datasets:[{data:this.simpleFrequencyPercentage}]}}),this.canvasHolder.appendChild(e)}},{key:"getResult",value:function(){return this.ordinalResult}}]),t}();e.default={create:function(t,e,a,s){return new p(t,e,a,s)}},e.Class=p},147:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Class=void 0;var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,a,s){return a&&t(e.prototype,a),s&&t(e,s),e}}(),r=a(1),l=s(r),u=a(2),c=s(u),o=a(3),d=s(o),h=a(4),v=s(h),f=a(5),m=s(f),p=a(134),y=s(p),b=function(){function t(e,a,s,n){i(this,t),this.data=e,this.dataModa=[],this.name=a,this.process=n,this.standardDeviationResult=null,this.coefficientOfVariation=null,this.separatrizItems=s,this.separatrizResult=null,this.simpleFrequencyPercentage=[],this.accumulatedFrequncy=[],this.accumulatedFrequncyPercentage=[],this.dynamicTable=[],this.canvasHolder=document.querySelector("[data-canvas]"),this.moda=null,this.mediana=null,this.media=null,this.discreetTemplate=l.default.template('<table style="text-align:center" ><tr class="table__header"><th class="table__item">Classe</th><th class="table__item">{{=it.name}}</th><th class="table__item">Frequenca Simples</th><th class="table__item">Frequenca Relativa</th><th class="table__item">Frequenca Acumulada</th><th class="table__item">Frequenca Acumulada %</th></tr>{{~it.dynamicTable :value:index}}<tr class="table__lines"><td class="table__item">{{=value.index}}</td><td class="table__item">{{=value.number}}</td><td class="table__item">{{=value.cont}}</td><td class="table__item">{{=value.fr}}</td><td class="table__item">{{=value.fa}}</td><td class="table__item">{{=value.fac}}</td></tr>{{~}}</table><div class="table__informations" ><div class="cell__information" ><p class="cell__title">Mediana</p><p> {{=it.mediana}}</p></div><div class="cell__information" ><p class="cell__title">Moda</p><p> {{=it.moda}}</p></div><div class="cell__information" ><p class="cell__title">Media</p><p> {{=it.media}}</p></div><div class="cell__information" ><p class="cell__title">Medida separatriz</p><p> {{=it.separatriz}}</p></div><div class="cell__information" ><p class="cell__title">Desvio Padrão</p><p> {{=it.desvioPadrao}}</p></div><div class="cell__information" ><p class="cell__title"> Coeficiente de variação</p><p> {{=it.coeficienteDeVariacao}}%</p></div></div>'),this.discreetResult="",this.setup()}return n(t,[{key:"setup",value:function(){this.organizerData(),this.generateFrequency(),this.createModaMediana(),this.createSeparatriz(),this.createstandardDeviation(),this.createCoefficientOfVariation(),this.createTable(),this.createChart()}},{key:"organizerData",value:function(){this.data=m.default.create(this.data,"crescent").getResult(),this.dataModa=d.default.create(this.data).getResult()}},{key:"createModaMediana",value:function(){this.mediana=v.default.create(this.data,"number").getResult(),this.moda=d.default.create(this.data).getModa();for(var t=0,e=0;e<this.dataModa.length;e+=1)t+=this.dataModa[e].number*this.dataModa[e].cont;this.media=(t/this.data.length).toFixed(2)}},{key:"generateFrequency",value:function(){for(var t=0,e=0;e<this.dataModa.length;e+=1)this.simpleFrequencyPercentage[e]=(this.dataModa[e].cont/this.data.length*100).toFixed(2),this.accumulatedFrequncy[e]=this.dataModa[e].cont+t,this.accumulatedFrequncyPercentage[e]=(this.accumulatedFrequncy[e]/this.data.length*100).toFixed(2),t=this.dataModa[e].cont+t}},{key:"createSeparatriz",value:function(){this.separatrizResult=this.data[Math.round(this.data.length*(this.separatrizItems.range/100))-1],void 0===this.separatrizResult&&(this.separatrizResult=0),this.separatrizResult=this.separatrizItems.isChecked+": "+this.separatrizResult}},{key:"createstandardDeviation",value:function(){this.standardDeviationResult=y.default.create(this.dataModa,this.media,this.process).getResult()}},{key:"createCoefficientOfVariation",value:function(){this.coefficientOfVariation=Math.round(this.standardDeviationResult/this.media*100)}},{key:"createTable",value:function(){for(var t=0;t<this.dataModa.length;t+=1){var e={index:t+1,number:this.dataModa[t].number,cont:this.dataModa[t].cont,fr:this.simpleFrequencyPercentage[t],fa:this.accumulatedFrequncy[t],fac:this.accumulatedFrequncyPercentage[t]};this.dynamicTable.push(e)}this.discreetResult=this.discreetTemplate({name:this.name,media:this.media,mediana:this.mediana,moda:this.moda,desvioPadrao:this.standardDeviationResult,coeficienteDeVariacao:this.coefficientOfVariation,separatriz:this.separatrizResult,dynamicTable:this.dynamicTable})}},{key:"createChart",value:function(){var t=[],e=document.createElement("canvas");this.canvasHolder.innerHTML="",this.dataModa.forEach(function(e,a){t[a]=e.number}),new c.default(e,{type:"pie",data:{labels:t,datasets:[{data:this.simpleFrequencyPercentage}]}}),this.canvasHolder.appendChild(e)}},{key:"getResult",value:function(){return this.discreetResult}}]),t}();e.default={create:function(t,e,a,s){return new b(t,e,a,s)}},e.Class=b},148:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Class=void 0;var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,a,s){return a&&t(e.prototype,a),s&&t(e,s),e}}(),r=a(1),l=s(r),u=a(2),c=s(u),o=a(5),d=s(o),h=a(3),v=s(h),f=a(134),m=s(f),p=function(){function t(e,a,s,n){i(this,t),this.At=null,this.result=null,this.intervalNumber=null,this.medianValue=null,this.modeValue=null,this.meanValue=null,this.separatrixResult=null,this.standardDeviationResult=null,this.variation=null,this.dataMode=[],this.k=[],this.simpleFrequencyPercentage=[],this.accumulatedFrequncy=[],this.accumulatedFrequncyPercentage=[],this.dynamicTable=[],this.vetInterval=[],this.vet=e,this.name=a,this.separatrixItems=s,this.process=n,this.canvasHolder=document.querySelector("[data-canvas]"),this.continueTemplate=l.default.template('<table style="text-align:center"><tr class="table__header"><th class="table__item">Classes</th><th class="table__item">{{=it.name}}</th><th class="table__item">Frequenca Simples</th><th class="table__item">Frequenca Relativa</th><th class="table__item">Frequenca Acumulada</th><th class="table__item">Frequenca Acumulada %</th></tr>{{~it.dynamicTable :value:index}}<tr class="table__lines"><td class="table__item">{{=value.class}}</td><td class="table__item">{{=value.valorInicial}} |&#8212; {{=value.valorFinal}}</td><td class="table__item">{{=value.cont}}</td><td class="table__item">{{=value.fr}}</td><td class="table__item">{{=value.fa}}</td><td class="table__item">{{=value.fac}}</td></tr>{{~}}</table><br/><div class="table__informations"><div class="cell__information" ><p class="cell__title">Moda</p><p>{{=value.moda}}</p></div><div class="cell__information" ><p class="cell__title">  Média</p><p> {{=value.media}}</p></div><div class="cell__information" ><p class="cell__title">  Mediana</p><p> {{=value.mediana}}</p></div><div class="cell__information" ><p class="cell__title">  Separatriz</p><p> {{=it.separatrixResult}}</p></div><div class="cell__information" ><p class="cell__title"> Desvio Padrão</p><p> {{=it.desvioPadrao}}</p></div><div class="cell__information" ><p class="cell__title"> Coeficiente de Variação</p><p> {{=it.coeficientevariacao}}</p></div></div>'),this.continueResult="",this.setup()}return n(t,[{key:"setup",value:function(){this.oraganizedArray(),this.amplitude(),this.classes(),this.valueInterval(),this.createModa(),this.interval(),this.generateFrequency(),this.separatrix(),this.media(),this.moda(),this.mediana(),this.standardDeviation(),this.coefficientVariation(),this.createTable(),this.createChart()}},{key:"oraganizedArray",value:function(){this.vet=d.default.create(this.vet,"crescent").getResult()}},{key:"amplitude",value:function(){this.At=this.vet[this.vet.length-1]-this.vet[0]}},{key:"classes",value:function(){this.K=[parseInt(Math.sqrt(this.vet.length))-1,parseInt(Math.sqrt(this.vet.length)),parseInt(Math.sqrt(this.vet.length))+1]}},{key:"valueInterval",value:function(){for(var t=this.At+1,e=0;0===e;){for(var a=0;a<3;a+=1)if(t%this.K[a]==0){this.intervalNumber=t/this.K[a],e+=1;break}t+=1}}},{key:"createModa",value:function(){for(var t=this.vet[0],e=null;t<=this.vet[this.vet.length-1];){e=t+this.intervalNumber;for(var a=0;a<this.vet.length;a+=1)this.vet[a]>=t&&this.vet[a]<e&&(this.dataMode=v.default.create(this.vet).getResult());t+=this.intervalNumber}}},{key:"interval",value:function(){for(var t=this.dataMode[0].number,e=this.dataMode[0].cont,a=t+this.intervalNumber,s=1;s<this.dataMode.length;s+=1)if(this.dataMode[s].number>=a){var i=new Object;i.valorInicial=t,i.valorFinal=a,i.cont=e,this.vetInterval.push(i),t=a,a=t+this.intervalNumber,e=this.dataMode[s].cont}else this.dataMode[s].number<a&&(e+=this.dataMode[s].cont);var n=new Object;n.valorInicial=t,n.valorFinal=a,n.cont=e,this.vetInterval.push(n)}},{key:"generateFrequency",value:function(){for(var t=0,e=0;e<this.vetInterval.length;e+=1)this.simpleFrequencyPercentage[e]=(this.vetInterval[e].cont/this.vet.length*100).toFixed(2),this.accumulatedFrequncy[e]=this.vetInterval[e].cont+t,this.accumulatedFrequncyPercentage[e]=(this.accumulatedFrequncy[e]/this.vet.length*100).toFixed(2),t=this.vetInterval[e].cont+t}},{key:"separatrixGeral",value:function(t){for(var e=t,a=null,s=null,i=null,n=0;n<this.vet.length;n+=1)if(parseInt(e)==n)for(var r=this.vet[n],l=0;l<this.vetInterval.length;l+=1)r>=this.vetInterval[l].valorInicial&&r<this.vetInterval[l].valorFinal&&(a=this.vetInterval[l].valorInicial,s=this.vetInterval[l].cont,i=l-1<0?0:this.accumulatedFrequncy[l-1]);this.result=(a+(e-i)/s*this.intervalNumber).toFixed(2)}},{key:"separatrix",value:function(){var t=Number(this.separatrixItems.range/100*this.vet.length).toFixed(2);this.separatrixGeral(t),this.separatrixResult=this.result}},{key:"mediana",value:function(){var t=this.vet.length/2;this.separatrixGeral(t),this.medianValue=this.result}},{key:"media",value:function(){for(var t=null,e=0;e<this.vetInterval.length;e+=1)t+=(this.vetInterval[e].valorFinal+this.vetInterval[e].valorInicial)/2*this.vetInterval[e].cont;this.meanValue=(t/this.vet.length).toFixed(2)}},{key:"moda",value:function(){for(var t=null,e=null,a=0;a<this.vetInterval.length;a+=1)this.vetInterval[a].cont>t&&(t=this.vetInterval[a].cont,e=a);this.modeValue=(this.vetInterval[e].valorFinal+this.vetInterval[e].valorInicial)/2}},{key:"standardDeviation",value:function(){var t=this,e=[];this.vetInterval.forEach(function(a,s){e[s]={number:(a.valorInicial+a.valorFinal)/2,cont:t.dataMode[s].cont}}),this.standardDeviationResult=m.default.create(e,this.meanValue,this.process).getResult()}},{key:"coefficientVariation",value:function(){this.variation=(this.standardDeviationResult/this.meanValue*100).toFixed(2)}},{key:"createTable",value:function(){for(var t=0;t<this.vetInterval.length;t+=1){var e={class:t+1,valorInicial:this.vetInterval[t].valorInicial,valorFinal:this.vetInterval[t].valorFinal,cont:this.vetInterval[t].cont,fr:this.simpleFrequencyPercentage[t],fa:this.accumulatedFrequncy[t],fac:this.accumulatedFrequncyPercentage[t],moda:this.modeValue,media:this.meanValue,mediana:this.medianValue,separatrixResult:this.separatrixResult,desvioPadrao:this.standardDeviationResult,coeficientevariacao:this.variation};this.dynamicTable.push(e)}this.continueResult=this.continueTemplate({name:this.name,dynamicTable:this.dynamicTable,separatrixResult:this.separatrixResult,desvioPadrao:this.standardDeviationResult,coeficientevariacao:this.variation})}},{key:"createChart",value:function(){var t=[],e=document.createElement("canvas");this.canvasHolder.innerHTML="",this.vetInterval.forEach(function(e,a){t[a]=e.valorInicial+" |- "+e.valorFinal}),new c.default(e,{type:"bar",data:{labels:t,datasets:[{label:"Frequencia Relativa",data:this.simpleFrequencyPercentage}]}}),c.default.scaleService.updateScaleDefaults("linear",{ticks:{min:0}}),this.canvasHolder.appendChild(e)}},{key:"getResult",value:function(){return this.continueResult}}]),t}();e.default={create:function(t,e,a,s){return new p(t,e,a,s)}},e.Class=p},3:function(t,e,a){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,a,s){return a&&t(e.prototype,a),s&&t(e,s),e}}(),n=function(){function t(e){s(this,t),this.data=e,this.dataObj=[],this.amodal=!1,this.moda=null,this.setup()}return i(t,[{key:"setup",value:function(){this.createModa(),this.defineModa()}},{key:"createModa",value:function(){for(var t=0;t<this.data.length;t+=1){for(var e={number:this.data[t],cont:1},a=0,s=0;s<this.dataObj.length;s+=1)e.number===this.dataObj[s].number&&(this.dataObj[s].cont+=1,a+=1);0===a&&this.dataObj.push(e)}}},{key:"defineModa",value:function(){for(var t=this,e=0,a=[{number:0,cont:0}],s=0;s<this.dataObj.length;s+=1)this.dataObj[0].cont===this.dataObj[s].cont&&(e+=1);if(e===this.dataObj.length)this.amodal=!0;else for(var i=0;i<this.dataObj.length;i+=1)a[0].cont<this.dataObj[i].cont?(a=[],a[0]=this.dataObj[i]):a[0].cont===this.dataObj[i].cont&&a.push(this.dataObj[i]);this.amodal?this.moda="Amodal":(this.moda=[],a.forEach(function(e,a){t.moda[a]=e.number}))}},{key:"getResult",value:function(){return this.dataObj}},{key:"getModa",value:function(){return this.moda}}]),t}();e.default={create:function(t){return new n(t)}},e.Class=n},4:function(t,e,a){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,a,s){return a&&t(e.prototype,a),s&&t(e,s),e}}(),n=function(){function t(e,a){s(this,t),this.data=e,this.type=a,this.result=null,this.setup()}return i(t,[{key:"setup",value:function(){this.data.length%2==0?"word"===this.type?this.result=[this.data[this.data.length/2-1],this.data[this.data.length/2]]:"number"===this.type&&(this.result=parseFloat((this.data[this.data.length/2-1]+this.data[this.data.length/2])/2)):this.result=this.data[parseInt(this.data.length/2,10)]}},{key:"getResult",value:function(){return this.result}}]),t}();e.default={create:function(t,e){return new n(t,e)}},e.Class=n},5:function(t,e,a){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,a,s){return a&&t(e.prototype,a),s&&t(e,s),e}}(),n=function(){function t(e,a,i){s(this,t),this.vet=e,this.type=a,this.orderWords=i,this.vetLetter=[],this.setup()}return i(t,[{key:"setup",value:function(){this.chooseOrder()}},{key:"chooseOrder",value:function(){void 0===this.orderWords?"crescent"===this.type?this.orderCrescent():"descreasing"===this.type&&this.orderDescreasing():void 0!==this.orderWords&&this.organizerWords()}},{key:"organizerWords",value:function(){for(var t=0;t<this.orderWords.length;t+=1)for(var e=0;e<this.vet.length;e+=1)this.orderWords[t]===this.vet[e]&&this.vetLetter.push(this.vet[e]);this.vet=this.vetLetter}},{key:"orderCrescent",value:function(){for(var t=0;t<this.vet.length;t+=1)for(var e=0;e<this.vet.length;e+=1)if(this.vet[t]<this.vet[e]){var a=this.vet[t];this.vet[t]=this.vet[e],this.vet[e]=a}}},{key:"orderDescreasing",value:function(){for(var t=0;t<this.vet.length;t+=1)for(var e=0;e<this.vet.length;e+=1)if(this.vet[t]>this.vet[e]){var a=this.vet[e];this.vet[e]=this.vet[t],this.vet[t]=a}}},{key:"getResult",value:function(){return this.vet}}]),t}();e.default={create:function(t,e,a){return new n(t,e,a)}},e.Class=n}},[135]);