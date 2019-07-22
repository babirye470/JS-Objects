function Contact(first_name,second_name,phone_number,email,adress)
{
   this.first_name=first_name;
   this.second_name=second_name;
   this.phone_number=phone_number;
   this.email=email;
   this.adress=["street","city","country"];
}
Contact.prototype.full_name=function(){
   return ("this.first_name"  +" this.second_name")
};
var martin= new Contact("micheal","bagasa","0704642705","michealbgs@gmail.com",["makindye","kampala","uganda"])
var monica= new Contact("monica","babirye","0702304342","gloriabairye470@gmail.com",["nansana","kampala","uganda"]);
console.log (monica.full_name)