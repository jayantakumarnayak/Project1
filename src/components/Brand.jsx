import br1 from "../assets/br1.jpg";
import br2 from "../assets/br2.png";
import br3 from "../assets/br3.png";

const Brand =()=>{
  return(
  <div className="contact">
     <div class="container">
    <h1>Tech Brands Supporting Our Product</h1>
    <br /><br /><br />
    <ul class="brand-list">
      <li>
      <img src={br1} alt="item1" className="brand-logo" /> 
      </li>
      <li>
      <img src={br3} alt="item1" className="brand-logo" /> 
       </li>
      <li>
      <img src={br2} alt="item1" className="brand-logo" /> 
        </li>
    </ul>
  </div>
  </div>
  )
}
export default Brand;