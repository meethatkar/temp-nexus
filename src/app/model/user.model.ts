import { ParseSourceFile } from "@angular/compiler";

export class user{
    isLogin:boolean;
    firstName:string;
    lastName:string;
    email:string;
    phoneNumber:number;
    address:string;
    state:string;
    city:string;
    password:string;
    userName:string
    constructor(){
        this.isLogin=false;
        this.firstName="";
        this.lastName="";
        this.email="";
        this.phoneNumber=1234567890;
        this.address="";
        this.state="";
        this.city="";
        this.password="";
        this.userName="";
    }
}