var myName = "Abolfazl";

//alert(typeof myName);

// type of comments in js:
// 1
/* 2 */

function showPrompt(){

var userInfo = prompt("لطفا نام و نام خانوادگی خود را وارد کنید");

var status = Boolean(userInfo);

if(status==true){
    alert(`${userInfo} به وبسایت ما خوش آمدید`);    
}

if(status==false){
    alert("فیلد مورد نظر را خالی نگذارید!");
    showPrompt();
    }

}

function exercise(){
    var num1 = Number(prompt("عدد اول را وارد کنید:"));

    var num2 = Number(prompt("عدد دوم را وارد کنید:"));

    var result = Number(prompt("لطفا یکی از عملیات زیر را انتخاب کنید:\n1.جمع کردن\n2.تفریق کردن\n3.تقسیم کردن\n4.ضرب کردن"));

    if(result==1){
        var plus = num1 + num2;
        alert(plus);
    }
    if(result==2){
        var minute = num1 - num2;
        alert(minute); 
    }
    if(result==3){
        var taghsim = num1 / num2;
        alert(taghsim);
    }
    if(result==4){
        var zarb = num1 * num2;
        alert(zarb);
    }
    while(result>4){
            alert("لطفا عدد را در محدوده مورد نظر وارد کنید");
            result = Number(prompt("لطفا یکی از عملیات زیر را انتخاب کنید:\n1.جمع کردن\n2.تفریق کردن\n3.تقسیم کردن\n4.ضرب کردن"));
    }
}
