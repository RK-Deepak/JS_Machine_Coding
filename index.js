class StarRating
{
  constructor ()
  {
    
    this.starcontainer=document.querySelector(".star-container");
    this.star=document.querySelectorAll(".star");
    this.filled=0;
    this.bindEvents();
    
  }

   bindEvents()
   {
      this.starcontainer.addEventListener("click",(e)=>this.onclick(e));
      this.starcontainer.addEventListener("mouseover",(e)=>this.onmouseOver(e));
      this.starcontainer.addEventListener("mouseleave",(e)=>this.onmouseLeave())
   }

   onclick(e)
   {
    //checking it is star element or not
       let classis=e.target.classList[0];
       if(classis!=="star")
        {
            return;
        }
       
        const currentAttribute=parseInt(e.target.getAttribute("data-index"));
        console.log(currentAttribute);
        this.filled=currentAttribute;
        this.filledColor(currentAttribute);
        this.updateCount(currentAttribute)
      
   }
   filledColor(count)
   {
    
 
     for(let i=0;i<5;i++)
        {
            this.star[i].classList.remove("star-filled")


        }
        for(let i=0;i<count;i++)
            {
                this.star[i].classList.add("star-filled")
    
    
            }
        
    
   }
   updateCount(count)
   {
    const element=document.querySelector("#count");
    element.textContent=count;
   }
   onmouseOver(e)
   {
    const currentAttribute=parseInt(e.target.getAttribute("data-index"));
    this.filledColor(currentAttribute);

   }
   onmouseLeave()

{
    this.filledColor(this.filled)
}

}

new StarRating();