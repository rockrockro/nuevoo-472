import Spinner from '../components/Spinner'
const Alerta = ({alerta}) => {
  return (
    <div className={` ${alerta.error ? 'from-red-400 to-red-600'
     : ''} bg-gradient-to-br text-center p-2 rounded-xl uppercase text-white font-bold  my-10`}>
        {alerta.msg}
    </div>
  )
}

export default Alerta