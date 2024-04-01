"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8387],{1985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(4848),l=n(8453);const r={sidebar_position:1},i="2. Filtrando Elementos",s={id:"DynamoPython/TemasAdicionales/02FilterElementCollector",title:"2. Filtrando Elementos",description:"2.1. FilteredElementCollector",source:"@site/docs/02-DynamoPython/04-TemasAdicionales/02FilterElementCollector.mdx",sourceDirName:"02-DynamoPython/04-TemasAdicionales",slug:"/DynamoPython/TemasAdicionales/02FilterElementCollector",permalink:"/dynamoPythonGuia-OBG/docs/DynamoPython/TemasAdicionales/02FilterElementCollector",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-DynamoPython/04-TemasAdicionales/02FilterElementCollector.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guiaDynamoAvanzado",previous:{title:"1. Selecci\xf3n de elementos de Revit",permalink:"/dynamoPythonGuia-OBG/docs/DynamoPython/TemasAdicionales/01Selection"},next:{title:"3. PyRevit",permalink:"/dynamoPythonGuia-OBG/docs/DynamoPython/TemasAdicionales/03PyRevit"}},a={},c=[{value:"2.1. FilteredElementCollector",id:"21-filteredelementcollector",level:2},{value:"2.2. Ejemplos",id:"22-ejemplos",level:2},{value:"2.3. Ejercicios",id:"23-ejercicios",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"2-filtrando-elementos",children:"2. Filtrando Elementos"}),"\n",(0,o.jsx)(t.h2,{id:"21-filteredelementcollector",children:"2.1. FilteredElementCollector"}),"\n",(0,o.jsxs)(t.p,{children:["Recordemos que Revit es una basede datos, en donde encontraremos muchos objetos,\r\nde los cuales la mayoria son objetos de la clase Element. Obtener estos elementos peude resultar uan tarea cotidiana.\r\nPara ello Revit API tiene una clase denominada ",(0,o.jsx)(t.code,{children:"FilteredElementCollector"}),",la cual nos sirve para recolectar\r\nelementos del proyecto de Revit."]}),"\n",(0,o.jsx)(t.h2,{id:"22-ejemplos",children:"2.2. Ejemplos"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-py",children:"# get category object\r\nobj = System.Enum.ToObject(BuiltInCategory, cat.Id)\r\n\r\n# create category filter by category object\r\nfilter = ElementCategoryFilter(obj)\r\n\r\n# collect filtered elements by category\r\nelements = FilteredElementCollector(doc).WherePasses(filter).WhereElementIsNotElementType().ToElements()\n"})}),"\n",(0,o.jsx)(t.h2,{id:"23-ejercicios",children:"2.3. Ejercicios"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Crear un Python Script que devulva FilledRegion by Name"}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var o=n(6540);const l={},r=o.createContext(l);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);