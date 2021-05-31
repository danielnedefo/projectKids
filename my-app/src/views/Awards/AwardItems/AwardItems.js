const AwardItem = ({title,price,imageUrl,id}) => {
  return (
    <>
      <p>{title}</p>
      <img src={imageUrl} alt={title} />
      <p>Price:{price}</p>
      </>
   );
}
 
export default AwardItem;