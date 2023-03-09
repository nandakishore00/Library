let myLibrary = [];
function Book(title,author,pages,read) {
  this.author=author
  this.title=title 
  this.pages=pages 
  this.read=read
}
function toggleRead(i){
  
  if(myLibrary[i].read==true){ 
       myLibrary[i].read=false
  }
  else if(myLibrary[i].read==false){
    myLibrary[i].read=true
  }
  render();
}
function removeBook(index){
  myLibrary.splice(index,1)
  console.log(index)
  render();
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
        <h3 class="card-title">${bookOb.title }</h5>
        <h4 class="card-title">${bookOb.author}</h5>
        <h5 class="card-title">${bookOb.pages }</h5>
        <div style="display:flex;justify-content:space-between;">
          <button style="margin:10px 15px" class="btn btn-secondary"onclick="removeBook(${i})">Remove</button>
          <button style="margin:10px 15px;width:100px" class="btn btn-primary"  onclick="toggleRead(${i})">${bookOb.read?'Read':'Not Read'}</Button>
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
