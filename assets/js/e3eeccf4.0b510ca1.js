"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4033],{3942:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=o(4848),i=o(8453);const a={sidebar_position:1},t="1. Revit API",s={id:"RevitAPI/01RevitAPI",title:"1. Revit API",description:"1.1. API (Application Programming Interface)",source:"@site/docs/03-RevitAPI/01RevitAPI.mdx",sourceDirName:"03-RevitAPI",slug:"/RevitAPI/01RevitAPI",permalink:"/dynamoPythonGuia-OBG/docs/RevitAPI/01RevitAPI",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-RevitAPI/01RevitAPI.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Revit API",permalink:"/dynamoPythonGuia-OBG/docs/category/revit-api"},next:{title:"2. Objetos Dynamo Revit",permalink:"/dynamoPythonGuia-OBG/docs/RevitAPI/02ConversioNObjetosDynamoRevit"}},c={},l=[{value:"1.1. API (Application Programming Interface)",id:"11-api-application-programming-interface",level:2},{value:"1.2. \xbfComo funciona la Revit API?",id:"12-como-funciona-la-revit-api",level:2},{value:"1.3. Enumeration Class",id:"13-enumeration-class",level:2},{value:"1.4. Ejemplo Practico Clase TaskDialog",id:"14-ejemplo-practico-clase-taskdialog",level:2},{value:"1.5. Variables principales en Revit",id:"15-variables-principales-en-revit",level:2},{value:"1.7. Uso de RevitLookup",id:"17-uso-de-revitlookup",level:2},{value:"1.8. Plantilla .py para un Python Script",id:"18-plantilla-py-para-un-python-script",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"1-revit-api",children:"1. Revit API"}),"\n",(0,r.jsx)(n.h2,{id:"11-api-application-programming-interface",children:"1.1. API (Application Programming Interface)"}),"\n",(0,r.jsx)(n.p,{children:'API significa "Interfaz de Programaci\xf3n de Aplicaciones" (Application Programming Interface en ingl\xe9s). Es un conjunto de reglas, protocolos y herramientas que permiten a diferentes software interactuar entre s\xed.'}),"\n",(0,r.jsx)(n.p,{children:"En t\xe9rminos simples, un API define c\xf3mo un software debe interactuar con otro, proporcionando una interfaz clara y bien definida para que los desarrolladores puedan utilizar las funciones y servicios ofrecidos por otro programa o plataforma."}),"\n",(0,r.jsx)(n.h2,{id:"12-como-funciona-la-revit-api",children:"1.2. \xbfComo funciona la Revit API?"}),"\n",(0,r.jsx)(n.p,{children:"En contexto general podemos mencionar que existen principalmente dos Interfaces para interactuar con Revit:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"API (Interfaz de Programaci\xf3n de Aplicaciones):"}),"\r\nDise\xf1ada para que los desarrolladores puedan interactuar con un programa de forma program\xe1tica, (A traves de c\xf3digo) Por lo general, las APIs no proporcionan una interfaz visual directa para que los usuarios interact\xfaen con el software"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GUI (Interfaz Gr\xe1fica de Usuario):"}),"\r\nes una forma visual que permite a los usuarios interactuar con un programa mediante elementos gr\xe1ficos como ventanas, botones, men\xfas y otros controles. Est\xe1n dise\xf1adas para que los usuarios puedan interactuar de forma intuitiva con el software sin necesidad de conocer o escribir c\xf3digo."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsx)("img",{src:o(4748).A,alt:"InterfacesRevit"})}),"\n",(0,r.jsx)(n.p,{children:"La Revit API es una interfaz de programaci\xf3n de aplicaciones (API, por sus siglas en ingl\xe9s) proporcionada por Autodesk para  Autodesk Revit."}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{}),(0,r.jsx)(n.p,{children:"La API de Revit permite a los desarrolladores crear scripts, complementos y aplicaciones personalizadas que pueden interactuar con los modelos de Revit y realizar una variedad de tareas automatizadas. Esto incluye la creaci\xf3n, modificaci\xf3n y eliminaci\xf3n de elementos del modelo, la generaci\xf3n de informes personalizados, el intercambio de datos con otros sistemas y la automatizaci\xf3n de flujos de trabajo espec\xedficos."})]}),"\n",(0,r.jsx)(n.h2,{id:"13-enumeration-class",children:"1.3. Enumeration Class"}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.code,{children:"C#"}),", una enumeraci\xf3n (tambi\xe9n conocida como ",(0,r.jsx)(n.code,{children:"enum"}),") es un tipo de datos que permite definir un conjunto de constantes con nombre. Estas constantes representan valores discretos y espec\xedficos que son \xfatiles cuando necesitas representar un conjunto fijo de opciones o estados en tu c\xf3digo."]}),"\n",(0,r.jsx)(n.p,{children:"En terminos simples podemos decir que una enum es una clase especail que no tiene metodos, no tiene propiedades y practicamente es una lisrta de objetos prestablecida."}),"\n",(0,r.jsx)(n.p,{children:"Para usar una de las opciones de un enum se debe seguir la siguiente sintaxis:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"import clr\r\n\r\nclr.AddReference([nombre_Biblioteca])\r\nfrom [Namespace] import [nombre_Enum]\r\n\r\n\r\nobjetoEnum = [nombre_Enum].[nombre_Opcion]\n"})}),"\n",(0,r.jsx)(n.p,{children:"donde :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.code,{children:"nombre_Biblioteca"}),":"]})," Nombre la biblioteca a la cual pertenece el ",(0,r.jsx)(n.code,{children:"enum"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.code,{children:"Namespace"}),":"]})," Nombre del namespace del ",(0,r.jsx)(n.code,{children:"enum"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.code,{children:"nombre_Enum"}),":"]})," Nombre del ",(0,r.jsx)(n.code,{children:"enum"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.code,{children:"nombre_Opcion"}),":"]})," Nombre de la opci\xf3n del ",(0,r.jsx)(n.code,{children:"enum"})]}),"\n"]}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)(n.strong,{children:["Ejemplo Enum ",(0,r.jsx)(n.code,{children:"TaskDialogIcon"})]})}),(0,r.jsxs)(n.p,{children:["En este ejemplo se muestra el uso del enum ",(0,r.jsx)(n.code,{children:"TaskDialogIcon"}),", primero mostramos la documentaci\xf3n del mismo:"]}),(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsx)("img",{style:{maxWidth:"500px"},src:o(3685).A,alt:"ejemploEnumTaskDialogIcon"})}),(0,r.jsx)(n.p,{children:"Luego entonces usar\xedamos el enum de la siguiente manera:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'# Importaci\xf3n de bibliotecas\r\nimport clr\r\n\r\nclr.AddReference("RevitAPIUI")\r\nfrom Autodesk.Revit.UI import TaskDialogIcon\r\n\r\n# Utilizando el icono de error del enum\r\nobjetoEnum = TaskDialogIcon.TaskDialogIconError\n'})})]}),"\n",(0,r.jsx)(n.h2,{id:"14-ejemplo-practico-clase-taskdialog",children:"1.4. Ejemplo Practico Clase TaskDialog"}),"\n",(0,r.jsxs)(n.p,{children:["El siguiente ejemplo, muestra todo lo que hemos aprendido con relacion a las propiedades y metodos, usando la clase de Revit ",(0,r.jsx)(n.strong,{children:"TaskDialog"}),":"]}),"\n",(0,r.jsxs)(a,{open:!0,children:[(0,r.jsx)("summary",{children:(0,r.jsx)(n.strong,{children:"Ejemplo TaskDialog"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'import clr\r\n\r\nclr.AddReference(\'RevitAPIUI\')\r\n#from Autodesk.Revit.UI import TaskDialog, TaskDialogIcon, TaskDialogCommonButtons\r\nfrom Autodesk.Revit.UI import *\r\n\r\n\r\n# Puertos de entrada\r\ntitulo = IN[0]\r\ncontenido = IN[1]\r\n\r\n# Instanciando un objeto TaskDialog\r\ninstanciaTaskDialog = TaskDialog("Este es un titulo inicial")\r\n\r\n# Modificar la propiedad "Title", "MainInstruction", "MainContent", "FooterText"\r\ninstanciaTaskDialog.Title = titulo\r\ninstanciaTaskDialog.MainInstruction = "Este seria un contenido 1"\r\ninstanciaTaskDialog.MainContent = contenido\r\ninstanciaTaskDialog.FooterText = "Este es pie de pagina"\r\n\r\n# Modificar la propiedad "EnableMarqueeProgressBar"\r\ninstanciaTaskDialog.EnableMarqueeProgressBar = True\r\n\r\n# -----\x3e Propiedades Enum <-----\r\n# Modificar la propiedad "MainIcon" --\x3e TaskDialogIcon (Enum)\r\ninstanciaTaskDialog.MainIcon = TaskDialogIcon.TaskDialogIconShield\r\n# Modificar la propiedad "CommonButtons" --\x3e TaskDialogCommonButtons (Enum)\r\ninstanciaTaskDialog.CommonButtons = TaskDialogCommonButtons.Ok\r\n\r\n# Llamamos al m\xe9todo "Show()"\r\nresult = instanciaTaskDialog.Show()\r\n\r\n# Devolvemos el resultado que es "TaskDialogResult"\r\nOUT = result\n'})})]}),"\n",(0,r.jsx)(n.h2,{id:"15-variables-principales-en-revit",children:"1.5. Variables principales en Revit"}),"\n",(0,r.jsx)(n.p,{children:"Anteriormente mencionamos que dentro de Revit todo lo que encontremos es un objeto perteneciente a una determinada clase,\r\ny en este contexto existe unos objetos comunes que estaremos usando a menudo, estos objetos pertenecen a las siguientes clases:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"UIApplication"})})," : Un objeto que representa una sesi\xf3n activa de la interfaz de usuario de Autodesk Revit, proporcionando acceso a m\xe9todos de personalizaci\xf3n de la interfaz de usuario, eventos, la ventana principal y el documento activo."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Application"})})," : Un objeto que representa la aplicaci\xf3n Autodesk Revit, proporcionando acceso a documentos, opciones y otros datos y configuraciones de la aplicaci\xf3n en toda la aplicaci\xf3n."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"UIDocument"})})," : Un objeto que representa un proyecto de Autodesk Revit abierto en la interfaz de usuario de Revit."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Document"})})," : Un objeto que representa un proyecto de Revit abierto."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import clr\r\n\r\nclr.AddReference("RevitServices")\r\nfrom RevitServices.Persistence import DocumentManager\r\n\r\n# Principales variables que tal vez usemos\r\nuiapp = DocumentManager.Instance.CurrentUIApplication #---\x3e UIApplication\r\napp = uiapp.Application #---\x3e Application\r\nuidoc = DocumentManager.Instance.CurrentUIApplication.ActiveUIDocument #---\x3e UIDocument\r\ndoc = DocumentManager.Instance.CurrentDBDocument #---\x3e Document\n'})}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(n.strong,{children:"Ejemplo: Obtener Version de Revit"})}),(0,r.jsx)(n.p,{children:"En este ejemplo se muestra como obetenr la version de Revit que se esta ejecutando"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"uiapp = DocumentManager.Instance.CurrentUIApplication\r\n\r\n# Gets revit version number\r\nrvtVersion = uiapp.Application.VersionNumber\r\n# resaltado--next-line\r\nOUT = rvtVersion\n"})})]}),"\n",(0,r.jsx)(n.h2,{id:"17-uso-de-revitlookup",children:"1.7. Uso de RevitLookup"}),"\n",(0,r.jsx)(n.h2,{id:"18-plantilla-py-para-un-python-script",children:"1.8. Plantilla .py para un Python Script"}),"\n",(0,r.jsxs)(n.p,{children:["En nuestros Python Scripts la mayor\xeda de veces tendremos c\xf3digo repetitivo, por lo que conviene tener una plantilla con este c\xf3digo repetitivo, de forma tal que cuando editemos nuestro nodo Python Script, podamos borrar lo que no necesitemos y quedarnos con lo que si.\r\nDynamo permite realizar estas configuraciones para ello podemos ingresar al ",(0,r.jsx)(n.a,{href:"https://primer.dynamobim.org/10_Custom-Nodes/10-6_Python-Templates.html",children:"Dyanmo Primer"})," para obtener mayor informaci\xf3n."]}),"\n",(0,r.jsx)(n.p,{children:"Aqui te dejamos una plantilla que normalmente utilizamos:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"import sys\r\nimport clr\r\nimport math\r\n\r\nclr.AddReference('System')\r\nfrom System.Collections.Generic import List\r\n\r\n# Import Geometry dynamo\r\nclr.AddReference('ProtoGeometry')\r\nfrom Autodesk.DesignScript.Geometry import *\r\nfrom Autodesk.DesignScript.Geometry import Curve as CurvaDynamo\r\n\r\n# import DCCoreNodes\r\nclr.AddReference('DSCoreNodes')\r\nimport DSCore\r\nfrom DSCore import *\r\n\r\n# Import Revit API\r\nclr.AddReference('RevitAPI')\r\nfrom Autodesk.Revit.DB import *\r\nfrom Autodesk.Revit.DB import Curve as CurvaRevit\r\nfrom Autodesk.Revit.DB.Architecture import *\r\nfrom Autodesk.Revit.DB.Structure import *\r\n\r\n# Import Revit APIUI\r\nclr.AddReference('RevitAPIUI')\r\nfrom Autodesk.Revit.UI import *\r\n\r\n# import Revit Nodes and extensions\r\nclr.AddReference(\"RevitNodes\")\r\nimport Revit\r\nclr.ImportExtensions(Revit.Elements)\r\nclr.ImportExtensions(Revit.GeometryConversion)\r\n\r\n\"\"\"\r\n#Conversiones de Objetos de Revit a Dynamo y Viceversa\r\n#---------Revit a Dynamo\r\n#Elements\r\nElement.ToDSType(bool); #true if it's an element generated by Revit\r\n#Geometry\r\nXYZ.ToPoint() > Point\r\nXYZ.ToVector() > Vector\r\nPoint.ToProtoType() > Point\r\nList<XYZ>.ToPoints() > List<Point>\r\nUV.ToProtoType() > UV\r\nCurve.ToProtoType() > Curve\r\nCurveArray.ToProtoType() > PolyCurve\r\nPolyLine.ToProtoType() > PolyCurve\r\nPlane.ToPlane() > Plane\r\nSolid.ToProtoType() > Solid\r\nMesh.ToProtoType() > Mesh\r\nIEnumerable<Mesh>.ToProtoType() > Mesh[]\r\nFace.ToProtoType() > IEnumerable<Surface>\r\nTransform.ToCoordinateSystem() > CoordinateSystem\r\nBoundingBoxXYZ.ToProtoType() > BoundingBox\r\n\r\n#---------Dynamo a Revit\r\n#Elements\r\nElement.InternalElement\r\n#Geometry\r\nPoint.ToRevitType() > XYZ\r\nVector.ToRevitType() > XYZ\r\nPlane.ToPlane() > Plane\r\nList<Point>.ToXyzs() > List<XYZ>\r\nCurve.ToRevitType() > Curve\r\nPolyCurve.ToRevitType() > CurveLoop\r\nSurface.ToRevitType() > IList<GeometryObject>\r\nSolid.ToRevitType() > IList<GeometryObject>\r\nMesh.ToRevitType() > IList<GeometryObject>\r\nCoordinateSystem.ToTransform() > Transform\r\nCoordinateSystem.ToRevitBoundingBox() > BoundingBoxXYZ\r\nBoundingBox.ToRevitType() > BoundingBoxXYZ\r\n\"\"\"\r\n\r\n\r\n# Import Document Manager and TransactionManager\r\nclr.AddReference(\"RevitServices\")\r\nimport RevitServices\r\nfrom RevitServices.Persistence import DocumentManager\r\nfrom RevitServices.Transactions import TransactionManager\r\n\r\n# Principales variables que tal vez usemos\r\nuiapp = DocumentManager.Instance.CurrentUIApplication\r\napp = uiapp.Application\r\ndoc = DocumentManager.Instance.CurrentDBDocument\r\nuidoc = DocumentManager.Instance.CurrentUIApplication.ActiveUIDocument\r\n\r\n# Utilizaci\xf3n de Transacciones\r\nTransactionManager.Instance.EnsureInTransaction(doc)\r\n\r\nTransactionManager.Instance.TransactionTaskDone()\r\n\r\nOUT = 0\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},4748:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/InterfacesRevit-39f02450e1f39ca75b34620961a96d5c.png"},3685:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/ejemploEnumTaskDialogIcon-62cb2e5c874331808ad5dcf956dd294b.png"},8453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>s});var r=o(6540);const i={},a=r.createContext(i);function t(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);