(function() {

    document.querySelector('#catogoryInput').addEventListener('keydown', function(e){
        if (e.keyCode != 13){
            return;
        }

        e.preventDefault()

        var categoryName = this.value
        this.value = ''
        addNewCategory(categoryName)
        updateCategoriesString()
    })

    function addNewCategory(name){

        document.querySelector('#categoriesContainer').insertAdjacentHTML('beforeend',
            `<li class="category">
             <span class="name">{name}</span>
             <span onclick="removeCategory(this)" class="btnRemove bold">X</span>
             </li>`)
    }

})()

function fectchCategoryArray(){
    var categories = []

    document.querySelectorAll('.category').forEach(function(e){
        var name = e.querySelector('.name').innerHTML
        if (name == '') return

        categories.push(name)
    })

    return categories
}

 function updateCategoriesString(){
     categories = fectchCategoryArray()
     document.querySelector('input[name="categoriesString"]').value = categories.join(',')
        }


function removeCategory(e){
    e.preventElement.remove()
    updateCategoriesString()
}