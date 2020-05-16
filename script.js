function insert(num){
    document.querySelector('.screen').value = document.querySelector('.screen').value + num;
    document.querySelector('.screen').focus();
}

function equal(){
    var res = document.querySelector('.screen').value;
    if(res){
        document.querySelector('.screen').value = eval(res);
    }
    document.querySelector('.screen').focus();
}

function back(){
    var res = document.querySelector('.screen').value;
    document.querySelector('.screen').value = res.substring(0, res.length-1);
    document.querySelector('.screen').focus();
}

function clean(){
    document.querySelector('.screen').value = "";
    document.querySelector('.screen').focus();
}