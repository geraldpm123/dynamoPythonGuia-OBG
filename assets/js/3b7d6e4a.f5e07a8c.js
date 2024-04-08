"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8487],{6576:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>t,toc:()=>d});var a=o(4848),s=o(8453);const r={sidebar_position:4},i="4. Objetos en Acci\xf3n",t={id:"DynamoPython/POO/04ObjetosEnAccion",title:"4. Objetos en Acci\xf3n",description:"4.1. Uso de Propiedades y llamada a M\xe9todos de Objeto",source:"@site/docs/02-DynamoPython/02-POO/04ObjetosEnAccion.md",sourceDirName:"02-DynamoPython/02-POO",slug:"/DynamoPython/POO/04ObjetosEnAccion",permalink:"/dynamoPythonGuia-OBG/docs/DynamoPython/POO/04ObjetosEnAccion",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-DynamoPython/02-POO/04ObjetosEnAccion.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guiaDynamoAvanzado",previous:{title:"3. Archivos de Documentaci\xf3n",permalink:"/dynamoPythonGuia-OBG/docs/DynamoPython/POO/03ArchivosDocumentacion"},next:{title:"Revit API",permalink:"/dynamoPythonGuia-OBG/docs/category/revit-api"}},c={},d=[{value:"4.1. Uso de Propiedades y llamada a M\xe9todos de Objeto",id:"41-uso-de-propiedades-y-llamada-a-m\xe9todos-de-objeto",level:2},{value:"4.2. Creaci\xf3n de Objetos",id:"42-creaci\xf3n-de-objetos",level:2},{value:"4.3. Importaci\xf3n de Bibliotecas",id:"43-importaci\xf3n-de-bibliotecas",level:2},{value:"4.4. Metodos Estaticos para instanciar un objeto",id:"44-metodos-estaticos-para-instanciar-un-objeto",level:2},{value:"4.4. Constructores para instanciar un objeto",id:"44-constructores-para-instanciar-un-objeto",level:2}];function l(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"4-objetos-en-acci\xf3n",children:"4. Objetos en Acci\xf3n"}),"\n",(0,a.jsx)(n.h2,{id:"41-uso-de-propiedades-y-llamada-a-m\xe9todos-de-objeto",children:"4.1. Uso de Propiedades y llamada a M\xe9todos de Objeto"}),"\n",(0,a.jsxs)(n.p,{children:["Para usar una propiedad o un m\xe9todo de un objeto de una Clase en Python, primero necesitas tener una instancia v\xe1lida de esa clase. Luego, puedes acceder a las propiedades y m\xe9todos de esa instancia utilizando el operador de punto (",(0,a.jsx)(n.code,{children:"."}),")."]}),"\n",(0,a.jsxs)(n.p,{children:["Supongamos que tienes una clase ",(0,a.jsx)(n.strong,{children:"Persona"})," con una propiedad ",(0,a.jsx)(n.code,{children:"Nombre"})," y un m\xe9todo ",(0,a.jsx)(n.code,{children:"Saludar()"}),". Para usarlos, primero creas un objeto de la clase Persona y luego accedes a sus propiedades y m\xe9todos de esta manera:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# Se debe tener una instancia de la Clase "Persona"\r\npersona1 # Este es un objeto de la clase "Persona" previamente definido\r\n\r\n# Usar la propiedad Nombre\r\nnombreAnterior = persona1.Nombre # Leyendo el valor de la propiedad "Nombre"\r\npersona1.Nombre = "Juan" # Estableciendo un nuevo valor a la propiedad "Nombre"\r\n# OJO: solo se puede modificar el valor de una propiedad si tiene el m\xe9todo de acceso "get"\r\n\r\n# Usar el m\xe9todo Saludar\r\npersona1.Saludar()\n'})}),"\n",(0,a.jsxs)(n.admonition,{title:"Ejemplo: Acceso Propiedades y M\xe9todos de objetos de Dynamo",type:"note",children:[(0,a.jsxs)(n.p,{children:["El siguiente ejemplo muestra un script de Dynamo en cual tiene dos ",(0,a.jsx)(n.code,{children:"Python Script"})," los cuales reciben objetos ya creados para asi utilizar propiedades y llamar m\xe9todos, para esto se hizo uso de la documentaci\xf3n para Clases de Dynamo."]}),(0,a.jsx)("div",{style:{textAlign:"center",maxWidth:"750px"},children:(0,a.jsx)("img",{style:{maxWidth:"750px"},src:o(757).A,alt:"PropiedadesYMetodosDynamo"})}),(0,a.jsxs)(n.p,{children:["El contenido de los ",(0,a.jsx)(n.code,{children:"Python Script"})," son los siguientes:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",metastring:'title="Python Script 01"',children:'# Recibe un objeto Line desde el puerto IN[0]\r\nlinea1 = IN[0]\r\n\r\n# Valor de la propiedad "Length"\r\nlong = linea1.Length\r\n\r\n# Valor de la propiedad "IsClosed"\r\nesCurvaCerrada = linea1.IsClosed\r\n\r\n# Valor de la propiedad "Direction"\r\nvecDirection = linea1.Direction\r\n\r\n# Devolviendo objetos al entorno Dynamo\r\nOUT = long, esCurvaCerrada, vecDirection\n'})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",metastring:'title="Python Script 02"',children:'# Puertos de entrada del Python Script\r\nlinea1 = IN[0] #objeto de la clase "Line"\r\npuntoRot = IN[1] # objeto de la clase "Point"\r\nvecRot = IN[2] # objeto de la clase "Vector"\r\n\r\n\r\n# Llamando al m\xe9todo "Reverse()" para invertir la Linea\r\nlineaInvert = linea1.Reverse()\r\n\r\n# Llamando al m\xe9todo "DoesIntersect()" para evaluar la intersecci\xf3n de la linea con el puntoRot\r\nseInterseca = linea1.DoesIntersect(puntoRot)\r\n\r\n# Llamando al m\xe9todo "ExtendEnd()" para extender la linea un valor de 2.5\r\nlineaEstirada = linea1.ExtendEnd(2.5)\r\n\r\n# Llamando al m\xe9todo "PointAtParameter()" para obtener el punto central de la linea estirada\r\npuntoCentral = lineaEstirada.PointAtParameter(0.5)\r\n\r\n# Llamando al m\xe9todo "Rotate()" para rotar la lineaEstirada 15\xb0\r\nlineaRotada = lineaEstirada.Rotate(puntoRot, vecRot, 15)\r\n\r\n# Devolviendo objetos al entorno Dynamo\r\nOUT = lineaInvert, seInterseca, lineaEstirada, puntoCentral, lineaRotada\n'})})]}),"\n",(0,a.jsx)(n.h2,{id:"42-creaci\xf3n-de-objetos",children:"4.2. Creaci\xf3n de Objetos"}),"\n",(0,a.jsx)(n.p,{children:"Como vimos en el punto anterior, se pudo acceder a las propiedades y m\xe9todos de un objeto, pero para ello el objeto debe existir, entonces ahora veremos como crear objetos utilizando la documentaci\xf3n de la API p\xfablica."}),"\n",(0,a.jsx)(n.p,{children:"Se puede instanciar o crear objetos de\r\nuna determinada clase varias veces seg\xfan sea necesario, y para ello se suele usar:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Constructor"}),": Un m\xe9todo especial definido en la Clase."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"M\xe9todos Est\xe1ticos"}),": M\xe9todos de uso m\xfaltiple que pueden usarse para crear objetos, Estos m\xe9todos se llaman desde la Clase."]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{title:"Cuidado!",type:"danger",children:(0,a.jsxs)(n.p,{children:["No todas las clases ofrecen ",(0,a.jsx)(n.strong,{children:"Constructores"})," y/o ",(0,a.jsx)(n.strong,{children:"M\xe9todos Est\xe1ticos"})," para instanciar objetos, en algunos casos tendremos que usar clases terceras, ademas que existen Clases que no permiten ser instanciadas usando la API p\xfablica."]})}),"\n",(0,a.jsx)(n.h2,{id:"43-importaci\xf3n-de-bibliotecas",children:"4.3. Importaci\xf3n de Bibliotecas"}),"\n",(0,a.jsxs)(n.p,{children:["Para poder usar los ",(0,a.jsx)(n.strong,{children:"M\xe9todos Est\xe1ticos"})," y los ",(0,a.jsx)(n.strong,{children:"Constructores"}),", es necesario realizar las importaciones de bibliotecas, ya que en ambos casos se usa la llamada a la clase directamente."]}),"\n",(0,a.jsx)(n.p,{children:"Ademas, importar bibliotecas en tu c\xf3digo te permite aprovechar el trabajo previo de otros desarrolladores, aumentar la productividad, mejorar la eficiencia y la fiabilidad de tu aplicaci\xf3n, y seguir las mejores pr\xe1cticas de desarrollo de software."}),"\n",(0,a.jsxs)(n.p,{children:["En cap\xedtulos anteriores usamos pro ejemplo la biblioteca ",(0,a.jsx)(n.code,{children:"math"}),", esta biblioteca esta incluida en el lenguaje Python asi como otras bibliotecas como ",(0,a.jsx)(n.code,{children:"sys"}),", ",(0,a.jsx)(n.code,{children:"os"}),", ",(0,a.jsx)(n.code,{children:"random"}),", etc."]}),"\n",(0,a.jsxs)(n.p,{children:["En Python, existe una biblioteca llamada ",(0,a.jsx)(n.code,{children:"clr"}),' que significa "Common Language Runtime" (Tiempo de Ejecuci\xf3n de Lenguaje Com\xfan, en espa\xf1ol). Es una parte fundamental del entorno de ejecuci\xf3n de .NET Framework desarrollado por Microsoft, esta biblioteca nos permitir\xe1 utilizar bibliotecas hechas en C# (las que usaremos de Dynamo y Revit).\r\nEstas bibliotecas C# que com\xfanmente utilizaremos en nuestros Python Script tenemos:']}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"ProtoGeometry:"})," Biblioteca que contiene las clases geom\xe9tricas de Dynamo tales como ",(0,a.jsx)(n.code,{children:"Point"}),", ",(0,a.jsx)(n.code,{children:"Line"}),", ",(0,a.jsx)(n.code,{children:"Solid"}),", etc"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"RevitAPI:"})," Biblioteca que contiene las clases de la base de datos de Revit como ",(0,a.jsx)(n.code,{children:"Wall"}),", ",(0,a.jsx)(n.code,{children:"Element"}),", ",(0,a.jsx)(n.code,{children:"FamilyInstace"}),", etc"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"RevitAPIUI:"})," Biblioteca que contiene las clases de manejo de interfaz de usuario de Revit como ",(0,a.jsx)(n.code,{children:"TaskDialog"}),", ",(0,a.jsx)(n.code,{children:"Selection"}),", etc"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"RevitServices:"})," Biblioteca qie contiene clases para acceso de variables de documento de Revit y procesos como ",(0,a.jsx)(n.code,{children:"DocumentManager"})," y ",(0,a.jsx)(n.code,{children:"TransactionManager"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"RevitNodes:"})," Biblioteca que contiene clases de extension para convertir objetos de Dynamo hacia Revit y viceversa."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["La importaci\xf3n de bibliotecas de C# a traves de la biblioteca ",(0,a.jsx)(n.code,{children:"clr"})," tiene la siguiente sintaxis:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"import clr\r\n\r\nclr.AddReference([nombre_Biblioteca])\r\nfrom [Namespace] import [Clase]\n"})}),"\n",(0,a.jsx)(n.p,{children:"En esta sintaxis se debe proveer la siguiente informaci\xf3n:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsxs)(n.strong,{children:[(0,a.jsx)(n.code,{children:"[nombre_Biblioteca]"}),":"]})," ",(0,a.jsx)(n.code,{children:"string"})," del nombre de la ",(0,a.jsx)(n.em,{children:"Biblioteca"})," que contiene a la Clase"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsxs)(n.strong,{children:[(0,a.jsx)(n.code,{children:"[Namespace]"}),":"]})," Nombre del ",(0,a.jsx)(n.em,{children:"Namespace"})," completo de la Clase a usar"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsxs)(n.strong,{children:[(0,a.jsx)(n.code,{children:"[Clase]"}),":"]})," Nombre de la ",(0,a.jsx)(n.em,{children:"Clase"})," (se puede usar ",(0,a.jsx)(n.code,{children:"*"})," para indicar que se cargar\xe1 todas las clases existentes del Namespace)"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Para mostrar como importamos bibliotecas, mostramos el siguiente c\xf3digo de ejemplo:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"# Importaci\xf3n de bibliotecas\r\nimport sys\r\nimport clr\r\nimport math\r\n\r\nclr.AddReference('System')\r\nfrom System.Collections.Generic import List\r\n\r\n#Import Geometry dynamo\r\nclr.AddReference('ProtoGeometry')\r\nfrom Autodesk.DesignScript.Geometry import *\r\n\r\n#import DCCoreNodes\r\nclr.AddReference('DSCoreNodes')\r\nfrom DSCore import *\r\n\r\n#Import Revit API\r\nclr.AddReference('RevitAPI')\r\nfrom Autodesk.Revit.DB import *\r\nfrom Autodesk.Revit.DB.Architecture import *\r\nfrom Autodesk.Revit.DB.Structure import *\r\n\r\n#Import Revit APIUI\r\nclr.AddReference('RevitAPIUI')\r\nfrom Autodesk.Revit.UI import *\r\n\r\n#import Revit Nodes and extensions\r\nclr.AddReference(\"RevitNodes\")\r\nimport Revit\r\nclr.ImportExtensions(Revit.Elements)\r\nclr.ImportExtensions(Revit.GeometryConversion)\r\n\r\n#import Document Manager and TransactionManager\r\nclr.AddReference(\"RevitServices\")\r\nfrom RevitServices.Persistence import DocumentManager\r\nfrom RevitServices.Transactions import TransactionManager\r\n\r\nOUT = 0\n"})}),"\n",(0,a.jsx)(n.h2,{id:"44-metodos-estaticos-para-instanciar-un-objeto",children:"4.4. Metodos Estaticos para instanciar un objeto"}),"\n",(0,a.jsxs)(n.p,{children:["En C# (recordemos que la documentaci\xf3n esta en este lenguaje), los m\xe9todos est\xe1ticos se definen con la palabra clave ",(0,a.jsx)(n.code,{children:"static"})," y pertenecen a la clase en lugar de a una instancia espec\xedfica de la clase. Esto significa que pueden ser invocados sin necesidad de crear una instancia de la clase."]}),"\n",(0,a.jsx)(n.p,{children:"Para utilizar un m\xe9todo est\xe1tico en python, simplemente lo llamas utilizando el nombre de la clase seguido de un punto y luego el nombre del m\xe9todo."}),"\n",(0,a.jsxs)(n.admonition,{title:"Ejemplo: utilizaci\xf3n M\xe9todo Est\xe1tico",type:"note",children:[(0,a.jsxs)(n.p,{children:["Tenemos el m\xe9todo est\xe1tico ",(0,a.jsx)(n.code,{children:"ByCoordinates()"})," de la Clase ",(0,a.jsx)(n.strong,{children:"Point"}),", en la documentaci\xf3n aparece de la siguiente forma:"]}),(0,a.jsx)("div",{style:{textAlign:"center"},children:(0,a.jsx)("img",{style:{maxWidth:"550px"},src:o(9729).A,alt:"MetodoEstaticoByCoordinates"})}),(0,a.jsxs)(n.p,{children:["Podemos notar este m\xe9todo est\xe1tico, y que devuelve un objeto ",(0,a.jsx)(n.strong,{children:"Point"}),", ademas es importante leer a que ",(0,a.jsx)(n.em,{children:"Namespace"})," y ",(0,a.jsx)(n.em,{children:"Biblioteca"})," pertenece para hacer la respectiva importaci\xf3n."]}),(0,a.jsxs)(n.p,{children:["Entonces el c\xf3digo para crear un objeto de la clase ",(0,a.jsx)(n.strong,{children:"Point"})," usando el m\xe9todo ",(0,a.jsx)(n.code,{children:"ByCoordinates()"})," sera el siguiente:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"import clr\r\n\r\nclr.AddReference('ProtoGeometry')\r\nfrom Autodesk.DesignScript.Geometry import Point\r\n\r\n# Instanciando un objeto Point\r\npuntoNuevo = Point.ByCoordinates(0, 0, 0)\n"})})]}),"\n",(0,a.jsx)(n.p,{children:"Ademas de ser \xfatiles para instanciar un objeto, los m\xe9todos est\xe1ticos son \xfatiles en varios escenarios adicionales, como:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Funcionalidad utilitaria: Pueden ser utilizados para definir funciones de utilidad que no dependen del estado de un objeto espec\xedfico."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Inicializaci\xf3n de clase: Pueden ser usados para inicializar variables est\xe1ticas, realizar configuraciones iniciales, etc."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Implementaci\xf3n de patrones de dise\xf1o: En algunos casos, los m\xe9todos est\xe1ticos se utilizan en la implementaci\xf3n de patrones de dise\xf1o como Singleton, Factory, etc."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"44-constructores-para-instanciar-un-objeto",children:"4.4. Constructores para instanciar un objeto"}),"\n",(0,a.jsx)(n.p,{children:"Un constructor es un m\xe9todo especial dentro de una clase que se llama autom\xe1ticamente cuando se crea una nueva instancia de la clase. Su prop\xf3sito principal es inicializar el objeto reci\xe9n creado."}),"\n",(0,a.jsxs)(n.admonition,{title:"Ejemplo: Utilizaci\xf3n Constructor",type:"note",children:[(0,a.jsxs)(n.p,{children:["Tenemos el constructor de la clase ",(0,a.jsx)(n.strong,{children:"TaskDialog"}),", el cual se muestra a continuaci\xf3n:"]}),(0,a.jsx)("div",{style:{textAlign:"center",maxWidth:"650px"},children:(0,a.jsx)("img",{style:{maxWidth:"650px"},src:o(842).A,alt:"constructorTaskDialog"})}),(0,a.jsx)(n.p,{children:"La sintaxis de este m\xe9todo es:"}),(0,a.jsx)("div",{style:{textAlign:"center"},children:(0,a.jsx)("img",{style:{maxWidth:"550px"},src:o(4043).A,alt:"constructorTaskDialogSyntax"})}),(0,a.jsxs)(n.p,{children:["A diferencia de un M\xe9todo Est\xe1tico, el Constructor siempre devuelve una instancia de la misma Clase.\r\nEntonces el c\xf3digo para crear un objeto de la clase ",(0,a.jsx)(n.strong,{children:"TaskDialog"})," usando el m\xe9todo constructor sera el siguiente:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"import clr\r\n\r\nclr.AddReference('RevitAPIUI')\r\nfrom Autodesk.Revit.UI import TaskDialog\r\n\r\n# Instanciando un objeto TaskDialog\r\ninstanciaTaskDialog = TaskDialog(\"Este es un titulo\")\n"})})]}),"\n",(0,a.jsx)(n.p,{children:"Los constructores son \xfatiles porque te permiten inicializar el estado de un objeto cuando se crea, lo que garantiza que est\xe9 en un estado v\xe1lido y coherente desde el principio."})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},9729:(e,n,o)=>{o.d(n,{A:()=>a});const a=o.p+"assets/images/MetodoEstaticoByCoordinates-10c9ed38fe2e7dd1cde06f60e28f658f.png"},757:(e,n,o)=>{o.d(n,{A:()=>a});const a=o.p+"assets/images/PropiedadesYMetodosDynamo-1a5e59c066b447eb029820780f5560fa.png"},842:(e,n,o)=>{o.d(n,{A:()=>a});const a=o.p+"assets/images/constructorTaskDialog-880e7c526b09316d7e5ca1dd45942b6b.png"},4043:(e,n,o)=>{o.d(n,{A:()=>a});const a=o.p+"assets/images/constructorTaskDialogSyntax-875ab7c9581ff301a076c6202add0e74.png"},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>t});var a=o(6540);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);