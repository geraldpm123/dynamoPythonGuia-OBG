"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4261],{1248:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var i=n(4848),o=n(8453),a=n(2364);const t="import clr\r\n\r\n#Import Revit API\r\nclr.AddReference('RevitAPI')\r\nfrom Autodesk.Revit.DB import *\r\n\r\n# Linea que se va acotar\r\ndetailLine = UnwrapElement(IN[0])\r\n\r\nlinea = detailLine.GeometryCurve\r\n\r\n# Obtenemos los references de la linea\r\nref1 = linea.GetEndPointReference(0)\r\nref2 = linea.GetEndPointReference(1)\r\n\r\n\r\nOUT = ref1, ref2\r\n\r\n# CREAR LA COTA A PARTIR DE REFERENCES Y LINEA REFERENCE\r\n#(trasladar la linea bse para este ejemplo con el nodo Translate)\r\nimport clr\r\n\r\n#Import Revit API\r\nclr.AddReference('RevitAPI')\r\nfrom Autodesk.Revit.DB import *\r\n\r\n\r\n#import Revit Nodes and extensions\r\nclr.AddReference(\"RevitNodes\")\r\nimport Revit\r\nclr.ImportExtensions(Revit.Elements)\r\nclr.ImportExtensions(Revit.GeometryConversion)\r\n\r\n\r\n#import Document Manager and TransactionManager\r\nclr.AddReference(\"RevitServices\")\r\nimport RevitServices\r\nfrom RevitServices.Persistence import DocumentManager\r\nfrom RevitServices.Transactions import TransactionManager\r\n\r\n#Principales variables que tal vez usemos\r\ndoc = DocumentManager.Instance.CurrentDBDocument\r\ndocCreate = doc.Create\r\n\r\nvistaActual = doc.ActiveView\r\nlineaUbicacion = IN[0].ToRevitType()\r\nlistaReferences = IN[1]\r\n\r\n#Creamos un referenceArray vacio\r\nrefArray = ReferenceArray()\r\n\r\n#Ahora llenamos el refArray con los references de la linea\r\nfor reff in listaReferences:\r\n    refArray.Append(reff)\r\n\r\n\r\nTransactionManager.Instance.EnsureInTransaction(doc)\r\ncota = docCreate.NewDimension(vistaActual, lineaUbicacion, refArray)\r\nTransactionManager.Instance.TransactionTaskDone()\r\n\r\nOUT = cota",s={sidebar_position:6},c="6. Ejemplos Intermedio Avanzados",l={id:"RevitAPI/06EjemplosIntermedio",title:"6. Ejemplos Intermedio Avanzados",description:"Ejemplo: Pintado Aleatorio de Muros",source:"@site/docs/03-RevitAPI/06EjemplosIntermedio.mdx",sourceDirName:"03-RevitAPI",slug:"/RevitAPI/06EjemplosIntermedio",permalink:"/dynamoPythonGuia-OBG/docs/RevitAPI/06EjemplosIntermedio",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-RevitAPI/06EjemplosIntermedio.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"5. Ejemplos B\xe1sicos",permalink:"/dynamoPythonGuia-OBG/docs/RevitAPI/05EjemplosBasicos"},next:{title:"Temas Adicionales",permalink:"/dynamoPythonGuia-OBG/docs/category/temas-adicionales"}},d={},m=[{value:"6.1. Ejercicios Propuestos",id:"61-ejercicios-propuestos",level:2}];function p(e){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"6-ejemplos-intermedio-avanzados",children:"6. Ejemplos Intermedio Avanzados"}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(r.strong,{children:"Ejemplo: Pintado Aleatorio de Muros"})}),(0,i.jsx)(r.p,{children:"En este ejemplo como pintar un conjunto de elementos de forma aleatoria en la Vista Activa."}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-py",children:"elementos = UnwrapElement(IN[0])\r\n\r\nfor elem in elementos:\r\n  colorRandom = Color(random.randint(0, 255), random.randint(0, 255), random.randint(0, 255))\r\n\r\n\n"})})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(r.strong,{children:"Ejemplo: Crear Cota para una Linea"})}),(0,i.jsx)(r.p,{children:"En este ejemplo se muestra como eliminar un unico elemento."}),(0,i.jsx)(a.A,{language:"py",children:t})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(r.strong,{children:"Ejemplo: Crear Cota para un Muro"})}),(0,i.jsx)(r.p,{children:"En este ejemplo se muestra como eliminar un unico elemento."}),(0,i.jsx)(a.A,{language:"py",children:t})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(r.strong,{children:"Ejemplo: Alinear Horizontalmente TextNotes"})}),(0,i.jsx)(r.p,{children:"En este ejemplo se muestra como alinear varios TextNotes ingresados a un PythonScript"})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(r.strong,{children:"Ejemplo: Copiar Filtros de Visibilidad de uan vista a otra"})}),(0,i.jsx)(r.p,{children:"En este ejemplo se muestra como copiar los filtros y modificaciones de visibilida de una vista a otra."}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-py",children:"'''\r\nCOPY AND PASTE FILTERS - VIEW TO VIEWS\r\n'''\r\n#__author__ = 'min.naung/mgjean @https://twentytwo.space/contact'\r\n# COPY PASTE FILTERS\r\n\r\nimport clr\r\nclr.AddReference(\"RevitAPI\")\r\nfrom Autodesk.Revit.DB import *\r\n\r\nclr.AddReference(\"RevitServices\")\r\nfrom RevitServices.Persistence import DocumentManager\r\nfrom RevitServices.Transactions import TransactionManager\r\n\r\ndoc = DocumentManager.Instance.CurrentDBDocument\r\n\r\n# Puertos de entrada\r\nvistaCopiado = UnwrapElement(IN[0]) # Vista d ela cual se va copiar los filtros\r\nvistaPegado = IN[1] # Vista en la cual se va pegar los filtros\r\n\r\nTransactionManager.Instance.EnsureInTransaction(doc)\r\n# iteramos sobre cada Id de la vista de copiado\r\nfor id in vistaCopiado.GetFilters():\r\n    # Filter override\r\n    vistaPegado.SetFilterOverrides(id,vistaCopiado.GetFilterOverrides(id))\r\n    # Filter visibility\r\n    vistaPegado.SetFilterVisibility(id,vistaCopiado.GetFilterVisibility(id))\r\nTransactionManager.Instance.TransactionTaskDone()\r\n\r\nOUT = vistaPegado\n"})})]}),"\n",(0,i.jsx)(r.h2,{id:"61-ejercicios-propuestos",children:"6.1. Ejercicios Propuestos"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Crear un Python Script que cree cotas de largo y ancho para una seccion de viga."}),"\n",(0,i.jsx)(r.li,{children:"Crear un Python Script que aline ViewPorts de un plano"}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}}}]);