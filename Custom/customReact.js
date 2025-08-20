

function CustomRender(reactElement,container){
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    for(const prop in reactElement.props){
        if(prop=== 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement);
}
const reactElement={
    type:"a",
    props:{
        href:"https://google.com",
        target:'_blank'
    },
    children:"Click here to visit Google.com "
}

const mainContainer=document.getElementById('root');

CustomRender(reactElement,mainContainer);
