//Declaring all theDOM Elements
const id = document.querySelector('#studentId')
const name = document.querySelector('#studentName')
const email = document.querySelector('#studentEmail')
const contact = document.querySelector('#studentContact')
const course = document.querySelector('#courseName')
const button = document.querySelector('#button')
const tbody = document.querySelector('#tbody')
const buttonToBulkClear = document.getElementById('buttonAll')
let contactExpr = /^[6-9][0-9]{9}$/
let emailExpr = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/
let nameExpr = /^[a-zA-Z ]+$/


//Function to add data to the table
function addTasks(){
    // Element Creatation
    const tableROW = document.createElement('tr')
    const tableStudentId = document.createElement('td')
    const tableStudentName = document.createElement('td')
    const tableStudentEmail = document.createElement('td')
    const tableStudentContact = document.createElement('td')
    const tableStudentCourse = document.createElement('td')
    const tableStudentButton = document.createElement('td')
    const buttonDiv = document.createElement('div')
    const buttonDelete = document.createElement('button')
    const buttonreset = document.createElement('button')

    // Content Assinging for buttons to hold the correct items
    buttonDelete.innerHTML = '<i class="fa-regular fa-trash-can"></i>'
    buttonreset.innerHTML = '<i class="fa-solid fa-arrow-rotate-left"></i>'
    tableStudentId.innerHTML = id.value
    tableStudentName.innerHTML = name.value
    tableStudentEmail.innerHTML = email.value
    tableStudentContact.innerHTML = contact.value
    tableStudentCourse.innerHTML = course.value

    // Class Assinging to the element for Proper CSS
    tableStudentId.classList.add('tabled')
    tableStudentName.classList.add('tabled')
    tableStudentEmail.classList.add('tabled')
    tableStudentContact.classList.add('tabled')
    tableStudentCourse.classList.add('tabled')
    tableStudentButton.classList.add('tabled')
    buttonDiv.classList.add('buttonDiv')
    buttonDelete.classList.add('deleteButton')
    buttonreset.classList.add('resetButton')

    // Appending element to their proper Parent
    buttonDiv.appendChild(buttonDelete)
    buttonDiv.appendChild(buttonreset)
    tableStudentButton.appendChild(buttonDiv)
    tableROW.appendChild(tableStudentId)
    tableROW.appendChild(tableStudentName)
    tableROW.appendChild(tableStudentEmail)
    tableROW.appendChild(tableStudentContact)
    tableROW.appendChild(tableStudentCourse)
    tableROW.appendChild(tableStudentButton)

    // Applying condition to recheck every detail entered
    if (id.value == ''){
        alert('Enter your Id')
    } else if(name.value == '') {
        alert('Enter your name')
    } else if(!nameExpr.test(name.value)){
        alert('Invalid Name, Name should not contain any special characters or numbers')
    } else if(email.value == '') {
        alert('Enter your e-mail')
    } else if(!emailExpr.test(email.value)){
        alert('Invalid Email address, example - abc@gmail.com')
    } else if(contact.value == '') {
        alert('Enter your contact number')
    } else if (!contactExpr.test(contact.value)){
        alert('Invalid Contact Number, Should have 10 digits starting from [6-9]')
    }else {
        tbody.appendChild(tableROW)   
        id.value = name.value = email.value = contact.value = ''
    }
    
    // Initializing Local Storage
    localStorage.setItem('tableBody', tbody.innerHTML)

}
// Calling the function after click to add the function
button.addEventListener('click', addTasks)
//===========================================================



// Function to delete and reset the data
function buttons(event){
    const item = event.target
    const deleteItem = item.parentElement.parentElement.parentElement.parentElement

    if (item.classList[0] === 'fa-regular') {
        //  Deleting the item and store the body
        deleteItem.remove()
        localStorage.setItem('tableBody', tbody.innerHTML)
    } else if (item.classList[0] === 'fa-solid'){
        // Find the value
        const idReset = item.parentElement.parentElement.parentElement.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML
        const NameReset = item.parentElement.parentElement.parentElement.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML
        const emailReset = item.parentElement.parentElement.parentElement.previousSibling.previousSibling.previousSibling.innerHTML
        const contactReset = item.parentElement.parentElement.parentElement.previousSibling.previousSibling.innerHTML
        const courseReset = item.parentElement.parentElement.parentElement.previousSibling.innerHTML

        // Assing the Value
        id.value = idReset
        name.value = NameReset 
        email.value = emailReset
        contact.value = contactReset
        course.value = courseReset

        //Delete Items
        deleteItem.remove() 
    }
}

// Calling the function after click to delete or reset the data
tbody.addEventListener('click', buttons)
//===========================================================



// Function to delete all the data 
function clearAll(){
    const tableToDelete = tbody
    if (tbody.innerHTML == '') {
        alert('Nothing to delete')
    } else {
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild); // Remove all child elements
        }
    }
    localStorage.setItem('tableBody', tbody.innerHTML)
}

// Calling the function after click to delete All the data
buttonToBulkClear.addEventListener('click', clearAll)
//===========================================================



// Function defined to do the work after reload
function restoreElement(){
    savedValue = localStorage.getItem('tableBody')
    tbody.innerHTML = savedValue
}

//Using this onload method
window.onload = restoreElement
//===========================================================