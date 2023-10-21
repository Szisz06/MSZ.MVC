import adatModel from "../model/adatmodel.js"
import adatView from "../view/adatview.js"

class adatController{
    constructor(){
        console.log("controller");
        this.AdatView=new adatView(" - kattints a gombra!", $(".tartalom"));
        this.AdatModel=new adatModel("Béla");
        //itt iratkozunk fel a view esemenyeire
        $(window).on("adatKeres", (event)=>{
            const miObjektumunk = event.detail;
            console.log(miObjektumunk);
            let szoveg = this.AdatModel.koszon();
            this.AdatView.setpElem(szoveg);
        });
    }
}
export default adatController