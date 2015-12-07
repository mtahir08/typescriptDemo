var Main = (function () {
    function Main() {
        this.add = [];
        this.add = [];
    }
    Main.prototype.addItem = function (num) {
        this.add.push(num);
        //console.log("tahir");
        console.log(this.add);
    };
    Main.prototype.showItems = function () {
        console.log(this.add);
        for (var i = 0; i < this.add.length; i++) {
            document.write(this.add[i].toString());
        }
    };
    return Main;
})();
var m = new Main();
function useMe() {
    var a = document.getElementById('add').innerText;
    console.log("tahir", a);
    //m.addItem(a);
}
function showMe() {
    m.showItems();
}
