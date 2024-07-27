const id = document.querySelector('#studentId')
const name = document.querySelector('#studentName')
const email = document.querySelector('#studentEmail')
const contact = document.querySelector('#studentContact')
const course = document.querySelector('#courseName')
const button = document.querySelector('#button')
const tbody = document.querySelector('#tbody')
let contactExpr = /^[6-9][0-9]{9}$/

button.addEventListener('click', addTasks)

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

    if (id.value == ''){
        alert('Enter your Id')
    } else if(name.value == '') {
        alert('Enter your name')
    } else if(email.value == '') {
        alert('Enter your e-mail')
    } else if(contact.value == '') {
        alert('Enter your contact number')
    } else if (!contactExpr.test(contact.value)){
        alert('Invalid Contact Number')
    }else {
        tbody.appendChild(tableROW)   
    }

    id.value = name.value = email.value = contact.value = course.value = ''

}

tbody.addEventListener('click', buttons)

function buttons(event){
    const item = event.target

    if (item.classList[0] === 'fa-regular') {
        deleteItem = item.parentElement.parentElement.parentElement.parentElement
        deleteItem.remove()
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
    }
}