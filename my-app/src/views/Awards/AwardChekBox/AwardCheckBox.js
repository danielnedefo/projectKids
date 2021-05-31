import UseCheckBox from '../../../shared/components/hooks/useCheckbox'
const AwardCheckBox = ({ isSelected,id,handleChange }) => {
  const [checked, setChecked, disable, setDisable] = UseCheckBox(isSelected)
  // const handleChange = () => {
    
  // }
  return ( 
        <input type="checkbox" onClick={()=>handleChange(id)} ></input>
   );
}
 
export default AwardCheckBox;