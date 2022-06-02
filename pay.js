
class Payment {
    static id = 0;
    #priamery
    #dayPay;
    #mount;
    #description;
    #status;
    #User;
    #paymentMethod
    constructor(dayPay, mount, description, status, User, paymentMethod) {
        this.#priamery = id++;
        this.#dayPay = dayPay;
        this.#mount = mount;
        this.#description = description;
        this.#status = status;
        this.#paymentMethod = paymentMethod
        this.setUser(User)


    }
    getPrimary() {
        return this.#priamery;
    }
    getdayPay() {
        return this.#dayPay;
    }
    getMount() {
        return this.#mount
    }
    getdescription() {
        return this.#description
    }
    getstatus() {
        return this.#status
    }
    getpaymentMethod() {
        return this.#paymentMethod
    }
    getPaymentuserId() {
        return this.#User.getUserId();
    }

    //תשלום
    pay(p) {

        paymentsArr.push(p);

    }
    refound(r) {
        
        refoundsArr.push(r)
    }


    setMount(m) {
        this.#mount = m;
    }
    setDaypay(d) {
        this.#dayPay = d;
    }
    setdescription(d) {
        this.#description = d;
    }
    setStatus(s) {
        this.#status = s;
    }
    setUser(user) {
        //פונה למחלקת user
        this.User.setUserName(user.#name)
        this.User.setUserId(user.#id)
        this.User.setUserPhone(user.#phone)
    }
    setPaymentMethod(p) {
        this.#paymentMethod = p
    }

}
class User {
    constructor(name, phone, id) {
        this.#name = name;
        this.#id = id;
        this.#phone = phone;
    }
    #name;
    #id;
    #phone;
    setUserName(n) {
        this.#name = n
    }
    setUserId(i) {
        this.#id = i
    }
    setUserPhone(n) {
        this.#phone = n
    }
    getUserId() {
        return this.#id
    }
}
const PaymentMethod = {
    CASH='cash',
    VIZA='viza',
    CHEQUE='cheque',
    CLEARING='clearing'


}
class Refound {
    #userId;
    #daterefound;
    #mountrefound;
    constructor(userId, daterefound, mountrefound) {
        this.#userId = userId;
        this.#daterefound = daterefound;
        this.#mountrefound = mountrefound;
    }
    //החזר


}
class visaRefound extends refound{

    refound(r) {
        let pK = paymentsArr.find(item => item.getPrimary() == primaryKey);
        let r = new visaRefound(pk.getPaymentuserId(),new Date(),pk.getMount())
     Payment.refound(r)
    }
}
class Clearingrfound extends refound{
    refound(r) {
        let pK = paymentsArr.find(item => item.getPrimary() == primaryKey);
        let r = new Clearingrfound(pk.getPaymentuserId(),new Date(),pk.getMount())
        Payment.refound(r)
    }
}
class VizapamesPayment extends Payment {
    #fourdigit;
    #threeBackDigit;
    #expirationDate;
    constructor(fourdigit, threeBackDigit, expirationDate, dayPay, mount, description, status, User, paymentMethod) {
        super(dayPay, mount, description, status, User, paymentMethod);
        this.#fourdigit = fourdigit;
        this.#threeBackDigit = threeBackDigit;
        this.#expirationDate = expirationDate;

    }
    pay() { 
        let dayPay = new Date()
        let mount = document.getElementById("mount").value;
        let description = document.getElementById("description").value;
        let status = true;
        let paymentMethod = document.getElementById("paymentMethod").value;
        let name = document.getElementById("userName").value;
        let phone = document.getElementById("phone").value;
        let id = document.getElementById("id").value;
        let user = new User(name, phone, id)
        let fourdigit = document.getElementById("fourdigit").value;
        let threeBackDigit = document.getElementById("threeBackDigit").value;
        let expirationDate = document.getElementById("expirationDate").value;
        let p = new VizapamesPayment(dayPay, mount, description, status, user, paymentMethod,fourdigit, threeBackDigit, expirationDate)
        Payment.pay(p)
    }
  
}
class ClearingPayment extends Payment {
    #clearingId;
    constructor(ClearingId, dayPay, mount, description, status, User, paymentMethod) {
        super(dayPay, mount, description, status, User, paymentMethod);
        this.#clearingId = ClearingId;
    }
    pay() { 
        let dayPay = new Date()
        let mount = document.getElementById("mount").value;
        let description = document.getElementById("description").value;
        let status = true;
        let paymentMethod = document.getElementById("paymentMethod").value;
        let name = document.getElementById("userName").value;
        let phone = document.getElementById("phone").value;
        let id = document.getElementById("id").value;
        let user = new User(name, phone, id)
        let clearingId = document.getElementById("clearingId").value;      
        let p = new VizapamesPayment(clearingId, status, user, paymentMethod,fourdigit, threeBackDigit, expirationDate)
        Payment.pay(p)
    }
}

paymentsArr = [];
refoundsArr = [];