webpackJsonp([0],{11:function(t,e,a){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),s=function(){function t(e){n(this,t),this.data=e,this.dataObj=[],this.amodal=!1,this.moda=null,this.setup()}return i(t,[{key:"setup",value:function(){this.createModa(),this.defineModa()}},{key:"createModa",value:function(){for(var t=0;t<this.data.length;t+=1){for(var e={number:this.data[t],cont:1},a=0,n=0;n<this.dataObj.length;n+=1)e.number===this.dataObj[n].number&&(this.dataObj[n].cont+=1,a+=1);0===a&&this.dataObj.push(e)}}},{key:"defineModa",value:function(){for(var t=this,e=0,a=[{number:0,cont:0}],n=0;n<this.dataObj.length;n+=1)this.dataObj[0].cont===this.dataObj[n].cont&&(e+=1);if(e===this.dataObj.length)this.amodal=!0;else for(var i=0;i<this.dataObj.length;i+=1)a[0].cont<this.dataObj[i].cont?(a=[],a[0]=this.dataObj[i]):a[0].cont===this.dataObj[i].cont&&a.push(this.dataObj[i]);this.amodal?this.moda="Amodal":(this.moda=[],a.forEach(function(e,a){t.moda[a]=e.number}))}},{key:"getResult",value:function(){return this.dataObj}},{key:"getModa",value:function(){return this.moda}}]),t}();e.default={create:function(t){return new s(t)}},e.Class=s},148:function(t,e,a){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),s=function(){function t(e,a){n(this,t),this.data=e,this.type=a,this.result=null,this.setup()}return i(t,[{key:"setup",value:function(){this.data.length%2==0?"word"===this.type?this.result=[this.data[this.data.length/2-1],this.data[this.data.length/2]]:"number"===this.type&&(this.result=(this.data[this.data.length/2-1]+this.data[this.data.length/2])/2):this.result=this.data[parseInt(this.data.length/2,10)]}},{key:"getResult",value:function(){return this.result}}]),t}();e.default={create:function(t,e){return new s(t,e)}},e.Class=s},149:function(t,e,a){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),s=function(){function t(e,a,i){n(this,t),this.vet=e,this.type=a,this.orderWords=i,this.vetLetter=[],this.setup()}return i(t,[{key:"setup",value:function(){this.chooseOrder()}},{key:"chooseOrder",value:function(){void 0===this.orderWords?"crescent"===this.type?this.orderCrescent():"descreasing"===this.type&&this.orderDescreasing():void 0!==this.orderWords&&this.organizerWords()}},{key:"organizerWords",value:function(){for(var t=0;t<this.orderWords.length;t+=1)for(var e=0;e<this.vet.length;e+=1)this.orderWords[t]===this.vet[e]&&this.vetLetter.push(this.vet[e]);this.vet=this.vetLetter}},{key:"orderCrescent",value:function(){for(var t=0;t<this.vet.length;t+=1)for(var e=0;e<this.vet.length;e+=1)if(this.vet[t]<this.vet[e]){var a=this.vet[t];this.vet[t]=this.vet[e],this.vet[e]=a}}},{key:"orderDescreasing",value:function(){for(var t=0;t<this.vet.length;t+=1)for(var e=0;e<this.vet.length;e+=1)if(this.vet[t]>this.vet[e]){var a=this.vet[e];this.vet[e]=this.vet[t],this.vet[t]=a}}},{key:"getResult",value:function(){return this.vet}}]),t}();e.default={create:function(t,e,a){return new s(t,e,a)}},e.Class=s},150:function(t,e,a){t.exports=a(151)},151:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var i=a(152),s=n(i),r=a(153),l=n(r),u=a(154),o=n(u);s.default.create("[data-form]"),s.default.create("[data-dropdown]"),l.default.create("[data-button-home]",".s-section--form"),o.default.create()},152:function(t,e,a){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),s=function(){function t(e){n(this,t),this.elm=document.querySelector(e),this.tabs=this.elm.querySelector("[data-list-tab]"),this.boxes=this.elm.querySelector("[data-list-box]"),this.tabsList=this.tabs.querySelectorAll("[data-tab]"),this.boxesList=this.boxes.querySelectorAll("[data-box]"),this.currentIndex=0,this.setup()}return i(t,[{key:"setup",value:function(){this.setupListeners()}},{key:"setupListeners",value:function(){for(var t=0;t<this.tabsList.length;t+=1){var e=t;this.tabsList[t].addEventListener("click",this.toggleClass.bind(this,e))}}},{key:"toggleClass",value:function(t){this.tabsList[this.currentIndex].classList.remove("is-active"),this.tabsList[t].classList.add("is-active"),this.boxesList[this.currentIndex].classList.remove("is-active"),this.boxesList[t].classList.add("is-active"),this.currentIndex=t}}]),t}();e.default={create:function(t){return new s(t)}},e.Class=s},153:function(t,e,a){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Class=void 0;var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),s=a(12),r=function(t){return t&&t.__esModule?t:{default:t}}(s),l=function(){function t(e,a){n(this,t),this.elm=document.querySelector(e),this.target=document.querySelector(a),this.setup()}return i(t,[{key:"setup",value:function(){this.setupListener()}},{key:"setupListener",value:function(){var e=this;this.elm.addEventListener("click",function(){t.jumpToTarget(e.target)})}}],[{key:"jumpToTarget",value:function(t){(0,r.default)(t)}}]),t}();e.default={create:function(t,e){return new l(t,e)}},e.Class=l},154:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Class=void 0;var s=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),r=a(12),l=n(r),u=a(155),o=n(u),c=a(199),h=n(c),d=a(200),v=n(d),f=function(){function t(){i(this,t),this.button=document.querySelector("[data-button-descriptive]"),this.buttonFile=document.querySelector("[data-button-file]"),this.holderResult=document.querySelector("[data-result-holder]"),this.elm=null,this.radioHolder=null,this.listRadio=null,this.data=null,this.dataName=null,this.orderOrdinal=null,this.result=null,this.dataConverted=[],this.setup()}return s(t,[{key:"setup",value:function(){t.disableLabel(),this.setupListener()}},{key:"setupListener",value:function(){var t=this;this.buttonFile.addEventListener("change",function(){t.readFile()}),this.button.addEventListener("click",function(e){e.preventDefault(),t.recoverData(),t.validateData()})}},{key:"readFile",value:function(){if(window.File&&window.FileReader&&window.FileList&&window.Blob){var t=this.buttonFile.files[0],e=document.querySelector("[data-dados]"),a=[/.txt$/,/.csv$/];if(a[0].test(t.name)||a[1].test(t.name)){var n=new FileReader;n.onload=function(){e.value=n.result},n.readAsText(t)}else alert("Escolha um arquivo no formato .txt ou .csv")}else alert("Seu navegador nao suporta essa funcionalidade :(")}},{key:"recoverData",value:function(){this.elm=document.querySelector("[data-descriptive]"),this.radioHolder=this.elm.querySelector("[data-radios]"),this.listRadio=this.radioHolder.querySelectorAll("input"),this.data=this.elm.querySelector("[data-dados]").value,this.dataName=this.elm.querySelector("[data-name]").value,this.orderOrdinal=this.elm.querySelector("[data-order]").value}},{key:"convertArray",value:function(){var t=/;$/;t.test(this.data)&&(this.data=this.data.replace(/;$/,"")),t.test(this.orderOrdinal)&&(this.orderOrdinal=this.orderOrdinal.replace(/;$/,"")),this.data=this.data.split(/;/),this.orderOrdinal=this.orderOrdinal.split(/;/),this.dataConverted=this.data.map(function(t){return parseFloat(t,10)})}},{key:"validateData",value:function(){!0===this.listRadio[1].checked?""===this.data||""===this.dataName||""===this.orderOrdinal?alert("preencha todos os campos"):(this.convertArray(),this.choiceTypeVariable(),this.appendResult()):""===this.data||""===this.dataName?alert("preencha todos os campos"):(this.convertArray(),this.choiceTypeVariable(),this.appendResult())}},{key:"choiceTypeVariable",value:function(){!0===this.listRadio[0].checked?this.result=o.default.create(this.data,this.dataName).getResult():!0===this.listRadio[1].checked?this.result=h.default.create(this.data,this.dataName,this.orderOrdinal).getResult():!0===this.listRadio[2].checked||!0===this.listRadio[3].checked&&(this.result=v.default.create(this.dataConverted,this.dataName).getResult())}},{key:"appendResult",value:function(){void 0!==this.result&&(-1===this.holderResult.className.indexOf("is-active")&&this.holderResult.classList.add("is-active"),this.holderResult.firstElementChild.firstElementChild.innerHTML="",this.holderResult.firstElementChild.firstElementChild.innerHTML=this.result,setTimeout(function(){(0,l.default)(".s-section--result")},500))}}],[{key:"disableLabel",value:function(){for(var t=document.querySelector("[data-radios]"),e=t.querySelectorAll("input"),a=document.querySelector("[data-order]"),n=0;n<e.length;n+=1)!function(t){e[t].addEventListener("click",function(){"ordinal"===e[t].getAttribute("id")?a.removeAttribute("disabled"):(a.setAttribute("disabled",!0),a.value="")})}(n)}}]),t}();e.default={create:function(){return new f}},e.Class=f},155:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Class=void 0;var s=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),r=a(10),l=n(r),u=a(13),o=n(u),c=a(11),h=n(c),d=a(148),v=n(d),f=function(){function t(e,a){i(this,t),this.data=e,this.dataModa=[],this.name=a,this.simpleFrequencyPercentage=[],this.accumulatedFrequncy=[],this.accumulatedFrequncyPercentage=[],this.dynamicTable=[],this.canvasHolder=document.querySelector("[data-canvas]"),this.moda=null,this.mediana=null,this.nominalTemplate=l.default.template('<table style="text-align:center" border="1"> <tr><th>Classe</th> <th>{{=it.name}}</th> <th>Frequenca Simples</th> <th>Frequenca Relativa</th> <th>Frequenca Acumulada</th> <th>Frequenca Acumulada %</th> </tr>{{~it.dynamicTable :value:index}}<tr><td>{{=value.index}}</td> <td>{{=value.number}}</td><td>{{=value.cont}}</td><td>{{=value.fr}}</td><td>{{=value.fa}}</td><td>{{=value.fac}}</td></tr>{{~}}</table><p>Mediana: {{=it.mediana}}</p><p>Moda: {{=it.moda}}</p>'),this.nominalResult="",this.setup()}return s(t,[{key:"setup",value:function(){this.organizerData(),this.generateFrequency(),this.createModaMediana(),this.createTable(),this.createChart()}},{key:"organizerData",value:function(){this.dataModa=h.default.create(this.data).getResult()}},{key:"createModaMediana",value:function(){this.mediana=v.default.create(this.data,"word").getResult(),this.moda=h.default.create(this.data).getModa()}},{key:"generateFrequency",value:function(){for(var t=0,e=0;e<this.dataModa.length;e+=1)this.simpleFrequencyPercentage[e]=(this.dataModa[e].cont/this.data.length*100).toFixed(2),this.accumulatedFrequncy[e]=this.dataModa[e].cont+t,this.accumulatedFrequncyPercentage[e]=(this.accumulatedFrequncy[e]/this.data.length*100).toFixed(2),t=this.dataModa[e].cont+t}},{key:"createTable",value:function(){for(var t=0;t<this.dataModa.length;t+=1){var e={index:t+1,number:this.dataModa[t].number,cont:this.dataModa[t].cont,fr:this.simpleFrequencyPercentage[t],fa:this.accumulatedFrequncy[t],fac:this.accumulatedFrequncyPercentage[t]};this.dynamicTable.push(e)}this.nominalResult=this.nominalTemplate({name:this.name,mediana:this.mediana,moda:this.moda,dynamicTable:this.dynamicTable})}},{key:"createChart",value:function(){var t=[],e=document.createElement("canvas");this.canvasHolder.innerHTML="",this.dataModa.forEach(function(e,a){t[a]=e.number}),new o.default(e,{type:"pie",data:{labels:t,datasets:[{data:this.simpleFrequencyPercentage}]}}),this.canvasHolder.appendChild(e)}},{key:"getResult",value:function(){return this.nominalResult}}]),t}();e.default={create:function(t,e){return new f(t,e)}},e.Class=f},180:function(t,e,a){function n(t){return a(i(t))}function i(t){var e=s[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var s={"./af":21,"./af.js":21,"./ar":22,"./ar-dz":23,"./ar-dz.js":23,"./ar-kw":24,"./ar-kw.js":24,"./ar-ly":25,"./ar-ly.js":25,"./ar-ma":26,"./ar-ma.js":26,"./ar-sa":27,"./ar-sa.js":27,"./ar-tn":28,"./ar-tn.js":28,"./ar.js":22,"./az":29,"./az.js":29,"./be":30,"./be.js":30,"./bg":31,"./bg.js":31,"./bm":32,"./bm.js":32,"./bn":33,"./bn.js":33,"./bo":34,"./bo.js":34,"./br":35,"./br.js":35,"./bs":36,"./bs.js":36,"./ca":37,"./ca.js":37,"./cs":38,"./cs.js":38,"./cv":39,"./cv.js":39,"./cy":40,"./cy.js":40,"./da":41,"./da.js":41,"./de":42,"./de-at":43,"./de-at.js":43,"./de-ch":44,"./de-ch.js":44,"./de.js":42,"./dv":45,"./dv.js":45,"./el":46,"./el.js":46,"./en-SG":47,"./en-SG.js":47,"./en-au":48,"./en-au.js":48,"./en-ca":49,"./en-ca.js":49,"./en-gb":50,"./en-gb.js":50,"./en-ie":51,"./en-ie.js":51,"./en-il":52,"./en-il.js":52,"./en-nz":53,"./en-nz.js":53,"./eo":54,"./eo.js":54,"./es":55,"./es-do":56,"./es-do.js":56,"./es-us":57,"./es-us.js":57,"./es.js":55,"./et":58,"./et.js":58,"./eu":59,"./eu.js":59,"./fa":60,"./fa.js":60,"./fi":61,"./fi.js":61,"./fo":62,"./fo.js":62,"./fr":63,"./fr-ca":64,"./fr-ca.js":64,"./fr-ch":65,"./fr-ch.js":65,"./fr.js":63,"./fy":66,"./fy.js":66,"./ga":67,"./ga.js":67,"./gd":68,"./gd.js":68,"./gl":69,"./gl.js":69,"./gom-latn":70,"./gom-latn.js":70,"./gu":71,"./gu.js":71,"./he":72,"./he.js":72,"./hi":73,"./hi.js":73,"./hr":74,"./hr.js":74,"./hu":75,"./hu.js":75,"./hy-am":76,"./hy-am.js":76,"./id":77,"./id.js":77,"./is":78,"./is.js":78,"./it":79,"./it-ch":80,"./it-ch.js":80,"./it.js":79,"./ja":81,"./ja.js":81,"./jv":82,"./jv.js":82,"./ka":83,"./ka.js":83,"./kk":84,"./kk.js":84,"./km":85,"./km.js":85,"./kn":86,"./kn.js":86,"./ko":87,"./ko.js":87,"./ku":88,"./ku.js":88,"./ky":89,"./ky.js":89,"./lb":90,"./lb.js":90,"./lo":91,"./lo.js":91,"./lt":92,"./lt.js":92,"./lv":93,"./lv.js":93,"./me":94,"./me.js":94,"./mi":95,"./mi.js":95,"./mk":96,"./mk.js":96,"./ml":97,"./ml.js":97,"./mn":98,"./mn.js":98,"./mr":99,"./mr.js":99,"./ms":100,"./ms-my":101,"./ms-my.js":101,"./ms.js":100,"./mt":102,"./mt.js":102,"./my":103,"./my.js":103,"./nb":104,"./nb.js":104,"./ne":105,"./ne.js":105,"./nl":106,"./nl-be":107,"./nl-be.js":107,"./nl.js":106,"./nn":108,"./nn.js":108,"./pa-in":109,"./pa-in.js":109,"./pl":110,"./pl.js":110,"./pt":111,"./pt-br":112,"./pt-br.js":112,"./pt.js":111,"./ro":113,"./ro.js":113,"./ru":114,"./ru.js":114,"./sd":115,"./sd.js":115,"./se":116,"./se.js":116,"./si":117,"./si.js":117,"./sk":118,"./sk.js":118,"./sl":119,"./sl.js":119,"./sq":120,"./sq.js":120,"./sr":121,"./sr-cyrl":122,"./sr-cyrl.js":122,"./sr.js":121,"./ss":123,"./ss.js":123,"./sv":124,"./sv.js":124,"./sw":125,"./sw.js":125,"./ta":126,"./ta.js":126,"./te":127,"./te.js":127,"./tet":128,"./tet.js":128,"./tg":129,"./tg.js":129,"./th":130,"./th.js":130,"./tl-ph":131,"./tl-ph.js":131,"./tlh":132,"./tlh.js":132,"./tr":133,"./tr.js":133,"./tzl":134,"./tzl.js":134,"./tzm":135,"./tzm-latn":136,"./tzm-latn.js":136,"./tzm.js":135,"./ug-cn":137,"./ug-cn.js":137,"./uk":138,"./uk.js":138,"./ur":139,"./ur.js":139,"./uz":140,"./uz-latn":141,"./uz-latn.js":141,"./uz.js":140,"./vi":142,"./vi.js":142,"./x-pseudo":143,"./x-pseudo.js":143,"./yo":144,"./yo.js":144,"./zh-cn":145,"./zh-cn.js":145,"./zh-hk":146,"./zh-hk.js":146,"./zh-tw":147,"./zh-tw.js":147};n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id=180},199:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Class=void 0;var s=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),r=a(10),l=n(r),u=a(13),o=n(u),c=a(149),h=n(c),d=a(11),v=n(d),f=a(148),m=n(f),y=function(){function t(e,a,n){i(this,t),this.data=e,this.name=a,this.order=n,this.dataModa=[],this.simpleFrequencyPercentage=[],this.accumulatedFrequncy=[],this.accumulatedFrequncyPercentage=[],this.dynamicTable=[],this.canvasHolder=document.querySelector("[data-canvas]"),this.moda=null,this.mediana=null,this.ordinalTemplate=l.default.template('<table style="text-align:center" border="1"> <tr><th>Classe</th> <th>{{=it.name}}</th> <th>Frequenca Simples</th> <th>Frequenca Relativa</th> <th>Frequenca Acumulada</th> <th>Frequenca Acumulada %</th> </tr>{{~it.dynamicTable :value:index}}<tr><td>{{=value.index}}</td> <td>{{=value.number}}</td><td>{{=value.cont}}</td><td>{{=value.fr}}</td><td>{{=value.fa}}</td><td>{{=value.fac}}</td></tr>{{~}}</table><p>Mediana: {{=it.mediana}}</p><p>Moda: {{=it.moda}}</p>'),this.ordinalResult=null,this.setup()}return s(t,[{key:"setup",value:function(){this.organizerData(),this.generateFrequency(),this.createModaMediana(),this.createTable(),this.createChart()}},{key:"organizerData",value:function(){this.data=h.default.create(this.data,"crescent",this.order).getResult(),this.dataModa=v.default.create(this.data).getResult()}},{key:"generateFrequency",value:function(){for(var t=0,e=0;e<this.dataModa.length;e+=1)this.simpleFrequencyPercentage[e]=(this.dataModa[e].cont/this.data.length*100).toFixed(2),this.accumulatedFrequncy[e]=this.dataModa[e].cont+t,this.accumulatedFrequncyPercentage[e]=(this.accumulatedFrequncy[e]/this.data.length*100).toFixed(2),t=this.dataModa[e].cont+t}},{key:"createModaMediana",value:function(){this.mediana=m.default.create(this.data,"word").getResult(),this.moda=v.default.create(this.data).getModa()}},{key:"createTable",value:function(){for(var t=0;t<this.dataModa.length;t+=1){var e={index:t+1,number:this.dataModa[t].number,cont:this.dataModa[t].cont,fr:this.simpleFrequencyPercentage[t],fa:this.accumulatedFrequncy[t],fac:this.accumulatedFrequncyPercentage[t]};this.dynamicTable.push(e)}this.ordinalResult=this.ordinalTemplate({name:this.name,mediana:this.mediana,moda:this.moda,dynamicTable:this.dynamicTable})}},{key:"createChart",value:function(){var t=[],e=document.createElement("canvas");this.canvasHolder.innerHTML="",this.dataModa.forEach(function(e,a){t[a]=e.number}),new o.default(e,{type:"pie",data:{labels:t,datasets:[{data:this.simpleFrequencyPercentage}]}}),this.canvasHolder.appendChild(e)}},{key:"getResult",value:function(){return this.ordinalResult}}]),t}();e.default={create:function(t,e,a){return new y(t,e,a)}},e.Class=y},200:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Class=void 0;var s=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),r=a(10),l=n(r),u=a(149),o=n(u),c=a(11),h=n(c),d=function(){function t(e,a){i(this,t),this.vet=e,this.dataModa=[],this.At=null,this.k=[],this.result=null,this.intervalNumber=null,this.name=a,this.simpleFrequencyPercentage=[],this.accumulatedFrequncy=[],this.accumulatedFrequncyPercentage=[],this.dynamicTable=[],this.continueTemplate=l.default.template('<table style="text-align:center" border="1"><tr><th>Classes</th><th>{{=it.name}}</th><th>Frequenca Simples</th><th>Frequenca Relativa</th><th>Frequenca Acumulada</th><th>Frequenca Acumulada %</th></tr>{{~it.dynamicTable :value:index}}<tr><td>{{=value.class}}</td><td>{{=value.valorInicial}} - {{=value.valorFinal}}</td><td>{{=value.cont}}</td><td>{{=value.fr}}</td><td>{{=value.fa}}</td><td>{{=value.fac}}</td></tr>{{~}}</table>'),this.continueResult="",this.vetInterval=[],this.setup()}return s(t,[{key:"setup",value:function(){this.oraganizedArray(),this.amplitude(),this.classes(),this.valueInterval(),this.createModa(),this.interval(),this.generateFrequency(),this.media(),this.moda(),this.mediana(),this.createTable()}},{key:"oraganizedArray",value:function(){this.vet=o.default.create(this.vet,"crescent").getResult()}},{key:"amplitude",value:function(){this.At=this.vet[this.vet.length-1]-this.vet[0]}},{key:"classes",value:function(){this.K=[parseInt(Math.sqrt(this.vet.length))-1,parseInt(Math.sqrt(this.vet.length)),parseInt(Math.sqrt(this.vet.length))+1]}},{key:"valueInterval",value:function(){for(var t=this.At+1,e=0;0===e;){for(var a=0;a<3;a+=1)if(t%this.K[a]==0){this.intervalNumber=t/this.K[a],e+=1;break}t+=1}}},{key:"createModa",value:function(){for(var t=this.vet[0],e=null;t<=this.vet[this.vet.length-1];){e=t+this.intervalNumber;for(var a=0;a<this.vet.length;a+=1)this.vet[a]>=t&&this.vet[a]<e&&(this.dataModa=h.default.create(this.vet).getResult());t+=this.intervalNumber}}},{key:"interval",value:function(){for(var t=this.dataModa[0].number,e=this.dataModa[0].cont,a=t+this.intervalNumber,n=1;n<this.dataModa.length;n+=1)if(this.dataModa[n].number>=a){var i=new Object;i.valorInicial=t,i.valorFinal=a,i.cont=e,this.vetInterval.push(i),t=a,a=t+this.intervalNumber,e=this.dataModa[n].cont}else this.dataModa[n].number<a&&(e+=this.dataModa[n].cont);var s=new Object;s.valorInicial=t,s.valorFinal=a,s.cont=e,this.vetInterval.push(s)}},{key:"generateFrequency",value:function(){for(var t=0,e=0;e<this.vetInterval.length;e+=1)this.simpleFrequencyPercentage[e]=(this.vetInterval[e].cont/this.vet.length*100).toFixed(2),this.accumulatedFrequncy[e]=this.vetInterval[e].cont+t,this.accumulatedFrequncyPercentage[e]=(this.accumulatedFrequncy[e]/this.vet.length*100).toFixed(2),t=this.vetInterval[e].cont+t}},{key:"media",value:function(){for(var t=null,e=0;e<this.vetInterval.length;e+=1)t+=(this.vetInterval[e].valorFinal+this.vetInterval[e].valorInicial)/2*this.vetInterval[e].cont;var a=t/this.vet.length;console.log(a)}},{key:"moda",value:function(){for(var t=null,e=null,a=0;a<this.vetInterval.length;a+=1)this.vetInterval[a].cont>t&&(t=this.vetInterval[a].cont,e=a);this.vetInterval[e].valorFinal,this.vetInterval[e].valorInicial}},{key:"mediana",value:function(){for(var t=this.vet.length/2,e=null,a=null,n=null,i=0;i<this.vet.length;i+=1)if(t==i)for(var s=this.vet[i],r=0;r<this.vetInterval.length;r+=1)s>=this.vetInterval[r].valorInicial&&s<this.vetInterval[r].valorFinal&&(e=this.vetInterval[r].valorInicial,a=this.vetInterval[r].cont,n=r-1<0?0:this.vetInterval[r-1].cont);var l=(e+(t-n)/a*this.intervalNumber).toFixed(3);console.log(l)}},{key:"createTable",value:function(){for(var t=0;t<this.vetInterval.length;t+=1){var e={class:t+1,valorInicial:this.vetInterval[t].valorInicial,valorFinal:this.vetInterval[t].valorFinal,cont:this.vetInterval[t].cont,fr:this.simpleFrequencyPercentage[t],fa:this.accumulatedFrequncy[t],fac:this.accumulatedFrequncyPercentage[t]};this.dynamicTable.push(e)}this.continueResult=this.continueTemplate({name:this.name,dynamicTable:this.dynamicTable})}},{key:"getResult",value:function(){return this.continueResult}}]),t}();e.default={create:function(t,e){return new d(t,e)}},e.Class=d}},[150]);