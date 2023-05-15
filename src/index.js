console.log("start")

let users_details=[]
// let details_name=['uname','gender','dob','age','email','phono','uid','user','pass']
class datacls{
    constructor(name,photo,gender,dob,age,email,phono,uid,user,pass){
        this.photo=photo
        this.uname=name
        this.gender=gender
        this.dob=dob
        this.age=age
        this.email=email
        this.phono=phono
        this.id=uid
        this.username=user
        this.password=pass
    }
}



let out=document.getElementById('outer')

let usersDiv=document.getElementById('users')

let but = document.getElementById('new_user')
but.addEventListener('click',function(){
    getdata()
})

let getdata=()=>{
    fetch('https://randomuser.me/api/')
    .then(object => object.json())
    .then(items => {
        let details_name=[]
        uname=('NAME : '+items.results[0].name.title+'.'+items.results[0].name.first+' '+items.results[0].name.last)
        details_name.push(uname)
        photo=items.results[0].picture.large
        gender=('GENDER : '+items.results[0].gender)
        details_name.push(gender)
        dob=('DOB : '+items.results[0].dob.date)
        details_name.push(dob)
        age=('AGE : '+items.results[0].dob.age)
        details_name.push(age)
        email=('EMAIL : '+items.results[0].email)
        details_name.push(email)
        phono=('PHONE NO : '+items.results[0].phone)
        details_name.push(phono)
        uid=('USER ID : '+items.results[0].id.value)
        details_name.push(uid)
        user=('USERNAME : '+items.results[0].login.username)
        details_name.push(user)
        pass=('PASWORD : '+items.results[0].login.password)
        details_name.push(pass)

        let singleUserDiv = document.createElement('div')
        singleUserDiv.className='singleUserDiv'
        usersDiv.appendChild(singleUserDiv)

        let imgdiv=document.createElement('img')
        imgdiv.className='photo'
        imgdiv.src=photo
        let photodiv=document.createElement('div')
        photodiv.className='photodiv'
        photodiv.appendChild(imgdiv)
        singleUserDiv.appendChild(photodiv)

        let textInfoDiv=document.createElement('div')
        textInfoDiv.id='textInfo'

        for(let i=0; i<details_name.length; i++){
            let infodiv=document.createElement('div')
            infodiv.className='info'
            infodiv.innerHTML=details_name[i]
            textInfoDiv.appendChild(infodiv)
        }
        singleUserDiv.appendChild(textInfoDiv)
    })
}

console.log('end')