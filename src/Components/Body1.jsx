import "./Body1.css";
import {BsPhone,BsCurrencyExchange,BsWifi,BsReception4,BsTv,BsFileBarGraph} from "react-icons/bs";
function Body1() {
    return (
        <div className="body_cont">
            <div className="body_cont_in">
                <BsCurrencyExchange className="icon"/>
                <p>Deals</p>
            </div>
            <div className="body_cont_in">
                <BsPhone className="icon"/>
                <p>Phones&devices</p>
            </div>
            <div className="body_cont_in" >
                <BsReception4 className="icon"/>
                <p>Wireless</p>
            </div>
            <div className="body_cont_in">
                <BsWifi className="icon"/>
                <p>Internet</p>
            </div>
            <div className="body_cont_in">
                <BsTv className="icon"/>
                <p className="iconsp" >TV</p>
            </div>
            <div className="body_cont_in">
                <BsFileBarGraph className="icon"/>
                <p>Prepaid</p>
            </div>
        </div>
    );
}
export default Body1;