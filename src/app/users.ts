export class Users {
    public user_id : number ; 
    public userName: String ;
    public firstName: String ;
    public  lastName: String ;
    public password : String ; 
    public email : String ;
    constructor(  user_id, userName: String , firstName: String , lastName: String , password : String , email : String ){
        this.user_id   = user_id ;
        this.userName=userName;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.password=password;
    }
}
