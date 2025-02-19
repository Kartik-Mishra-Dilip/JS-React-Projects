function customrender(reactelement,container){
    //1 part
    // const docelement=document.createElement(reactelement.type)
    // docelement.innerHTML=reactelement.children
    // docelement.setAttribute('href',reactelement.props.href)
    // docelement.setAttribute('target',reactelement.props.target)
    // container.appendChild(docelement)

    //2nd part
    const domelement=document.createElement(reactelement.type)
    domelement.innerHTML=reactelement.children
    for (const prop in reactelement.props) {
        domelement.setAttribute(prop,reactelement.props[prop])
    }
    container.appendChild(domelement)
}






const reactelement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}





const mainContainer=document.querySelector("#root")

customrender(reactelement,mainContainer)