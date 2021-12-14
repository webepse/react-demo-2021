// const Membre = (props) => {
//     const name = props.nom
//      const children = props.children
//     return ( 
//         <>
//             <h2>Membre: {name.toUpperCase()}</h2>
//         </>
//      );
// }
import Affichage from "./Affichage";
import Button from "./Button";
 
const Membre = ({nom, children, age, handleChange, hideName, plus, handleClick}) => {
    
    return ( 
        <>
            <Affichage 
                nom={nom}
                age={age}
            />
            <input type="text" value={nom} onChange={handleChange}/>&nbsp;
            <Button 
                plus={plus}
                vieillir={handleClick}
            />
            <button onClick={hideName}>X</button>
            { children ? <p>{children}</p> : null }
        </>
     );
}
 
export default Membre;