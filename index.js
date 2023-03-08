let myLibrary = [];
function Book(title,author,pages,read) {
  this.author=author
  this.title=title 
  this.pages=pages 
  this.read=read
}
function render(){
  let book= document.querySelector(".render-cards")
  book.innerHTML=''
  for( var i=0;i<myLibrary.length;i++){
    let bookEl=document.createElement('div')
    let bookOb=myLibrary[i]
    bookEl.innerHTML=
    `
      <div class="card-body">
        <h5 class="card-title">${bookOb.title }</h5>
        <h5 class="card-title">${bookOb.author}</h5>
        <h5 class="card-title">${bookOb.pages }</h5>
        <div style="display:flex;justify-content:space-between;">
          <a href="#" class="btn btn-secondary">Remove</a>
          <a href="#" class="btn btn-primary">Button</a>
        </div>
      </div>`
    book.appendChild(bookEl)
  }
}
function addBookToLibrary() {
  title =document.querySelector(".title").value
  author=document.querySelector(".author").value
  pages=document.querySelector(".pages").value
  read=document.querySelector(".read").checked
  let newBook= new Book(title,author,pages,read)
  myLibrary.push(newBook)
  render();
}
document.querySelector(".new-book").addEventListener("click",function(){
  let book= document.querySelector(".details");
  book.style.display='flex';
}
)
document.querySelector(".add-button").addEventListener("click",function(event){
  event.preventDefault()  
  console.log(event)
  addBookToLibrary()}
  )
