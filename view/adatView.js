class adatView{
    constructor(szoveg, szulElem){
        this.szulElem = szulElem;
        this.pElem = this.szulElem.children("p");
        this.buttonElem = this.szulElem.children("button");
        this.szoveg = szoveg;
        this.setpElem(this.szoveg);
        this.buttonElem.on("click", ()=>{
            console.log("katt")
            this.#emenyTrigger("adatKeres")
        })
    }
    setpElem(ertek){
        this.pElem.append(ertek);
    }

    #emenyTrigger(esemenynev){
        const e = new CustomEvent(esemenynev,{detail:this})
        window.dispatchEvent(e)
    }
}
export default adatView