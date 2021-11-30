// const Membre = (props) => {
//     const name = props.nom
//      const children = props.children
//     return ( 
//         <>
//             <h2>Membre: {name.toUpperCase()}</h2>
//         </>
//      );
// }
 
const Membre = ({nom, children, age}) => {
    
    return ( 
        <>
            <h2>Membre: {nom.toUpperCase()} - {age} ans</h2>
            { children ? <p>{children}</p> : null }
        </>
     );
}
 
export default Membre;