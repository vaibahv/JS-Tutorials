
let name = document.getElementById("name");

let nameFun = () => {
    let nameValue = name.value;
    let index =  nameValue.charAt(0);
    if(!isNaN(index)){
        alert(" Please Enter Valid Name ");
    }

}
name.onblur = nameFun;