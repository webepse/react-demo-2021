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
            <h2
                style={{backgroundColor: age < 35 ? 'dodgerblue':'crimson', color: 'white'}}
            >
                Membre: {nom.toUpperCase()} - {age} ans
            </h2>
            { children ? <p>{children}</p> : null }
        </>
     );
}
 
export default Membre;