class Main {
    private add:number[] = [];
        constructor(){
            this.add = []
        }
    public addItem(num:number) {
        this.add.push(num);
        //console.log("tahir");
        console.log(this.add);

    }

    public showItems() {
        console.log(this.add);

        for (let i = 0; i < this.add.length; i++) {
            document.write(this.add[i].toString());
            //console.log(this.add[i]);
        }
    }
}
var m = new Main();
function useMe(){
    var a =document.getElementById('add').innerText;
console.log("tahir",a);
    //m.addItem(a);

}
function showMe() {
    m.showItems();
}

