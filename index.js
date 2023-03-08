let myLibrary = [];
let temp
function Book(title,author,pages,read) {
  this.author=author
  this.title=title 
  this.pages=pages 
  this.read=read
}

function addBookToLibrary() {
  title =document.querySelector(".title").value
  author=document.querySelector(".author").value
  pages=document.querySelector(".pages").value
  read=document.querySelector(".read").checked
  let newBook= new Book(title,author,pages,read)
  console.log(newBook)  

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
