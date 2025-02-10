import { ParseSourceFile } from "@angular/compiler";

export class user{
    // isLogin:boolean;
    firstName:string;
    lastName:string;
    email:string;
    phoneNumber:number;
    address:string;
    password:string;
    userName:string;
    skills:string;
    role:string;
    experience:number;
    id:number;
    gender:string;
    dob:Date;
    constructor(){
        // this.isLogin=false;
        this.firstName="";
        this.lastName="";
        this.email="";
        this.phoneNumber=1234567890;
        this.address="";
        this.password="";
        this.userName="";
        this.skills="Null";
        this.role="Not assigned";
        this.experience=0;
        this.id=0;
        this.gender="NaN";
        this.dob=new Date();
    }
}