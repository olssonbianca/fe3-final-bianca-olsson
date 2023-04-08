import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../Components/utils/global.context';



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const {apiState} = useGlobalContext();
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const paramsId = useParams();
      
  const dentistIdSelected = apiState.find((v) => paramsId.id === v.id )

console.log("soy params de details")
  console.log(paramsId)


  return (

    <div className='vista'>
      <h1 >Detail Dentist {dentistIdSelected.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone number</th>
          <th>Website</th>
        </tr>
        <tr>
          <td>{dentistIdSelected.name}</td>
          <td>{dentistIdSelected.email}</td>
          <td>{dentistIdSelected.phone}</td>
          <td>{dentistIdSelected.website}</td>
        </tr>
      </table>

    </div>
  )
}

export default Detail