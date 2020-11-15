class Contact{
    constructor(...params){
        this.contactId = params[0];
        this.addressBookId = params[1];
        this.firstName = params[2];
        this.lastName = params[3];
        this.address = params[4];
        this.city = params[5];
        this.state = params[6];
        this.zip = params[7];
        this.phoneNumber = params[8];
        this.email = params[9];
    }

    get firstName(){return this._firstName;}
    set firstName(firstName){
        let firstNameRegex = RegExp("^([A-Z]{1})([a-z]{2,})$");
        if(firstNameRegex.test(firstName)){
            this._firstName = firstName;
            }
            else throw "First Name Incorrect";
        }

    get lastName(){return this._lastName;}
    set lastName(lastName){this._lastName = lastName;}

    toString(){
        return "id = "+this.contactId+", "+"firstName = "+this.firstName+", "+"lastName = "+this.lastName+", "+"address = "+this.address+", "+"city = "+this.city+", "+"state = "+this.state+", "+"zip = "+this.zip+", "+"phoneNumber = "+this.phoneNumber+", "+"email = "+this.email;
    }
}

try {
    new Contact(1,"add1","P","Q","R","S","T","123","123","abc@xyz.com");
} catch (error) {
    console.error(error);
}
