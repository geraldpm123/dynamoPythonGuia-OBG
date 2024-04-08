"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7154],{9443:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(4848),i=n(8453);const o={},t="3. Listas de Objetos",r={id:"DynamoBasics/Variables-OperacionesBasicas/03ListasObjetos",title:"3. Listas de Objetos",description:"Las listas son estructuras de datos fundamentales en Dynamo",source:"@site/docs/01-DynamoBasics/02-Variables-OperacionesBasicas/03ListasObjetos.mdx",sourceDirName:"01-DynamoBasics/02-Variables-OperacionesBasicas",slug:"/DynamoBasics/Variables-OperacionesBasicas/03ListasObjetos",permalink:"/dynamoPythonGuia-OBG/docs/DynamoBasics/Variables-OperacionesBasicas/03ListasObjetos",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/01-DynamoBasics/02-Variables-OperacionesBasicas/03ListasObjetos.mdx",tags:[],version:"current",frontMatter:{},sidebar:"guiaDynamoBasic",previous:{title:"2. Operaciones B\xe1sicas",permalink:"/dynamoPythonGuia-OBG/docs/DynamoBasics/Variables-OperacionesBasicas/02Operaciones"},next:{title:"4. Nodo CodeBlock",permalink:"/dynamoPythonGuia-OBG/docs/DynamoBasics/Variables-OperacionesBasicas/04NodoCodeBlock"}},d={},c=[{value:"3.1. Creaci\xf3n de Listas:",id:"31-creaci\xf3n-de-listas",level:2},{value:"3.2. Acceso a Elementos de una Lista:",id:"32-acceso-a-elementos-de-una-lista",level:2},{value:"3.3. Listas en Puertos de Entrada de Nodos",id:"33-listas-en-puertos-de-entrada-de-nodos",level:2},{value:"3.4. Manipulaci\xf3n de Listas:",id:"34-manipulaci\xf3n-de-listas",level:2}];function l(e){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:o}=s;return o||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"3-listas-de-objetos",children:"3. Listas de Objetos"}),"\n",(0,a.jsx)(s.p,{children:"Las listas son estructuras de datos fundamentales en Dynamo\r\nque permiten almacenar y manipular conjuntos de valores de forma eficiente.\r\nEn Dynamo, las listas pueden contener cualquier tipo de dato,\r\nincluyendo n\xfameros, cadenas de texto, vectores, geometr\xeda, entre otros.\r\nEl manejo adecuado de listas es crucial para desarrollar flujos de\r\ntrabajo eficientes y realizar operaciones complejas en scripts."}),"\n",(0,a.jsx)(s.h2,{id:"31-creaci\xf3n-de-listas",children:"3.1. Creaci\xf3n de Listas:"}),"\n",(0,a.jsx)(s.p,{children:"En Dynamo, las listas se pueden crear de varias formas:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:(0,a.jsxs)(s.strong,{children:["Usando Nodo ",(0,a.jsx)(s.code,{children:"List.Create"}),":"]})}),"\n",(0,a.jsx)("div",{style:{textAlign:"center"},children:(0,a.jsx)("img",{src:n(4577).A,alt:"creacionLista_ListCreate"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsxs)(s.strong,{children:["Usando Nodo ",(0,a.jsx)(s.code,{children:"CodeBlock"}),":"]})," Se pueden definir listas de forma expl\xedcita proporcionando los valores\r\nentre corchetes [ ], separados por comas; dentro de un nodo ",(0,a.jsx)(s.code,{children:"CodeBlock"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Generaci\xf3n de Rangos:"})," Este nodo  (",(0,a.jsx)(s.code,{children:"Range"}),") crea una lista en un rango espec\xedfico, definido por un valor inicial,\r\nun valor final y un incremento."]}),"\n",(0,a.jsx)("div",{style:{textAlign:"center"},children:(0,a.jsx)("img",{src:n(4866).A,alt:"creacionLista_Range"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Generaci\xf3n de Secuencias:"})," Este nodo (",(0,a.jsx)(s.code,{children:"Sequence"}),") crea una lista de secuencia, definido por un valor inicial,\r\ncantidad de elementos y un incremento."]}),"\n",(0,a.jsx)("div",{style:{textAlign:"center"},children:(0,a.jsx)("img",{src:n(1726).A,alt:"creacionLista_Sequence"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"32-acceso-a-elementos-de-una-lista",children:"3.2. Acceso a Elementos de una Lista:"}),"\n",(0,a.jsxs)(s.p,{children:["Una vez creada una lista, es posible acceder a sus elementos individuales mediante su \xedndice.\r\nEn Dynamo, los \xedndices de las listas comienzan en cero, lo que significa que el primer elemento\r\nde una lista tiene el \xedndice 0, el segundo tiene el \xedndice 1, y as\xed sucesivamente.\r\nPara acceder a un elemento espec\xedfico de una lista, se utiliza el nodo ",(0,a.jsx)(s.code,{children:"List.GetItemAtIndex"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"33-listas-en-puertos-de-entrada-de-nodos",children:"3.3. Listas en Puertos de Entrada de Nodos"}),"\n",(0,a.jsx)(s.p,{children:"Dynamo en su entorno de programacion visual no usa bucles e iteradores, sino que todo lo maneja en\r\nbase al funcionamiento generalizado de nodos para datos unicos y listas.\r\nEsto significa que los nodos de Dynamo estan preparados para funcionar para un unico dato asi como una lista de datos."}),"\n",(0,a.jsx)(s.h2,{id:"34-manipulaci\xf3n-de-listas",children:"3.4. Manipulaci\xf3n de Listas:"}),"\n",(0,a.jsx)(s.p,{children:"Dynamo proporciona una variedad de nodos para manipular listas de diferentes maneras:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Agregar y eliminar elementos: Con los nodos ",(0,a.jsx)(s.code,{children:"List.AddItemToEnd"})," y ",(0,a.jsx)(s.code,{children:"List.RemoveItemAtIndex"}),"."]}),"\n",(0,a.jsxs)(s.li,{children:["Modificar elementos: Con el nodo ",(0,a.jsx)(s.code,{children:"List.ReplaceItemAtIndex"}),"."]}),"\n",(0,a.jsxs)(s.li,{children:["Tama\xf1o de una lista: Con el nodo ",(0,a.jsx)(s.code,{children:"List.Count"}),"."]}),"\n",(0,a.jsxs)(s.li,{children:["Obtener el indice de un elemento dentro de una lista: ",(0,a.jsx)(s.code,{children:"ListIndexOf"})," y ",(0,a.jsx)(s.code,{children:"List.AllIndicesOf"}),"."]}),"\n",(0,a.jsxs)(s.li,{children:["Obtener valores unicos de una lista: ",(0,a.jsx)(s.code,{children:"List.UniqueItems"}),"."]}),"\n",(0,a.jsxs)(s.li,{children:["Obtener m\xe1ximo y m\xednimo valor: ",(0,a.jsx)(s.code,{children:"List.MaximunItem"})," y ",(0,a.jsx)(s.code,{children:"List.MinimunItem"}),"."]}),"\n",(0,a.jsxs)(s.li,{children:["Ordenar una lista: ",(0,a.jsx)(s.code,{children:"List.Sort"}),", ",(0,a.jsx)(s.code,{children:"List.SortByKey"})," y ",(0,a.jsx)(s.code,{children:"List.SortByFunction"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(o,{children:[(0,a.jsx)("summary",{children:(0,a.jsx)(s.strong,{children:"Ejemplo: Ordenando Puntos"})}),(0,a.jsx)(s.p,{children:"En el siguiente ejemplo ordenaremos una lista de puntos."}),(0,a.jsx)("div",{style:{textAlign:"center"},children:(0,a.jsx)("img",{src:n(8506).A,alt:"ejemploOrdenandoPuntos"})})]}),"\n",(0,a.jsx)(s.p,{children:"Existen otros nodos que nos facilitaran el manejo de listas, pero los veremos de forma especifica en\r\nposteriores scripts que veamos."})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},4577:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/creacionLista_ListCreate-c989865595dcfa7c515603dba5aed841.png"},4866:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/creacionLista_Range-d6519cfb684dcd1b3dfddb36e3345f86.png"},1726:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/creacionLista_Sequence-21b0faceea6009b1a91575b05efc5e23.png"},8506:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/ejemploOrdenandoPuntos-417917a623051d3473f887e799b2cbc5.png"},8453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>r});var a=n(6540);const i={},o=a.createContext(i);function t(e){const s=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(o.Provider,{value:s},e.children)}}}]);