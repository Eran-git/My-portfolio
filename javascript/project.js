const project = document.querySelector('.project');
const addImage = document.querySelector('#add_project');
const inputProject = document.querySelector('.input_project')
const name = document.querySelector('#name');
const description = document.querySelector('#description');
const insertFile = document.querySelector("#image")
const projectbtn_submit = document.querySelector('#projectbtn_submit');


addImage.addEventListener('click', () => {
    inputProject.style.display = 'flex';
    name.value = '';
    description.value = '';
    insertFile.value = '';

    document.querySelector('body').style.overflow = 'hidden';

})


document.querySelector('#closeBtn').addEventListener('click', () => {
    inputProject.style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';

})