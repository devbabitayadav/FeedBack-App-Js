let form = document.querySelector('form')
let select = document.querySelector('#rating')
let  review = document.querySelector('#review')
let ul = document.querySelector('.list-group')

const saveRevieww= (e)=>{
    e.preventDefault();
    // console.log(select.value , review.value);
    let newReview=document.createElement('li')
         newReview.className= 'list-group-item rounded-0'
         let ratingText= document.createElement('h1')
         ratingText.className='display-3'
         let reviewText = document.createElement('h2')
         reviewText.className='display-5'
        //  ratingText.innerText="RATING :" + select.value
        //  reviewText.innerText="REVIEW : " + review.value
        ratingText.innerText=`rating : ${select.value}`
        reviewText.innerText=`review : ${review.value}`
         newReview.appendChild(ratingText)
         newReview.appendChild(reviewText)
         let delBtn = document.createElement('button')
         delBtn.className="btn btn-sm btn-danger rounded-0 float-end"
         delBtn.innerText='Delete'
         newReview.appendChild(delBtn);
         ul.appendChild(newReview)
         form.reset()

        //  console.log(newReview);

}
form.addEventListener("submit" , saveRevieww)

ul.addEventListener('click' , (e)=>{
    if(e.target.className.includes('btn-danger')){
        let li=e.target.parentElement;
        ul.removeChild(li)
    }
})