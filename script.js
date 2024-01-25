
let form=document.querySelector(".form");
let arr = [];
let user={};
let close = document.querySelector("#close");
let listdiv=document.querySelector(".listdiv")
let lisbut=document.querySelector(".lisbut")
let list = document.querySelector(".list")
let delete_icon = document.querySelector(".delete_icon")
let subut =document.querySelector(".submbut")
lisbut.addEventListener("click",(e)=>{
    listdiv.style.display="flex";
    
})
lisbut.addEventListener("mouseover",(e)=>{
    lisbut.style.pointer="cursor"
    
})
close.addEventListener("click",(e)=>{
    listdiv.style.display="none";
})
close.addEventListener("mouseover",(e)=>{
    close.style.cursor="pointer"
})
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    
        user["fname"]= document.querySelector("#fname").value,
        user["lname"]= document.querySelector("#lname").value,
        user["email"]= document.querySelector("#email").value,
        user["dob"]= document.querySelector("#dob").value
        form.reset()
    arr.push(user);
 let divforlis = document.createElement("div");
 let span1 = document.createElement("span");
 let span2 = document.createElement("span");
 let span3 = document.createElement("span");
 let span4 = document.createElement("span");
 span1.innerText=user.fname
 span2.innerText=user.lname
 span3.innerText=user.email
 span4.innerText=user.dob
  divforlis.classList.add("divlist")
  span1.classList.add("spans")
  span2.classList.add("spans")
  span3.classList.add("spans")
  span4.classList.add("spans")
  list.append(divforlis)
divforlis.append(span1,span2,span3,span4)
  let deleteIcon = document.createElement('i');
  deleteIcon.classList.add('fa-regular', 'fa-trash-can');
  divforlis.appendChild(deleteIcon);
  deleteIcon.addEventListener("click", (e)=>{
    e.target.parentNode.remove();
});
deleteIcon.addEventListener("mouseover", (e)=>{
    deleteIcon.style.cursor="pointer"
});
let editButton = document.createElement('button');
      editButton.innerText = 'Edit';
      editButton.classList.add('editbut');
      divforlis.appendChild(editButton);
     editButton.addEventListener("click",(e)=>{
       let editvar =prompt("what do you want to edit?");
       let parent_=e.target.parentNode
       let childs=parent_.children
       if(editvar === "first name" || editvar === "First name" || editvar === "Fname") {
                      childs[0].innerText=prompt("type first name")
       }
       else if(editvar === "last name" || editvar === "Last name" || editvar === "lname"){
        childs[1].innerText=prompt("type last name")
       }
       else if(editvar === "email" || editvar === "Email"){
        childs[2].innerText=prompt("type email")
       }
       else if(editvar === "dob" || editvar === "date of birth"||editvar === "date"){
        childs[3].innerText=prompt("type date of birth")
       }
       else{
        alert("invalid input")
       }
     }) 
})

