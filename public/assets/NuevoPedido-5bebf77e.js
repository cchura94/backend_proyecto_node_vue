import{p as w}from"./ProductoService-d833eae8.js";import{h as _,_ as N,r as m,m as E,q as M,d as q,e as f,o as V,c as x,b as o,a,f as v,t as C,j as B,F as D}from"./index-a5f020d6.js";import{p as F}from"./PedidoService-6fad4f00.js";const P={listar:(i="")=>_().get(`/cliente?q=${i}`),guardar:i=>_().post("/cliente",i),mostrar:i=>_().get(`/cliente/${i}`),modificar:(i,e)=>_().put(`/cliente/${i}`,e),eliminar:i=>_().delete(`/cliente/${i}`),actualizarImagen:(i,e)=>_().post(`/cliente/${i}/actualizar-imagen`,e)},L={setup(){const i=m([]),e=m([]),g=m(!1),l=m({nombre_completo:"",telefono:"",correo:""}),u=m(null),h=m(""),d=E(),n=M();q(()=>{b(),e.value=n.carrito,u.value=n.cliente_seleccionado});const b=async()=>{try{const{data:t}=await w.listar();i.value=t.rows}catch(t){console.log(t)}};return{productos:i,carrito:e,addCarrito:t=>{let r=-1;for(let c=0;c<e.value.length;c++)e.value[c].id==t.id&&(r=c);r>=0?(e.value[r].cantidad++,t.stock--):(t.stock--,n.agregarCarrito({id:t.id,nombre:t.nombre,precio:t.precio,cantidad:1}))},quitarCarrito:t=>{let r=-1;for(let c=0;c<e.value.length;c++)e.value[c].id==t.id&&(r=c);r>=0&&(i.value.forEach(function(c){c.id===e.value[r].id&&(c.stock=c.stock+e.value[r].cantidad)}),e.value.splice(r,1))},displayModal:g,cliente:l,cliente_seleccionado:u,getTotal:()=>{let t=0;return e.value.forEach(r=>{t+=parseFloat(r.precio)*parseFloat(r.cantidad)}),t.toFixed(2)},buscar:h,buscarCliente:async()=>{if(h.value!=""){const{data:t}=await P.listar(h.value);console.log(t),u.value=t.length>0?t[0]:null,n.cliente_seleccionado=u.value}else u.value=null,n.cliente_seleccionado=null},guardarCliente:async()=>{const{data:t}=await P.guardar(l.value);console.log(t),u.value=t.data,n.cliente_seleccionado=u.value},registrarPedido:async()=>{let t=[];e.value.forEach(c=>{t.push({producto_id:c.id,cantidad:c.cantidad})});let r={nro_fact:0,clienteId:u.value.id,carrito:t};await F.guardar(r),n.cliente_seleccionado=null,n.carrito=[],d.push({name:"ListaPedido"})},storeCarrito:n}}},O={class:"grid"},S={class:"col-7"},I={class:"card"},R=o("h5",null,"Lista Productos",-1),U={class:"col-5"},z={class:"grid"},K={class:"col-12"},j={class:"card"},A=o("h5",null,"Carrito",-1),G={class:"col-12"},H={class:"card"},J=o("h5",null,"Cliente",-1),Q={class:"grid"},W={class:"col-8"},X={class:"col-4"},Y={key:0,class:"col-12"},Z={class:"col-12"},$={class:"card"},ee=o("h5",null,"Pedido",-1),oe={class:"field"},le=o("label",{for:"name"},"Nombre Completo",-1),te={class:"field"},ae=o("label",{for:"name"},"Telefono",-1),ie={class:"field"},ne=o("label",{for:"name"},"Correo",-1);function se(i,e,g,l,u,h){const d=f("Column"),n=f("Button"),b=f("DataTable"),p=f("InputText"),k=f("Dialog");return V(),x(D,null,[o("div",O,[o("div",S,[o("div",I,[R,a(b,{value:l.productos,responsiveLayout:"scroll"},{default:v(()=>[a(d,{field:"id",header:"ID"}),a(d,{field:"nombre",header:"Nombre"}),a(d,{field:"precio",header:"Precio"}),a(d,{field:"stock",header:"Stock"}),a(d,{exportable:!1},{body:v(s=>[a(n,{icon:"pi pi-plus",class:"p-button-rounded p-button-success mr-2",onClick:y=>l.addCarrito(s.data)},null,8,["onClick"])]),_:1})]),_:1},8,["value"])])]),o("div",U,[o("div",z,[o("div",K,[o("div",j,[A,a(b,{value:l.carrito,responsiveLayout:"scroll"},{default:v(()=>[a(d,{field:"nombre",header:"Nombre"}),a(d,{field:"precio",header:"Precio"}),a(d,{field:"cantidad",header:"Cant"}),a(d,{exportable:!1},{body:v(s=>[a(n,{icon:"pi pi-minus-circle",class:"p-button-rounded p-button-danger mr-2",onClick:y=>l.quitarCarrito(s.data)},null,8,["onClick"])]),_:1})]),_:1},8,["value"])])]),o("div",G,[o("div",H,[J,o("div",Q,[o("div",W,[a(p,{type:"text",modelValue:l.buscar,"onUpdate:modelValue":e[0]||(e[0]=s=>l.buscar=s),onKeyup:l.buscarCliente},null,8,["modelValue","onKeyup"])]),o("div",X,[a(n,{label:"Nuevo",icon:"pi pi-external-link",onClick:e[1]||(e[1]=s=>l.displayModal=!0)})]),l.cliente_seleccionado?(V(),x("div",Y,[o("h5",null,"NOMBRE: "+C(l.cliente_seleccionado.nombre_completo),1),o("h5",null,"CORREO: "+C(l.cliente_seleccionado.correo),1),o("h5",null,"TELEFONO: "+C(l.cliente_seleccionado.telefono),1)])):B("",!0)])])]),o("div",Z,[o("div",$,[ee,o("h1",null,"TOTAL: $"+C(l.getTotal()),1),a(n,{label:"Registrar Pedido",class:"block",onClick:l.registrarPedido},null,8,["onClick"])])])])])]),a(k,{header:"Header",visible:l.displayModal,"onUpdate:visible":e[6]||(e[6]=s=>l.displayModal=s),breakpoints:{"960px":"75vw","640px":"90vw"},style:{width:"50vw"},modal:!0,class:"p-fluid"},{footer:v(()=>[a(n,{label:"Cerrar",icon:"pi pi-times",onClick:e[5]||(e[5]=s=>l.displayModal=!1),class:"p-button-text"}),a(n,{label:"Guardar",icon:"pi pi-check",onClick:l.guardarCliente,autofocus:""},null,8,["onClick"])]),default:v(()=>[o("div",oe,[le,a(p,{id:"name",modelValue:l.cliente.nombre_completo,"onUpdate:modelValue":e[2]||(e[2]=s=>l.cliente.nombre_completo=s),required:"true",autofocus:""},null,8,["modelValue"])]),o("div",te,[ae,a(p,{id:"name",modelValue:l.cliente.telefono,"onUpdate:modelValue":e[3]||(e[3]=s=>l.cliente.telefono=s),autofocus:""},null,8,["modelValue"])]),o("div",ie,[ne,a(p,{id:"name",modelValue:l.cliente.correo,"onUpdate:modelValue":e[4]||(e[4]=s=>l.cliente.correo=s),autofocus:""},null,8,["modelValue"])])]),_:1},8,["visible"])],64)}const me=N(L,[["render",se]]);export{me as default};