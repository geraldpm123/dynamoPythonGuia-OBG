"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4783],{318:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>d,default:()=>j,frontMatter:()=>m,metadata:()=>h,toc:()=>u});var r=n(4848),s=n(8453),t=n(2364);const i='muro = UnwrapElement(IN[0])\r\n\r\n# utilizando el m\xe9todo LookupParameter()\r\nparamComent = muro.LookupParameter("Comentarios")\r\nparamLongi = muro.LookupParameter("Longitud")\r\nparamRestBase = muro.LookupParameter("Restricci\xf3n de base")\r\n\r\n# Obteniendo los valores del parameter\r\nval_ParmaCom = paramComent.AsString()\r\nval_paramLongi = paramLongi.AsDouble()\r\nval_paramRestBase = paramRestBase.AsElementId()\r\n\r\nval_paramLongi_2 = paramLongi.AsValueString()\r\n\r\nOUT = val_paramLongi, val_paramLongi_2',o='import clr\r\n\r\nclr.AddReference(\'RevitAPI\')\r\nfrom Autodesk.Revit.DB import BuiltInParameter\r\n\r\n\r\nmuro = UnwrapElement(IN[0])\r\n\r\n# utilizando el metodo LookupParameter()\r\n#paramComent = muro.LookupParameter("Comentarios")\r\nparamComent = muro.get_Parameter(BuiltInParameter.ALL_MODEL_INSTANCE_COMMENTS)\r\n#paramLongi = muro.LookupParameter("Longitud")\r\nparamLongi = muro.get_Parameter(BuiltInParameter.CURVE_ELEM_LENGTH)\r\n#paramRestBase = muro.LookupParameter("Restricci\xf3n de base")\r\nparamRestBase = muro.get_Parameter(BuiltInParameter.WALL_BASE_CONSTRAINT)\r\n\r\n# Obteniendo los valores del parameter\r\nval_ParmaCom = paramComent.AsString()\r\nval_paramLongi = paramLongi.AsDouble()\r\nval_paramRestBase = paramRestBase.AsElementId()\r\n\r\nval_paramLongi_2 = paramLongi.AsValueString()\r\n\r\nOUT = val_paramLongi, val_paramLongi_2',l="\r\nimport clr\r\n\r\nclr.AddReference('RevitAPI')\r\nfrom Autodesk.Revit.DB import *\r\n\r\nclr.AddReference(\"RevitServices\")\r\nfrom RevitServices.Persistence import DocumentManager\r\nfrom RevitServices.Transactions import TransactionManager\r\n\r\ndoc = DocumentManager.Instance.CurrentDBDocument\r\n\r\n\r\nmuro = UnwrapElement(IN[0])\r\nnivel = UnwrapElement(IN[1])\r\n\r\nelementId_nivel = nivel.Id\r\n\r\n\r\n# Obtenemos el parametro Restriccion superior\r\nparamResSup = muro.get_Parameter(BuiltInParameter.WALL_HEIGHT_TYPE)\r\n\r\n\r\n# Inicializar la transaccion\r\nTransactionManager.Instance.EnsureInTransaction(doc)\r\n# Asiganrle un valor a este parametro\r\nresultado = paramResSup.Set(elementId_nivel)\r\n\r\n# Finalizar la transaccion\r\nTransactionManager.Instance.TransactionTaskDone()\r\n\r\n\r\n\r\n# Asigne la salida a la variable OUT.\r\nOUT = resultado",c="\r\nimport clr\r\n\r\nclr.AddReference('RevitAPI')\r\nfrom Autodesk.Revit.DB import *\r\n\r\nclr.AddReference(\"RevitServices\")\r\nfrom RevitServices.Persistence import DocumentManager\r\nfrom RevitServices.Transactions import TransactionManager\r\n\r\ndoc = DocumentManager.Instance.CurrentDBDocument\r\n\r\n\r\nmuro = UnwrapElement(IN[0])\r\nnivel = UnwrapElement(IN[1])\r\n\r\nelementId_nivel = nivel.Id\r\n\r\n\r\n# Obtenemos el parametro Restriccion superior\r\nparamResSup = muro.get_Parameter(BuiltInParameter.WALL_HEIGHT_TYPE)\r\n\r\n\r\n# Inicializar la transaccion\r\nTransactionManager.Instance.EnsureInTransaction(doc)\r\n# Asiganrle un valor a este parametro\r\nresultado = paramResSup.Set(elementId_nivel)\r\n\r\n# Finalizar la transaccion\r\nTransactionManager.Instance.TransactionTaskDone()\r\n\r\n\r\n\r\n# Asigne la salida a la variable OUT.\r\nOUT = resultado",m={sidebar_position:3},d="3. Par\xe1metros de Revit",h={id:"DynamoPython/RevitAPI/03TrabajandoParametros",title:"3. Par\xe1metros de Revit",description:"3.1. Lectura de par\xe1metros de Elementos",source:"@site/docs/02-DynamoPython/03-RevitAPI/03TrabajandoParametros.mdx",sourceDirName:"02-DynamoPython/03-RevitAPI",slug:"/DynamoPython/RevitAPI/03TrabajandoParametros",permalink:"/dynamoPythonGuia-OBG/docs/DynamoPython/RevitAPI/03TrabajandoParametros",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-DynamoPython/03-RevitAPI/03TrabajandoParametros.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guiaDynamoAvanzado",previous:{title:"2. Objetos Dynamo Revit",permalink:"/dynamoPythonGuia-OBG/docs/DynamoPython/RevitAPI/02ConversioNObjetosDynamoRevit"},next:{title:"4. ICollection",permalink:"/dynamoPythonGuia-OBG/docs/DynamoPython/RevitAPI/04ICollection"}},p={},u=[{value:"3.1. Lectura de par\xe1metros de Elementos",id:"31-lectura-de-par\xe1metros-de-elementos",level:2},{value:"3.2. Unidades de Revit",id:"32-unidades-de-revit",level:2},{value:"3.3. Transacciones",id:"33-transacciones",level:2},{value:"3.4. Modificaci\xf3n de par\xe1metros",id:"34-modificaci\xf3n-de-par\xe1metros",level:2},{value:"3.5. Ejercicios Propuestos",id:"35-ejercicios-propuestos",level:2}];function x(e){const a={annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Details:n}=a;return n||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"3-par\xe1metros-de-revit",children:"3. Par\xe1metros de Revit"}),"\n",(0,r.jsx)(a.h2,{id:"31-lectura-de-par\xe1metros-de-elementos",children:"3.1. Lectura de par\xe1metros de Elementos"}),"\n",(0,r.jsx)(t.A,{language:"py",children:i}),"\n",(0,r.jsx)(t.A,{language:"py",children:o}),"\n",(0,r.jsx)(a.h2,{id:"32-unidades-de-revit",children:"3.2. Unidades de Revit"}),"\n",(0,r.jsxs)(a.p,{children:["Revit a nivel de usuari opermite trabajr con muchos tipos de unidads de acuerdo a la necesidad del usuario, por l oque tenemos una amplia serie de Unidades,\r\npero internamente como sabemos los valores almacenados on de tipo ",(0,r.jsx)(a.code,{children:"double"})," por lo que, es necesario saber en que unidades se gurdan estos valorese en Revit."]}),"\n",(0,r.jsx)(a.p,{children:"Revit internamente trabaja con las siguientes unidades:"}),"\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Unidad Base"}),(0,r.jsx)(a.th,{children:"Unidad en Revit"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Longitud"}),(0,r.jsxs)(a.td,{children:["Pie (",(0,r.jsxs)(a.span,{className:"katex",children:[(0,r.jsx)(a.span,{className:"katex-mathml",children:(0,r.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(a.semantics,{children:[(0,r.jsxs)(a.mrow,{children:[(0,r.jsx)(a.mi,{mathvariant:"normal",children:"f"}),(0,r.jsx)(a.mi,{mathvariant:"normal",children:"t"})]}),(0,r.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\mathrm{ft}"})]})})}),(0,r.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(a.span,{className:"base",children:[(0,r.jsx)(a.span,{className:"strut",style:{height:"0.6944em"}}),(0,r.jsx)(a.span,{className:"mord",children:(0,r.jsx)(a.span,{className:"mord mathrm",children:"ft"})})]})})]}),")"]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Angulo"}),(0,r.jsx)(a.td,{children:"Radian"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Masa"}),(0,r.jsxs)(a.td,{children:["Kilogramo (",(0,r.jsxs)(a.span,{className:"katex",children:[(0,r.jsx)(a.span,{className:"katex-mathml",children:(0,r.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(a.semantics,{children:[(0,r.jsxs)(a.mrow,{children:[(0,r.jsx)(a.mi,{mathvariant:"normal",children:"k"}),(0,r.jsx)(a.mi,{mathvariant:"normal",children:"g"})]}),(0,r.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\mathrm{kg}"})]})})}),(0,r.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(a.span,{className:"base",children:[(0,r.jsx)(a.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.jsx)(a.span,{className:"mord",children:(0,r.jsx)(a.span,{className:"mord mathrm",style:{marginRight:"0.01389em"},children:"kg"})})]})})]}),")"]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Tiempo"}),(0,r.jsxs)(a.td,{children:["Segundo (",(0,r.jsxs)(a.span,{className:"katex",children:[(0,r.jsx)(a.span,{className:"katex-mathml",children:(0,r.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(a.semantics,{children:[(0,r.jsx)(a.mrow,{children:(0,r.jsx)(a.mi,{mathvariant:"normal",children:"s"})}),(0,r.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\mathrm{s}"})]})})}),(0,r.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(a.span,{className:"base",children:[(0,r.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,r.jsx)(a.span,{className:"mord mathrm",children:"s"})]})})]}),")"]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Intensidad de corriente"}),(0,r.jsxs)(a.td,{children:["Amperio (",(0,r.jsxs)(a.span,{className:"katex",children:[(0,r.jsx)(a.span,{className:"katex-mathml",children:(0,r.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(a.semantics,{children:[(0,r.jsx)(a.mrow,{children:(0,r.jsx)(a.mi,{mathvariant:"normal",children:"A"})}),(0,r.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\mathrm{A}"})]})})}),(0,r.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(a.span,{className:"base",children:[(0,r.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,r.jsx)(a.span,{className:"mord mathrm",children:"A"})]})})]}),")"]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Temperatura"}),(0,r.jsxs)(a.td,{children:["Kelvin (",(0,r.jsxs)(a.span,{className:"katex",children:[(0,r.jsx)(a.span,{className:"katex-mathml",children:(0,r.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(a.semantics,{children:[(0,r.jsx)(a.mrow,{children:(0,r.jsx)(a.mi,{mathvariant:"normal",children:"K"})}),(0,r.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\mathrm{K}"})]})})}),(0,r.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(a.span,{className:"base",children:[(0,r.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,r.jsx)(a.span,{className:"mord mathrm",children:"K"})]})})]}),")"]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Intensidad Lumisosa"}),(0,r.jsxs)(a.td,{children:["Candela (",(0,r.jsxs)(a.span,{className:"katex",children:[(0,r.jsx)(a.span,{className:"katex-mathml",children:(0,r.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(a.semantics,{children:[(0,r.jsxs)(a.mrow,{children:[(0,r.jsx)(a.mi,{mathvariant:"normal",children:"c"}),(0,r.jsx)(a.mi,{mathvariant:"normal",children:"d"})]}),(0,r.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\mathrm{cd}"})]})})}),(0,r.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(a.span,{className:"base",children:[(0,r.jsx)(a.span,{className:"strut",style:{height:"0.6944em"}}),(0,r.jsx)(a.span,{className:"mord",children:(0,r.jsx)(a.span,{className:"mord mathrm",children:"cd"})})]})})]}),")"]})]})]})]}),"\n",(0,r.jsxs)(a.p,{children:["Estas son las unidades basicas, y para las derivadas seria una combinacion de estas, por ejemplo las unidades de Fuerza seria: ",(0,r.jsxs)(a.span,{className:"katex",children:[(0,r.jsx)(a.span,{className:"katex-mathml",children:(0,r.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(a.semantics,{children:[(0,r.jsxs)(a.mrow,{children:[(0,r.jsx)(a.mi,{mathvariant:"normal",children:"k"}),(0,r.jsx)(a.mi,{mathvariant:"normal",children:"g"}),(0,r.jsx)(a.mo,{children:"\u22c5"}),(0,r.jsx)(a.mi,{mathvariant:"normal",children:"f"}),(0,r.jsx)(a.mi,{mathvariant:"normal",children:"t"}),(0,r.jsx)(a.mi,{mathvariant:"normal",children:"/"}),(0,r.jsxs)(a.msup,{children:[(0,r.jsx)(a.mi,{mathvariant:"normal",children:"s"}),(0,r.jsx)(a.mn,{children:"2"})]})]}),(0,r.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\mathrm{kg \\cdot ft/s^2}"})]})})}),(0,r.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(a.span,{className:"base",children:[(0,r.jsx)(a.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,r.jsxs)(a.span,{className:"mord",children:[(0,r.jsx)(a.span,{className:"mord mathrm",style:{marginRight:"0.01389em"},children:"kg"}),(0,r.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.jsx)(a.span,{className:"mbin",children:"\u22c5"}),(0,r.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.jsx)(a.span,{className:"mord mathrm",children:"ft/"}),(0,r.jsxs)(a.span,{className:"mord",children:[(0,r.jsx)(a.span,{className:"mord mathrm",children:"s"}),(0,r.jsx)(a.span,{className:"msupsub",children:(0,r.jsx)(a.span,{className:"vlist-t",children:(0,r.jsx)(a.span,{className:"vlist-r",children:(0,r.jsx)(a.span,{className:"vlist",style:{height:"0.8141em"},children:(0,r.jsxs)(a.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,r.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,r.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,r.jsx)(a.span,{className:"mord mathrm mtight",children:"2"})})]})})})})})]})]})]})})]})]}),"\n",(0,r.jsx)(a.p,{children:"Nosotros podemos manejar manualemnte las conversiones de datos, pero Revit API tambien cuenta con una clase que nos puede ayudar en ello:"}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(a.strong,{children:"Ejemplo: Conversion de Unidades Internas --\x3e Deseada"})}),(0,r.jsx)(a.p,{children:"En este ejemplo vemso como ponemos usar la clase UnitUtils (Disponible para Revit 2022 o superior). para convertir unidades del sistema Interno a una undiad en especifico"}),(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-py",children:"import clr\r\n\r\nareaFloor_ft2 = \r\n\r\n# Converitmos el area (ft^2) a (m2)\r\nareaFloor_m2 = UnitUtils.ConvertToInternalUnits(areaFloor_ft2, UnitTypeId.SquareMeters)\n"})})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(a.strong,{children:"Ejemplo: Conversion de Unidades Deseadas --\x3e Internas"})}),(0,r.jsx)(a.p,{children:"En este ejemplo vemos como ponemos usar la clase UnitUtils (Disponible para Revit 2022 o superior). para convertir unidades especificas a unidades Internas"}),(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-py",children:"import clr\r\n\r\nareaFloor_ft2 = \r\n\r\n# Converitmos el area (ft^2) a (m2)\r\nareaFloor_m2 = UnitUtils.ConvertToInternalUnits(areaFloor_ft2, UnitTypeId.SquareMeters)\n"})})]}),"\n",(0,r.jsx)(a.h2,{id:"33-transacciones",children:"3.3. Transacciones"}),"\n",(0,r.jsx)(a.p,{children:"Dynamo proporciona su propio marco de transacciones para trabajar con RevitAPI. Esto significa que el script de Python se ejecutar\xe1 en el contexto de una transacci\xf3n general de Dynamo."}),"\n",(0,r.jsx)(a.p,{children:"Si est\xe1 escribiendo c\xf3digo RevitAPI que requiere una transacci\xf3n, puede utilizar el archivo .TransactionManager"}),"\n",(0,r.jsx)(a.p,{children:"TransactionManager.EnsureInTransaction(): Inicializa la transacci\xf3n de Dynamo\r\nTransactionManager.TransactionTaskDone(): Le dice a Dynamo que hemos terminado de usar la transacci\xf3n\r\nTransactionManager.ForceCloseTransaction(): Indica a Dynamo que confirme la transacci\xf3n activa. Esto es m\xe1s lento que , por lo que solo \xfaselo cuando realmente necesite cerrar\r\nla transacci\xf3n para que su script funcione.TransactionTaskDone()\r\nPara la secuencia de comandos, en cualquier lugar en el que normalmente crear\xeda una nueva transacci\xf3n de RevitAPI y, a continuaci\xf3n, llamar\xeda a , utilizar\xe1 en su lugar .\r\nEn cualquier lugar al que normalmente llamar\xeda , en su lugar usar\xe1 . En cualquier lugar en el que realmente necesite que finalice la transacci\xf3n (situaciones en las que\r\ndesee operar en el modelo despu\xe9s de que se produzca la regeneraci\xf3n), puede usar .Transaction.Start()TransactionManager.EnsureInTransaction()Transaction.Commit()TransactionManager.TransactionTaskDone()TransactionManager.ForceCloseTransaction()"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-py",children:'import clr\r\n\r\n# Import DocumentManager and TransactionManager\r\nclr.AddReference("RevitServices")\r\nimport RevitServices\r\nfrom RevitServices.Persistence import DocumentManager\r\nfrom RevitServices.Transactions import TransactionManager\r\n\r\n# Get the document\r\ndoc = DocumentManager.Instance.CurrentDBDocument\r\n\r\n# "Start" the transaction\r\nTransactionManager.Instance.EnsureInTransaction(doc)\r\n\r\n# Create a reference point (requires a transaction)\r\nrefPt = doc.FamilyCreate.NewReferencePoint(XYZ(0, 0, 0))\r\n\r\n# "End" the transaction\r\nTransactionManager.Instance.TransactionTaskDone()\n'})}),"\n",(0,r.jsx)(a.p,{children:"Tambi\xe9n puede utilizar las subtransacciones de RevitAPI junto con (pero no como sustituto) del archivo .\r\nLas subtransacciones le dar\xe1n la posibilidad de revertir los cambios. No hay forma de revertir la transacci\xf3n principal de Dynamo.TransactionManager"}),"\n",(0,r.jsx)(a.h2,{id:"34-modificaci\xf3n-de-par\xe1metros",children:"3.4. Modificaci\xf3n de par\xe1metros"}),"\n",(0,r.jsx)(t.A,{language:"py",children:l}),"\n",(0,r.jsx)(t.A,{language:"py",children:c}),"\n",(0,r.jsx)(a.h2,{id:"35-ejercicios-propuestos",children:"3.5. Ejercicios Propuestos"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Crear un Python Script que cambie el valor del par\xe1metro ",(0,r.jsx)(a.strong,{children:'"Estructura"'})," a ",(0,r.jsx)(a.code,{children:"activado"})," para un muro, usar get_Parameter() y Set()."]}),"\n",(0,r.jsxs)(a.li,{children:["Crear un Python Script que cambie el valor del par\xe1metro ",(0,r.jsx)(a.strong,{children:'"L\xednea de ubicaci\xf3n"'})," a ",(0,r.jsx)(a.code,{children:"Core Face Exterior"})," para un muro, usar get_Parameter() y Set()."]}),"\n",(0,r.jsxs)(a.li,{children:["Crear un Python Script que cambien el ",(0,r.jsx)(a.strong,{children:"nombre de una vista"}),"."]}),"\n",(0,r.jsxs)(a.li,{children:["Crear un Python Script que cambie el ",(0,r.jsx)(a.strong,{children:"nombre a una Rejilla"})," o Grilla."]}),"\n"]})]})}function j(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}}}]);